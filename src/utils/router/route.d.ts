import Component from "../../components/component";
import Page from "../../pages/page";

export default interface Route {
  name: string;
  path: string;
  page: Page;
}