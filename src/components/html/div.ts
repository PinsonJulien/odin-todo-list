import Component from "../component";

export default class Div extends Component<HTMLDivElement> {
  constructor() {
    super(document.createElement('div'));
  }
}