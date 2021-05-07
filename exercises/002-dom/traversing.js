// console.log('it works');

// const wes = document.querySelector('.wes');

// console.log(wes);

// console.log(wes.children); // HTML collection of just <em> tag
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);

// console.log(wes.childNodes); // Nodd list of [text, <em>, text].

/**
 * Removing elements
 */

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p);
// we still have access to the element in memory, in case we want to add it back in
p.textContent = "i'm back";
document.body.appendChild(p);
