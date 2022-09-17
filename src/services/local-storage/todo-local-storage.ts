
import { Todo } from "../../models/todo";
import LocalStorage from "./local-storage";

export default class TodoLocalStorage extends LocalStorage<Todo> {
  constructor() {
    super(
      (obj: Todo): Todo => {
        return new Todo(
          obj['_name'],
          new Date(obj['_dueDate']),
          obj['_priority'],
          obj['_project']
        );
      },
      'todo',
      (a, b) => {
        return a.dueDate.getTime() - b.dueDate.getTime();
      }
    );
  }
}