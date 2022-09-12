import SVG from "./svg";

export default class Done extends SVG {
  constructor() {
    super();
    this.root.classList.add('done');

    this.root.innerHTML = `
      <path 
        d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
      />
      </path>
    `;
  }
}