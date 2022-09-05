import TodoView from "./todoView";

export default class ProjectView extends TodoView {
  constructor(todoController: TodoView['todoController']) {
    super(todoController);
    const p = document.createElement('p');
    p.textContent = "test project";
    this.root.appendChild(p);
  }

  protected fetch() {
    
  }
}