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
    this.aside.textContent = "test"
    
    // Footer
    const pFooter = document.createElement('p');
    pFooter.textContent = "Created by Julien Pinson for The Odin Project, 2022 ";
    this.footer.append(pFooter);
  }

  public getMain() {
    return this.main;
  }
}