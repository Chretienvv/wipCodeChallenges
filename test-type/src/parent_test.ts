import { html, LitElement } from 'lit';
import { state } from 'lit/decorators.js';

// @customElement('events-parent')
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
