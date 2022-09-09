import Component from "../components/component";

export default abstract class Page extends Component<HTMLDivElement> {

  constructor() {
    super(document.createElement('div'));
  }

  public abstract refresh(): void;
}
