import { init } from './init.js';

// start the app
// init();

// select the app
const app = document.querySelector('.app');

// init on mousenter, rather than page load
app.addEventListener('mouseenter', init, { once: true });
