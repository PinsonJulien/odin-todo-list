import Component from "../../../component";

export type OptionProps = {
  value: string;
  text: string;
};

export default class Option extends Component<HTMLOptionElement> {
  private _value: string;
  private _text: string;

  constructor(props?: OptionProps) {
    super(document.createElement('option'));

    if(props) {
      this.value = props.value;
      this.text = props.text;
    }
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this._value = value;

    this.root.value = this._value;
  }

  public get text(): string {
    return this._text;
  }

  public set text(text: string) {
    this._text = text;

    this.root.textContent = this._text;
  }
}