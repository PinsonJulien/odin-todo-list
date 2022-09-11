export default class Component<T extends (HTMLElement | SVGElement)> {
  protected readonly root;

  constructor(root: T ) {
    this.root = root;
  }

  public getRoot() {
    return this.root;
  }
}