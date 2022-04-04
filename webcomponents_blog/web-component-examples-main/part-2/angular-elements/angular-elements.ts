import { Input, Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-counter',
  template: `
    <button (click)="dec()">-</button>
    <span>{{ count }}</span>
    <button (click)="inc()">+</button>
  `,
  styles: [
    `
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
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class MyCounter {
  @Input() count: number = 5;

  constructor(private cd: ChangeDetectorRef) {}

  dec() {
    this.count--;
    this.cd.detectChanges();
  }

  inc() {
    this.count++;
    this.cd.detectChanges();
  }
}
