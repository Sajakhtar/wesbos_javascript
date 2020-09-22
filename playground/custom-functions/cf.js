console.log(`it works`);

// Function to calculate bill

// function definition
function calculateBill(billAmount, taxRate = 0.1, tipRate = 0.15) {
  // paremeters are placeholder in function
  // parameters can have default values so that function still runs if not arguements is passed in when running

  // function body
  console.log(`running calculateBill`);
  // const total = 100 * 1.05;
  const total = billAmount * (1 + taxRate + tipRate);
  // total is a temp variable scoped inside the function block only
  // console.log(total);
  return total;
}

// function call/ run
calculateBill();

// capture returned value of function into a variable
const myTotal = calculateBill(100, 0.05); // arguements are what are passed in when running a function
console.log(`Your total is ${myTotal}`);

// run funciton directly in backtick string
console.log(`Your total is ${calculateBill(120, 0.05)}`);
console.log(`Your total is ${calculateBill(120)}`);

// other variables can be used as arguements
const jonBill = 250;
const jonTax = 0.08;
const jonTotal = calculateBill(jonBill, jonTax);

console.log(`Jon's total is ${jonTotal}`);

// passing expressions to a function
console.log(`Your total is ${calculateBill(20 + 20 + 150 + 10)}`);
console.log(`Your total is ${calculateBill(20 + 20 + 150 + 10, 0.07)}`);

// using default taxRate but not tipRate by using udefined
console.log(`Your total is ${calculateBill(200, undefined, 0.2)}`);

// it's fine to use the same parameter names in different functions as parameter scope is restricted to the function

// another function
function doctorize(name = '') {
  return `Dr. ${name}`;
}

// another function
function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}

// calling a function within a function
const shout = yell(doctorize('jon'));

console.log(shout);

// good practice to add defaults to parameters, even if its an empty string (or nothing of that type), so that the function can still run
