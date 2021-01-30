const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
const item = document.querySelectorAll('.item'); // class of item
const divItem = document.querySelectorAll('div.item'); // div of specifical class
const parentChild = document.querySelectorAll('.item img'); // parent child

const item2 = document.querySelector('.item2');
const img2 = item2.querySelector('img'); // Run query selector on any other element selected

const byId = document.getElementById('wes'); // by ID
const byId2 = document.querySelector('#wes'); // by ID

console.log(p);
console.log(divs);
console.log(item);
console.log(divItem);
console.log(parentChild);
console.log(item2);
console.log(img2);
console.log(byId);
console.log(byId2);
