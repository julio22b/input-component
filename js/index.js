      class EmailInput extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          this.shadowRoot.innerHTML = `
          <style>
            div { font-family: sans-serif; color: blue; }
          </style>
          <input 
            type="email"
            placeholder="${this.getAttribute("aria-placeholder")}"
            aria-label="${this.getAttribute("aria-label")}"
            hint="${this.getAttribute("hint")}"
            />
          `;
        }
      }

      customElements.define("email-input", EmailInput);