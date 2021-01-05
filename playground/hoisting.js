console.log(age); // declaration is hoisted but value is not so it logs 'undefined'
var age = 100;

/* What does this file do */
sayHi(); // this works since the function declaration is hoisting to the top of the file

/* How does this file do it */
function sayHi() {
        console.log('hey');
}
