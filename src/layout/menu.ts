import Component from "../components/component";

export default class Menu extends Component<HTMLDivElement> {
  protected readonly ul: HTMLUListElement;

  constructor(...items: MenuItem[]) {
    super(document.createElement('div'));

    this.ul = document.createElement('ul');
    this.root.appendChild(this.ul);

    this.insert(...items);
  }

  public insert (...items: MenuItem[]) : void {
    items.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.setAttribute('href', item.path);
      a.textContent = item.name;

      a.addEventListener('click', (e: MouseEvent) => {
        const element = e.target as HTMLElement;
        item.onClick(element.getAttribute('href'));
        
        e.preventDefault();
      })

      li.appendChild(a);
      this.ul.appendChild(li);
    });
  }

  public clear() : void {
    this.ul.replaceChildren();
  }
}

export interface MenuItem {
  name: string;
  path: string;
  onClick: (...args: any[]) => any;
};