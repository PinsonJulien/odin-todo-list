import SVG from "./svg";

export default class Close extends SVG {
  constructor() {
    super();
    this.root.classList.add('close');

    this.root.innerHTML = `
      <path
        d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
      />
      </path>
    `;
  }
}