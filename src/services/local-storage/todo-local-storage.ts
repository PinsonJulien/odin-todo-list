
import { Todo } from "../../models/todo";
import LocalStorage from "./local-storage";

export default class TodoLocalStorage extends LocalStorage<Todo> {
  constructor(ctor: new (...args: any[]) => Todo) {
    super('todo', ctor);
  }

  public sort(): void {
    this.values.sort((a, b) => {
      return a.dueDate.getTime() - b.dueDate.getTime();
    });
  }
}