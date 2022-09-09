import { Todo as TodoModel } from "../../models/todo";
import { Todo as TodoPage } from "./todo";

export class Week extends TodoPage {
  constructor(
    todoController: TodoPage['todoController']
  ) {
    super('This week', todoController);
  }

  protected fetch(): TodoModel[] {
    const today = new Date();
    const end = new Date();
    end.setDate(today.getDate() + 7);
    return this.todoController.fetchByDateRange(today, end);    
  }
};
