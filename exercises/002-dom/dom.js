// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const item = document.querySelectorAll('.item'); // class of item
// const divItem = document.querySelectorAll('div.item'); // div of specifical class
// const parentChild = document.querySelectorAll('.item img'); // parent child

// const { doc } = require('prettier');

// const item2 = document.querySelector('.item2');
// const img2 = item2.querySelector('img'); // Run query selector on any other element selected

// const byId = document.getElementById('wes'); // by ID using specific selector
// const byId2 = document.querySelector('#wes'); // by ID

// console.log(p);
// console.log(divs);
// console.log(item);
// console.log(divItem);
// console.log(parentChild);
// console.log(item2);
// console.log(img2);
// console.log(byId);
// console.log(byId2);

// const heading = document.querySelector('h2');
// console.log(heading);
// console.log(typeof heading); // object
// console.dir(heading); // lists properties

// console.log(heading.textContent); // get property value
// console.log(heading.innerText);
// // heading.textContent = 'wes is cool'; // set property value
// console.log(heading.textContent);
// console.log(heading.innerText);

// console.log(heading.innerHTML);

// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// console.log(pizzaList.textContent);

// pizzaList.insertAdjacentText('beforeend', '🍕');
// console.log(pizzaList.textContent);

/**
 *  Working with Classes
 */
const pic = document.querySelector('.nice');
console.log(pic.classList);

pic.classList.add('open');
pic.classList.remove('cool');
// pic.classList.add('round');
// pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
        pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

console.log(pic.className);

/**
 * Attributes
 */

pic.alt = 'some image'; // setter
console.log(pic.alt); // getter
// pic.width = 300;
// pic.height = 100;

console.log(pic.naturalWidth); // returns 0, as we need to wait for the image to download first

// best use an event listener for when the window is loaded
window.addEventListener('load', function () {
        console.log(pic.naturalWidth);
});

console.log(pic.getAttribute('alt'));

pic.setAttribute('alt', 'a scenic view');

console.log(pic.getAttribute('alt'));

console.log(pic.hasAttribute('alt'));

/**
 * Custom Attributes using data attributes
 */

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function () {
        alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
