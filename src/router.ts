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
    this.root.setAttribute("id", "router");

    routes.forEach((route) => {
      this.routerLinks.push(
        new RouterLink(route, this)
      );
    });
  }

  public changeRoute(routerLink: RouterLink) {
    const className = "active";
    // remove class from all router links
    this.routerLinks.forEach((link) => {
      link.getRoot().classList.remove(className);
    });

    routerLink.getRoot().classList.add(className);

    this.root.replaceChildren(routerLink.getRoute().component.getRoot());
  }

  public changeRouteByPath(path: Route['path']) {
    this.changeRoute(
      this.getRouterLinkByPath(path)
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
    this.root.addEventListener('click', () => this.router.changeRoute(this));
  }

  getRoute() {
    return this.route;
  }
}