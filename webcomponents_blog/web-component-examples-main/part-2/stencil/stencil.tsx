import { h, Component, State, Host } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styles: `
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
  `,
  shadow: true,
})
export class MyCounter {
  @State() count: number = 0;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return (
      <Host>
        <button onClick={this.dec.bind(this)}>-</button>
        <span>{this.count}</span>
        <button onClick={this.inc.bind(this)}>+</button>
      </Host>
    );
  }
}
