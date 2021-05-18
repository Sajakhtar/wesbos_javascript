import { fromSelect, toSelect } from './elements.js';
import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';

// code to run on page load
export function init() {
        const form = document.querySelector('.app form');

        const optionsHTML = generateOptions(currencies);
        // console.log(optionsHTML);

        // populate the options elements
        fromSelect.innerHTML = optionsHTML;
        toSelect.innerHTML = optionsHTML;

        // Listen for input for a form, to cover all inputs in that form
        form.addEventListener('input', handleInput);
}
