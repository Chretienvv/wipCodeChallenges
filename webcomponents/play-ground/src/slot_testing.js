import { LitElement, html } from 'lit';

export class slot extends LitElement {


    render() {
        return html`
      <slot name="title"></slot>
    <slot name="content"></slot>
    <!-- Any additional content will be rendered in here -->
    <slot></slot>
  `;
    }


}