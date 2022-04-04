import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// @customElement('events-child')
export class EventsChild extends LitElement {
  @property({ type: String }) message = '';

  render() {
    return html` <p>Live typing value: "${this.message}"</p> `;
  }
}
