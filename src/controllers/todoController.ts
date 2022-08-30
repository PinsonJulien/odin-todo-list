import Todo from "../models/todo";

export default class TodoController {
  constructor() {

  }

  public fetchAll() {

  }

  public fetchByProject() {

  }

  public fetchByDate() {

  }

  public fetchByDateRange() {

  }

  public create() {
    //if (!this.validate()) return;
  }

  public update() {
    // if (!this.validate()) return;
  }

  public delete() {

  }

  // Validations
  public validate(todo: Todo): boolean {
    return ( 
      this.validateName(todo.getName()) ||
      this.validateDescription(todo.getDescription()) ||
      this.validateDueDate(todo.getDueDate()) ||
      this.validatePriority(todo.getPriority()) ||
      this.validateProject(todo.getProject())
    );
  }

  public validateName(name: Todo['name']): boolean {
    return true;
  }

  public validateDescription(description: Todo['description']): boolean {
    return true;
  }

  public validateDueDate(dueDate: Todo['dueDate']): boolean {
    return true;
  }

  public validatePriority(priority: Todo['priority']): boolean {
    return true;
  }

  public validateProject(project: Todo['project']): boolean {
    return true;
  }

  // local saving
  public saveLocally() {}
}