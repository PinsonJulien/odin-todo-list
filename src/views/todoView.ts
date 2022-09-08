import Component from "../components/component";
import DateInput from "../components/forms/controls/inputs/date-input";
import RangeInput from "../components/forms/controls/inputs/range-input";
import TextInput from "../components/forms/controls/inputs/text-input";
import Field from "../components/forms/fields/field";
import Label from "../components/forms/labels/label";
import TodoController from "../controllers/todoController";
import Todo from "../models/todo";

export default abstract class TodoView extends Component<HTMLDivElement> {
  protected readonly todoController: TodoController;
  
  protected readonly title: HTMLHeadingElement;
  protected readonly ulist: HTMLUListElement;
  protected readonly form: TodoForm;
  
  constructor(
    title: string,
    todoController: TodoView['todoController']
  ) {
    super(document.createElement('div'));
    this.todoController = todoController;

    this.root.setAttribute('id', 'todo-view');

    this.title = document.createElement('h1');
    this.title.textContent = title;

    this.ulist = document.createElement('ul');

    this.form = new TodoForm(todoController, this);

    this.root.append(
      this.title,
      this.ulist,
    );

    this.refresh();
  }

  public refresh() {
    const todos = this.fetch();
    const liForm = document.createElement('li');
    liForm.appendChild(this.form.getRoot());

    this.ulist.replaceChildren(liForm);

    todos.forEach((todo) => {
      const li = document.createElement('li');
      this.ulist.appendChild(li);

      const checked = document.createElement('input');
      checked.type = "checkbox"
      checked.value = todo.getChecked().toString();

      const name = document.createElement('p');
      name.textContent = todo.getName();

      const description = document.createElement('p');
      description.textContent = todo.getDescription();

      const dueDate = document.createElement('p');
      dueDate.textContent = todo.getDueDate().toDateString();

      const priority = document.createElement('p');
      priority.textContent = todo.getPriority().toString();

      const project = document.createElement('p');
      project.textContent = todo.getProject();

      li.append(
        checked,
        name,
        description,
        dueDate,
        priority,
        project
      );
    });

    console.log("refreshed");
  }

  protected abstract fetch() : Todo[];
}

class TodoForm extends Component<HTMLFormElement> {
  protected readonly todoController : TodoController;
  protected readonly todoView: TodoView;

  protected readonly nameField: Field<TextInput>;
  protected readonly descriptionField: Field<TextInput>;
  protected readonly dueDateField: Field<DateInput>;
  protected readonly priorityField: Field<RangeInput>;
  protected readonly projectField: Field<TextInput>;

  constructor(
    todoController: TodoController,
    todoView: TodoView
  ) {
    super(document.createElement('form'));

    this.todoController = todoController;
    this.todoView = todoView;

    this.root.setAttribute('id', 'todo-form');
    this.root.setAttribute('method', 'post');

    this.nameField = new Field<TextInput> (
      new Label('Name:', 'name'),
      new TextInput('name', 'name')
    );

    this.descriptionField = new Field<TextInput> (
      new Label('Description:', 'description'),
      new TextInput('description', 'description')
    );

    this.dueDateField = new Field<DateInput> (
      new Label('Due date:', 'dueDate'),
      new DateInput('dueDate', 'dueDate')
    ); 

    this.priorityField = new Field<RangeInput> (
      new Label('Priority:', 'priority'),
      new RangeInput('priority', 'priority', 0, 5, 1)
    ); 

    this.projectField = new Field<TextInput> (
      new Label('Project:', 'project'),
      new TextInput('project', 'project')
    ); 

    const button = document.createElement('button');
    button.textContent = "Submit";

    this.root.append(
      this.nameField.getRoot(),
      this.descriptionField.getRoot(),
      this.dueDateField.getRoot(),
      this.priorityField.getRoot(),
      this.projectField.getRoot(),
      button
    );
  
    this.root.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validation();      
    });
  }

  protected validation () {
    let hasInvalidField : boolean = false;

    const name = this.nameField.getValue();
    const description = this.descriptionField.getValue();
    const dueDate = new Date (this.dueDateField.getValue());
    const priority = Number(this.priorityField.getValue());
    const project = this.projectField.getValue();

    if (!this.todoController.validateName(name)) {
      hasInvalidField = true;
    }

    if (!this.todoController.validateDescription(description)) {
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
      const todo = new Todo(
        false,
        name, 
        description, 
        dueDate, 
        priority, 
        project
      );
      const operationSucceeded = this.todoController.create(todo);

      // If the creation passed, refresh the page.
      if (!operationSucceeded) return;

      this.todoView.refresh();
    }
  }
}