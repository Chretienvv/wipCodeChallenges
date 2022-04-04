/**
 * Shows how events can be used to listen to keyup events,
 * after which data can be extracted & passed around.
 */
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('arcady-events')
export class EventsParent extends LitElement {
  @state() inputvalue = '';

  onKeyup(e: Event) {
    const inputEl = e.target as HTMLInputElement;
    this.inputvalue = inputEl.value;
  }

  render() {
    return html`
      <label for="input">Enter a value:</label>
      <input name="input" type="text" @keyup=${this.onKeyup} />

      <events-child .message=${this.inputvalue}></events-child>
    `;
  }
}

@customElement('events-child')
export class EventsChild extends LitElement {
  @property({ type: String }) message = '';

  render() {
    return html` <p>Live typing value: "${this.message}"</p> `;
  }
}
