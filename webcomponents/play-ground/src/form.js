import { LitElement, html } from 'lit';

export class forms extends LitElement {


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

    onSubmit(e) {
        // Prevent the default behavior of POSTing the form data
        e.preventDefault();
      
        // Get the form data as FormData and turn it into an Object
        const rawFormData = new FormData(e.target);
        const formData = Object.fromEntries(rawFormData.entries());
        console.log(formData)
      }


}