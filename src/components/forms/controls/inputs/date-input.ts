import Input from "./input";

export default class DateInput extends Input {
  constructor(
    id: Input['id'],
    name: Input['name']
  ) {
    super('date', id, name);
  }
}