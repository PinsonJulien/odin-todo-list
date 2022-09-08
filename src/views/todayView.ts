import Todo from "../models/todo";
import TodoView from "./todoView";

export default class TodayView extends TodoView {
  constructor(todoController: TodoView['todoController']) {
    super('Today', todoController);
  }

  protected fetch(): Todo[] {
    // Fetch all of today
    return this.todoController.fetchByDate(new Date());
  }
}