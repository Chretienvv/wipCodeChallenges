/**
 * Example of a form where the submit event is caught,
 * the data is automatically parsed to an Object and then
 * sent to an API endpoint.
 */
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('arcady-forms')
export class FormsComponent extends LitElement {
  static styles = css`
    label {
      display: block;
      margin-top: 15px;
    }
  `;

  onSubmit(e: InputEvent) {
    // Prevent the default behavior of POSTing the form data
    e.preventDefault();

    // Get the form data as FormData and turn it into an Object
    const rawFormData = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(rawFormData.entries());

    // POST the form body somewhere
    fetch('https://api.mywebsite.com/newuser', {
      method: 'POST',
      body: JSON.stringify(formData),
    }).then(console.log);
  }

  render() {
    return html`
      <form name="signupForm" @submit=${this.onSubmit}>
        <label for="email">Email address:</label>
        <input name="email" type="email" />

        <label for="age">Age:</label>
        <input name="age" type="number" />

        <label for="password">Password:</label>
        <input name="password" type="password" />

        <button type="submit">Send</button>
      </form>
    `;
  }
}
