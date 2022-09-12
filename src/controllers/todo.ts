import ProjectsMenu from "../layout/projects-menu";
import { Todo as TodoModel } from "../models/todo";
import { Project } from "../pages/todo/project";
import LocalStorage from "../services/local-storage/local-storage";
import TodoLocalStorage from "../services/local-storage/todo-local-storage";
import Route from "../utils/router/route";
import Router from "../utils/router/router";
import RouterLink from "../utils/router/router-link";

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

    // Generate dynamic routes
    const projects = this.getProjects();

    this.router.insert(
      ...projects.map((project) => {
        return new Route(
          project,
          `/projects/${project}`,
          new Project(project, this)
        );
      })
    );

    // Generate side bar project links
    this.refreshProjectsMenu();
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


    // Try to add if it doesn't exist yet.
    this.routerUpdate(todo, "create");

    return true;
  }

  public update(target: TodoModel, updated: TodoModel): boolean {
    if (!this.validate(updated)) return false;

    this.todoLocalStorage.update(target, updated);

    // The project has changed, the UI must be updated.
    if (target.getProject() !== updated.getProject()) {
      const projects = this.getProjects();

      // Try to delete if it doesn't exist anymore
      this.routerUpdate(target, "delete");

      // Try to add if it doesn't exist yet.
      this.routerUpdate(updated, "create");
    }
    
    return true;
  }

  public delete(target: TodoModel): boolean {
    this.todoLocalStorage.delete(target);

    // Try to delete if it doesn't exist anymore
    this.routerUpdate(target, "delete");

    return true;
  }

  // Validations
  public validate(todo: TodoModel): boolean {
    return ( 
      this.validateName(todo.getName()) ||
      this.validateDueDate(todo.getDueDate()) ||
      this.validatePriority(todo.getPriority()) ||
      this.validateProject(todo.getProject())
    );
  }

  public validateName(name: TodoModel['name']): boolean {
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

  public getProjects(): TodoModel['project'][] {
    const projects: TodoModel['project'][] = [];
    
    this.fetchAll().forEach((todo) => {
      const project = todo.getProject();
      if (project !=="" && !projects.includes(project)) projects.push(project);
    });

    projects.sort();

    return projects;
  }

  private refreshProjectsMenu(): void {
    const projects = this.getProjects();

    const projectsLinks: RouterLink[] = projects.map((project) => {
      return this.router.getByPath(`/projects/${project}`); 
    });
    
    this.projectsMenu.clear();
    this.projectsMenu.insert(...projectsLinks);
  }

  private routerUpdate(todo: TodoModel, action: "create" | "delete") {
    const project = todo.getProject();

    switch(action) {
      case "create":
        if (project !== "" && !this.router.getByPath(`/projects/${project}`)) {
          this.router.insert(new Route(
            project,
            `/projects/${project}`,
            new Project(project, this)
          ));
  
          this.refreshProjectsMenu();
        }

        return;

      case "delete":
        const projects = this.getProjects();
        // If the old doesn't exist anymore, remove it from UI
        if (project !== "" && !projects.includes(project)) {
          const deletedLink = this.router.deleteByPath(`/projects/${project}`);
          
          this.projectsMenu.remove(deletedLink);
        }

        return;
    }
  }
}