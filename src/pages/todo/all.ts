import { Todo as TodoModel } from "../../models/todo";
import { Todo as TodoPage } from "./todo";

export class All extends TodoPage {
  constructor(todoController: TodoPage['todoController']) {
    super('All tasks', todoController);
  }

  protected fetch(): TodoModel[] {
    return this.todoController.fetchAll();
  }
};