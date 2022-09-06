import Component from "../../../component";
import Control from "../control";

export default abstract class Input extends Component<HTMLInputElement> implements Control {
  protected type: string;
  protected id: string;
  protected name: string;

  constructor(
    type: Input['type'],
    id: Input['id'],
    name: Input['name']
  ) {
    super(document.createElement('input'));

    this.type = type;
    this.id = id;
    this.name = name;

    this.root.setAttribute('type', type);
    this.root.setAttribute('id', id);
    this.root.setAttribute('name', name);
  }

  public getValue(): string {
    return this.root.value;
  }

  public setValue(value: string) : void {
    this.root.value = value;
  }
}