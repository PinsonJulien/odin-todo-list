import Component from "../components/component";

export default class Menu extends Component {

  constructor() {
    super();

    const p = document.createElement('p');
    p.textContent = "menu";

    this.root.append(
      p
    );
  }
}