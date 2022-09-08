import Todo from "../models/todo";
import TodoView from "./todoView";

export default class ProjectView extends TodoView {
  private readonly project;
  constructor(
    project: Todo['project'],
    todoController: TodoView['todoController']
  ) {
    super(project, todoController);
    
    this.project = project;
  }

  protected fetch() : Todo[] {
    return this.todoController.fetchByProject(this.project);
  }
}