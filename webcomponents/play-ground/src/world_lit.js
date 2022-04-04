import { LitElement, html } from 'lit';

export class HelloWorld extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    }
  }

  render() { 
    return html`
      <main>
        <h1 >${this.message}</h1>
      </main>
    `;
  }
}