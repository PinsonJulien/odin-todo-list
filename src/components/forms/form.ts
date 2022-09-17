import Component from "../component";

export default class Form extends Component<HTMLFormElement> {
  private _method: "post" | "get";
  private readonly _submit: (...args: any[]) => any;
  private readonly _cancel: (...args: any[]) => any;

  constructor(
    submit: Form['_submit'],
    cancel: Form['_cancel']
  ) {
    super(document.createElement('form'));

    this._submit = submit;
    this._cancel = cancel;

    this.method = "post";
  }

  protected get submit(): Form['_submit'] {
    return this._submit;
  }

  protected get cancel(): Form['_cancel'] {
    return this._cancel;
  }

  private set method(method: Form['_method']) {
    this._method = method;

    this.root.method = this._method;
  }
}