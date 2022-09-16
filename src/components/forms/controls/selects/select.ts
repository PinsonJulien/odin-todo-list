import Component from "../../../component";
import Control from "../control";
import Option, { OptionProps } from "./option";

export default class Select extends Component<HTMLSelectElement> implements Control {

  private options: Option[] = [];

  constructor(
    optionProps?: OptionProps[]
  ) {
    super(document.createElement('select'));

    if (optionProps) this.addOption(...optionProps);
  }

  public getValue(): string {
    return this.root.value;
  }

  public setValue(value: string): void {
    this.root.value = value;
  }

  public addOption(...options: OptionProps[]) {
    options.forEach((option) => {
      const optionComponent = new Option(option);
      this.options.push(optionComponent);

      this.root.appendChild(optionComponent.root);
    });
  }
}