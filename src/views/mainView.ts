import Todo from "../models/todo";
import TodoView from "./todoView";

export default class MainView extends TodoView {
  constructor(todoController: TodoView['todoController']) {
    super('All tasks', todoController);
  }

  protected fetch() : Todo[] {
    return this.todoController.fetchAll();
  }
}