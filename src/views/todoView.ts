import Component from "../components/component";
import TodoController from "../controllers/todoController";

export default class TodoView extends Component {
  protected readonly todoController: TodoController;
  
  constructor(
    todoController: TodoView['todoController']
  ) {
    super();
    this.todoController = todoController;
  }

  public refresh() {
    this.fetch();
  }

  protected fetch() {

  }
}