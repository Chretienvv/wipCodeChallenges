import { PlayGround } from './src/PlayGround.js';
import { MyCounter } from './src/counter_html.js';
import { MyLitCounter } from './src/counter_lit.js';
import { HelloWorld } from './src/world_lit.js';
import { EventsChild } from './src/event_child.js'
import {EventsParent} from './src/event_parent.js'
import {forms} from './src/form.js'
import {slot } from './src/slot_testing.js'
window.customElements.define('my-counter', MyCounter);
window.customElements.define('play-ground', PlayGround);
window.customElements.define('my-litcounter', MyLitCounter);
window.customElements.define('sog-helloworld', HelloWorld);
window.customElements.define('events-child', EventsChild)
window.customElements.define('events-parent', EventsParent)
window.customElements.define('forms-test', forms)
window.customElements.define('slot-test', slot)