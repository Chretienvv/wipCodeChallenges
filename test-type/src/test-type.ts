import { EventsParent } from './parent_test.js';
import { EventsChild } from './child_test.js';

window.customElements.define('events-parent', EventsParent);
window.customElements.define('events-child', EventsChild);
