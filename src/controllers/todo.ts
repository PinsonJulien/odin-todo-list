import ProjectsMenu from "../layout/projects-menu";
import { Todo as TodoModel } from "../models/todo";
import LocalStorage from "../services/local-storage/local-storage";
import TodoLocalStorage from "../services/local-storage/todo-local-storage";
import Router from "../utils/router/router";

export class Todo {
  private readonly projectsMenu : ProjectsMenu;
  private readonly router: Router;
  private readonly todoLocalStorage: LocalStorage<TodoModel>;

  constructor(
    projectsMenu: Todo['projectsMenu'],
    router: Todo['router']
  ) {
    this.projectsMenu = projectsMenu;
    this.router = router;
    this.todoLocalStorage = new TodoLocalStorage();
  }

  public fetchAll(): TodoModel[] {
    return this.todoLocalStorage.getValues();
  }

  public fetchByProject(project: TodoModel['project']): TodoModel[]  {
    return this.fetchAll().filter((todo) => todo.getProject() === project);
  }

  public fetchByDate(d: Date): TodoModel[]  {
    return this.fetchAll().filter((todo) => { 
      const todoDate = todo.getDueDate();
      return (
        todoDate.getDate() === d.getDate() &&
        todoDate.getMonth() === d.getMonth() &&
        todoDate.getFullYear() === d.getFullYear()
      );
    });
  }

  public fetchByDateRange(d1: Date, d2: Date): TodoModel[]  {
    return this.fetchAll().filter((todo) => {
      const dateTime = todo.getDueDate().getTime();
      return (
        dateTime >= d1.getTime() 
        && 
        dateTime <= d2.getTime()
      );
    });
  }

  public create (todo: TodoModel) : boolean {
    if (!this.validate(todo)) return false;
    
    this.todoLocalStorage.insert(todo);
    return true;
  }

  public update(target: TodoModel, updated: TodoModel): boolean {
    if (!this.validate(updated)) return false;

    this.todoLocalStorage.update(target, updated);
    return true;
  }

  public delete(target: TodoModel): boolean {
    return this.todoLocalStorage.delete(target);
  }

  // Validations
  public validate(todo: TodoModel): boolean {
    return ( 
      this.validateName(todo.getName()) ||
      this.validateDescription(todo.getDescription()) ||
      this.validateDueDate(todo.getDueDate()) ||
      this.validatePriority(todo.getPriority()) ||
      this.validateProject(todo.getProject())
    );
  }

  public validateName(name: TodoModel['name']): boolean {
    return true;
  }

  public validateDescription(description: TodoModel['description']): boolean {
    return true;
  }

  public validateDueDate(dueDate: TodoModel['dueDate']): boolean {
    if (isNaN(dueDate.getTime())) return false;

    return true;
  }

  public validatePriority(priority: TodoModel['priority']): boolean {
    return true;
  }

  public validateProject(project: TodoModel['project']): boolean {
    return true;
  }

  // local saving
  public saveLocally() {}
}