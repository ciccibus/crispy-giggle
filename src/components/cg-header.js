import { CGElement } from "./cg-element.js";

const html = String.raw;

export class Header extends CGElement {
  static template() {
    return html`
    <header class="">
        <div class="u-container">
          <h1 class="u-secondary-font u-strong">Crispy Giggle</h1>
        </div>
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
