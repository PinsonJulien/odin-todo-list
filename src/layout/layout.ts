import Menu from "./menu";

export default class Layout {
  private readonly root = document.createElement('div');
  private readonly header = document.createElement('header');
  private readonly main = document.createElement('main');
  private readonly footer = document.createElement('footer');
  
  constructor () {
    this.root.setAttribute('id', 'layout');
    this.header.setAttribute('id', 'layout-header');
    this.main.setAttribute('id', 'layout-main');
    this.footer.setAttribute('id', 'layout-footer');

    this.root.append(
      this.header,
      this.main,
      this.footer
    );
    const brand = document.createElement('p');
    brand.textContent = "Pizza di Tonio";
    const menu = ['Home', 'Menu', 'Contact'];
    const nav = new Menu(menu);
    nav.getRoot().setAttribute('id', 'layout-menu');

    this.header.append(
      brand,
      nav.getRoot()
    );
    
    const pFooter = document.createElement('p');
    pFooter.textContent = "Created by Julien Pinson for The Odin Project, 2022 ";
    this.footer.append(pFooter);
  }

  public getRoot() {
    return this.root;
  }

  public replaceMainChilds(...childs: HTMLElement[]) {
    this.main.replaceChildren(...childs);
  }
}