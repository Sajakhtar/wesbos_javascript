// console.log('it works');

const item = document.querySelector('.item');

console.log(item.innerHTML);

const width = 200;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `ipsum lorem ipsum <img onload="alert('HACKED')" src=https://source.unsplash.com/random/50x50/>`;

const myHTML = `
    <div class='wrapper'>
        <h2>This is a H2 Tag</h2>
        <img src=${src} alt=""/>
        <p>${desc}</p>
    </div> 
    div
`;

// console.log(typeof myHTML); // string
// it's not a node or element, so can't use properties on it
// it only becomes an element when we place it in the DOM
// item.innerHTML = myHTML;

// console.log(item.innerHTML);

// since myHTML has been added to DOM, we can access properties and attributes
// const itemImage = document.querySelector('.wrapper img');

// console.log(itemImage);

// itemImage.classList.add('round');

/**
 * turn a string into a DOM element
 * */

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

console.log(myFragment.querySelector('img')); // will appear in the DOM

document.body.appendChild(myFragment);
