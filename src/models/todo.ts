export class Todo {
  private checked: boolean = false;
  private name: string;
  private description: string;
  private dueDate: Date;
  private priority: number;
  private project: string;

  constructor (
    checked: Todo['checked'],
    name: Todo['name'],
    description: Todo['description'],
    dueDate: Todo['dueDate'],
    priority: Todo['priority'],
    project: Todo['project']
  ) {
    this.setChecked(checked);
    this.setName(name);
    this.setDescription(description);
    this.setDueDate(dueDate);
    this.setPriority(priority);
    this.setProject(project);
  }

  public setChecked(checked: Todo['checked']) {
    this.checked = checked;
  }

  public getChecked() : Todo['checked'] {
    return this.checked;
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