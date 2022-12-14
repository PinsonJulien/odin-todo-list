import Component from "../../component";
import Control from "../controls/control";
import Label from "../labels/label";

export default class Field<T extends Control<any>> extends Component<HTMLDivElement> {
  protected readonly _label: Label;
  protected readonly _control: T;

  constructor(
    label: Field<T>['_label'],
    control: Field<T>['_control']
  ) {
    super(document.createElement('div'));
    this.addClass('form-field');

    this._label = label;
    this._control = control;

    this.root.append(
      this.label.root,
      this.control.root
    )
  }

  public get label(): Field<T>['_label'] {
    return this._label;
  }

  public get control(): Field<T>['_control'] {
    return this._control;
  }

  public setValid(valid: boolean) : void {
    this.addClass((valid) ? 'valid' : 'invalid');
    this.removeClass((valid) ? 'invalid' : 'valid');
  }

  public removeValidity() : void {
    this.removeClass('valid', 'invalid');
  }
}