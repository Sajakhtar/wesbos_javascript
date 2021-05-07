// console.log('it works');

/**
 * Creating HTML
 */
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragraph';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

/**
 * Adding HTML to the DOM
 */

// appending myDiv to the body
// document.body.appendChild(myDiv);
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

// better to append in reverse order, first append elements to the the div
// then the div to the body

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// adding elements adjacent to another element

const heading = document.createElement('h2');
heading.textContent = 'Adjacent heading';

// myDiv.appendChild(heading);

myDiv.insertAdjacentElement('afterbegin', heading);

/**
 * Exercise Create Unordered list with 5 elements
 */

const myList = document.createElement('ul');
const myListItem = document.createElement('li');
myListItem.textContent = 'one';
myList.appendChild(myListItem);

const myListIitems = ['two', 'three', 'four', 'five'];

// for (let i = 0; i < myListIitems.length; i++) {
//         const myListItem = document.createElement('li');
//         myListItem.textContent = myListIitems[i];
//         myList.appendChild(myListItem);
// }

for (i in myListIitems) {
        const myListItem = document.createElement('li');
        myListItem.textContent = myListIitems[i];
        myList.appendChild(myListItem);
}

// document.body.appendChild(myList);
document.body.insertAdjacentElement('afterbegin', myList);

const li6 = document.createElement('li');
li6.textContent = 'six';
myList.append(li6);

const li7 = li6.cloneNode();
li7.textContent = 'seven';
// myList.insertAdjacentElement('beforeend', li7);
li6.insertAdjacentElement('afterend', li7);
