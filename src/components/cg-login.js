import { CGElement } from "./cg-element.js";

const html = String.raw;

export class Login extends CGElement {
  static template(classes) {
    return html`
        <form class="font-type-${classes}">
            <div class="username">
                <input type="text" class="" id="username-input" name="username" required>
                <label class="" for="username-input">Username</label>
            </div>
            <div class="password">
                <input type="password" class="" id="password-input" name="password" required minlength="8">
                <label class="" for="password-input">Password</label>
            </div>
            <div class="button-container">
                <button class="cg-button" type="button">
                    Cancel
                </button>
                <button class="cg-button cg-button--primary">
                    Next
                </button>
                <button class="cg-button cg-button--outlined">
                    Next
                </button>
            </div>
        </form>
    `;
  }
  static component(classes) {
    return html`
    <cg-login>
      ${this.template(classes)}
    </cg-login>
    `;
  }
}
