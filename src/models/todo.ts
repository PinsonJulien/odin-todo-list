export default class Todo {
  private name: String;
  private description: String;
  private dueDate: Date;
  private priority: {
    name: String;
    weight: number;
  };
  private project: String;

  constructor (
    name: Todo['name'],
    description: Todo['description'],
    dueDate: Todo['dueDate'],
    priority: Todo['priority'],
    project: Todo['project']
  ) {

    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  public setName(name: Todo['name']): void {
    this.name = name;
  }

  public getName(): Todo['name'] {
    return this.name;
  }

  public setDescription (description: Todo['description']): void {
    this.description = description;
  }

  public getDescription(): Todo['description'] {
    return this.description;
  }

  public setDueDate(dueDate: Todo['dueDate']) : void {
    this.dueDate = dueDate;
  }

  public getDueDate(): Todo['dueDate'] {
    return this.dueDate;
  }

  public setPriority (priority: Todo['priority']): void {
    this.priority = priority;
  }

  public getPriority(): Todo['priority'] {
    return this.priority;
  }

  public setProject(project: Todo['project']): void {
    this.project = project;
  } 

  public getProject(): Todo['project'] {
    return this.project;
  }
}