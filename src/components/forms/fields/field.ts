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
    this.addClass('form-field');

    this.label = label;
    this.control = control;

    this.root.append(
      this.label.root,
      this.control.root
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

  public setValue(value: string): void {
    this.control.setValue(value);
  }

  public setValid(valid: boolean) : void {
    this.addClass((valid) ? 'valid' : 'invalid');
    this.removeClass((valid) ? 'invalid' : 'valid')
  }

  public removeValidity() : void {
    this.removeClass('valid', 'invalid')
  }
}