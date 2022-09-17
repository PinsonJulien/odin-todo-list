export class Todo {
  private _name: string;
  private _dueDate: Date;
  private _priority: number;
  private _project: string;

  public static readonly priorities : {value: number, name: string}[] = [
    {
      value: 0,
      name: 'None'
    },
    {
      value: 1,
      name: 'For this month'
    },
    {
      value: 2,
      name: 'For this week'
    },
    {
      value: 3,
      name: 'For tomorrow'
    },
    {
      value: 4,
      name: 'For today'
    }
  ];

  constructor (
    name: Todo['_name'],
    dueDate: Todo['_dueDate'],
    priority: Todo['_priority'],
    project: Todo['_project']
  ) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  public get name(): Todo['_name'] {
    return this._name;
  }

  public set name(name: Todo['_name']) {
    this._name = name;
  }

  public get dueDate(): Todo['_dueDate'] {
    return this._dueDate;
  }

  public set dueDate(dueDate: Todo['_dueDate']) {
    this._dueDate = dueDate;
  }

  public get priority(): Todo['_priority'] {
    return this._priority;
  }

  public set priority(priority: Todo['_priority']) {
    this._priority = priority;
  }

  public get project(): Todo['_project'] {
    return this._project;
  }

  public set project(project: Todo['_project']) {
    this._project = project;
  }
}