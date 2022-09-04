import Component from "../../components/component";

export default interface Route {
  name: string;
  hash: string;
  component: Component;
  childs?: Route[];
}