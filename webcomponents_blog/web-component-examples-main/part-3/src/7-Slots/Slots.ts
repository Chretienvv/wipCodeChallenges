/**
 * Example of how to project content onto component slots.
 */
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('arcady-slots')
export class SlotsComponent extends LitElement {
  static styles = css`
    arcady-card {
      margin-bottom: 30px;
    }
  `;

  render() {
    return html`
      <arcady-card>
        <h1 slot="title">Clickbaity title</h1>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          augue vel diam facilisis gravida. Aliquam lobortis quam orci, sit amet
          finibus elit porta vitae. Integer in ultricies enim. In hac habitasse
          platea dictumst. Mauris eu nulla non justo facilisis commodo in id
          nunc. Morbi imperdiet at metus ullamcorper suscipit. Nulla congue
          sapien a nulla facilisis iaculis.
        </p>
      </arcady-card>

      <arcady-card>
        <h1 slot="title">World says "hello" back</h1>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          augue vel diam facilisis gravida. Aliquam lobortis quam orci, sit amet
          finibus elit porta vitae. Integer in ultricies enim. In hac habitasse
          platea dictumst. Mauris eu nulla non justo facilisis commodo in id
          nunc. Morbi imperdiet at metus ullamcorper suscipit. Nulla congue
          sapien a nulla facilisis iaculis.
        </p>
        <a href="...">Click here to learn more</a>
      </arcady-card>
    `;
  }
}

@customElement('arcady-card')
export class CardComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: white;
      padding: 15px;
      border-radius: 15px;
      box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.4);
    }

    ::slotted(h1) {
      margin: 15px 0 0 0;
      font-family: cursive;
    }

    ::slotted(a) {
      display: block;
      padding-top: 15px;
      margin-top: 15px;
      border-top: 1px solid #e4e4e4;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      color: crimson;
    }
    ::slotted(a)::after {
      margin-left: 10px;
      content: '>';
    }
  `;

  render() {
    return html`
      <slot name="title"></slot>
      <slot name="content"></slot>
      <!-- Any additional content will be rendered in here -->
      <slot></slot>
    `;
  }
}
