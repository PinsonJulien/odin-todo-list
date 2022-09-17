import Component from "../../component";

export default class Label extends Component<HTMLLabelElement> {
  private _text: string;
  private _htmlFor: string;

  constructor(
    text: Label['_text'],
    htmlFor: Label['_htmlFor']
  ) {
    super(document.createElement('label'));

    this.text = text;
    this.htmlFor = htmlFor;
  }

  public get text(): Label['_text'] {
    return this._text;
  }

  public set text(text: Label['_text']) {
    this._text = text;
    this.root.textContent = this._text;
  }

  public get htmlFor(): Label['_htmlFor'] {
    return this._htmlFor;
  }

  public set htmlFor(htmlFor: Label['_htmlFor']) {
    this._htmlFor = htmlFor;
    this.root.htmlFor = this._htmlFor;
  }
}