"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
let _HTMLElement;
if (typeof process !== "undefined") {
  _HTMLElement = class HTMLElement {};
} else {
  _HTMLElement = HTMLElement;
}

class CGElement extends _HTMLElement {}
exports.CGElement = CGElement;