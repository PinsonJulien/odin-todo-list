import Component from "../../component";

export default class Label extends Component<HTMLLabelElement> {
  protected text: string;
  protected forTarget: string;

  constructor(
    text: Label['text'],
    forTarget: Label['forTarget']
  ) {
    super(document.createElement('label'));

    this.text = text;
    this.forTarget = forTarget;

    this.root.textContent = text;
    this.root.htmlFor = forTarget;
  }
}