import ProjectsMenu from "../layout/projects-menu";
import Todo from "../models/todo";
import LocalStorage from "../services/local-storage/local-storage";
import TodoLocalStorage from "../services/local-storage/todo-local-storage";
import Router from "../utils/router/router";

export default class TodoController {
  private readonly projectsMenu : ProjectsMenu;
  private readonly router: Router;
  private readonly todoLocalStorage: LocalStorage<Todo>;

  constructor(
    projectsMenu: TodoController['projectsMenu'],
    router: TodoController['router']
  ) {
    this.projectsMenu = projectsMenu;
    this.router = router;
    this.todoLocalStorage = new TodoLocalStorage();
  }

  public fetchAll(): Todo[] {
    return this.todoLocalStorage.getValues();
  }

  public fetchByProject(project: Todo['project']): Todo[]  {
    return this.fetchAll().filter((todo) => todo.getProject() === project);
  }

  public fetchByDate(d: Date): Todo[]  {
    return this.fetchAll().filter((todo) => todo.getDueDate().getTime() === d.getTime() );
  }

  public fetchByDateRange(d1: Date, d2: Date): Todo[]  {
    return this.fetchAll().filter((todo) => {
      const dateTime = todo.getDueDate().getTime();
      return (
        dateTime >= d1.getTime() 
        && 
        dateTime <= d2.getTime()
      );
    });
  }

  public create (todo: Todo) : boolean {
    if (!this.validate(todo)) return false;
    
    this.todoLocalStorage.insert(todo);
    return true;
  }

  public update(target: Todo, updated: Todo): boolean {
    // if (!this.validate()) return;
    if (!this.validate(updated)) return false;

    return true;
  }

  public delete(target: Todo): boolean {

    return true;
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
    if (isNaN(dueDate.getTime())) return false;

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