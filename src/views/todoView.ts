import Component from "../components/component";

export default class TodoView extends Component {
  
  constructor() {
    super();
  }

  public refresh() {
    this.fetch();
  }

  protected fetch() {

  }
}