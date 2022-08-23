import Component from "../components/component";

export default class Contact extends Component {

  constructor()  {
    super();

    const p = document.createElement('p');
    p.textContent = "contact";

    this.root.append(
      p
    );
  }
}