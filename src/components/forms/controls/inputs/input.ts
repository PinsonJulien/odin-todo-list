import Control from "../control";

export default abstract class Input extends Control<HTMLInputElement> {
  private _type: string;

  constructor(
    type: Input['_type'],
    name: Input['_name'],    
  ) {
    super(document.createElement('input'), name);
    this.type = type;
  }

  public get type(): Input['_type'] {
    return this._type;
  }

  public set type(type: Input['_type']) {
    this._type = type;
    this.root.type = type;
  }

  public get valueAsDate(): Date {
    return this.root.valueAsDate;
  }

  public set valueAsDate(value: Date) {
    this.root.valueAsDate = value;
  }

  public get valueAsNumber(): number {
    return this.root.valueAsNumber;
  }

  public set valueAsNumber(value: number) {
    this.root.valueAsNumber = value;
  }
}