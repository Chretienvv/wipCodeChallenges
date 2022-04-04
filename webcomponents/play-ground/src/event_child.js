import { LitElement, html } from 'lit';

export class EventsChild extends LitElement {
    static get properties() {
        return {
            message: { type: String },
        }
    }

    fireClearTextEvent() {
        
        const event = new CustomEvent('clear-text');
        console.log(event)
        this.dispatchEvent(event);
    }

    fireSetTextEvent() {
        const event = new CustomEvent('set-text', { detail: 'Arcady' });
        this.dispatchEvent(event);
    }

    render() {

        return html` <p>Live typing value: "${this.message}"</p> 
            <button @click=${this.fireClearTextEvent}>Clear text in parent</button>
    <button @click=${this.fireSetTextEvent}>Set text to "Arcady"</button>`;
    }
}