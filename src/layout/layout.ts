import Component from "../components/component";
import Burger from "../components/icons/burger";
import HorizontalRule from "../components/icons/horizontal-rule";
import Menu from "./menu";
import ProjectsMenu from "./projects-menu";

export default class Layout extends Component<HTMLDivElement> {
  private readonly _header = document.createElement('header');
  private readonly _aside = document.createElement('aside');
  private readonly _main = document.createElement('main');
  private readonly _footer = document.createElement('footer');

  private readonly _menu;
  private readonly _menuProjects;
  
  constructor () {
    super(document.createElement('div'));
    this.root.id = "layout";

    this.root.append(
      this._header,
      this._aside,
      this._main,
      this._footer
    );
    
    // Header
    const leftHeader = document.createElement('div');
    const rightHeader = document.createElement('div');

    const brand = document.createElement('p');
    brand.textContent = "Odin - Todo List";

    const burgerBtn = document.createElement('button');
    const burgerIcon = new Burger();
    const minusIcon = new HorizontalRule();
    burgerBtn.appendChild(burgerIcon.root);

    burgerBtn.addEventListener('click', () => {
      burgerBtn.replaceChildren(
        (
          burgerBtn.contains(burgerIcon.root)
            ? minusIcon.root
            : burgerIcon.root
        )
      )
      this._aside.classList.toggle('active');
    });

    leftHeader.append(
      brand
    );

    rightHeader.append(
      burgerBtn
    );
    
    this._header.append(
      leftHeader,
      rightHeader
    );

    // Aside
    const navAside = document.createElement('nav');
    this._aside.append(
      navAside
    );

    this._menu = new Menu();
    this._menuProjects = new ProjectsMenu();

    navAside.append(
      this.menu.root,
      this._menuProjects.root
    );

    // Footer
    const pFooter = document.createElement('p');
    pFooter.textContent = "Created by Julien Pinson for The Odin Project, 2022 ";
    this._footer.append(pFooter);
  }

  public get main() {
    return this._main;
  }

  public get menu() {
    return this._menu;
  }

  public get menuProjects() {
    return this._menuProjects;
  }
}