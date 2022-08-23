export default class Menu {
  private readonly root = document.createElement('nav');
  private readonly ul = document.createElement('ul');

  constructor(menu: string[]) {
    this.root.appendChild(this.ul);

    menu.forEach((e) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = e;
      li.appendChild(a);

      this.ul.appendChild(li);
    });
  }

  public getRoot() {
    return this.root;
  }
}