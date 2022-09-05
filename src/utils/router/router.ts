import Component from "../../components/component";
import Error404 from "../../views/404";
import Route from "./route";
import RouterLink from "./router-link";

export default class Router extends Component {
  private routerLinks: RouterLink[] = [];
  private readonly error404 = new Error404();

  constructor() {
    super();
    this.root.setAttribute("id", "router");
  }

  public insert(...routes: Route[]): RouterLink[] {
    const arr: RouterLink[] = [];

    routes.forEach((route) => {
      arr.push(new RouterLink(route, this))
    });

    this.routerLinks.push(...arr);

    return arr;
  }

  public getByPath (path: Route['path']) : RouterLink {
    return this.routerLinks.find((link) => link.getRoute().path === path);
  }

  public deleteByPath (path: Route['path'] ) : RouterLink {
    const link = this.getByPath(path);

    if (link) this.routerLinks.splice(this.routerLinks.indexOf(link) , 1);

    return link;
  }

  public setRoutes(routes: Route[]) {
    const routerLinks: Router['routerLinks'] = [];

    routes.forEach((route) => {
      routerLinks.push(
        new RouterLink(route, this)
      );
    });
 
    this.routerLinks = routerLinks;
  }

  public switchRouteByPath(path: Route['path']): void {
    const routerLink = this.getByPath(path);

    // remove class from all router links
    this.routerLinks.forEach((link) => {
      link.setActive(false);
    });

    // If the page doesn't exist, 404 error
    if (!routerLink) {
      this.root.replaceChildren(this.error404.getRoot());
      return;
    }

    routerLink.setActive(true);

    this.root.replaceChildren(routerLink.getRoute().component.getRoot());

    // change hash
    this.changeHashPath(path);
  }

  private changeHashPath(path: Route['path']) {
    window.location.hash = path;
  }

  public getHashPath(): Route['path'] {
    return window.location.hash.replace('#', "");
  }

  public getRouterLinks() {
    return this.routerLinks;
  }
}
