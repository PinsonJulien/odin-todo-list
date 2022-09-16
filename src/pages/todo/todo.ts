import Component from "../../components/component";
import DateInput from "../../components/forms/controls/inputs/date-input";
import RangeInput from "../../components/forms/controls/inputs/range-input";
import TextInput from "../../components/forms/controls/inputs/text-input";
import Field from "../../components/forms/fields/field";
import Label from "../../components/forms/labels/label";
import Div from "../../components/html/div";
import Paragraph from "../../components/html/paragraph";
import Add from "../../components/icons/add";
import Close from "../../components/icons/close";
import Delete from "../../components/icons/delete";
import Done from "../../components/icons/done";
import Edit from "../../components/icons/edit";
import Twofold from "../../components/twofold";
import { Todo as TodoController } from "../../controllers/todo";
import { Todo as TodoModel } from "../../models/todo";
import Page from "../page";

export abstract class Todo extends Page {
  protected readonly todoController: TodoController;
  protected readonly title: HTMLHeadingElement;
  protected readonly ulist: HTMLUListElement;
  protected readonly newTodo: NewTodo;

  constructor(
    title: string,
    todoController: Todo['todoController']
  ) {
    super();

    this.todoController = todoController;
    this.root.classList.add('todo-page');

    this.title = document.createElement('h1');
    this.title.textContent = title;

    this.ulist = document.createElement('ul');

    this.newTodo = new NewTodo(this.todoController, this);

    this.root.append(
      this.title,
      this.ulist,
    );
  }

  public refresh(): void {
    const todos = this.fetch();

    this.ulist.replaceChildren(this.newTodo.getRoot());

    todos.forEach((todo) => {
      this.ulist.appendChild(
        new TodoListItem(todo, this.todoController).getRoot()
      );
    });
  }

  protected abstract fetch(): TodoModel[];
}

class NewTodo extends Twofold<HTMLLIElement> {
  constructor(
    todoController: TodoController,
    page: Todo,
  ) {
    super(
      document.createElement('li'),
      new Component<HTMLDivElement>(document.createElement('div')),
      new Form(
        todoController,
        (
          (todo: TodoModel) : void => {
            this.changeSide(false);

            const operationSucceeded = todoController.create(todo);

            // If the creation passed, refresh the page.
            if (!operationSucceeded) return;

            page.refresh();
          }
        ),
        (
          () : void => {
            this.changeSide(false);
          }
        )
      )
    );
    
    const btn = document.createElement('button');
    btn.classList.add('add-button');
    btn.appendChild(new Add().getRoot());
    btn.addEventListener('click', (e) => {
      this.changeSide(true);
    })

    this.frontComponent.getRoot().append(btn);
  }
}

class TodoListItem extends Twofold<HTMLLIElement> {
  protected readonly todoController: TodoController;
  protected readonly name;
  protected readonly dueDate;
  protected readonly priority;
  protected readonly project;

  protected todo: TodoModel;

  constructor(
    todo: TodoModel,
    todoController : TodoController
  ) {
    super(
      document.createElement('li'),
      new Component<HTMLDivElement>(document.createElement('div')),
      new Form(
        todoController,
        (
          (todo: TodoModel) : void => {
            this.update(todo);
          }
        ),
        (
          () : void => {
            this.changeSide(false);
          }
        )
      )
    );

    this.todoController = todoController;
    this.frontComponent.classList.add('todo-list-item');
    
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

    const updateButton = document.createElement('button');
    updateButton.appendChild(new Edit().getRoot());
    updateButton.addEventListener('click', (e) => {
      this.changeSide(true);
    });

    const deleteButton = document.createElement('button');
    deleteButton.appendChild(new Delete().getRoot());
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

    this.frontComponent.getRoot().append(
      nameDiv.root,
      dueDateDiv.root,
      priorityDiv.root,
      projectDiv.root,
      actionDiv.root,
    );

    this.setTodo(todo);
  }

