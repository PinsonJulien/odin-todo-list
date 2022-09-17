import Component from "../../components/component";
import DateInput from "../../components/forms/controls/inputs/date-input";
import TextInput from "../../components/forms/controls/inputs/text-input";
import Select from "../../components/forms/controls/selects/select";
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

export const todoPriorities : {value: number, name: string}[] = [
  {
    value: 0,
    name: 'None'
  },
  {
    value: 1,
    name: 'For this month'
  },
  {
    value: 2,
    name: 'For this week'
  },
  {
    value: 3,
    name: 'For tomorrow'
  },
  {
    value: 4,
    name: 'For today'
  }
];

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
    this.addClass('todo-page');

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

    this.ulist.replaceChildren(this.newTodo.root);

    todos.forEach((todo) => {
      this.ulist.appendChild(
        new TodoListItem(todo, this.todoController).root
      );
    });
  }

  protected abstract fetch(): TodoModel[];
}

class NewTodo extends Twofold<HTMLLIElement> {
  private readonly form: Form;

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
            this.form.emptyFields();
          }
        ),
        (
          () : void => {
            this.changeSide(false);
            this.form.emptyFields();
          }
        )
      )
    );

    this.form = this.backComponent as Form;
    
    const btn = document.createElement('button');
    btn.classList.add('add-button');
    btn.appendChild(new Add().root);
    btn.addEventListener('click', (e) => {
      this.changeSide(true);
    })

    this.frontComponent.root.append(btn);
  }
}

class TodoListItem extends Twofold<HTMLLIElement> {
  protected readonly todoController: TodoController;
  protected readonly name;
  protected readonly dueDate;
  protected readonly priority;
  protected readonly project;

  protected todo: TodoModel;
  private readonly form: Form;

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

    this.form = this.backComponent as Form;

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
    updateButton.appendChild(new Edit().root);
    updateButton.addEventListener('click', (e) => {
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

    const priority = todoPriorities.find((priority) => priority.value === this.todo.priority);
    this.priority.textContent = (priority) ? priority.name : "";

    const project = this.todo.project;
    this.project.textContent = project;

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
  protected readonly priorityField: Field<Select>;
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

    this.addClass('todo-form');
    this.root.method = "post";

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

    this.priorityField = new Field<Select> (
      new Label('Priority', 'priority'),
      new Select(
        todoPriorities.map((property) => { 
          return {
            value: property.value.toString(), 
            text: property.name 
          }
        }),
        "priority"
      )
    );
    this.priorityField.addClass('priority');
    this.priorityField.control.value = "0";

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

      this.resetValidity();
      this.cancel();
    });

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('actions');
    actionDiv.append(
      submitButton,
      cancelButton,
    );

    this.root.append(
      this.nameField.root,
      this.projectField.root,
      this.dueDateField.root,      
      this.priorityField.root,     
      actionDiv,
    );
  
    this.root.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validation();      
    });
  }

  public setFields (todo: TodoModel) : void {
    this.nameField.control.value = todo.name;
    this.dueDateField.control.valueAsDate = todo.dueDate;
    this.priorityField.control.value = todo.priority.toString();
    this.projectField.control.value = todo.project;
  }

  public emptyFields(): void {
    this.nameField.control.value = null;
    this.dueDateField.control.value = null;
    this.priorityField.control.value = "0";
    this.projectField.control.value = null;
  }

  public resetValidity(): void {
    this.nameField.removeValidity();
    this.dueDateField.removeValidity();
    this.priorityField.removeValidity();
    this.projectField.removeValidity();
  }

  protected validation () {
    let hasInvalidField : boolean = false;

    const name = this.nameField.control.value;
    const dueDate = this.dueDateField.control.valueAsDate;
    const priority = Number(this.priorityField.control.value);
    const project = this.projectField.control.value;

    if (!this.todoController.validateName(name)) {
      hasInvalidField = true;
      this.nameField.setValid(false);
    } 
    else this.nameField.setValid(true);

    if (!this.todoController.validateDueDate(dueDate)) {
      hasInvalidField = true;
      this.dueDateField.setValid(false);
    }
    else this.dueDateField.setValid(true);

    if (!this.todoController.validatePriority(priority)) {
      hasInvalidField = true;
      this.priorityField.setValid(false);
    } else this.priorityField.setValid(true);

    if (!this.todoController.validateProject(project)) {
      hasInvalidField = true;
      this.projectField.setValid(false);
    } else this.projectField.setValid(true);

    if (!hasInvalidField) { 
      // Validation passed
      const todo = new TodoModel(
        name, 
        dueDate, 
        priority, 
        project
      );

      this.submit(todo);
      this.resetValidity();
    }
  }
}