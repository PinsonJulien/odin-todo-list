import Component from "../components/component";

export default class Layout extends Component {
  private readonly header = document.createElement('header');
  private readonly aside = document.createElement('aside');
  private readonly main = document.createElement('main');
  private readonly footer = document.createElement('footer');
  
  constructor () {
    super();
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
    burgerBtn.textContent = "burger";
    burgerBtn.addEventListener('click', () => {
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
    const navBox = document.createElement('nav');
    const ulBox = document.createElement('ul');
    const pProjects = document.createElement('p');
    pProjects.textContent = "Projects";

    const boxLinks = [
      {
        name: 'Inbox'
      },
      {
        name: 'Today'
      },
      {
        name: 'This week'
      }
    ];

    boxLinks.forEach((link) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = link.name;

      li.appendChild(a);
      ulBox.appendChild(li);
    });

    navBox.appendChild(ulBox);

    const divNewProject = document.createElement('div');
    const btnNewProject = document.createElement('button');
    btnNewProject.textContent = "+ New project"
    divNewProject.appendChild(btnNewProject);

    const navProject = document.createElement('nav');
    const projectLinks = [
      {
        name: 'lorem ipsum'
      },
      {
        name: 'lorem ipsum'
      },
      {
        name: 'lorem ipsum'
      }
    ];

    const ulProject = document.createElement('ul');

    projectLinks.forEach((link) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = link.name;

      li.appendChild(a);
      ulProject.appendChild(li);
    });

    navProject.appendChild(ulProject);

    this.aside.append(
      navBox,
      pProjects,
      divNewProject,
      navProject
    );
    
    // Footer
    const pFooter = document.createElement('p');
    pFooter.textContent = "Created by Julien Pinson for The Odin Project, 2022 ";
    this.footer.append(pFooter);
  }

  public getMain() {
    return this.main;
  }
}