  private setTodo (todo: TodoModel) : void {
    this.todo = todo;
    
    this.name.setTextContent( this.todo.getName());
    this.dueDate.setTextContent(this.todo.getDueDate().toLocaleDateString());
    this.priority.setTextContent(this.todo.getPriority().toString());
    this.project.setTextContent(this.todo.getProject());

    (this.backComponent as Form).setFields(todo);
  }

  private update (todo: TodoModel) : void {
    this.changeSide(false);

    const operationSucceeded = this.todoController.update(this.todo, todo);

    // If the update passed, change the UI.
    if (!operationSucceeded) return;

    this.setTodo(todo);
  }
}

class Form extends Component<HTMLFormElement> {
  protected readonly todoController : TodoController;
  protected readonly submit: (todo: TodoModel) => any;
  protected readonly cancel: () => any;

  protected readonly nameField: Field<TextInput>;
  protected readonly dueDateField: Field<DateInput>;
  protected readonly priorityField: Field<RangeInput>;
  protected readonly projectField: Field<TextInput>;

  constructor(
    todoController : Form['todoController'],
    submit: Form['submit'],
    cancel: Form['cancel']
  ) {
    super(document.createElement('form'));

    this.todoController = todoController;
    this.submit = submit;
    this.cancel = cancel;

    this.root.classList.add('todo-form');
    this.root.setAttribute('method', 'post');

    this.nameField = new Field<TextInput> (
      new Label('Name', 'name'),
      new TextInput('name', 'name')
    );
    this.nameField.addClass('name');

    this.dueDateField = new Field<DateInput> (
      new Label('Due date', 'dueDate'),
      new DateInput('dueDate', 'dueDate')
    ); 
    this.dueDateField.addClass('due-date');

    this.priorityField = new Field<RangeInput> (
      new Label('Priority', 'priority'),
      new RangeInput('priority', 'priority', 0, 5, 1)
    ); 
    this.priorityField.addClass('priority');

    this.projectField = new Field<TextInput> (
      new Label('Project', 'project'),
      new TextInput('project', 'project')
    );
    this.projectField.addClass('project');

    const submitButton = document.createElement('button');
    submitButton.appendChild(new Done().root);

    const cancelButton = document.createElement('button');
    cancelButton.appendChild(new Close().root);
    cancelButton.type = "button";
    cancelButton.addEventListener('click', (e) => {
      e.preventDefault();

      this.cancel();
    });

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('actions');
    actionDiv.append(
      submitButton,
      cancelButton,
    );

    this.root.append(
      this.nameField.getRoot(),
      this.dueDateField.getRoot(),
      this.priorityField.getRoot(),
      this.projectField.getRoot(),
      actionDiv,
    );
  
    this.root.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validation();      
    });
  }

  public setFields (todo: TodoModel) : void {
    this.nameField.setValue(todo.getName());
    this.dueDateField.getControl().getRoot().valueAsDate = todo.getDueDate();
    this.priorityField.setValue(todo.getPriority().toString());
    this.projectField.setValue(todo.getProject());
  }

  protected validation () {
    let hasInvalidField : boolean = false;

    const name = this.nameField.getValue();
    const dueDate = new Date (this.dueDateField.getValue());
    const priority = Number(this.priorityField.getValue());
    const project = this.projectField.getValue();

    if (!this.todoController.validateName(name)) {
      hasInvalidField = true;
    }

    if (!this.todoController.validateDueDate(dueDate)) {
      hasInvalidField = true;
    }

    if (!this.todoController.validatePriority(priority)) {
      hasInvalidField = true;
    }

    if (!this.todoController.validateProject(project)) {
      hasInvalidField = true;
    }

    if (!hasInvalidField) { 
      // Validation passed
      const todo = new TodoModel(
        name, 
        dueDate, 
        priority, 
        project
      );

      this.submit(todo);
    }
  }
}