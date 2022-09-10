import Component from "../../../component";
import Control from "../control";

export default class Select extends Component<HTMLSelectElement> implements Control {
  constructor() {
    super(document.createElement('select'));
  }

  public getValue(): string {
    return this.root.value;
  }

  public setValue(value: string): void {
    this.root.value = value;
  }
}