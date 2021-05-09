// select terms element and listen for scroll on it, since it has css overflow: scroll

const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');
const watch = document.querySelector('.watch');

// Intersection Observer
function obCallback(payload) {
        if (payload[0].intersectionRatio === 1) {
                button.disabled = false;

                // stop observing button
                ob.unobserve(terms.lastElementChild);
        } // else {
        //         button.disabled = true;
        // }
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });
// options object with the root of what we're observing and the threshold of when to observen the element, in this case when it's 100% on screen.
// Alterantivately, we can observe when it's off, halfway on, full on screen with an array [0, 0.5, 1]

// observe element
// ob.observe(watch);

// observe the last element in the terms div to be 100% on screen
ob.observe(terms.lastElementChild);

/**
 * Old method
 * listen for scroll and compare scrollTop and scrollHeight values
 */
// terms.addEventListener('scroll', function (e) {
//         console.log(e.currentTarget.scrollTop);
//         console.log(e.currentTarget.scrollHeight);
// });
