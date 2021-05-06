/*
Different ways to declare functions
***********************************
JS functions are first class citizens - they are values in themselves, they can be stored in variables and passed into other functions
*/

/*
Normal Function
--------------------
Our original function from cf.js
*/
// function doctorize(firstName = '') {
//   return `Dr. ${firstName}`;
// }

/*
Anonymous function
--------------------
A function without a name
Not valid as standalone
Use cases are in Callbacks, if statements
*/
// function(firstName = '') {
//     return `Dr. ${firstName}`;
// }

/*
Function Expression
--------------------
Store a anonymous function as a value in a variable
This is not good practice
The difference between a Function Expression and a normal function is in how they operate in HOISTING
Can only be called after the variable containing the function is declared
*/
// const doctorize = function (firstName = '') {
//   return `Dr. ${firstName}`;
// };

// this would only work if the doctorize variable is declared beforehand
// console.log(doctorize('jon'));

/*
HOISTING
Functions that are declared with a function keyword (i.e. normal function) are Hoisted
meaning that JS takes all functions and hoists them up to the top of the file
So that anywhere you call the function, it will be available to you.
So technically you can run a function before it is defined
JS does not hoist Function Expressions (variable functions)
*/

/*
Arrow Functions
--------------------
A few nuanced ways to declare them
Anonymous i.e. always needs to be in a variable
Concise syntax
Useful n callbacks
They don't have their own scope wrt 'this' keyword
They use a fat arrow '=>', not skinny arrow '->'
They don't have a scope for 'this' keyword
They take the parent scope of 'this' keyword
*/

// Normal function
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// Normal function - just less code
// function inchToCM(inches) {
//   return inches * 2.54;
// }

// Anonymous function - just leaner
// const inchToCM = function (inches) {
//   return inches * 2.54;
// };

// Arrow function
// => is a fat arrow, -> is a skinny arrow
// const inchToCM = (inches) => {
//     return inches * 2.54;
// };

// Arrow function - just less code
// const inchToCM = inches => {
//     return inches * 2.54;
// };

// Arrow function - even less code, with implicit return
// No need for parenthesis if there is only one arguement
// const inchToCM = inches => inches * 2.54;
const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

/*
Arrow functions gotchas
--------------------
Returning an object - implicit return of object is problematic as the JS reads the curly brackets as a block of code, not an object
Just put parenthesis around the object to contain it
Regular function may be more readable, don't have to use arrow functions for everything
*/
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

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
Console is the object, and log() is the function that lives inside that object
 */

// no need to name function as browser infers the function name from the property name
// const wes = {
//   name: 'wes snow',
//   sayHi: function() {
//     console.log('Hey wes');
//     return 'hello wes';
//   },
// };

// short hand method - most common
const jon = {
        name: 'jon snow',
        sayHi() {
                console.log('Hey Jon');
                return 'hello Jon';
        },
};

console.log(jon.sayHi());

const jim = {
        name: 'jim bob',
        sayHi() {
                console.log('Hey Jim');
                console.log(`Hello Mr. ${this.name}`);
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
// select a button with class clickMe from index.html
const button = document.querySelector('.clickMe');
// console.log(button);

// listen for a click on that button
// button.addEventListener('click', jon.sayHi);

function handleClick() {
        console.log('great clicking');
}

// call the handleClick function when the button is clicked
button.addEventListener('click', handleClick);

// or using anon func
button.addEventListener('click', function () {
        console.log('nice job');
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
