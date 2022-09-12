export class Todo {
  private name: string;
  private dueDate: Date;
  private priority: number;
  private project: string;

  constructor (
    name: Todo['name'],
    dueDate: Todo['dueDate'],
    priority: Todo['priority'],
    project: Todo['project']
  ) {
    this.setName(name);
    this.setDueDate(dueDate);
    this.setPriority(priority);
    this.setProject(project);
  }

  public setName(name: Todo['name']): void {
    this.name = name;
  }

  public getName(): Todo['name'] {
    return this.name;
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