import { PlayGround } from './src/PlayGround.js';
import { MyCounter } from './src/counter_html.js';
import { MyLitCounter } from './src/counter_lit.js';

window.customElements.define('my-counter', MyCounter);
window.customElements.define('play-ground', PlayGround);
window.customElements.define('my-litcounter', MyLitCounter);
