import Model from "../models/model";

export default abstract class Controller<M extends Model> {
  constructor() {}

  // Fetch data
  public abstract get(): M[];
  
  // Insert data
  public abstract post(value: M): M;
  
  // Update data
  public abstract put(target: M, updated: M): M;

  // Delete data
  public abstract delete(target: M): M;

  // Validate data
  public abstract validate(value: M): boolean;
}