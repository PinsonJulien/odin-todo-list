import Control from "../control";
import Option, { OptionProps } from "./option";

export default class Select extends Control<HTMLSelectElement> {
  private _options: Option[] = [];

  constructor(
    optionProps: OptionProps[],
    name: Select['_name']
  ) {
    super(document.createElement('select'), name);

    this.options = optionProps;
  }

  public get options(): Select['_options'] {
    return this._options;
  }

  public set options (optionProps: OptionProps[]) {
    const newOptions: Option[] = [];

    optionProps.forEach((prop) => {
      const optionComponent = new Option(prop);
      newOptions.push(optionComponent);
    });

    this._options = newOptions;
    this.root.replaceChildren(...this._options.map((option) => option.root));
  }
}