import ProjectsMenu from "../layout/projects-menu";
import { Todo as TodoModel } from "../models/todo";
import { Project } from "../pages/todo/project";
import Route from "../utils/router/route";
import Router from "../utils/router/router";
import RouterLink from "../utils/router/router-link";
import Controller from "./controller";

export class Todo extends Controller<TodoModel> {
  private readonly projectsMenu : ProjectsMenu;
  private readonly router: Router;

  constructor(
    projectsMenu: Todo['projectsMenu'],
    router: Todo['router']
  ) {
    super();

    this.projectsMenu = projectsMenu;
    this.router = router;

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

  // Abstract methods
  public get(): TodoModel[] {
    return TodoModel.get();
  }

  public post(value: TodoModel): TodoModel {
    if (!this.validate(value)) return null;

    const todo = TodoModel.post(value);

    // Try to add if it doesn't exist yet.
    this.routerUpdate(todo, "create");

    return todo;
  }

  public put(target: TodoModel, updated: TodoModel): TodoModel {
    if (!this.validate(updated)) return null;

    TodoModel.put(target, updated);

    // The project has changed, the UI must be updated.
    if (target.project !== updated.project) {
      const projects = this.getProjects();

      // Try to delete if it doesn't exist anymore
      this.routerUpdate(target, "delete");

      // Try to add if it doesn't exist yet.
      this.routerUpdate(updated, "create");
    }

    return updated;
  }
  public delete(target: TodoModel): TodoModel {
    TodoModel.delete(target);

    // Try to delete if it doesn't exist anymore
    this.routerUpdate(target, "delete");

    return target;
  }

  public validate(value: TodoModel): boolean {
    return TodoModel.validation(value);
  }

  // Methods
  public getByProject(project: TodoModel['_project']): TodoModel[] {
    return TodoModel.getByProject(project);
  }

  public getByDueDate(dueDate: TodoModel['_dueDate']): TodoModel[] {
    return TodoModel.getByDueDate(dueDate);
  }

  public getByDueDateRange(d1: TodoModel['_dueDate'], d2: TodoModel['_dueDate']): TodoModel[] {
    return TodoModel.getByDueDateRange(d1, d2);
  }

  public getProjects(): TodoModel['project'][] {
    return TodoModel.getProjects();
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
    const project = todo.project;

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