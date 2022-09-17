import { byteSize } from "../../utils/byte";

export default class LocalStorage<T> {
  private readonly _factory: (obj: T) => T;
  private readonly _key: string;
  private readonly _sortingRule : (a: T, b: T) => number;
  
  private readonly _values: T[];

  constructor(
    factory: LocalStorage<T>['_factory'],
    key: LocalStorage<T>['_key'],
    sortingRule: LocalStorage<T>['_sortingRule']
  ) {
    this._factory = factory;
    this._key = key;
    this._sortingRule = sortingRule;

    // get all local data
    this._values = this.read();
  }

  public get values(): LocalStorage<T>['_values'] {
    return this._values;
  }

  protected get factory(): LocalStorage<T>['_factory'] {
    return this._factory;
  }

  protected get key(): LocalStorage<T>['_key'] {
    return this._key;
  }

  protected get sortingRule(): LocalStorage<T>['_sortingRule'] {
    return this._sortingRule;
  }

  private find(value: T) : number {
    return this.values.findIndex((val) => val === value);
  }

  private read() : T[] {
    const jsonData: string = window.localStorage.getItem(this.key);
    const tmp: T[] = [];

    if (!jsonData) return [];

    JSON.parse(jsonData).forEach((obj: T) => {
      tmp.push(this.factory(obj));
    });

    return tmp;
  }

  public insert(value: T): boolean {
    if (!this.canBeStored(value)) return false;
    this.values.push(value);
    this.sort();
    this.save();

    return true;
  }

  public update(target: T, value: T): boolean {
    const id: number = this.find(target);
    if (id < 0) return false;

    this.values[id] = value;

    this.save();
    return true;
  }

  public delete(value: T): boolean {
    const id: number = this.find(value);
    if (id < 0) return false;

    this.values.splice(id, 1);

    this.save();
    return true;
  }

  private save(): void {
    window.localStorage.setItem(
      this.key,
      JSON.stringify(this.values)     
    );
  }

  private sort(): void {
    this.values.sort(
      this.sortingRule
    );
  }

  public canBeStored(value: T): boolean {
    const remainingSpace = this.getRemainingSpace();
    const size = byteSize(JSON.stringify(value));
    return (remainingSpace - size) > 0; 
  }

  public getRemainingSpace(): number {
    // max 5mb
    const storageLimit = 5000000;
    return storageLimit - byteSize(JSON.stringify(window.localStorage));
  }
}