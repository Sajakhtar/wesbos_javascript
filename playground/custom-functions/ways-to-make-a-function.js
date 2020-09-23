/*
Different ways to declare functions
***********************************
JS functions are first class citizens - they are values in themselves, they can be stored in variables and passe
*/

/*
Normal Function
--------------------
our original function from cf.js
*/
// function doctorize(firstName = '') {
//   return `Dr. ${firstName}`;
// }

/*
Anonymous function
--------------------
a function without a name
not valid as standalone
use cases are in Callbacks, if statements
*/
// function(firstName = '') {
//     return `Dr. ${firstName}`;
// }

/*
Function Expression
--------------------
store a anonymous function as a value in a variable
this is not good practice
the difference between a Function Expression and a normal function is in how they operate in HOISTING
can only be called after the variable containing the function is declared
*/
// const doctorize = function (firstName = '') {
//   return `Dr. ${firstName}`;
// };

// this would only work if the doctorize variable is declared beforehand
// console.log(doctorize('jon'));

/*
Functions that are declared with a function keyword (i.e. normal function) are Hoisted
meaning that JS takes all functions and hoists them up to the top of the file
so that anywhere you call the function, it will be available to you.
so technically you can run a function before it is defined
JS does not hoist Function Expressions (variable functions)
*/

/*
Arrow Functions
--------------------
anonymous
concise syntax
useful n callbacks
they don't have their own scope wrt 'this' keyword
they use a fat arrow '=>', not skinny arrow '->'
they don't have a scope for 'this' keyword
they take the parent scope of 'this' keyword
*/

// normal function
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// normal function - just less code
// function inchToCM(inches) {
//   return inches * 2.54;
// }

// anonymous function - just leaner
// const inchToCM = function (inches) {
//   return inches * 2.54;
// };

// arrow function
// const inchToCM = (inches) => {
//     return inches * 2.54;
// };

// arrow function - just less code
// const inchToCM = inches => {
//     return inches * 2.54;
// };

// arrow function - even less code, with implicit return
// no need for parenthesis if there is only one arguement
const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

/*
Arrow functions gotchas
--------------------
returning an object - implicit return of object is problematic as the JS reads the curly brackets as a block of code, not an object
just put parenthesis around the object to contain it
Regular function may be more readable
*/
const makeABaby = (first, last) => ({ name: `${first} ${last}, age: 0` });

/*
IIFE - Immediaely Invoked Function Expression
----------------------------------------------
Wrap anonymous function in parenthesis, then adding parenthesis at the end
*/

(function () {
  console.log('Running Anon Func as IIFE');
  return 'You are cool';
})();

(function (name) {
  console.log('Running Anon Func as IIFE');
  return `You are cool, ${name}`;
})('jon');

/*
Methods
-------
Method is a function that lives inside an object
e.g. console.log()
console is the object, and log() is the function that lives inside that object
 */
const jon = {
  name: 'jon snow',
  sayHi() {
    console.log('Hey Jon');
    return 'hello Jon';
  },
};

console.log(jon.sayHi());

// short hand method - most common
const jim = {
  name: 'jim bob',
  sayHi() {
    console.log('Hey Jim');
    return 'hello Jim';
  },
};

console.log(jim.sayHi());

// arrow func method - only use if you don't want to access 'this' keyword
const jane = {
  name: 'jane doe',
  sayHi: () => 'Hey Jane',
};

console.log(jane.sayHi());

/*
Callback function
------------------
Run something when there is a click or certain time has passed

 */

// click callback
const button = document.querySelector('.clickMe');
// console.log(button);

function handleClick() {
  console.log('greate clicking');
}

// button.addEventListener('click', jon.sayHi);
// button.addEventListener('click', handleClick);

// using anon func
button.addEventListener('click', function () {
  console.log('nice clicking');
});

// timer callback - args are function to run and after how many milliseconds
setTimeout(jon.sayHi, 3000);

// using anon func
setTimeout(function () {
  console.log('time to eat');
}, 3000);

// using arrow func
setTimeout(() => {
  console.log('time to sleep');
}, 4000);
