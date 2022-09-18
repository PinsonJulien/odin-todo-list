import Model from "../../models/model";
import { byteSize } from "../../utils/byte";

export default abstract class LocalStorage<T extends Model> {
  private readonly ctor: new (...args: any[]) => T;
  private readonly _key: string;
  private readonly _values: T[];

  constructor(
    key: LocalStorage<T>['_key'],
    ctor: LocalStorage<T>['ctor']
  ) {
    this._key = key;
    this.ctor = ctor;

    // get all local data
    this._values = this.read();
  }

  // Getters / Setters
  public get values(): T[] {
    return this._values;
  }

  public get key(): string {
    return this._key;
  }
  
  // Abstract methods
  public abstract sort(): void;
  
  protected instantiate(obj: T): T {
    return new this.ctor(obj);
  }

  // Methods

  // Initialize the values of the local storage.
  private read() : T[] {
    const jsonData: string = window.localStorage.getItem(this.key);
    const tmp: T[] = [];

    if (!jsonData) return [];

    // 
    JSON.parse(jsonData).forEach((obj: T) => {
      tmp.push(this.instantiate(obj));
    });

    return tmp;
  }

  private getId(value: T) : number {
    return this.values.findIndex((val) => val === value);
  }

  public create(value: T): boolean {
    if (!LocalStorage.canBeStored(value)) return false;
    this.values.push(value);
    this.sort();
    this.save();

    return true;
  }

  public update(target: T, value: T): boolean {
    const id: number = this.getId(target);
    if (id < 0) return false;

    this.values[id] = value;

    this.save();
    return true;
  }

  public delete(value: T): boolean {
    const id: number = this.getId(value);
    if (id < 0) return false;

    this.values.splice(id, 1);

    this.save();
    return true;
  }

  // Replace the existing data in local storage with the new one.
  private save(): void {
    const tmp = this.values.map((val) => val.getRawObject());
    window.localStorage.setItem(
      this.key,
      JSON.stringify(tmp)     
    );
  }

  // Static methods
  public static canBeStored(value: any): boolean {
    const remainingSpace = this.getRemainingSpace();
    const size = byteSize(JSON.stringify(value));
    return (remainingSpace - size) > 0; 
  }

  public static getRemainingSpace(): number {
    // max 5mb
    const storageLimit = 5000000;
    return storageLimit - byteSize(JSON.stringify(window.localStorage));
  }
}