import { Todo as TodoModel } from "../../models/todo";
import { Todo as TodoPage } from "./todo";

export class Project extends TodoPage {
  private readonly project;

  constructor(
    project: TodoModel['project'],
    todoController: TodoPage['todoController']
  ) {
    super(project, todoController);
    this.project = project;
  }

  protected fetch(): TodoModel[] {
    return this.todoController.fetchByProject(this.project);
  }
};
