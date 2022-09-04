import Component from "../../components/component";
import Error404 from "../../views/404";
import Route from "./route";
import RouterLink from "./router-link";

// Todo : 
// Nested route ? #projects/id ?
// if contains / :  nested.

export default class Router extends Component {
  private routerLinks: RouterLink[] = [];
  private readonly error404 = new Error404();

  constructor(routes: Route[]) {
    super();
    this.root.setAttribute("id", "router");

    this.setRoutes(routes);
  }

  public setRoutes(routes: Route[]) {
    const routerLinks: Router['routerLinks'] = [];

    routes.forEach((route) => {
      if (route.childs) {
        route.childs.forEach((child) => {

        });
      } 
      
      else {
        routerLinks.push(
          new RouterLink(route, this)
        );
      }
    });
 
    this.routerLinks = routerLinks;
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
