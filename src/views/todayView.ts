import TodoView from "./todoView";

export default class TodayView extends TodoView {
  constructor() {
    super();
    const p = document.createElement('p');
    p.textContent = "test today";
    this.root.appendChild(p);
  }

  protected fetch() {
    
  }
}