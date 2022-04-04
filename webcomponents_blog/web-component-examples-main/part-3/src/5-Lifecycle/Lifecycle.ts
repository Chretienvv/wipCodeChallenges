/**
 * Example of how different lifecycle hooks can be used.
 */
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { until } from 'lit/directives/until.js';

@customElement('arcady-lifecycle')
export class LifecycleComponent extends LitElement {
  @state() visible: boolean = false;

  toggleVisibility() {
    this.visible = !this.visible;
  }

  render() {
    return html`
      <button @click=${this.toggleVisibility}>Toggle child component</button>
      ${this.visible
        ? html`<arcady-lifecycle-child></arcady-lifecycle-child>`
        : ''}
    `;
  }
}

@customElement('arcady-lifecycle-child')
export class LifecycleChildComponent extends LitElement {
  @state()
  contentPromise!: Promise<string>;

  // Lifecycle hook for when the component is initialized in the DOM
  connectedCallback() {
    super.connectedCallback();

    // Construct a promise that resolves after 2 seconds with a message
    this.contentPromise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Hello world!');
      }, 2000);
    });
  }

  render() {
    // Use the "until" directive to render a message until the promise
    // has resolved, after which the result will be rendered
    return html`<h1>${until(this.contentPromise, 'Loading...')}</h1>`;
  }

  // Lifecycle hook for when the component is removed from the DOM
  disconnectedCallback() {
    super.disconnectedCallback();
    alert('Component disconnected!');
  }
}
