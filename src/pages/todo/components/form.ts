import DateInput from "../../../components/forms/controls/inputs/date-input";
import TextInput from "../../../components/forms/controls/inputs/text-input";
import Select from "../../../components/forms/controls/selects/select";
import Field from "../../../components/forms/fields/field";
import Form from "../../../components/forms/form";
import Label from "../../../components/forms/labels/label";
import Close from "../../../components/icons/close";
import Done from "../../../components/icons/done";
import { Todo as TodoController } from "../../../controllers/todo";
import { Todo as TodoModel } from "../../../models/todo";

export default class TodoForm extends Form {
  private readonly todoController: TodoController;

  private readonly nameField: Field<TextInput>;
  private readonly dueDateField: Field<DateInput>;
  private readonly priorityField: Field<Select>;
  private readonly projectField: Field<TextInput>;

  constructor(
    todoController : TodoForm['todoController'],
    submit: TodoForm['submit'],
    cancel: TodoForm['cancel']
  ) {
    super(submit, cancel);

    this.todoController = todoController;
    this.addClass('todo-form');

    // Set fields
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
        TodoModel.priorities.map((property) => { 
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
    
    // Set action buttons
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
    
    // On submit of the form, validate every field.
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
    // Reset the styles
    this.nameField.removeValidity();
    this.dueDateField.removeValidity();
    this.priorityField.removeValidity();
    this.projectField.removeValidity();
  }

  protected validation () {
    // Validates every field, and apply styles;
    // If all are valids, send the informations to the controller.

    let hasInvalidField : boolean = false;

    const name = this.nameField.control.value;
    const dueDate = this.dueDateField.control.valueAsDate;
    const priority = Number(this.priorityField.control.value);
    const project = this.projectField.control.value;

    if (!TodoModel.nameValidation(name)) {
      hasInvalidField = true;
      this.nameField.setValid(false);
    } 
    else this.nameField.setValid(true);

    if (!TodoModel.dueDateValidation(dueDate)) {
      hasInvalidField = true;
      this.dueDateField.setValid(false);
    }
    else this.dueDateField.setValid(true);

    if (!TodoModel.priorityValidation(priority)) {
      hasInvalidField = true;
      this.priorityField.setValid(false);
    } else this.priorityField.setValid(true);

    if (!TodoModel.projectValidation(project)) {
      hasInvalidField = true;
      this.projectField.setValid(false);
    } else this.projectField.setValid(true);

    if (!hasInvalidField) { 
      // Validation passed
      const todo = new TodoModel({
        name, 
        dueDate, 
        priority, 
        project
      });

      this.submit(todo);
      this.resetValidity();
    }
  }
}