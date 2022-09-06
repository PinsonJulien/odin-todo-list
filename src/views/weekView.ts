import TodoView from "./todoView";

export default class WeekView extends TodoView {
  constructor(todoController: TodoView['todoController']) {
    super(todoController);
    const p = document.createElement('p');
    p.textContent = "test week";
    this.root.appendChild(p);
  }

  protected fetch(): void {
    
  }
}