import Component from "../component";

export default class Paragraph extends Component<HTMLParagraphElement> {
  protected _textContent: string;

  constructor(
    textContent?: string,
  ) {
    super(document.createElement('p'));
    this.textContent = textContent;
  }

  public get textContent(): Paragraph['_textContent'] {
    return this._textContent;
  }

  public set textContent(textContent: Paragraph['_textContent']) {
    this._textContent = textContent;

    this.root.textContent = textContent;
  }
}