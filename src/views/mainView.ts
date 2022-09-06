import TodoView from "./todoView";

export default class MainView extends TodoView {
  constructor(todoController: TodoView['todoController']) {
    super(todoController);
    const p = document.createElement('p');
    p.textContent = "test main";
    this.root.appendChild(p);
  }

  protected fetch() : void {
    
  }
}