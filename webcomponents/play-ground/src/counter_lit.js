import { html, css, LitElement } from 'lit';

export class MyLitCounter extends LitElement {
  static get styles() {
    return css`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `;
  }

  constructor() {
    super();
    this.count = 1;
  }

  inc() {
    this.count += 1;
    this.shadowRoot.getElementById('count').innerHTML = this.count;
  }

  dec() {
    this.count -= 1;
    this.shadowRoot.getElementById('count').innerHTML = this.count;
  }

  render() {
    return html`
      <button @click=${this.dec}>-</button>
      <span id="count">${this.count}</span>
      <button @click=${this.inc}>+</button>
    `;
  }
}
