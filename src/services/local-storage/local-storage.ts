import { byteSize } from "../../utils/byte";

export default class LocalStorage<T> {
  private readonly factory: (obj: T) => T;
  private readonly key: string;
  private readonly sortingRule : (a: T, b: T) => number;
  
  private readonly values: T[];

  constructor(
    factory: LocalStorage<T>['factory'],
    key: LocalStorage<T>['key'],
    sortingRule: LocalStorage<T>['sortingRule']
  ) {
    this.factory = factory;
    this.key = key;
    this.sortingRule = sortingRule;

    // get all local data
    this.values = this.read();
  }

  public getValues(): T[] {
    return this.values;
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

  public insert(value: T) {
    if (!this.canBeStored(value)) return;

    this.values.push(value);
    this.sort();
    this.save();
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