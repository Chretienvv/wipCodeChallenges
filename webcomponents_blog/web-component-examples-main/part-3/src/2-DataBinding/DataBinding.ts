/**
 * Shows how to pass data from one component to another
 * one using data binding.
 */
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('arcady-databinding')
export class DataBindingParent extends LitElement {
  @property({ type: String }) message = 'Data binding test!';

  static styles = css`
    :host {
      border: 2px solid red;
    }
  `;

  render() {
    return html`
      <h2>This is the parent</h2>
      <data-binding-child .message=${this.message}></data-binding-child>
    `;
  }
}

@customElement('data-binding-child')
export class DataBindingChild extends LitElement {
  @property({ type: String }) message = '';

  static styles = css`
    :host {
      display: block;
      border: 2px solid green;
    }
  `;

  render() {
    return html`
      <h3>This is the child</h3>
      <p>This is the message via data binding: "${this.message}"</p>
    `;
  }
}
