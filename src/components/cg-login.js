import { CGElement } from "./cg-element.js";

const html = String.raw;

export class Login extends CGElement {
  static template() {
    return html`
        <form>
            <div class="username">
                <input type="text" class="" id="username-input" name="username" required>
                <label class="" for="username-input">Username</label>
            </div>
            <div class="password">
                <input type="password" class="" id="password-input" name="password" required minlength="8">
                <label class="" for="password-input">Password</label>
            </div>
            <div class="button-container">
                <button class="" type="button">
                    Cancel
                </button>
                <button class="">
                    Next
                </button>
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
