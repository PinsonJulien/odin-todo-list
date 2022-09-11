import Page from "../../pages/page";

export default class Route {
  public name: string;
  public path: string;
  public page: Page;

  constructor(
    name: Route['name'],
    path: Route['path'],
    page: Route['page']
  ) {
    this.name = name;
    this.path = path;
    this.page = page;
  }
}