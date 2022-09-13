import Component from "../component";

export default class Paragraph extends Component<HTMLParagraphElement> {
  protected textContent: string;

  constructor(
    textContent?: string,
  ) {
    super(document.createElement('p'));
    this.setTextContent(textContent);
  }

  public setTextContent(textContent: string) : void {
    this.textContent = textContent;
    this.root.textContent = textContent;
  }

  public getTextContent(): string {
    return this.textContent;
  }
}