import { CGElement } from "./cg-element.js";

const html = String.raw;

export class Header extends CGElement {
  static template() {
    return html`
    <header class="">
        <h1>Crispy Giggle</h1>
    </header>
    `;
  }
  static component() {
    return html`
    <cg-header>
      ${this.template()}
    </cg-header>
    `;
  }
}
