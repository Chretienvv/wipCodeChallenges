/**
 * Example of a form where the submit event is caught,
 * the data is automatically parsed to an Object and then
 * sent to an API endpoint.
 */
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { fontHeadingMixin } from './fonts.js';
import { spacing24 } from './spacing.js';

@customElement('arcady-styling')
export class FormsComponent extends LitElement {
  static styles = css`
    h1 {
      ${fontHeadingMixin()};
      margin: ${spacing24} 0;
    }
  `;

  render() {
    return html`
      <h1>This is a <i>very</i> nice header!</h1>
      <p>And this is a complementary paragraph explaining more.</p>
    `;
  }
}
