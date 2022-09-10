import Component from "./component";

// This class allows to switch between two components.
export default abstract class Twofold<T extends HTMLElement> extends Component<T> {
  protected readonly frontComponent: Component<any>;
  protected readonly backComponent: Component<any>;

  protected currentSide: boolean = false;

  constructor(
    root: T,
    frontComponent: Twofold<T>['frontComponent'],
    backComponent: Twofold<T>['backComponent']
  ) {
    super(root);
    
    this.frontComponent = frontComponent;
    this.backComponent = backComponent;

    // Front by default.
    this.changeSide(false);
  }

  protected changeSide(side: Twofold<T>['currentSide']) : void {
    this.currentSide = side;

    this.root.replaceChildren(
      (!this.currentSide)
        ? this.frontComponent.getRoot()
        : this.backComponent.getRoot()
    );
  }
}