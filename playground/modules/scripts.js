// console.log('it works');

// named imports
import { returnHi as sayHi, last, middle, title } from './utils.js';

// importing a default export
// import nameMeAnything from './wes.js';

// import everything
import * as everything from './wes.js';

import { handleButtonClick } from './handlers.js';

// const name = 'wes';

// console.log(returnHi(name));

// console.log(sayHi(name));

// console.log(last);

// console.log(middle);

// console.log(title);

// console.log(nameMeAnything); // works

// console.log(everything); // like an object
// console.log(everything.dog);
// console.log(everything.food);
// console.log(everything.eat());

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
