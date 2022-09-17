import Input from "./input";

export default class TextInput extends Input {
  constructor(
    name: Input['name'],
    id?: Input['id']
  ) {
    super('text', name);

    if(id) this.id = id;
  }
}