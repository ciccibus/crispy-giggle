"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _cgElement = require("./cg-element.js");

const html = String.raw;

class Login extends _cgElement.CGElement {
    static template() {
        return html`
        <form class="u-primary-font">
            <div class="u-container--small">
                <div class="username">
                    <label class="cg-input__label u-upper-case u-block" for="username-input">Username</label>
                    <input type="text" class="cg-input__element u-block" id="username-input" name="username" required>
                </div>
                <div class="password">
                    <label class="cg-input__label u-upper-case u-block" for="password-input">Password</label>
                    <input type="password" class="cg-input__element u-block" id="password-input" name="password" required minlength="8">
                </div>
                <div class="button-container">
                    <button class="cg-button u-upper-case" type="button">
                        Cancel
                    </button>
                    <button class="cg-button cg-button--primary u-upper-case">
                        Next
                    </button>
                    <button class="cg-button cg-button--outlined u-upper-case">
                        Next
                    </button>
                </div>
            </div>
        </form>
    `;
    }
    static component() {
        return html`
    <cg-login>
      ${this.template()}
    </cg-login>
    `;
    }
}
exports.Login = Login;