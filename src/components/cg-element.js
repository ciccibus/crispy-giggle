let _HTMLElement;
if (typeof process !== "undefined") {
  _HTMLElement = class HTMLElement {};
} else {
  _HTMLElement = HTMLElement;
}

export class CGElement extends _HTMLElement {}
