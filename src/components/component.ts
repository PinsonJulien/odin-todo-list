export default class Component<T extends HTMLElement = HTMLDivElement> {
  protected readonly root;

  constructor(root?: T ) {
    this.root = root || document.createElement('div');
  }

  public getRoot() {
    return this.root;
  }
}