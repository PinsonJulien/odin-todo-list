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
    this.root.href = route.path;
    this.root.addEventListener('click', (e) => {
      this.router.switchRouteByPath(route.path);
      e.preventDefault();
    });
  }

  getRoute() : RouterLink['route'] {
    return this.route;
  }

  setActive(active: boolean) : void {
    const activeClass = "active";

    if (active) this.addClass(activeClass);
    else this.removeClass(activeClass);
  }
}