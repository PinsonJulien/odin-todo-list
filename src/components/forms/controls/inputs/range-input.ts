import Input from "./input";

export default class RangeInput extends Input {
  private _min: number;
  private _max: number;
  private _step: number;

  constructor(
    name: Input['_name'],
    min: RangeInput['_min'],
    max: RangeInput['_max'],
    step: RangeInput['_step'],
    id?: Input['id']
  ) {
    super('range', name);

    this.min = min;
    this.max = max;
    this.step = step;

    if(id) this.id = id;
  }

  public get min(): RangeInput['_min'] {
    return this._min;
  }

  public set min(min: RangeInput['_min']) {
    this._min = min;

    this.root.min = this._min.toString();
  }

  public get max(): RangeInput['_max'] {
    return this._max;
  }

  public set max(max: RangeInput['_max']) {
    this._max = max;

    this.root.max = this._max.toString();
  }

  public get step(): RangeInput['_step'] {
    return this._step;
  }

  public set step(step: RangeInput['_step']) {
    this._step = step;

    this.root.step = this._step.toString();
  }
}