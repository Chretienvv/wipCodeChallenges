import { LitElement, html } from 'lit';

export class EventsParent extends LitElement {

    static get properties(){
        console.log("properties")
        return {
            _inputValue: { state: true },
          }
    }


    constructor() {
        super()
        this._inputValue = 'asdf';
    }

    onKeyup(e) {
        const inputEl = e.target
        this._inputValue = inputEl.value
        console.log(this._inputValue)
    }

    render() {
        return html`
    <label for="input">Enter a value:</label>
    <input name="input" type="text" @keyup=${this.onKeyup} />

    <events-child message="${this._inputValue}" @clear-text=${this.onClearText}  @set-text=${this.onSetText}></events-child>
    <events-child message="dafdsaf"></events-child>
  `;
    }
    
    onClearText() {
        const el = this.shadowRoot?.querySelector('input');
        if (el) {
          el.value = '';
          this.inputvalue = '';
        }
      }
      
      onSetText(event) {
        const el = this.shadowRoot?.querySelector('input');
        if (el) {
          el.value = event.detail;
          this.inputvalue = event.detail;
        }
      }
}