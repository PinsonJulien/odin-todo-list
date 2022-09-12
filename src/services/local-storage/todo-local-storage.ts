
import { Todo } from "../../models/todo";
import LocalStorage from "./local-storage";

export default class TodoLocalStorage extends LocalStorage<Todo> {
  constructor() {
    super(
      (obj: Todo): Todo => {
        return new Todo(
          obj['name'],
          new Date(obj['dueDate']),
          obj['priority'],
          obj['project']
        );
      },
      'todo',
      (a, b) => {
        return a.getDueDate().getTime() - b.getDueDate().getTime();
      }
    );
  }
}