import Input from "./input";

export default class RangeInput extends Input {
  protected min: number;
  protected max: number;
  protected step: number;

  constructor(
    id: Input['id'],
    name: Input['name'],
    min: RangeInput['min'],
    max: RangeInput['max'],
    step: RangeInput['step']
  ) {
    super('range', id, name);

    this.min = min;
    this.max = max;
    this.step = step;

    this.root.setAttribute('min', min.toString());
    this.root.setAttribute('max', max.toString());
    this.root.setAttribute('step', step.toString());
  }
}