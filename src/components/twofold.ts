import Component from "./component";

// This class allows to switch between two components.
export default abstract class Twofold extends Component<HTMLDivElement> {
  protected readonly frontComponent: Component<any>;
  protected readonly backComponent: Component<any>;

  protected currentSide: boolean = false;

  constructor(
    frontComponent: Twofold['frontComponent'],
    backComponent: Twofold['backComponent']
  ) {
    super(document.createElement('div'));
    
    this.frontComponent = frontComponent;
    this.backComponent = backComponent;

    // Front by default.
    this.changeSide(false);
  }

  protected changeSide(side: Twofold['currentSide']) : void {
    this.currentSide = side;

    this.root.replaceChildren(
      (!this.currentSide)
        ? this.frontComponent.getRoot()
        : this.backComponent.getRoot()
    );
  }
}