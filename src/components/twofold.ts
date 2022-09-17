import Component from "./component";

// This class allows to switch between two components.
export default abstract class Twofold
  <
    T extends HTMLElement,
    F extends Component<any>,
    B extends Component<any> 
  > extends Component<T> {

  protected readonly frontComponent: F;
  protected readonly backComponent: B;

  protected currentSide: boolean = false;

  constructor(
    root: T,
    frontComponent: F,
    backComponent: B
  ) {
    super(root);
    
    this.frontComponent = frontComponent;
    this.backComponent = backComponent;

    // Front by default.
    this.changeSide(false);
  }

  protected changeSide(side: boolean) : void {
    this.currentSide = side;

    this.root.replaceChildren(
      (!this.currentSide)
        ? this.frontComponent.root
        : this.backComponent.root
    );
  }
}