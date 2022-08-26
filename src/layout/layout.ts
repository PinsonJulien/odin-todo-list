import Component from "../components/component";

export default class Layout extends Component {
  private readonly header = document.createElement('header');
  private readonly main = document.createElement('main');
  private readonly footer = document.createElement('footer');
  
  constructor () {
    super();
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
    brand.textContent = "Odin - Todo List";
    
    this.header.append(
      brand,
    );
    
    const pFooter = document.createElement('p');
    pFooter.textContent = "Created by Julien Pinson for The Odin Project, 2022 ";
    this.footer.append(pFooter);
  }

  public getMain() {
    return this.main;
  }
}