import TodoLocalStorage from "../services/local-storage/todo-local-storage";
import Model from "./model";

export interface ITodo {
  name: string;
  dueDate: Date;
  priority: number;
  project: string;
}

export class Todo extends Model {
  private static readonly todoLocalStorage = new TodoLocalStorage(Todo);

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
    obj: ITodo
  ) {
    super();

    this.name = obj.name;
    this.dueDate = new Date(obj.dueDate);
    this.priority = obj.priority;
    this.project = obj.project;
  }

  // Getters / Setters
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

  // Validations
  public static validation(todo: Todo): boolean {
    return (
      this.nameValidation(todo.name) ||
      this.dueDateValidation(todo.dueDate) ||
      this.priorityValidation(todo.priority) ||
      this.projectValidation(todo.project)
    );
  }

  public static nameValidation(name: Todo['_name']): boolean {
    if (!name) return false;

    return true;
  }

  public static dueDateValidation(dueDate: Todo['_dueDate']): boolean {
    if (!dueDate) return false;
    if (isNaN(dueDate.getTime())) return false;

    return true;
  }

  public static priorityValidation(priority: Todo['_priority']): boolean {
    if (priority === null) return false;

    return true;
  }

  public static projectValidation(project: Todo['_project']): boolean {
    if (!project) return false;

    return true;
  }

  // Business logic
  // Get methods
  public static get(): Todo[] {
    return this.todoLocalStorage.values;
  }

  public static getByProject(project: Todo['_project']): Todo[] {
    return this.get().filter((todo) => todo.project === project);
  }

  public static getByDueDate(dueDate: Todo['_dueDate']) : Todo[] {
    return this.get().filter((todo) => { 
      const todoDate = todo.dueDate;
      return (
        todoDate.getDate() === dueDate.getDate() &&
        todoDate.getMonth() === dueDate.getMonth() &&
        todoDate.getFullYear() === dueDate.getFullYear()
      );
    });
  }

  public static getByDueDateRange(d1: Todo['_dueDate'], d2: Todo['_dueDate']): Todo[] {
    return this.get().filter((todo) => {
      const dateTime = todo.dueDate.getTime();
      return (
        dateTime >= d1.getTime() 
        && 
        dateTime <= d2.getTime()
      );
    });
  }

  public static getProjects(): Todo['_project'][] {
    const tmp: Todo['_project'][] = [];

    this.get().forEach((todo) => {
      const project = todo.project;
      if (project !=="" && !tmp.includes(project)) tmp.push(project);
    });

    tmp.sort();

    return tmp;
  }

  // Post method
  public static post(value: Todo): Todo {
    this.todoLocalStorage.create(value);
    return value;
  }

  // Update method
  public static put(target: Todo, updated: Todo): Todo {
    this.todoLocalStorage.update(target, updated);

    return updated;
  }

  // Delete method
  public static delete(target: Todo): Todo {
    this.todoLocalStorage.delete(target);
    return target;
  }

  // Helpers
  // extract the class instance to a raw object.
  public getRawObject(): ITodo {
    return {
      name: this.name,
      dueDate: this.dueDate,
      priority: this.priority,
      project: this.project
    }
  }
}