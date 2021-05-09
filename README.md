# Wes Bos [Beginner JavaScript](https://beginnerjavascript.com/) Course

## Contents

1. [Chrome Dev Tools](#chrome-dev-tools)
1. [Terminal](#windows-command-prompt-vs.-linux-terminal)
1. [Relative file paths](#relative-file-paths)
1. [Running and loading JS](#running-and-loading-js)
1. [Tooling](#tooling)
1. [Types in JS](#types-in-js)
1. [Functions](#functions)
1. [Debugging](#debugging)
1. [Scope](#scope)
1. [Hoisting](#hoisting)
1. [Closures](#closures)
1. [Document Object Model (DOM)](#document-object-model)
1. [Events](#events)
1. [Serious Practice Exercises](#serious-practice-exercises)
1. [Logic and Flow Control](#logic-and-flow-control)

## Chrome Dev Tools

Shortcut for Console `Ctrl` `Shift` `J`

Shortcut for Inspect Element `Ctrl` `Shift` `I`

## Windows Command Prompt vs. Linux Terminal

Clear: `cls` vs `clear`

List directories: `dir` vs `ls`

## Relative file paths

Same directory: `./file.js`

One directory up: `../file.js`

## Running and loading JS

In command prompt/ terminal via node: `node file.js`

## Tooling

### ESLint

- JS Linter tool
- to indentify/ report on JS issues (bad practices/ design patterns, unused variables/ functions)
- modifiable config - can use someone else's like from [wes bos](https://github.com/wesbos/eslint-config-wesbos)
- best practice to set the cofig locally, but can do globally
- pluggable - many plugins available e.g. for Vue, React, Angular, Prettier

### Prettier

- Formats code
- quite opinionated, only a few settings availabel to toggle

### Node

- `npm init` via terminal for your project folder, in order to create a `package.json` file for depdendencies like ESLint and Prettier
- in terminal run `npx install-peerdeps --dev eslint-config-wesbos` to install wes bos eslint setup
- create new file `.eslintrc` to extend all of the wes bos eslint config by adding the following: `{ "extends": [ "wesbos" ] }`
- install ESLint Package for VS Code
- add [wes bos ESLint settings](https://github.com/wesbos/eslint-config-wesbos) in to the VS Code settings.json

## Types in JS

- SNOB'N'US - 7 types
- check type `typeof varName`
- String
  - using single quotes `'`, double quotes `"` or backticks `
  - interpolation is when you put variables inside a string
    - with double and single quotes you'd have to concatenate string with variables
    - with backticks you can reference variables inside string using `${varName}`
      - can even place a statemnet inside e.g. `${1 + 100}`
      - backticks are good for creating strings of multiline html
- Number
  - there is only one type of number in JS, which covers int and float
  - In console: window.location = \`https://\${0.1+0.2}.com\`;
  - https://0.30000000000000004.com/
  - better to work with whole numbers i.e. cents rather than dollars
  - `Nan`, `infinity` and `-infinity` are numbers in JS
- Object
  - everything in JS is an object, so this is a special case
  - objects are collections of data or functionality
  - they are the building blocks in JS
  - `const myObj = { firstName: "wes", lastName: 'bos'}`
  - order doesn't matter in at object, if you need order then use an array
- Boolean
  - `true` or `false`
  - for equality almost always use triple equals `===`, while double equals `==` is almost always a bad practice
  - triple equals `===` checks for value and type equality
- Null
  - a value of nothing i.e. set to `null`
- Undefined
  - have not yet had a value assigned
- Symbol
  - a way to do unique identifiers in JS

## Functions

Allow us to group together sets of statements.

Functions take in data as arguements and can return a value.

### Arguements vs parameters

- parameters are placeholders
- arguements are the parameter values you pass into a function

### Function vs method

Built-in functions examples

- `Math.round(2.34);`
- `Math.floor(2.34);`
- `Math.ceil(2.34);`
- `Math.random()` between 0 and 1
- `Math.max(10,12)`
- `parseFloat('20.234234')`
- `parseInt('20.234234')`
- `Date.now()` returns number of milliseconds in epoch time (since 1st Jan 1970)
- `document.querySelector('p')`
- `navigator.vibrate(200)`, mobile functions
- `scrollTo(0,600)`
- `scrollTo({top: 500, left: 0, behaviour: 'smooth'})`

DRY - don't repeat your self, keep your code DRY

Custom Functions:

JS functions are first class citizens - they are values in themselves, they can be stored in variables and passed into other functions.

JS Functions can be moved around like any other piece of data, that's not true for other languages.

- **normal functions**
  ```js
  function doctorize(firstName = "") {
    return `Dr. ${firstName}`;
  }
  ```
- **anonymous functions**
  - used in callbacks and IIFE
  - A function without a name
  - Not valid as standalone
  - Use cases are in Callbacks, if statements
  ```js
  function(firstName = '') {
    return `Dr. ${firstName}`;
  }
  ```
- **function expressions**
  - i.e. stored as a variable
  - Store a anonymous function as a value in a variable
  - This is not good practice
  - The difference between a Function Expression and a normal function is in how they operate in HOISTING
  - function expressions Can only be called after the variable containing the function is declared, whereas normal functions can be called before they're declared due to being hoisted up to the top of the code
  ```js
  const doctorize = function (firstName = "") {
    return `Dr. ${firstName}`;
  };
  ```
- **arrow functions**

  - `=>` is a fat arrow, `->` is a skinny arrow
  - arrow functions use a fat arrow
  - they're stored in a variable, so they're not hoisted

  ```js
  const inchToCM = (inches) => {
    return inches * 2.54;
  };

  // with implicit return
  // you can remove the parenthesis for a single parameter
  const inchToCM = (inches) => inches * 2.54;

  const add = (a, b = 3) => a + b;
  ```

  - Returning an object - implicit return of object is problematic as the JS reads the curly brackets as a block of code, not an object
  - Just put parenthesis around the object to contain it
  - Regular function may be more readable, don't have to use arrow functions for everything

  ```js
  const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0 });
  ```

- IIFE - Immediaely Invoked Function Expression

  - Wrap anonymous function in parenthesis, then adding parenthesis at the end to execute it
  - IIFE used to be popular before we had block scope and modules, since IIFE is in parenthesis, it's not prone to variables leaking into or out of it - it's self-contained

  ```js
  (function () {
    console.log("Running Anon Func as IIFE");
    return "You are cool";
  })();

  (function (name) {
    console.log("Running Anon Func as IIFE");
    return `You are cool, ${name}`;
  })("jon");
  ```

- **Parameters & arguments**

  - it's not good for a function to reach outside to fetch variables that are in global scope
  - it's better to create parameters for a fuction to accept data in the form or arguments
  - parameters are the place holders for arguments
  - arguements are the variables/ values/ expressions passed into a function call
  - parameters can have a default value - good practice so that the function doesn't error out
    - the only arguement you can pass into a function to make it fall back to it's default value is `undefined`

  ```js
  function myFunc(param1, param2 = 0.5) {
    // do something
    return; //something
  }

  let x = myFunc(5);
  let y = myFunc(4, 0.6);
  let z = myFunc(1 + 2);
  let g = myFunc(x);
  let j = myFunc(myFunc(5)); // BODMAS
  ```

- **Methods**

  - a function that lives inside an object
  - e.g. console.log()
  - Console is the object, and log() is the function that lives inside that object

  ```js
  // no need to name function as browser infers the function name from the property name
  const wes = {
    name: "wes snow",
    sayHi: function () {
      console.log(this);
      console.log("Hey wes");
      return "hello wes";
    },
  };

  // short hand method - most common
  const jon = {
    name: "jon snow",
    sayHi() {
      console.log(this);
      console.log("Hey Jon");
      return "hello Jon";
    },
  };

  console.log(jon.sayHi());

  // arrow func method - only use if you don't want to access 'this' keyword
  const jane = {
    name: "jane doe",
    sayHi: () => "Hey Jane",
  };

  console.log(jane.sayHi());
  ```

- **callback function**

  - Run something when there is a click or certain time has passed

  ```js
  // select a button with class clickMe from index.html
  const button = document.querySelector(".clickMe");

  function handleClick() {
    console.log("great clicking");
  }

  // call the handleClick function when the button is clicked
  button.addEventListener("click", handleClick);

  // or using anon func
  button.addEventListener("click", function () {
    console.log("nice job");
  });

  // timer callback - args are function to run and after how many milliseconds
  setTimeout(jon.sayHi, 3000);

  // using anon func
  setTimeout(function () {
    console.log("time to eat");
  }, 3000);

  // using arrow func
  setTimeout(() => {
    console.log("time to sleep");
  }, 4000);
  ```

Hoisting - Functions that are declared with a function keyword (i.e. normal function) are Hoisted. Meaning that JS takes all functions and hoists them up to the top of the file. So that anywhere you call the function, it will be available to you. So technically you can run a function before it is defined. JS does not hoist Function Expressions (variable functions)

## Debugging

98% of debugging is done with console.log, breakpoints and network requests, the other methods are handy in edge cases.

### Console Methods

console.log()

console.error(), gives a stack trace

console.warn()

console.table(), good for a list of objects.

console.count(), shows how many times something has run.

console.group() or console.groupCollapsed() with console.groupEnd(), useful for grouping all logs between into a collapsable group.

```js
const people = [
  { name: "Wes", cool: true, country: "Canada" },
  { name: "Scott", cool: true, country: "Merica" },
  { name: "Snickers", cool: false, country: "Dog Country" },
];

people.forEach((person, index) => {
  console.groupCollapsed(`Los for ${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log("DONE!");
  console.groupEnd(`Los for ${person.name}`);

  console.log(person.name);

  if (person.name === "Wes") {
    console.error("wrong name");
    console.warn("check name");
    console.table(people); // good for a list of objects
  }
});

function doALotOfStuff() {
  console.group("Doing some stuff");
  console.log("log");
  console.error("error");
  console.warn("warning");
  console.groupEnd("Doing some stuff");
}
```

### Callstack or stack trace

Tells you what function called what function.

This will be important when going from one file to another.
e.g. Reference `playground/001-debugging/debugging.js`

- `go()` calls `doctorize()` and `greet()`, which calls `doesntExist()`

- doesntExist() will cause an error in console
- read the callstack in the console to see where the error was
- error was a `greet()` on line 72, which was called by go() on line 77, which was called by bootstrap() on line 83
- > Uncaught ReferenceError: doesntExist is not defined:
  >
  > > at greet (debugging.js:72)
  > >
  > > at go (debugging.js:77)
  > >
  > > at bootstrap (debugging.js:83)
  > >
  > > at <anonymous>:1:1

### Grabbing Elements

e.g. go to https://developer.mozilla.org/en-US/

Inspect the search bar in Elements tab.

Switch over to Console and enter `$0`, this will return the element currently selected in Elements tab.

A shorthand to access the last element clicked, this is not jQuery

- you can check `$0.value`
- `$0` is last element clicked, `$1` is second last element clicked, and so on
- `$` and `$$` are shorthand selectors for elements
- e.g. `$('p')` matches the first `<p>` element
- and `$$('p')` matches all `<p>` elements, returns array of all `<p>` elements
- This shorthand won't work if there is jQuery on the site

### Breakpoints

`debugger;` keyword in your script.js file will pause JS from running only when console is open.

This adds a breakpoint.

The Sources tab shows the callstack, variables and their scope;

And you can step over each line of code from there on;

Or click play to continue running code until you hit the next debugger;

This is good if console loggging is overwhelming, as `debugger;` allows us to slow things down and step through the code, see the variables and scope at each step.

Be sure to remove `debugger;` from your code, though it only impacts the site if dev tools are open;

Also, in the Dev Tools Sources tab, navigate to the .js file and click on any line to add a breakpoint.

### Scope

Scope will let us peer into what variables are.

### Network Requests

Dev tools Network tab.

Shows all the files need to make this site work and requests being sent to different servers.

In our case debugging.html, base.css, debugging.js, data:image/svg+xml, icanhazdadjoke.com.

You can see info about the request: raw response (useful when looking at JSON), a preview and time taken (where the time was taken in that request).

e.g. for icanhazdadjoke.com request, 600ms used in waiting for the api to return the joke

Filter by XHR (data being sent out), JS, CSS, Img, Media

### Break on Attribute

Another way to add breaks.

Inspect element > in elements tab, right click element > break on > attribute modification (e.g. when something changes the font size).

(also subtree modification, e.g when something adds a div or something).

(also node removal, e.g. when somebody removes an element or text from something).

Break On Attribute is not used often, but useful when exploring a random code base.

Sources tab, Event Listener Breakpoints can be toggled on/off.

e.g. Event Listener Breakpoint > Mouse > Click.

Sources tab, XHR breakpoint for anytime a fetch request is made to an external API, it'll break for specified API url or all requests.

## Scope

Scope answers the question 'where are my variables and functions available to me?'

### Global scope

- anytime you declare a variable that will be available anywhere else you're running JS in your app (console, html file, JS file)
- Everything that is attached to global scope is inside the `window` object
  - functions and `var` variables are attached to `window` while `let` and `const` variables are not, thought they can be still globally scoped
  - you shouldn't be making global variables, a recipe for a headache

### Function scope

- when variables are created inside a function, those variables are onnly available within that function
- you can explicitly return a value from the function and put it in it's own variable
- consider curley brackets `{ ... }` as fences, that don't leak out variables
- however, functions can access variables scope a level or more higher - called scope lookup
- you can name variables the same if they're not in the same scope, however, it's not a good idea to do so as you can no longer access a varible of the same name that is scoped higher up, since it's been shadowed (overwritten) locally within the function

### Block scope

- a block is defined by curly brackets `{...}` e.g.in if statements and for loops
- `let` and `const` variables are not accessible outside the block
- `var` variables are accessible outside the block i.e. they leak outside and can cause bugs, so better to use `let` and `const`
- better to declare the variable outside of the block and update it within the block
- `var` variables are however function scoped, i.e. they don't leak out of the function, instead they must be returned

### Variable best practices

Try not to create global variables (anyway, it's practically impossible when working with JS modules unless you explicitly attach it to `window`).

Global variables lead to bugs down the road where you accidentally overlap variables.

use `const` by default, `let` if you need to reassign it, and `var` only in a very specific use case

- `let` and `const` are block scoped
- `var` is function scoped

Variables should be names using camelCase.
Variables should not be names with Proper case or UpperCamelCase, unless they are a class.
Variables can be named using snake_case, but kebab-case is not.

Variables can start with underscore `_` or dollar `$`.

- `$` is synonymous with jQuery library
- `_` is synonymous with lodash library

Lexical scoping or static scoping - the way the scope lookup of a variable happens is based on where the functions are defined, not where the functions are run.

Nested functions are scoped the exact same as variables i.e. the nested function is scoped to the parent function.

## Hoisting

Hoisting allows you to access functions and variables befor they have been created.
2 things in JS that are hoisted (1) function declarations and (2) variable declarations.

### Function hoisting

- Javascript compiler takes all of the function declarations and hoists them to to the top of the file so they're all available to use below, so you can technically run a function before it's been declared
- only works for regular functions, not function expressions or arrow functions
- Good practice to define all the functions first, or place in a separate module
- shouldnt rely on hoisting

### Variable hoisting

- Javascript hoists the variable declarations but not the values set
- i.e. before JS runs it brings the variable names to the top, but not the values, so the variables exist but as undefined

## Closures

One of the scariest things in JS and comes up in interview quesions.

Closures is the ability to access parent level scope from a child level scope, even after the parent function has been terminated/closed over.

A closure is where you call the inner function at a later point in time, rether than in the parent function.

### Use case: functions inside functions

- Javascript is able to create a function inside of functions and it can still reach out to the parent scope and even though the outer function is done running, it'll still maintain the parent variables in memory so that we can access them later
- when the inner scope references a variable that was created in the outer scope, this is referred to as a closure i.e we're still able to access variables from the outer scope, even after the outer scope function has been 'closed over' i.e. it's not garbage collected

### Use case: to create private variables

- so the you can maintain a version of that variable for each instance of the outer function
- Example
  - a parent game() function with a parent score variable,
  - and an inner function to increment the score
  - we can create multiple instances of game(), where each instance will keep track of it's own score variable value, as if score is it's own private variable

Closure is the ability of an inner/ child function to access the variables from a higher level scope, even after the outer/ parent functions have been called/ closed over.

## Document Object Model

a.k.a. the **DOM**.

This is what you see in the Elements panel of the Dev tools on any website.

The Elements panel is not just the HTML, it the DOM, with which we can interface using JS e.g.

- listen for clicks, scrolls
- add/ remove/ modify elements (text, images, ...) on that webpage
- add/ remove classes to elements that can trigger CSS animations
- fetch new data, play music or video
- can add any type of interaction to the page

Core concepts of the DOM, such as events, elements and classes, transend the frameworks (React, Vue, Angular) even if the frameworks help take care of these concepts - It's still worth learning about the DOM

Global Scope of the browser is called the **Window** object where all of the global variables are stored and helpful properties e.g. in the console:

- window.location or location
- window.innerWidth or innerWidth
- Think of the Window object as everything about the currently open window including browser bar, tabs, scrollbar

The **Document** object is responsible for everything from the opening HTML to the closing HTML tag.

The **Navigator** object is at a higher level than the window that give info about browser and device (webcam, audio access, battery level, GPD Co-ords, ...).

### DOM: Selecting Elements

In index.html, best to place the JS `<script>` tag right before the closing body, else the JS is downloaded and run before it can observe the DOM. There are ways to get around that using `async` and `defer`. Placing the `<script>` tag right before the closing body ensures that the html is download before the JS, so that the JS has access to the DOM.

Ways around that issue is to create a `function init() {...}` and below the function add `document.addEventListener('DOMContentLoaded', init)`.

Before interaction with elements on page, you first need to select the element, then you can listen for clicks, change content, add content, remove it.
Two main ways to select elements, `document.querySelector()` which gives one elements and `document.querySelectorAll()` gives all elements in a NodeList, like an array without the built-in method like `.map()`, `.filter()`, `.reduce()` - good interview questions.

- you can run `querySelector()` on any other element selected already selected to select it's children i.e. `mySelectedElement.querySelector('.item')`

Before `.querySelector()` and `.querySelectorAll()` were introduced, you'd have to be more specific.

- `document.getElementById`, `document.getElementsByClassName`, `document.getElementsByName`, `document.getElementsByTagName`, `document.getElementsByTagNameNS`
- `.querySelector()` and `.querySelectorAll()` are much more flexible

### DOM: Element Properties and Methods

When selecting an element using `.querySelector()` and `.querySelectorAll()`. what's returned is an object with properties and methods.

`console.dir(element);` will show the list of properties available.

We can get values of the properties or we can set the values of the properties.

`element.textContent` is newer than `element.innerText`, `textContent` returns every element in the node, including hidden elements/ tags, while `innerText` is aware of CSS styling.

We have properties for `innerHTML` and `outerHTML` which we can get and set.

THere are methods for inserting stuff into the HTML

- `insertAdjacentElement()`
- `insertAdjacentHTML()`
- `insertAdjacentText('beforeend', 'some text')` - there is also `afterbegin`, `beforebegin` and more

This is the best way to add text or elements to a HTML element.

A node can be anything e.g. a HTML tag or just a string, but an element is only a HTML tag.

Some properties e.g. `textContent` exist on nodes, while some only exist on elements.

The Mozilla Web Docs have a list of properties at a [node](https://developer.mozilla.org/en-US/docs/Web/API/Node) level and [element](https://developer.mozilla.org/en-US/docs/Web/API/Element) level.

### DOM: Working with Classes

A commone thing to do with JS is the adding and removing of classes of elements.

`element.classList` returns a DOMTokenList, which is a list of all classes on that element.

THe prototype `__prot__` in the console lists the methods we can apply.

`element.className` returns the classes as a string, without no methods to use on it, so `element.classList`is more useful.

For `classList` we have popular methods:

- `classList.add()`
- `classList.remove()`
- `classList.toggle()` add the class if it's not there and removes it if it is already there
- `classList.contains('someClass')` returns a boolean, useful to check if a class is in place or not

Alot of JS interaction with adding/ removing/ toggling CSS to elements, that will allow us to do transitions - typical for modals and navigations that need to slide.

### DOM: Built-in and Custom Data Attributes

Attributes are anything that's provided to an element as additional information

- classes
- id
- src
- alt

Gett, set and check attributed using the following methods

- `element.getAttribute('alt')`
- `pic.setAttribute('alt', 'a scenic view')`
- `element.hasAttribute('alt')`

You can also set non-standard attributes, but you shouldn't go making your own attributed willy nilly, in case the HTML standard wants to create that attribute as a standard one in the future, then you're left with legacy code that will clash.

For custom attributes, it's best to use data attributes i.e. `data-something="something"`.

Data attributes allow you to attach meta data to elements.

You can access data attributes using the `element.dataset` property. This gives an objects of all the data attributes assigned to that element, and the associated properties available.

You can add an event listener to an element, to listen for a click for instance, then do something with the data attributes.

For example, when a thumbnail `img` element is clicked you could open up a larger version, where the larger version file path is in a data attribute.

### DOM: Creating HTML

The main way to create HTML is using the `document.createElement(tagName [, optionalOptions])` method.

Example:

```js
const myImage = document.createElement("img");

myImage.src = "https://source.unsplash.com/random/300x300";
myImage.alt = "nice photo";
```

HTML can then be added to the DOM using `.appendChild()` method, where the HTML is appended to node to be specified.

Append to the body once, so that we only cause a reflow/repaint of the page once.

You can append elements adjacent to another element using `insertAdjacentElement('afterbegin', heading);` method.

Other useful methods of creating and appending elements

```js
const myList = document.createElement("ul");
const myListItem = document.createElement("li");
myListItem.textContent = "one";
myList.appendChild(myListItem);

const myListIitems = ["one", "two", "three", "four", "five"];

for (i in myListIitems) {
  const myListItem = document.createElement("li");
  myListItem.textContent = myListIitems[i];
  myList.appendChild(myListItem);
}

// document.body.appendChild(myList);
document.body.insertAdjacentElement("afterbegin", myList);

const li6 = document.createElement("li");
li6.textContent = "six";
myList.append(li6);

const li7 = li6.cloneNode();
li7.textContent = "seven";
// myList.insertAdjacentElement('beforeend', li7);
li6.insertAdjacentElement("afterend", li7);
```

### DOM: HTML from Strings and XSS

This method is preferable, though there is a security caveat related to cross site scripting (XSS).

The `innterHTML` property provide the html inside an elemt as a string, but it can also be used as a setter and set it equal to a string with backticks.

The benefit of using backticks, is that we can use multiple lines and interpolate values easily.

```js
const item = document.querySelector(".item");

console.log(item.innerHTML);

const src = "https://source.unsplash.com/random/300x300";

const myHTML = `
    <div class='wrapper'>
        <h2>This is a H2 Tag</h2>
        <img src=${src} alt=""/>
    </div> 
    div
`;

item.innerHTML = myHTML;
```

This is how templating works in any framework (reach, vue, svelte) - you set your inner html template with variable placeholders.

The string only becomes an element when we place it in the DOM by setting the `innerHTML`. Only then can you access the properties and attributes of the the elements e.g. classList

The way around this is to use the `createRange()`method.

A range is a collection of elements of a part of HTML that we can work with.

`document.createRange().createContextualFragment(myHTML)` converts a string into true elements that we can work with, before the elements have been actually added to the DOM. This means we can use methods such as `appendChild()`.

```js
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

console.log(myFragment.querySelector("img"));

document.body.appendChild(myFragment);
```

Security and sanitization

Cross Site Scripting (XSS) is where people inject scripts tags where the browser will run that script tag, where someone can do anything they want like drain a bank account.

For example, if a bank site had a user input of `What's your name: ___`, than a hacker could enter a script tag `<script>...</script>` with malicious code to drain the back account.

Anytime you allow a third party to run JS on your page, that is a huge security risk.

You can scrub your HTML of any security vunerabilities before dumping it in the DOM.

### DOM: Traversing and Removing Nodes

We often have to select elements based on their position and so we need to traverse the DOM to select the right elements.

There are lots of different properties that revolve around node and element that allow us to traverse.

Everything in HTML is a node, and if it's wrapped in a tag then it is an element.

Properties of elements include:

- `.children`
- `.firstElementChild`
- `.lastElementChild`
- `.previousElementSibling`
- `.nextElementSibling`
- `.parentElement`

These can be daisy chained to traverse the DOM.

Try this in the console after inspecting an elelemtn: `$0.parentElement.parentElement.nextElementSibling.children[1]`.

This approach would not be practical to select elements, as the traverse will be ruined if another element is added in to the DOM, so you'r have to update the traverse path.

Best to use `querySelector` to select elements.

In most cases you would want to select elemetns, but we can select nodes as well.

Properties of nodes include:

- `.childNodes`
- `.firstChild`
- `.lastchild`
- `.previousSibling`
- `.nextSibling`
- `.parentNode`

There is a `.remove()`method in every single element in every single node that allows us to remove something from the DOM. We still have access to the removed element in memory, in case we want to add it back in.

### DOM: Cardio

See `/exercises/002-dom/DOM-cardio.js`.

## Events

### Events: Event Listener

DOM elements emit events, when they're clicked/ hovered / dragged or generally interacted with.

We can use event listeners to listen for when these events happen and do something.

We can attach event listeners to all elements as well as the document and window.

In order to listen for events, you first need to select the element then add the event listener method `element.addEventListener('click', myFunc)`.

`addEventListener` takes 2 arguments usually.

1. what type of event do you want to listen to e.g. click, hover
2. callback function - this is just a regular function

- can use an anonymous function within `addEventListener`
- but named function can be used in more than one event listner, so it more flexible and more inline with DRY

Unbind an event listener by using `element.removeEventListener('click', myFunc)`. To remove an event listener you must have reference to the original function, and this is easier with a named function rather than anonymous function. Even if you place the same anonymous function inside `removeEventListener` the removal/ unbinding still won't work, as it's not the same anon func declared in `addEventListener`, rather it's a new declaration of that anon function.You must use a named function or an arrow function stored in a variable.

Creating custom events is handy in case you want to emit a buy event or a success event.

Listening for events on multuple items is a common scenario .e.g. multiples of the same type button or image. Here we can use `querySelectorAll()` to select all the items we want to attach the event listener to.`querySelectorAll()` returns a node list. Apply the `forEach()` method with an arrow function to apply the event listener to each node within the node list. `forEach()` can take in an anon function or anon arrow function or a name functioned defined elsewere.

```js
// console.log('it works');

const butts = document.querySelector(".butts");

console.log(butts);

// event listener with anonymous callback function
butts.addEventListener("click", function () {
  // do something
  console.log("butts was clicked");
});

const cool = document.querySelector(".cool");

function handleClick() {
  console.log("cool was clicked");
}

// event listener with named callback function
cool.addEventListener("click", handleClick);

// remove event listner for named and arrow callbacks only
cool.removeEventListener("click", handleClick);

const dont = document.querySelector(".dont");

const clicked = () => console.log("WHY???");

dont.addEventListener("click", clicked);

// listen on multiple items

const buyButtons = document.querySelectorAll(".buy");

function buyItem() {
  console.log(`buying item`);
}

// using anon arrow function
// buyButtons.forEach((buy) => buy.addEventListener('click', buyItem));

function handleBuyClick(buyButton) {
  buyButton.addEventListener("click", buyItem);
}

// using named function
buyButtons.forEach(handleBuyClick);
```

### Events: Event Objects - targets, bubbling, propagation and capture

The event object contains useful information about the element that's been interacted with, i.e. what happened in the event, and methods for working with the event.

To access the event object, we pass in the event param into the event listner callback function.

```js
const buyButtons = document.querySelectorAll(".buy");

function buyItem(event) {
  console.log(`you're buying item`);
  console.log(event);
  console.log(event.target);
  console.log(event.target.dataset);
  console.log(event.target.dataset.price);
  console.log(typeof event.target.dataset.price);
  console.log(parseFloat(event.target.dataset.price));

  button = event.target;
  console.log(button.textContent);
}

buyButtons.forEach((buy) => buy.addEventListener("click", buyItem));
```

The event object has methods such as

- `isTrusted` - would be false if you fake a click
- `pressure` - useful for touchscreen devices, smartphones and tablets
- `target` - shows the element being interacted with
  - this is useful if we add `data-` attributes to the elemtents which can be access to through `target.dataset`
- `currnetTarget` - this is the same as `target`, but the difference comes when you have elements nested inside of the element you're listening to then
  - `event.target` is the thing that actually got clicked which could be a nested element within the element being listened to
  - `event.currentTarget`is the element that fired the event listener
  - So in most cases, you'd want to reach for `event.currentTarget` instead of `event.target`
  - this is what is referred to as propogation, where the event bubble up to where the listner is e.g. placing an event listner on the window to listen for clicks - if you click anywhere in the window, say on a h2 tag, that means you've also click on the window since the h2 live in the body which live in the window, so the callback function will execute
  ```js
  window.addEventListener("click", function (event) {
    console.log("you clicked the window");
    console.log(event.currentTarget);
    console.log(event.target);
  });
  ```
  - we can stop the event from propogating up by using `event.stopPropagation()` in the callback function.

captue is the opposite of propagation - when you click a button you're actually clicking the window -> document -> html -> body -> ... -> button. The capture phase is the cascading through DOM nodes from top to bottom until you reach the element that you clicked. The bubbling phase is the the propagation back up the node tree to where the listener event was.

[w2.org](https://www.w3.org/TR/2009/WD-DOM-Level-3-Events-20090908/) has a good diagram of the capture and bubbling phases.

When listening for clicks or any event, we can listen during the capture phase too - we can listen for a click on the window and stop it going any further. This what the the 3rd arguement to `addEventListener`is for - here we pass an `options` object specifying `capture`, `once`, `passive` criteria

- setting `capture:true` means that the order in which the `console.log` fire goes top down (capture) rather than the bottom up (bubblup)
- we can use `event.stopPropagation();` to stop the event propagating down i.e. stopping at the `window` in the example below, such that the `buyItem()` callback will never actually be run

```js
const buyButtons = document.querySelectorAll(".buy");

function buyItem(event) {
  console.log(`you're buying item`);
}

buyButtons.forEach((buy) => buy.addEventListener("click", buyItem));

window.addEventListener(
  "click",
  function (event) {
    console.log("you clicked the window");
    // event.stopPropagation();
  },
  console.log(event.target);
  { capture: true }
);
```

`capture` is not a common thing to use - probably more of an interview question about how events work.

Comomonly you'd listen for events on lower level elements and stop propagation to elements higher up that are also listening for events e.g. clicks, to then not also trigger their own callback.

It's commone to call the `event` param `e`.

```js
window.addEventListener(
  "click",
  function (e) {
    console.log("you clicked the window");
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.type);
    console.log(e.bubbles); // bool true if it's allowed to bubble up
    // e.stopPropagation();
  },
  { capture: true }
);
```

`this` as a special word in JavaScript. In a callback function, if you want to reference the element that the event was called against, `this` keyword would surface that for us.

`this` keyword is always going to be equal to whatever is to the left of the .method in the example below that would be `photoEl`

```js
const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", function (e) {
  console.log(e.currentTarget);
  console.count(e.currentTarget);
  console.log(this);
});
```

`this` won't work in an arrow function. Sometimes we have nested functions that we don't want to change what th `this` keyword is scoped to, so we can get around that using arrow functions.

For this reason, it's not recommmended to use `this` in event listener callback functions, instead use `e.currentTarget` or `e.target` instead.

### Events: Prevent Default and Form Events

There are some html elements that have default functionality when clicked or used.We can prevent the default action by using the `e.preventDefault()` method.

```js
const wes = document.querySelector(".wes");

wes.addEventListener("click", function (e) {
  console.log(e);

  const shoudChangePage = confirm(
    "This website might be malicious, do you wish to proceed"
  );

  console.log(shoudChangePage);

  if (!shoudChangePage) {
    e.preventDefault();
  }
});
```

Another common element with a default is form submission.

The best way to grab a form is to give it a `name`, rather than a `class`.

We may want to do some extended validation before the for is submitted.

```js
signupForm.addEventListener("submit", function (e) {
  // console.log(e);
  // e.preventDefault();
  console.dir(e.currentTarget);

  // we can do the following dot notation since the htmls form elements all have a name attribute
  // this save you from using e.currentTarget.querySelector('[name="email"]'
  console.log(e.currentTarget.name.value);
  console.log(e.currentTarget.email.value);
  console.log(e.currentTarget.agree.checked);

  const name = e.currentTarget.name.value;

  if (name.includes("Chad")) {
    alert("sorry bro");
    e.preventDefault();
  }
});
```

Other types of events with for inputs

- `focus`whe an form field is clicked into
- `keydown`when a key is pressed
- `keyup` when a key is released
- `blur`when a form field is exited, either by clicking out or tabbing

These are the most common events we'll use.

`keydown` would be good for validating if certain characters no acceptable for a form field.

```js
function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent);
signupForm.name.addEventListener("blur", logEvent);
```

### Events: Accessibility Gotchas and Keyboard Codes

Accessibility is about keeping websites accesible to anyone that might want to use it no matter what disability they have or input device they have.

HTML by itself, when marked up correctly is very accessible, but JavaScript can goof it up.

**Pitfalls:**

Difference between buttons and links

- buttons are to be used for actions that happen inside of an applicaiton
- links are used to change the page, a link that does not go anywhere is not a link
- do not mix those up

Valid use case for preventing default of a link click is if the user is required to be logged-in, in which case you prevent the default and and present the login popup/ screen.

Things that are not keyboard accessible should not have clicks registered on them unless you need to.

For example photos cannot be clicked by tabbing through the keyboard, a mouse is required, while form fields can be tabbed through via keyboard.

Yet there is a valid reason for a photo to be clicks, e.g a thumbnail that expands into a bigger picture.

The solution is to give the picture a `role="button"` and `tabindex="0"`attributes in the html, so people can tab to it.

For some reason some people use a `<div>` as a button, you must add `role="button"`and `tabindex="0"` to it.

It's better just to use `<button>` and place an `<img/>` inside, so that you get the default accessibility behaviour without having to add more attributes.

`e.key` will give us the key that triggered the event e.g. tab, enter, ...

[keycode.info](http://keycode.info/) has all the meta data about keyboard keys.

```js
const photo = document.querySelector(".photo");

function handlePhotoClick(e) {
  if (e.type === "click" || e.key === "Enter") {
    console.log("photo clicked");
  }
}

photo.addEventListener("click", handlePhotoClick);
photo.addEventListener("keyup", handlePhotoClick); // listen for Enter keyup
```

## Serious Practice Exercises

### Etch-A-Sketch

[see live ]()

Etch-A-Sketch game that allows you to draw on a white board on screen using mouse movements, and shake button to reset the board.

Also includes canvas in HTML and JS; and JS switch statements.

We grab the canvas, then grab the context, either 2D or 3D. In this case we work with 2D. Then we have a set of method for drawing on the canvas like with Microsoft Paint. The canvas is the element and the context is where the drawing occurs.

HSL values are a way to change the color in the browsher - see [mothereffinghsl](https://mothereffinghsl.com/). To change color whent he curser moves, just increment the h-value by one.

See `exercises/004-etch-a-sketch/`

### Click Outside Modal

[see live ]()

This example shows how to close a modal popup once a user presses the escape key or clicks outside of the popup.

Checking to see if the user has clicked outside an element, which is tough to do, but necessary to close a popup.

### Scroll Events and Intersection Observer

[see live ]()

Use case is T&Cs scroll to accept within an element on page or popup. here we want to display the accept button only when the user scrolls to the bottom of the terms.

Here we use intersection observer to see if something is currently viewable on page. Intersection observer will observer whether somehting is on or off or partway on/off of a page.

```js
const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });
// options object with the root of what we're observing and the threshold of when to observen the element, in this case when it's 100% on screen.
// Alterantivately, we can observe when it's off, halfway on, full on screen with an array [0, 0.5, 1]
```

The `isIntersecting` property boolean tells us if the element is on the page or off the page.

The `intersectionRatio` ratio property tells us how much on the page the element is.

We can use the `intersectionRatio` to tell is if we've scroll all the way to the bottom of the element.

### Tabs

[see live ]()

This exercise demonstrates clickable tabs to hide and show content. The tabs will be accessible via the keyboard tab key as well, using aria labels in the html tab elements. This is proper markup that is good for accessibility and SEO crawler readability.

`aria-selected` attribute in the html will maintain which tab is currently selected.

The tab panel div have a `hidden` attribute that we can toggle on/ off for the selected tab.

The default state is to show the first tab and first tab panel only.

## Logic and Flow Control

### BEDMAS

Order of operations in which JS runs

- **B**rackets, parenthesis
- **E**xponents
- **D**ivision
- **M**ultiplication
- **A**ddition
- **S**ubtraction

### Flow Control - If statements, Function Returns, Truthy, Falsy

If statements are the foundations of all logic in JS.
They accept a boolean or a statement that evaluates to `true` or `false`.

```js
const age = 51;
if (age > 70) {
  console.log("In your 70s");
} else if (age > 60) {
  console.log("In your 60s");
} else if (age > 50) {
  console.log("In your 50s");
} else {
  console.log("Nothing was true");
}
```

An if else statement will finish and break as soon as condition is met, i.e. true, such that subsequent `else if` will not run.

So, if you want to check for multiple conditions, don't use if-else, use separate if statements; or use 1 if statement with multiple conditions.

When you have an if statement inside a function, you can always `return` in side that if statement and if the if statement resolves to true, the return would end the function.

**Conditional Operators:**

- `===` checks for value and type, almost always use this
- `==` checks for value
  - why `==` exists? because of `null` and `undefined`
  - `null == undefined` resolves to `true`
  - you can use this to check if a variable is `null` or `undefined`
- `!==` check for 'not equal to' in value and type
- `!=` check for 'not equal to' in value
- `>`, `<`, `<=`and `>=` only ever deal with numbers, so no need to check for type, only value
- `<`
- `||` OR
- `&&` AND

```js
if (name === "scott" || (name === "wes" && last === "bos")) {
  console.log("good use of BEDMAS");
}
```

- `true && true` is true
- `true && false` is false
- `false && false` is false
- `true || true` is true
- `true || false` is true
- `false || false` is false

Built in function `.includes()` returns a boolean that can be used inside if statement conditions.

**Truthy and Falsy**

If statement will also take a value that is truthy or falsy.

If statement will take a condition and try to coerce it to a boolean of true or false.

Truthy values:

- all numbers, even negative number, except zero
- full string, even a string of zero `"0"` or space `" "`
- `{}` empty object - here we're checking if it's there or not
- `[]` empty array - - here we're checking if it's there or not

Falsy Values:

- `0`
- `''` empty string
- `undefined`
- `null`
- `Nan`
