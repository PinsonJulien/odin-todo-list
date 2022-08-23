import Component from "../components/component";

export default class Navbar extends Component {
  private readonly ul = document.createElement('ul');

  constructor(anchors: HTMLAnchorElement[]) {
    super(document.createElement('nav') as HTMLDivElement);

    this.root.appendChild(this.ul);

    anchors.forEach((anchor) => {
      const li = document.createElement('li');
      li.appendChild(anchor);
      this.ul.appendChild(li);
    });
  }
}