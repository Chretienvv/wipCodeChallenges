/**
 * Just a hello world component built with Lit.
 */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('arcady-helloworld')
export class HelloWorld extends LitElement {
  @property({ type: String }) message = 'Hello World!';

  render() {
    return html`
      <main>
        <h1>${this.message}</h1>
      </main>
    `;
  }
}
