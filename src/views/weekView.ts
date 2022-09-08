import Todo from "../models/todo";
import TodoView from "./todoView";

export default class WeekView extends TodoView {
  constructor(todoController: TodoView['todoController']) {
    super('Next 7 days', todoController);
  }

  protected fetch(): Todo[] {
    const today = new Date();
    const end = new Date();
    end.setDate(today.getDate() + 7);
    return this.todoController.fetchByDateRange(today, end);    
  }
}