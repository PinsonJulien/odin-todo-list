import Component from "./components/component";

export interface Route {
  name: string;
  path: string;
  component: Component;
};

export default class Router extends Component {
  private readonly routerLinks: RouterLink[] = [];

  constructor(routes: Route[]) {
    super();

    routes.forEach((route) => {
      this.routerLinks.push(
        new RouterLink(route, this)
      );
    });
  }

  public changeRoute(component: Route["component"]) {
    this.root.replaceChildren(component.getRoot());
  }

  public changeRouteByPath(path: Route['path']) {
    this.changeRoute(
      this.getRouterLinkByPath(path).getRoute().component
    );
  }

  public getRouterLinks() {
    return this.routerLinks;
  }

  public getRouterLinkByPath(path: Route['path']) {
    return this.routerLinks.find((link) => link.getRoute().path === path);
  }
}

export class RouterLink extends Component<HTMLAnchorElement> {
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
    this.root.addEventListener('click', () => this.router.changeRoute(route.component));
  }

  getRoute() {
    return this.route;
  }
}