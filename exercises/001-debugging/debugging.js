const people = [
        { name: 'Wes', cool: true, country: 'Canada' },
        { name: 'Scott', cool: true, country: 'Merica' },
        { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
        console.groupCollapsed(`Los for ${person.name}`);
        console.log(person.country);
        console.log(person.cool);
        console.log('DONE!');
        console.groupEnd(`Los for ${person.name}`);

        console.log(person.name);

        if (person.name === 'Wes') {
                console.error('wrong name');
                console.warn('check name');
                console.table(people); // good for a list of objects
        }
});

function doALotOfStuff() {
        console.group('Doing some stuff');
        console.log('log');
        console.error('error');
        console.warn('warning');
        console.groupEnd('Doing some stuff');
}

// Debugging methods
/**
 * 98% of debugging is done with console.log, breakpoints and network requests
 * the other methods are handy in edge cases
 */

// Console Methods
/**
 * console.log(), console.error(), console.warn(),
 * console.table(), good for a list of objects
 * console.count(), shows how many times something has run
 * console.group() or console.groupCollapsed() with console.groupEnd(), useful for grouping all logs between into a collapsable group
 */

// Callstack or Stack Trace
/**
 * Tells you what function called what function
 * This will be important when going from one file to another
 * e.g. go() calls doctorize() and greet(), which calls doesntExist()
 * doesntExist() will cause an error in console
 * read the callstack in the console to see where the error was
 * error was a greet() on line 72, which was called by go() on line 77, which was called by bootstrap() on line 83
 * Uncaught ReferenceError: doesntExist is not defined
    at greet (debugging.js:72)
    at go (debugging.js:77)
    at bootstrap (debugging.js:83)
    at <anonymous>:1:1
 */

// Grabbing Elements
/**
 * e.g. go to https://developer.mozilla.org/en-US/
 * inspect the search bar in Elements tab
 * switch over to Console and enter $0, this will return the element currently selected in Elements tab
 * a shorthand to access the last element clicked, this is not jQuery
 * you can check $0.value
 * $0 is last element clicked, $1 is second last element clicked, and so on
 * $ and $$ are shorthand selectors for elements
 * e.g. $('p') matches the first <p> element
 * and $$('p') matches all <p> elements, returns array of all <p> elements
 * This shorthand won't work if there is jQuery on the site
 */

// Breakpoints
/**
 * debugger; keyword will pause JS from running only when console is open
 * this adds a breakpoint
 * the Sources tab shows the callstack, variables and their scope
 * and you can step over each line of code from there on
 * or click play to continue running code until you hit the next debugger
 * This is good if console loggging is overwhelming
 * Be sure to remove 'debugger;' from your code, though it only impacts the site if dev tools are open
 * Also, in the Sources tab, navigate to the .js file and click on any line to add a breakpoint
 */

// debugger keyword example
people.forEach((person, index) => {
        //  debugger;
        console.log(`2nd forEach: ${person.name}`);
});

// Scope
/**
 * Scope will let us peer into what variables are
 *
 */

// Network Requests
/**
 * dev tools Network tab
 * shows all the files need to make this site work and requests being sent to different servers
 * in our case debugging.html, base.css, debugging.js, data:image/svg+xml, icanhazdadjoke.com
 * you can see info about the request: raw response (useful when looking at JSON), a preview and time taken (where the time was taken in that request)
 * e.g. for icanhazdadjoke.com request, 600ms used in waiting for the api to return the joke
 * filter by XHR (data being sent out), JS, CSS, Img, Media
 */

// Break On Attribute
/**
 * Another way to add breaks
 * inspect element > in elements tab, right click element > break on > attribute modification (e.g. change font size)
 * (also subtree modification, e.g when something adds a div or something)
 * (also node removal, e.g. when somebody removes an element or text from something)
 * Break On Attribute is not used often, but useful when exploring a random code base
 * Sources tab, Event Listener Breakpoints can be toggled on/off
 * e.g. Event Listener Breakpoint > Mouse > Click
 * Sources tab, XHR breakpoint for anytime a fetch request is made to an external API, it'll break for specified API url or all requests
 */

// Some Setup Code

// callstack trace example
function doctorize(name) {
        console.count(`running doctorize for ${name}`);
        return `Dr. ${name}`;
}

function greet(name) {
        doesntExist(); // will cause an error, observable in stack trace
        return `Hello ${name}`;
}

function go() {
        const name = doctorize(greet('Wes'));
        console.log(name);
}

function bootstrap() {
        console.log(`Starting the app!`);
        go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
        const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
        e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// example for network requests
// A Dad joke fetch
async function fetchDadJoke() {
        const res = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                        Accept: 'text/plain',
                },
        });
        const joke = await res.text();
        console.log(joke);
        return joke;
}
