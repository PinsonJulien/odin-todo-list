import Page from "./page";

export default class Error404 extends Page {

  constructor()  {
    super();

    this.root.setAttribute("id", "error-404");

    const h1 = document.createElement('h1');
    h1.textContent = "404 error.";
    const p = document.createElement('p');
    p.textContent = "Not found.";

    this.root.append(
      h1,
      p
    );
  }

  public refresh(): void {
    return;
  }
}