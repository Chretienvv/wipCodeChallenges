const template = document.createElement('template');
template.innerHTML = `
  <style>
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
  </style>
  <button id="dec">-</button>
  <span id="count"></span>
  <button id="inc">+</button>`;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0; // Default count
    this.attachShadow({ mode: 'open' }); // Create a shadow tree
  }

  connectedCallback() {
    // When the component becomes active on the page, fill the shadow tree
    // with the content from the HTML template, and attach event listeners.
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById('inc').onclick = () => this.inc();
    this.shadowRoot.getElementById('dec').onclick = () => this.dec();
    this.shadowRoot.getElementById('count').innerHTML = 0;
  }

  inc() {
    this.shadowRoot.getElementById('count').innerHTML = ++this.count;
  }

  dec() {
    this.shadowRoot.getElementById('count').innerHTML = --this.count;
  }
}

customElements.define('my-counter', MyCounter);
