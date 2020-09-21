/* eslint-disable */

// TYPES

// STRINGS


console.log('it works');

// 3 ways to create strings in JS
// single quote, double quote, backtick
// Wes is thinking to use backticks only as it has benefits for variable interpolation, concatenation, escaping, line breaks, tag template literal


const name = 'jon';
const middle = "g";
const last = `snow`;

// escaping characters using backslash
const setence = 'she\'s so cool'

// With backticks, no need to escape characters, unless you want a backtick in your string
const setence2 = `she's so "cool"`

// multi-line string (but shows as single line in console)
const multi = 'Oh yea \
\
I \
like \
\
\
pizza';


// multi-line string with backticks maintains line breaks in console
// Helpful when creating html
const multi2 = `Oh yea 

I 
like 


pizza`;


// Interpolation (variable inside string) and concatenation is better with backticks

const hello = "hello, my name is " + name + ". Nice to meet you";

const hello2 = `hello, my name is ${name}. Nice to meet you`;


const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello2}</p>
    </div>
`;

document.body.innerHTML = html;


// NUMBERS

// there is only one type of number in JS, which covers int and float

const age = 100.5;

// check type
console.log(typeof age);

const a = 10;
const b = 20;

// math operations available
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b); // modulo


// mixing types
console.log(1 + '1'); // concatenates number into string
console.log(typeof (1 + '1'));
// the plus sign is 'loaded'

console.log('10' * '10'); // it'll convert to number to complete the math
// works with division, subtraction but not addition

// Math helper methods
Math.round(2.34);
Math.floor(2.34);
Math.ceil(2.34);
Math.random() // between 0 and 1
console.log(Math.round(2.34));
console.log(Math.random() );



const smarties = 20;
const kids = 3;
const eachkidgets = Math.floor(smarties / kids);
const leftOver = smarties % kids;
console.log(`each kid gets ${eachkidgets} smarties and ${leftOver} smarties remain`);


// FLoating point math
// In console: window.location = `https://${0.1+0.2}.com`;
// https://0.30000000000000004.com/
// since 0.1 + 0.2 = 0.30000000000000004
// better to work with whole numbers i.e. cents rather than dollars
console.log(0.1 + 0.2);

// infinity
console.log(1000 ** 100000); // returns infinity
console.log(typeof Infinity); // positive and negative infinity are true numbers in JS
console.log(typeof -Infinity) ;

console.log(10 / 'dog'); // returns NaN
console.log(typeof (10 / 'dog')); // NaN is a true number in JS


// OBJECTS

// everything in JS is an object
// Objects are used for collections of data and functionality
// order doesn't matter in an object, but does in an array
const person = {
    first: 'jon',
    last: 'snow',
    age: 100
};


console.log(typeof person)
console.log(person.first)
console.log(person['first'])


// UNDEFINED and NULL

// these are 2 ways to express nothing in JS

let dog;

console.log(dog);
// returns undefined
console.log(person.pet);

// undefined = variable that has yet to be defined or object whose property doesn't exist
// with undefined, the value has yet to be assgined

// Null has to be explicitly set
const somethingNull = null;
console.log(somethingNull);


// BOOLEANS and EQUALITY

// boolean is true of false
// used for logic such as if statements
// can be manually set of calculated

// a flag variable
let isDrawing = false;


const personAge = 18;

const ofAge = personAge > 19
console.log(ofAge)

// = is used for setting a variable
// == equality, checks value only
// === equality, but checks value and type
// almost always use ===, almost always bad practice to use ==

console.log(10 == 10) // true
console.log('10' == '10') // true
console.log(10 == '10') // true
console.log(10 === 10) // true
console.log('10' === '10') // true
console.log(10 === '10') // false
