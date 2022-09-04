import TodoView from "./todoView";

export default class ProjectView extends TodoView {
  constructor() {
    super();
    const p = document.createElement('p');
    p.textContent = "test project";
    this.root.appendChild(p);
  }

  protected fetch() {
    
  }
}