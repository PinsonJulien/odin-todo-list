import Component from "../../components/component";
import Route  from "./route";
import Router from "./router";

export default class RouterLink extends Component<HTMLAnchorElement> {
  private readonly route: Route;
  private readonly router: Router;

  constructor (
    route: Route,
    router: Router,
  ) {
    super(document.createElement('a'));
    this.route = route;
    this.router = router;

    this.root.textContent = this.route.name;
    this.root.addEventListener('click', () => this.router.changeRoute(this));
  }

  getRoute() {
    return this.route;
  }
}