import Input from "./input";

export default class TextInput extends Input {
  constructor(
    id: Input['id'],
    name: Input['name']
  ) {
    super('text', id, name);
  }
}