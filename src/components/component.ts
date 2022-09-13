export default class Component<T extends (HTMLElement | SVGElement)> {
  protected readonly _root: T;

  constructor(root: T ) {
    this._root = root;
  }

  public getRoot() {
    return this._root;
  }

  public get root() {
    return this._root;
  }

  public get classList(): DOMTokenList {
    return this.root.classList;
  }

  public addClass(...classes: string[]) {
    this.classList.add(...classes);
  }
}