import Div from "../../../components/html/div";
import Twofold from "../../../components/twofold";
import TodoForm from "./form";
import { Todo as TodoPage } from "../../../pages/todo/todo";
import { Todo as TodoController } from "../../../controllers/todo";
import { Todo as TodoModel } from "../../../models/todo";
import Add from "../../../components/icons/add";

export default class NewTodo extends Twofold<HTMLLIElement, Div, TodoForm> {
  private readonly form: TodoForm;

  constructor(
    todoController: TodoController,
    page: TodoPage,
  ) {
    super(
      document.createElement('li'),
      new Div(),
      new TodoForm(
        todoController,
        (
          (todo: TodoModel) : void => {
            this.changeSide(false);

            const operationSucceeded = todoController.create(todo);

            // If the creation passed, refresh the page.
            if (!operationSucceeded) return;

            page.refresh();
            this.form.emptyFields();
          }
        ),
        (
          () : void => {
            this.changeSide(false);
            this.form.emptyFields();
          }
        )
      )
    );

    this.form = this.backComponent;
    
    const btn = document.createElement('button');
    btn.classList.add('add-button');
    btn.appendChild(new Add().root);
    btn.addEventListener('click', (e) => {
      this.changeSide(true);
    })

    this.frontComponent.root.append(btn);
  }
}
