import Input from "./input";

export default class DateInput extends Input {
  constructor(
    name: Input['_name'],
    id?: Input['id'], 
  ) {
    super('date', name);

    if (id) this.id = id;
  }
}