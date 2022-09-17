import Component from "../../component";

type ControlElement = (
  HTMLInputElement |
  HTMLSelectElement |
  HTMLTextAreaElement
);

export default abstract class Control<T extends ControlElement> extends Component<T> {
  private _name: string;

  constructor(
    field: T,
    name: Control<T>['_name']
  ) {
    super(field);
    this.name = name;
  }

  public get name(): Control<T>['_name'] {
    return this._name;
  }

  public set name(name: Control<T>['_name']) {
    this._name = name;

    this.root.name = this._name;
  }

  public get value(): string {
    return this.root.value;
  }

  public set value(value: string) {
    this.root.value = value;
  }
}