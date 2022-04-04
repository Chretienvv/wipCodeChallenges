import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Route, RouterMixin } from './8-Routing/RouterMixin.js';

@customElement('arcady-app')
export class ArcadyApp extends RouterMixin(LitElement) {
  protected routes: Route[] = [
    {
      key: 'arcady-helloworld',
      name: 'Hello World!',
      import: () => import('./1-HelloWorld/HelloWorld.js'),
      render: () => html`<arcady-helloworld></arcady-helloworld>`,
    },
    {
      key: 'arcady-databinding',
      name: 'Data Binding',
      import: () => import('./2-DataBinding/DataBinding.js'),
      render: () => html`<arcady-databinding></arcady-databinding>`,
    },
    {
      key: 'arcady-events',
      name: 'Events',
      import: () => import('./3-Events/Events.js'),
      render: () => html`<arcady-events></arcady-events>`,
    },
    {
      key: 'arcady-events2',
      name: 'Events 2',
      import: () => import('./3-Events/Events2.js'),
      render: () => html`<arcady-events2></arcady-events2>`,
    },
    {
      key: 'arcady-forms',
      name: 'Forms',
      import: () => import('./4-Forms/Forms.js'),
      render: () => html`<arcady-forms></arcady-forms>`,
    },
    {
      key: 'arcady-lifecycle',
      name: 'Lifecycle',
      import: () => import('./5-Lifecycle/Lifecycle.js'),
      render: () => html`<arcady-lifecycle></arcady-lifecycle>`,
    },
    {
      key: 'arcady-styling',
      name: 'Styling',
      import: () => import('./6-Styling/Styling.js'),
      render: () => html`<arcady-styling></arcady-styling>`,
    },
    {
      key: 'arcady-slots',
      name: 'Slots',
      import: () => import('./7-Slots/Slots.js'),
      render: () => html`<arcady-slots></arcady-slots>`,
    },
  ];

  static styles = css`
    :host {
      min-height: 100vh;
      padding: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flearcady-start;
      font-size: calc(10px + 0.7vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      background-color: #fff;
    }

    nav {
      margin-bottom: 50px;
    }

    nav > button {
      margin-top: 25px;
      padding: 15px;
      font-family: 'Helvetica Neue', sans-serif;
      font-size: 20px;
      border-radius: 5px;
    }
  `;

  render() {
    return html`
      <nav>
        ${this.routes.map(
          (route: Route) => html`
            <button @click=${() => this.navigateTo(route.key)}>
              ${route.name}
            </button>
          `
        )}
      </nav>

      ${this.renderRoute()}
    `;
  }
}
