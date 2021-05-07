// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

// wrapper = document.querySelector('.wrapper');
// wrapper.innerHTML = ul;
div.innerHTML = ul;

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://source.unsplash.com/random/';
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'cute puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
    <div>
       <p>paragraph 1 ipsum lorem</p>
       <p>paragraph 2 ipsum lorem</p>
    </div>
`;

const ulElement = document.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
// remove the first paragraph
const p2 = document.querySelector('.wrapper div').children[1];
// console.log(p2);
p2.classList.add('warning');

const div2 = document.querySelector('.wrapper div');
div2.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
        const html = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} tall and ${age} years old. In Dog years this person would be ${
                age * 7
        }. That would be a tall dog!</p>
        <button class="delete" type="button">&times; Delete</button>
        </div>
    `;

        return html;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('wes', 30, 150);
cardsHTML += generatePlayerCard('jim', 25, 152);
cardsHTML += generatePlayerCard('jon', 35, 162);
cardsHTML += generatePlayerCard('jake', 20, 145);
// console.log(cardsHTML);

// append those cards to the div
cards.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

/**
const playerCards = document.querySelectorAll('.playerCard');
console.log(playerCards);
const button = document.createElement('button');
button.classList.add('del');
button.innerText = 'Del';
button.type = 'button';
playerCards.forEach((card) => card.insertAdjacentElement('beforeend', button));
console.log(playerCards);
*/

// select all the buttons!
// make out delete function
// loop over them and attach a listener

// select all the buttons
const buttons = document.querySelectorAll('.delete');
// console.log(buttons);

// delete function
function deleteCard(event) {
        // console.log('delete card to do');
        // console.log(event.currentTarget);
        const clickedButton = event.currentTarget;
        // clickedButton.parentElement.remove(); // not ideal, if the .palyerCard div is not the element it won't work
        clickedButton.closest('.playerCard').remove(); // finds the closest element with desired class, less likely to be dependent on parent child relationship
}
// loop over buttons and attache a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
