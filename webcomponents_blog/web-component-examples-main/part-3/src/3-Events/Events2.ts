/**
 * An extension on Events.ts, where this one also uses a
 * CustomEvent from the child component to call functionality
 * on the parent component.
 */
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('arcady-events2')
export class EventsParent extends LitElement {
  @state() inputvalue = '';

  onKeyup(e: Event) {
    const inputEl = e.target as HTMLInputElement;
    this.inputvalue = inputEl.value;
  }

  onClearText() {
    const el = this.shadowRoot?.querySelector('input');
    if (el) {
      el.value = '';
      this.inputvalue = '';
    }
  }

  onSetText(event: CustomEvent) {
    const el = this.shadowRoot?.querySelector('input');
    if (el) {
      el.value = event.detail;
      this.inputvalue = event.detail;
    }
  }

  render() {
    return html`
      <label for="input">Enter a value:</label>
      <input name="input" type="text" @keyup=${this.onKeyup} />

      <events-child2
        .message=${this.inputvalue}
        @clear-text=${this.onClearText}
        @set-text=${this.onSetText}
      ></events-child2>
    `;
  }
}

@customElement('events-child2')
export class EventsChild extends LitElement {
  @property({ type: String }) message = '';

  fireClearTextEvent() {
    const event = new CustomEvent('clear-text');
    this.dispatchEvent(event);
  }

  fireSetTextEvent() {
    const event = new CustomEvent('set-text', { detail: 'Arcady' });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <p>Live typing value: "${this.message}"</p>
      <button @click=${this.fireClearTextEvent}>Clear text in parent</button>
      <button @click=${this.fireSetTextEvent}>Set text to "Arcady"</button>
    `;
  }
}
