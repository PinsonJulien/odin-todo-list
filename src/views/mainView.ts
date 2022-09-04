import TodoView from "./todoView";

export default class MainView extends TodoView {
  constructor() {
    super();
    const p = document.createElement('p');
    p.textContent = "test main";
    this.root.appendChild(p);
  }

  protected fetch() {
    
  }
}