import Component from "../../component";
import { Controls } from "../controls/controls";
import Label from "../labels/label";

export default class Field<T extends Controls> extends Component<HTMLDivElement> {
  protected readonly label: Label;
  protected readonly control: T;

  constructor(
    label: Field<T>['label'],
    control: Field<T>['control']
  ) {
    super(document.createElement('div'));
    this.root.classList.add('form-field');

    this.label = label;
    this.control = control;

    this.root.append(
      this.label.getRoot(),
      this.control.getRoot()
    )
  }

  public getLabel(): Field<T>['label'] {
    return this.label;
  }

  public getControl(): Field<T>['control'] {
    return this.control;
  }

  public getValue(): string {
    return this.control.getValue();
  }

  public setValid(valid: boolean) : void {
    if (valid) return;
  }
}