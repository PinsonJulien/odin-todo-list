import Component from "../../components/component";

export default interface Route {
  name: string;
  path: string;
  component: Component<any>
}