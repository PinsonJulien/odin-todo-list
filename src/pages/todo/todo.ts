import { Todo as TodoController } from "../../controllers/todo";
import { Todo as TodoModel } from "../../models/todo";
import Page from "../page";
import TodoCard from "./components/card";
import NewTodo from "./components/new";

export abstract class Todo extends Page {
  protected readonly todoController: TodoController;
  protected readonly title: HTMLHeadingElement;
  protected readonly ulist: HTMLUListElement;
  protected readonly newTodo: NewTodo;

  constructor(
    title: string,
    todoController: Todo['todoController']
  ) {
    super();

    this.todoController = todoController;
    this.addClass('todo-page');

    this.title = document.createElement('h1');
    this.title.textContent = title;

    this.ulist = document.createElement('ul');

    this.newTodo = new NewTodo(this.todoController, this);

    this.root.append(
      this.title,
      this.ulist,
    );
  }

  public refresh(): void {
    const todos = this.fetch();

    this.ulist.replaceChildren(this.newTodo.root);

    todos.forEach((todo) => {
      this.ulist.appendChild(
        new TodoCard(todo, this.todoController).root
      );
    });
  }

  protected abstract fetch(): TodoModel[];
}




