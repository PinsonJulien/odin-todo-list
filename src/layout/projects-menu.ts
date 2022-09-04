import Menu from "./menu";

export default class ProjectsMenu extends Menu {
  constructor() {
    super();

    const p = document.createElement('p');
    p.textContent = "Projects";

    this.root.prepend(
      p
    );
  }
}