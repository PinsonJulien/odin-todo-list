import Div from "../../../components/html/div";
import Paragraph from "../../../components/html/paragraph";
import Delete from "../../../components/icons/delete";
import Edit from "../../../components/icons/edit";
import Twofold from "../../../components/twofold";
import { Todo as TodoController } from "../../../controllers/todo";
import { Todo as TodoModel } from "../../../models/todo";
import TodoForm from "./form";

export default class TodoCard extends Twofold<HTMLLIElement, Div, TodoForm> {
  protected readonly todoController: TodoController;
  protected readonly name: Paragraph;
  protected readonly dueDate: Paragraph;
  protected readonly priority: Paragraph;
  protected readonly project: Paragraph;

  protected todo: TodoModel;
  private readonly form: TodoForm;

  constructor(
    todo: TodoModel,
    todoController : TodoController
  ) {
    super(
      document.createElement('li'),
      new Div(),
      new TodoForm(
        todoController,
        (
          (todo: TodoModel) : void => {
            this.update(todo);
            this.form.setFields(this.todo);
          }
        ),
        (
          () : void => {
            // Flip to the card and reset the form.
            this.changeSide(false);
            this.form.setFields(this.todo);
          }
        )
      )
    );

    this.form = this.backComponent;
    this.todoController = todoController;
    this.frontComponent.addClass('todo-list-item');
    
    // Html elements
    const generateDiv: (name: string, classs: string, p: Paragraph) => Div = (name, classs, p) => {
      const div = new Div();
      const title = new Paragraph(name);
      
      div.root.append(title.root, p.root);
      div.addClass(classs);

      return div;
    }

    this.name = new Paragraph();
    const nameDiv = generateDiv('name', 'name', this.name);

    this.dueDate = new Paragraph();
    const dueDateDiv = generateDiv('due date', 'due-date', this.dueDate);

    this.priority = new Paragraph();
    const priorityDiv = generateDiv('priority', 'priority', this.priority);

    this.project = new Paragraph();
    const projectDiv = generateDiv('project', 'project', this.project);

    // Action buttons

    const updateButton = document.createElement('button');
    updateButton.appendChild(new Edit().root);
    updateButton.addEventListener('click', (e) => {
      // Shows the form part
      this.changeSide(true);
    });

    const deleteButton = document.createElement('button');
    deleteButton.appendChild(new Delete().root);
    deleteButton.addEventListener('click', (e) => {
      this.todoController.delete(this.todo);
      
      this.root.remove();
    });

    const actionDiv = new Div();
    actionDiv.addClass('actions');
    actionDiv.root.append(
      updateButton,
      deleteButton
    );

    this.frontComponent.root.append(
      nameDiv.root,
      projectDiv.root,
      dueDateDiv.root,
      priorityDiv.root,      
      actionDiv.root,
    );

    this.setTodo(todo);
  }

  private setTodo (todo: TodoModel) : void {
    this.todo = todo;

    const name = this.todo.name;
    this.name.textContent = name;
    const dueDate = this.todo.dueDate.toLocaleDateString();
    this.dueDate.textContent = dueDate;

    const priority = TodoModel.priorities.find((priority) => priority.value === this.todo.priority);
    this.priority.textContent = (priority) ? priority.name : "";

    const project = this.todo.project;
    this.project.textContent = project;

    this.form.setFields(todo);
  }

  private update (todo: TodoModel) : void {
    this.changeSide(false);

    const operationSucceeded = this.todoController.put(this.todo, todo);

    // If the update passed, change the UI.
    if (!operationSucceeded) return;

    this.setTodo(todo);
  }
}