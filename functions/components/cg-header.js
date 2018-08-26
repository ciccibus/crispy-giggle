"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _cgElement = require("./cg-element.js");

const html = String.raw;

class Header extends _cgElement.CGElement {
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
exports.Header = Header;