class CorporateHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <h1>Welcome to our website!</h1>
      <a href="...">Click here to learn more</a>
    `;
  }
}

customElements.define('corporate-header', CorporateHeader);
