import Component from "../../components/component";
import Error404 from "../../pages/404";
import HashPath from "../hashPath";
import Route from "./route";
import RouterLink from "./router-link";

export default class Router extends Component<HTMLDivElement> {
  private _routerLinks: RouterLink[] = [];
  private readonly error404 = new Error404();

  constructor() {
    super(document.createElement('div'));
    this.root.id = "router";
  }

  public get routerLinks() {
    return this._routerLinks;
  }

  protected set routerLinks(routerLinks: RouterLink[]) {
    this._routerLinks = routerLinks;
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
      this.root.replaceChildren(this.error404.root);
      return;
    }

    routerLink.setActive(true);

    const page = routerLink.getRoute().page;

    this.root.replaceChildren(page.root);

    // Trigger refresh of page;
    page.refresh();

    // change hash
    HashPath.change(path);
  }
}
