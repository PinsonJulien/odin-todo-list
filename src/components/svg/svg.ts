import Component from "../component";

export default class SVG extends Component<SVGSVGElement> {
  constructor() {
    super(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
    this.root.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.root.setAttribute('viewBox', "0 0 24 24");
    this.root.setAttribute('stroke', 'auto');
    this.root.setAttribute('strokeWidth', "5")
    this.root.setAttribute('fill', 'none');
    this.root.setAttribute('width', '32px');
    this.root.setAttribute('height', '32px');
  }
}