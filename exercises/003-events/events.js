// console.log('it works');

const butts = document.querySelector('.butts');

// console.log(butts);

// event listener with anonymous callback function
butts.addEventListener('click', function () {
        // do something
        console.log('butts was clicked');
});

const cool = document.querySelector('.cool');

function handleClick() {
        console.log('cool was clicked');
}

// event listener with named callback function
cool.addEventListener('click', handleClick);

// remove event listner for named and arrow callbacks only
cool.removeEventListener('click', handleClick);

const dont = document.querySelector('.dont');

const clicked = () => console.log('WHY???');

dont.addEventListener('click', clicked);

// listen on multiple items

// const buyButtons = document.querySelectorAll('.buy');

// function buyItem() {
//         console.log(`buying item`);
// }

// using anon arrow function
// buyButtons.forEach((buy) => buy.addEventListener('click', buyItem));

// function handleBuyClick(buyButton) {
//         buyButton.addEventListener('click', buyItem);
// }

// using named function
// buyButtons.forEach(handleBuyClick);

/**
 * event objects
 * */

const buyButtons = document.querySelectorAll('.buy');

function buyItem(event) {
        console.log(`you're buying item`);
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.dataset);
        // console.log(event.target.dataset.price);
        // console.log(typeof event.target.dataset.price);
        // console.log(parseFloat(event.target.dataset.price));

        // button = event.target;
        // console.log(button.textContent);

        // console.log(event.currentTarget);
        // console.log(event.currentTarget === event.target);

        // stop this event from bubbling up
        // event.stopPropagation();
}

buyButtons.forEach((buy) => buy.addEventListener('click', buyItem));

// window.addEventListener('click', function (event) {
//         console.log('you clicked the window');
//         console.log(event.currentTarget);
//         console.log(event.target);
// });

/**
 * Event Listener with options object
 * capture, once, passive
 * */

window.addEventListener(
        'click',
        function (e) {
                console.log('you clicked the window');
                console.log(e.currentTarget);
                console.log(e.target);
                console.log(e.type);
                console.log(e.bubbles); // bool true if it's allowed to bubble up
                // e.stopPropagation();
        },
        { capture: true }
);

/**
 *
 */

const photoEl = document.querySelector('.photo');

// photoEl.addEventListener('mousemove', function (e) {
//         console.log(e.currentTarget);
//         console.count(e.currentTarget);
// });

// photoEl.addEventListener('mouseenter', function (e) {
//         console.log(e.currentTarget);
//         console.count(e.currentTarget);
//         console.log(this);
// });

photoEl.addEventListener('mouseenter', (e) => {
        console.log(e.currentTarget);
        console.count(e.currentTarget);
        console.log(this);
});
