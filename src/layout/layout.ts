import Component from "../components/component";
import Burger from "../components/svg/burger";
import Menu from "./menu";
import ProjectsMenu from "./projects-menu";

export default class Layout extends Component<HTMLDivElement> {
  private readonly header = document.createElement('header');
  private readonly aside = document.createElement('aside');
  private readonly main = document.createElement('main');
  private readonly footer = document.createElement('footer');

  private readonly menu;
  private readonly menuProjects;
  
  constructor () {
    super(document.createElement('div'));
    this.root.setAttribute('id', 'layout');

    this.root.append(
      this.header,
      this.aside,
      this.main,
      this.footer
    );
    
    // Header
    const leftHeader = document.createElement('div');
    const rightHeader = document.createElement('div');

    const brand = document.createElement('p');
    brand.textContent = "Odin - Todo List";

    const burgerBtn = document.createElement('button');
    const burgerIcon = new Burger();
    burgerBtn.appendChild(burgerIcon.getRoot());
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('active');
      this.aside.classList.toggle('active');
    });

    leftHeader.append(
      brand
    );

    rightHeader.append(
      burgerBtn
    );
    
    this.header.append(
      leftHeader,
      rightHeader
    );

    // Aside
    const navAside = document.createElement('nav');
    this.aside.append(
      navAside
    );

    this.menu = new Menu();
    this.menuProjects = new ProjectsMenu();

    navAside.append(
      this.menu.getRoot(),
      this.menuProjects.getRoot()
    );

    // Footer
    const pFooter = document.createElement('p');
    pFooter.textContent = "Created by Julien Pinson for The Odin Project, 2022 ";
    this.footer.append(pFooter);
  }

  public getMain() {
    return this.main;
  }

  public getMenu() {
    return this.menu;
  }

  public getMenuProjects() {
    return this.menuProjects;
  }
}