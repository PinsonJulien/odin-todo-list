import Component from "./components/component";
import Error404 from "./pages/404";

export interface Route {
  name: string;
  hash: string;
  component: Component;
};

export default class Router extends Component {
  private readonly routerLinks: RouterLink[] = [];
  private readonly error404 = new Error404();

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

    // If the page doesn't exist, 404 error
    if (!routerLink) {
      this.root.replaceChildren(this.error404.getRoot());
      return;
    }

    routerLink.getRoot().classList.add(className);

    this.root.replaceChildren(routerLink.getRoute().component.getRoot());

    // change hash
    window.location.hash = `#${routerLink.getRoute().hash}`;
  }

  public changeRouteByHash(hash: Route['hash']) {
    this.changeRoute(
      this.getRouterLinkByHash(hash)
    );
  }

  public getRouterLinks() {
    return this.routerLinks;
  }

  public getRouterLinkByHash(hash: Route['hash']) {
    return this.routerLinks.find((link) => link.getRoute().hash === hash);
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