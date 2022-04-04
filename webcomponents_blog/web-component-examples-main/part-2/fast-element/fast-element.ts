import { html, css, customElement, observable, FASTElement } from '@microsoft/fast-element';

const template = html<MyCounter>`
  <button @click="${(x) => x.changeCount(x.count - 1)}">-</button>
  <span>${(x) => x.count}</span>
  <button @click="${(x) => x.changeCount(x.count + 1)}">+</button>
`;

const styles = css`
  * {
    font-size: 200%;
  }

  span {
    width: 4rem;
    display: inline-block;
    text-align: center;
  }

  button {
    width: 64px;
    height: 64px;
    border: none;
    border-radius: 10px;
    background-color: seagreen;
    color: white;
  }
`;

@customElement({
  name: 'my-counter',
  template,
  styles,
})
export class MyCounter extends FASTElement {
  @observable count: number = 0;

  changeCount(newCount: number) {
    this.count = newCount;
  }
}
