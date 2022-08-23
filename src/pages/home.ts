import Component from "../components/component";

export default class Home extends Component {

  constructor() {
    super();

    const p = document.createElement('p');
    p.textContent = "home";

    this.root.append(
      p
    );
  }
}