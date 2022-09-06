import Component from "../components/component";
import TodoController from "../controllers/todoController";
import Todo from "../models/todo";

export default class TodoView extends Component {
  protected readonly todoController: TodoController;
  
  protected readonly title: HTMLHeadingElement;
  protected readonly form: TodoForm;
  
  constructor(
    todoController: TodoView['todoController']
  ) {
    super();
    this.todoController = todoController;

    this.root.setAttribute('id', 'todo-view');

    this.title = document.createElement('h1');
    this.title.textContent = "Todo"
    this.form = new TodoForm(todoController, this);

    this.root.append(
      this.title,
      this.form.getRoot()
    )
  }

  public refresh() {
    this.fetch();
    console.log("refreshed");
  }

  protected fetch() {

  }
}

class TodoForm extends Component<HTMLFormElement> {
  protected readonly todoController : TodoController;
  protected readonly todoView: TodoView;

  protected readonly nameField: TodoFormField;
  protected readonly descriptionField: TodoFormField;
  protected readonly dueDateField: TodoFormField;
  protected readonly priorityField: TodoFormField;
  protected readonly projectField: TodoFormField;

  constructor(
    todoController: TodoController,
    todoView: TodoView
  ) {
    super(document.createElement('form'));

    this.todoController = todoController;
    this.todoView = todoView;

    this.root.setAttribute('id', 'todo-form');
    this.root.setAttribute('method', 'post');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.setAttribute('for', 'name');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    this.nameField = new TodoFormField(nameLabel, nameInput);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.setAttribute('for', 'description');
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    this.descriptionField = new TodoFormField(descriptionLabel, descriptionInput);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due date:';
    dueDateLabel.setAttribute('for', 'dueDate');
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'dueDate');
    dueDateInput.setAttribute('name', 'dueDate');
    this.dueDateField = new TodoFormField(dueDateLabel, dueDateInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.setAttribute('for', 'priority');
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('type', 'range');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('min', '0');
    priorityInput.setAttribute('max', '5');
    priorityInput.setAttribute('step', '1');
    this.priorityField = new TodoFormField(priorityLabel, priorityInput);

    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project:';
    projectLabel.setAttribute('for', 'project');
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('id', 'project');
    projectInput.setAttribute('name', 'project');
    this.projectField = new TodoFormField(projectLabel, projectInput);

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
      const todo = new Todo(name, description, dueDate, priority, project);
      const operationSucceeded = this.todoController.create(todo);

      // If the creation passed, refresh the page.
      if (!operationSucceeded) return;

      this.todoView.refresh();
    }
  }
}

class TodoFormField extends Component<HTMLDivElement> {
  protected readonly label: HTMLLabelElement;
  protected readonly input: HTMLInputElement | HTMLSelectElement;

  constructor(
    label: TodoFormField['label'],
    input: TodoFormField['input']
  ) {
    super(document.createElement('div'));
    this.root.classList.add('todo-form-field');

    this.label = label;
    this.input = input;

    this.root.append(
      label,
      input
    );
  }

  public getValue(): string {
    return this.input.value;
  }
}