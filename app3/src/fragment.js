import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

(function fragment() {
  const tagName = "mf-app3-tag"

  class App3Microfrontend extends HTMLElement {
    connectedCallback() {
      this.log("connected");
      this.render()
    }

    disconnectedCallback() {
      this.log("disconnected");
    }

    attributeChangedCallback() {
      this.log("changed");
    }

    log(...args) {
      console.log(tagName, ...args);
    }

    render() {
      ReactDOM.render(<App />, this);
    }
  }

  window.customElements.define(tagName, App3Microfrontend);
})();
