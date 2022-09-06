import TodoView from "./todoView";

export default class TodayView extends TodoView {
  constructor(todoController: TodoView['todoController']) {
    super(todoController);
    const p = document.createElement('p');
    p.textContent = "test today";
    this.root.appendChild(p);
  }

  protected fetch(): void {
    
  }
}