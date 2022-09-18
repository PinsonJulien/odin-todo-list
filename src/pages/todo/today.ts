import { Todo as TodoModel } from "../../models/todo";
import { Todo as TodoPage } from "./todo";

export class Today extends TodoPage {
  constructor(
    todoController: TodoPage['todoController']
  ) {
    super('Today', todoController);
  }

  protected fetch(): TodoModel[] {
    return this.todoController.getByDueDate(new Date());
  }
};
