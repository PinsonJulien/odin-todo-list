import SVG from "./svg";

export default class Burger extends SVG {
  constructor() {
    super();
    this.root.classList.add('burger');

    this.root.innerHTML = `
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M4 6h16M4 0"
      ></path>

      <path
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M4 12h16M4 0"
      ></path>

      <path
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M4 18h16 0"
      ></path>
    `;
  }
}