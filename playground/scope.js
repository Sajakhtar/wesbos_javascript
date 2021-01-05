/// * eslint-disable */

// console.log('it works');

const first = 'wes';
// let second = 'bos';
// var age = 100;

// function sayHi() {
//         console.log('hi!');
// }

const age = 199;

function go() {
        const hair = 'blond';
}

console.log(age);
// console.log(hair); // hair is scoped in function only

function go2() {
        const hair = 'blond';
        console.log(age); // looks for age in scope a level up
        console.log(hair);
}

go2();

function go3() {
        const age = 200;
        const hair = 'blond';
        console.log(age); // takes the age variable scoped locally, but can no longer access the age variable scoped higher up
        console.log(hair);
}

go3();

function go4() {
        const myAge = 200;
        const hair = 'blond';
        console.log(age); // age is accessible again for higher level
        console.log(myAge);
        console.log(hair);
}

go4();

// block scope

if (1 === 1) {
        const cool = false;
        const cool2 = false;
        var cool3 = true;
}

console.log(cool3); // only var variables are accessible outside of the block

let cool;
if (1 === 1) {
        cool = false; // update variable declared outside the block
        const cool2 = false;
        var cool3 = true;
}

console.log(cool);

function isCool(name) {
        let cool; // function scope
        if (name === 'wes') {
                cool = true; // update variable declared outside the block
        }
        console.log(cool);
        return cool;
}

isCool('wes');
isCool('jon');

function isCool2(name) {
        if (name === 'wes') {
                var cool = true; // var is function scoped, can leak outside of if-block
        }
        console.log(cool);
        return cool;
}

isCool2('wes');
isCool2('jon');

const dog = 'snickers';

function logDog() {
        console.log(dog);
}

function goDog() {
        const dog = 'sunny';
        logDog(); // cannot access dog defined wihtin this block, instead gets the dog scoped globally
        // logs 'snickers'
        // this is called lexical scoping or static scoping - the way the scope lookup of a variable happens is based on where the functions are defined, not where the functions are run
        // where logDog() is defined, it doenst have access to the the block scoped snickers
}

goDog();

// fix this by using parameters

function logDog2(dog) {
        console.log(dog);
}

function goDog2() {
        const dog = 'sunny';
        logDog2(dog);
        logDog2('Rufus');
        // logs 'sunny'
}

goDog2();

// Nested functions are scoped the exact same as variables

function sayHello(name) {
        function yell() {
                console.log(name.toUpperCase());
        }
        yell();
}

sayHello('wes');
// yell(); // not accessible
