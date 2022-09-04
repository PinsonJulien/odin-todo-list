import TodoView from "./todoView";

export default class WeekView extends TodoView {
  constructor() {
    super();
    const p = document.createElement('p');
    p.textContent = "test week";
    this.root.appendChild(p);
  }

  protected fetch() {
    
  }
}