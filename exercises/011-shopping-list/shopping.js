// console.log('it works');

/**
 * listen for typing into input box and hits Add Item submit button
 * keep track of shopping list items and whether or not they are complete
 * render out the list of items on page
 */

// get items we need
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we nee dan array to hold our state
let items = [];

// callback for submit and setting state
function handleSubmit(e) {
        e.preventDefault();
        // console.log('submitted');
        // console.log(e.currentTarget);
        const name = e.currentTarget.item.value;
        // console.log(name);

        // if it's empty then dont submit
        if (!name) return;

        // when collecting a list of items, good to have an id for easy lookup. ID should be something unique, good to use current timestamp in milliseconds
        const item = {
                name,
                id: Date.now(),
                complete: false,
        };

        // push item into our state
        items.push(item);
        // console.log(`there are now ${items.length} in your state`);
        // console.log(items);

        // clear the form inputs
        e.target.reset();

        // display items - we'll refactor this later as we want to display items from local storage when page refreshes and when items are deleted the list should rerender - this will all be done through custom events
        // displayItems();

        // fire custom event that will tell anyone that cares, that the items have been updated - using dispatch event method
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// display items function
// use aria-attribute for delete button for accessiblity i.e. screenreading ability
function displayItems() {
        const html = items
                .map(
                        (item) => `<li class="shopping-item">
        <input value="${item.id}" type="checkbox" ${item.complete && 'checked'}>
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
        </li>`
                )
                .join('');
        // console.log(html);
        list.innerHTML = html;
}

// mirror list data to local storage
function mirrorToLocalStorage() {
        // console.info('saving items to local storage');

        // Local storage is text onplay, so can't save objects so use JSON
        localStorage.setItem('items', JSON.stringify(items));
}

// on page reload restore items from local storage
function restoreFromLocalStorage() {
        // console.log('restoring items');

        // pull items from local storage
        const lsItems = JSON.parse(localStorage.getItem('items'));
        // console.log(lsItems);

        if (lsItems.length) {
                // spread local storage items into items list
                items.push(...lsItems);
                // dispatch itemsUpdated events to trigger the event listes for displaying items and mirroring local storage
                list.dispatchEvent(new CustomEvent('itemsUpdated'));
        }
}

// deleting items from list
function deleteItem(id) {
        // console.log('deleting item');
        // console.log('deleting item', id);
        // delete item with the ID from items array
        // const newItems = items.filter((item) => item.id !== id);
        // console.log(newItems);
        items = items.filter((item) => item.id !== id);
        // console.log(items);

        // dispatch itemsUpdated events to trigger the event listes for displaying items and mirroring local storage
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// marking items are complete (checked)
function markAsComplete(id) {
        // console.log('marking complete', id);

        // find ID in items array
        const itemRef = items.find((item) => item.id === id);
        // console.log(itemRef.complete);
        // set to opposite
        itemRef.complete = !itemRef.complete;
        // console.log(itemRef.complete);

        // dispatch itemsUpdated events to trigger the event listes for displaying items and mirroring local storage
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

// Event Listeners

// Best practice to listen for submit event rather than click
shoppingForm.addEventListener('submit', handleSubmit);

// listen for itemsUpdated custom event to run displayItems callback
list.addEventListener('itemsUpdated', displayItems);

// listen for itemsUpdated custom event to add items to local storage
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// listen for clicks on list
// Event delegation - instead of listening for clicks on things that may not exist yet and will come in the future, we listen to clicks on a parent item, the UL, then delegate the event to the delete button
list.addEventListener('click', function (e) {
        // console.log(e.target, e.currentTarget);

        const id = parseInt(e.target.value);

        // delegate event to delete button
        if (e.target.matches('button')) {
                deleteItem(id);
        }

        // delegate event to checkbox
        if (e.target.matches('input[type="checkbox"]')) {
                markAsComplete(id);
        }
});

// run on page reload restore items from local storage
restoreFromLocalStorage();

// doesnt work for new items added, as listener is not attached to future items
// const buttons = list.querySelectorAll('button');
// console.log(buttons);
// buttons.forEach((button) => button.addEventListener('click', deleteItem));
