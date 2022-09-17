import Component from "../components/component";
import RouterLink from "../utils/router/router-link";

export default class Menu extends Component<HTMLDivElement> {
  protected readonly ul: HTMLUListElement;

  constructor(...anchors: RouterLink[]) {
    super(document.createElement('div'));
    this.addClass('menu');

    this.ul = document.createElement('ul');
    this.root.appendChild(this.ul);

    this.insert(...anchors);
  }

  public insert (...anchors : RouterLink[]) : void {
    anchors.forEach((anchor) => {
      const li = document.createElement('li');
      li.appendChild(anchor.root);
      
      this.ul.appendChild(li);
    });
  }

  public remove(anchor: RouterLink) : void {
    anchor.root.parentElement.remove();
  }

  public clear() : void {
    this.ul.replaceChildren();
  }
}