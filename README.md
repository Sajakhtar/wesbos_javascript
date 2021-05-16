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
1. [Data Types](#data-types)
1. [Looping and Iterating](#looping-and-iterating)
1. [Harder Practice Exercises](#harder-practice-exercises)
1. [Prototypes, this, new and Inheritance](#prototypes-this-new-and-Inheritance)
1. [Advanced Flow Control](#advanced-flow-control)
1. [Ajax and Fetching Data](#ajax-and-fetching-data)
1. [ES Modules and Structuring Larger Apps](#es-modules-and-structuring-larger-apps)
1. [Final Round of Exercises](#final-round-of-exercises)

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

### Coercion, Ternaries and Conditional Abuse

**Coercion**

Bang operator `!` flips the bool.

```js
cont bool = true

if(bool) {
  // true
}

if(!bool) {
  // if not true i.e. if false
}
```

Also, bang operator coerces items of a different type into a real boolean.

```js
const person = "wes";

console.log(person); // string
console.log(!person); // false
console.log(!!person); // true
```

All truthy and falsy values can be coerced into real booleans by putting `!!` in front of it and `!` will give the opposite of what they are.

If you understand truthy and falsy, it's possible that you won't need to use coercion.

**Ternaries**

Shorthand if-statement.

Helpful when you want to quickly assign functionality based on something being true or false.

Ternary needs 3 things:

- a condition
- what do to if condition is true
- what do to if condition is false

```js
const word = count === 1 ? "item" : "items";

const setence2 = `you have ${count} item${count === 1 ? "" : "s"} in your cart`;
```

Ternary can be used to run a function if a condition is true, or do nothing if a condition is false.

```js
function showAdminBar() {
  // someting
  console.log("showing admin bar");
}

const isAdmin = true;

isAdmin ? showAdminBar() : null;
```

When we have multiiple Conditional statements chained with &&, they will short circuit i.e. as soon as one of the coniditions is false, the other conditions will not run.

So, there is an && trick that quicker than the ternary operator

```js
isAdmin && showAdminBar();
// isAdmin needs to tbe true for the rest of the statement to execut
// i.e. for the function to run
```

This is seen in React JS alot, since it's abit difficult to do if statement in React JS.

If statements on a single line don't need the `{...}` block, but curly brackets make it more readable.

```js
if (isAdmin) showAdminBar();
```

### Case Switch and Animating a Turtle with CSS Variables

Find the turtle example in `/playground/switch-statements.html`

```js
switch (e.key) {
  case "ArrowUp":
    y -= 1;
    rotate = -90;
    break;
  case "ArrowDown":
    y += 1;
    rotate = 90;
    break;

  case "ArrowLeft":
    x -= 1;
    rotate = 0;
    flipped = true;
    break;
  case "ArrowRight":
    x += 1;
    rotate = 0;
    flipped = false;
    break;
  default:
    console.log("not a valid move");
    break;
}
```

### Intervals and Timers

Use `setTimeout()` if you want to run something after 5 seconds.

- takes 2 arguments
- a callback function
- number of milliseconds after which to run the callback function

Use `setInterval()` if you want to run something every 5 seconds.

- takes 2 arguments
- a callback function
- number of milliseconds after which to run the callback function

These are globally available `window.` methods.

The only gothca is that `setInterval` method doesn't run immediately, so you need a custom function work around.

```js
function buzzer() {
  console.log("sound the alarm");
}
setTimeout(buzzer, 1000);
setInterval(buzzer, 1000);

// to have callback func run immediately and every 2 seconds after
function setImmediateInterval(funcToRun, ms) {
  // call function right away
  funcToRun();
  // run regular interval
  return setInterval(funcToRun, ms);
}

setImmediateInterval(buzzer, 2000);
```

To clear and timer or interval, you need to have stored it in a variable first.

```js
// stop the timer
const myTimer = setTimeout(destroy, 5000);
clearTimeout(myTimer);

// stop the timer
const myInterval = setInterval(buzzer, 1000);
clearInterval(myInterval);
```

## Data Types

### Objects

Everything in JS is an object.

Objects allow us to group together keys (properties) and values.

They have many uses from storing related data, functionality, custom types.

Objects are used for where the order of the properties doesn't matter.

Never rely on the order of properties that you put in the object to be maintained the same way.

```js
// object literal syntax
const person = {
  name: "wes",
  age: 30,
};
```

Values can be of any type.

If the property (key) has the same name as the value:

```js
const age = 100;
const person = {
  name: "wes",
  age,
};
```

You can't have variables with a `-`, but you can have properties with `-`:

```js
const age = 100;
const person = {
  name: "wes",
  age,
  `cool-dude`: true,
  'really cool': false,
};
```

Good practice to place a trailing comma `,` after the last property-vale pair

Objects can be nested:

```js
const person = {
  name: "wes",
  age,
  clothing: {
    shirts: 10,
    pants: 2,
  },
};
```

Adding a new property after the object has been created is possibe:

```js
person.job = "Web Dev";
```

And you can overwrite properties be reassigning.

`const`does not mean that a value of proporty in an object can't be changed, but it means the binding to that object cannot be changed i.e. the object that's been declared as a `const` cannot be overwritten entirely.

Immutable object i.e. if you want to freeze the values in an object:

```js
// creates a copy of the object,for which property values cannot be changed
const personFrozen = Object.freeze(person);
```

Access object properties via dot notation or square brackets:

```js
person.age;
person["age"];
person["really cool"];
const lookUpProperty = "age";
person[lookUpProperty];

person.clothing.shirts;
person["clothing"]["shirts"];
```

Square bracket notation is useful if the property you're after is stored in a variable, or if the property key contains special characters/ spaces.

To check is properties exist, use optional chaining `?.`.

Instead of causing an error if a property is not there, the expression short-circuits with a return value of undefined.

```js
person?.clothing?.pants;
```

To remove an property from an object:

```js
delete person.job;
```

A method is a function that lives inside an object.
NOte that Arrow functions don't have access to `this` keyword.

```js
const age = 100;
const person = {
  name: "wes",
  age,
  "cool-dude": true,
  "really cool": false,
  clothing: {
    shirts: 10,
    pants: 2,
  },
  sayHello(greeting = "Hey") {
    return `${greeting} ${this.name}`;
  },
};
console.log(person.sayHello());
```

### Objet Reference vs Values

When comparing values, `===` checks that the value and type match, which is fine for variables such as numbers and string. BUT when comparing objects, it is done by reference to the object itself, not the values inside of them.

One object is not the same as another object, even if their contents are the same.

```js
const p1 = {
  first: "wes",
  last: "bos",
  clothing: {
    shirts: 10,
    pants: 2,
  },
};

const p2 = {
  first: "wes",
  last: "bos",
};

console.log(p1 === p2); // false
```

Setting a new variable equal to an existing object, doesnt make a new copy, rather it references the underlying object.
This means any changes to the new object would reflect in the underlying object and vice versa.

```js
const p3 = p1;
console.log(p3);
p3.first = "jon";
console.log(p3.first); // jon
console.log(p1.first); // jon

p1.first = "jim";
console.log(p1.first); // jim
console.log(p3.first); // jim
```

When objects (and arrays, maps, sets) are created by reference, they simply point to the original underlying object (or array, map, set), instead of making a copy of it.

There are a couple of ways to copy an object

- easiest is via spread operator `...` that takes every single item in an object and spreads it into the new object
- another way is to use `Object.assign()`.

However, this copying only goes one level deep - anything from level 2 onwards is a reference, not a copy

So, spread `...` and `Object.assign()` only do shallow copies.

```js
// copy object using spread
const p4 = { ...p1 };

p4.first = "jimbob";
console.log(p4.first); // jimbob
console.log(p1.first); // jim

p4.clothing.pants = 100;
console.log(p4.clothing.pants); // 100
console.log(p1.clothing.pants); // 100

// object assign
const p5 = Object.assign({}, p1);
```

There are a number of ways to do a deep copy of an object e.g. via a utility library such as [Lodash](https://lodash.com/).

We can load lodash using the [UNPKG](https://unpkg.com/) url in a script tag above your other JS script tags.

```html
<script src="https://unpkg.com/lodash@4.17.21/lodash.js"></script>
```

Lodash methods are available using `_.`.

```js
const p5 = _.cloneDeep(p1);
p5.clothing.pants = 1;
console.log(p5.clothing.pants); // 1
console.log(p1.clothing.pants); // 100 too
```

Spread `...` can be used to merge objects. Note that if there are duplicates, the last one will win.

```js
const meatInventory = {
  bacon: 2,
  sausage: 3,
  oyster: 10,
};

const veggieInventory = {
  lettuce: 5,
  tomatoes: 3,
  oyster: 15, // wins
};

const inventory = {
  ...meatInventory,
  ...veggieInventory,
  carrots: 10,
};
```

The reference vs copy situation also applies to functions when passing in objects:

```js
const name1 = "wes";
function doStuff(data) {
  data = "something else";
  console.log(data); // no reference issues
}

doStuff(name1);
console.log(name1);

function doStuff2(data) {
  data.tomatoes = 10000;
  console.log(data);
}

doStuff2(inventory);
console.log(inventory); // reference issue, tomatoes added to underlying object
```

This is a huge source of bugs and something to be aware of when modifying and object within a function, as it will modify the underlying object outside of the function.
Therefore use Lodash to make a deep copy.

### Maps

Maps are similar to objects, with some key differences.

Create via `new Map()` and modify via `set(key, val)`, `has()`, `delete()` methods.

One benefit of a Map is that the keys can be of any type, rather than variable name, and of course, values can be of any type too.
With an object, you can only put any type within the value portion, not the key.

Maps are useful for dictionaries.

To check the size of a Map: `myMap.size`.

Any time you create and Object, stop to think if we could use a Map instead.

With a Map, order is guaranteed, which is not true for Objects.

When to use a Map if you need to maintain the order of your items

You can pass items into the Map, but there is not Map literal, it has to be created using `Map()`.

Passing items into a Map using an array of arrays:
`new Map(['name', 'wes'],['age'. 100])`

To delete items in a map `myMap.delete(field)`.

In an Object you can places functions inside, such that they become Methods. You can't do this with a Map. Maps are only to store data.

Every time you want to share Object server-2-server, you first need to convert it into text format using JSON i.e. `JSON.stringify(myObject)`. This can be reveresed, from a string to an object, using `JSON.parse('{"name":"wes", "age":100}')`

JSON = JavaScript Object Notation, thought it's become universal between all langauges.

Currently JSON doesn't not handle Maps, though this might change with JSON v5.

TO send a Map, first convert to an Object, then to JSON.
Converting Map to Object `Object.fromEntries(myMap)`, but it's not perfect.

Objects are used more frequently, but Maps will catch on.

```js
const myMap = new Map();
console.log(myMap);

myMap.set("name", "wes");
console.log(myMap);

// Map key can be any type
myMap.set(100, "this is a number");
console.log(myMap);

const person1 = {
  name: "wes",
  age: 200,
};

// Maps are useful as dictionaries
// key can be a reference to an object, in case we want to store additional information
myMap.set(person1, "Really Cool");
console.log(myMap);
console.log(person1);

// lookup dictionary
console.log(myMap.get(person1));

const score = 200;
const prizes = new Map();
prizes.set(100, "Teddy bear");
prizes.set(200, "Giant bear");
prizes.set(300, "$50 voucher");
// here we look up the number to see the prize
console.log(`you win a ${prizes.get(score)}`);

// see the size of a map
console.log(myMap.size);

// Order is guaranteed with Map
// select ul
const ul = document.querySelector(".prizes");
prizes.forEach((entry) => {
  console.log(entry);
});

// for of method
for (const prize of prizes) {
  console.log(prize); // array of [key, value]
  console.log(prize[0], prize[1]);
}

// for of method with destructuring
for (const [points, prize] of prizes) {
  console.log(points, prize);
  const li = `<li>${points} points gets a ${prize}</li>`;

  ul.insertAdjacentHTML("beforeend", li);
}
```

### Arrays

Arrays holds a list of items where the order matters.

Each thing inside an array is called an item, and it's position is an index. Array has no keys.

The number inside an array is called a length.

Each item inside an array can be of any type.

Arrays are still JS objects, they have methods that can be called upon them.

To check if something is an array: `Array.isArray(myArr)`

Arrays are zero-index and you access items by referencing the index.

```js
const names = ["wes", "jon", "snickers"];
console.log(names);
console.log(names.length);
console.log(typeof names); // object
console.log(Array.isArray(names)); // true
console.log(names[2]);
console.log(names[names.length - 1]); // last item
```

There are many array methods.

_Mutable methods_ perform mutations i.e. they change the original array.

_Immutable methods_ don't change the original array, but return a new array.

```js
// Mutable Method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const backwards = numbers.reverse();
console.log(numbers); // also reversed
console.log(backwards);

// Immutable Method
const sliced = numbers.slice(2, 4);
console.log(numbers); // unaffected
console.log(sliced);
```

Any time you want to use a mutation method and NOT mutate the original array, make a copy of the original array using the spread operator, then apply the mutable method.

```js
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversed = [...numbers2].reverse();
console.log(reversed);
console.log(numbers2); // unaffected
```

Most methods are immutable, there are just a couple of gotchas.

React developers have a mantra to not mutate the original array, instead create a copy to be the modified version.

The most basic thing we'd want to do to an array is add items to it - done via `.push()` and `.unshift()` methods, though this does mutate the original array.

```js
// add items to end of array
const names2 = ["wes", "jon", "snickers", "jimbob"];
names2.push("jane");
console.log(names2);

// workaround for mutablity
const names3 = [...names2, "john"];
console.log(names3);
// this is done in React to take a copy and update state, rather than push items into state

// add items to start of array
names2.unshift("joe");
console.log(names2);

// workaround for mutablity
const names4 = ["bob", ...names2];
console.log(names4);
```

Two methods that you will forever mess up are `slice()` and `splice()`. Both used for grabbing a subset of the array

- `slice(start, end)` is immutable, returns a shallow copy
- `splice(start, #items)` is mutable, takes items out of original array

More often that not, we would want to use `slice`, as it does not mutate the original array.

Adding and removing items from the middle of an array:

```js
// adding items to the middle
const bikes = ["bianchi", "miele", "panasonic", "miyata"];
const newBikes = [...bikes.slice(0, 2), "specialized", ...bikes.slice(2)];
console.log(newBikes);

// removing items
const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)];
console.log(newBikes2);
```

Common to use index to find the item to remove - common in React and Angular.

Using `findIndex()` to remove an item:

```js
// Find index of an item
const jonIndex = names2.findIndex((name) => name === "jon");
console.log(names2);
console.log(jonIndex);
console.log(names2[jonIndex]);

const namesWithoutJon = [
  ...names2.slice(0, jonIndex),
  ...names2.slice(jonIndex + 1),
];
console.log(namesWithoutJon);
```

Same again but with an array of objects:

```js
const comments = [
  { text: "Cool Beans", id: 123 },
  { text: "Love this", id: 133 },
  { text: "Neato", id: 233 },
  { text: "good bikes", id: 333 },
  { text: "so good", id: 433 },
];

console.log(comments);

function deleteComment(id, comments) {
  // find index of ID
  const commentIndex = comments.findIndex((comment) => comment.id === id);
  // make new array without that item
  // return new array
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1),
  ];
}
```

### Array Cardio - Static Methods

There are `array.methods()` and `array.prototype.methods()`

- `array.methods()` are static methods that are utility methods called by `Array.method()`, but not on an array that you created.
- `array.prototype.methods()` are instance, or prototypal, methods that are available for every array that is created and called on your array `myArray.method()`

`Array.of()` creates an array from it's arguments, but typically you would just create an array literal.

```js
Array.of("wes", "jim", "bob", "jon");

[..."wes"]; // ['w', 'e', 's']
Array.of(..."wes"); // ['w', 'e', 's']
```

`Array.from()` will take an iterable, something with length, and returns an array with that many empty slots. It also takes a second arguement, a map function to decide what to put into those slots.

```js
Array.from({ length: 10 });

// An array of 1-9 using the index
const range = Array.from({ length: 10 }, function (_item, _index) {
  return _index;
});

console.log(range);

function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function (
    _item,
    _index
  ) {
    return _index + start;
  });
  return range;
}

const myRange = createRange(3, 7);
console.log(myRange);

// Array.isArray() static method
console.log(Array.isArray(myRange));
```

Object static methods - Creating arrays from Objects properties (keys), values and entries

```js
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

console.log(Object.entries(meats)); // [[key1, val1], [key2, val2], ...]
console.log(Object.keys(meats)); // [key1, key2, ...]
console.log(Object.values(meats)); // [val1, val2, ...]

Object.values(meats).forEach((qty) => {
  console.log(qty);
});

// looping through the Object arrays
Object.entries(meats).forEach((entry) => {
  console.log(entry);
  // const meat = entry[0];
  // const qty = entry[1];
  const [meat, qty] = entry; // destructuring
  console.log(meat, qty);
});

// destructuring even further
Object.entries(meats).forEach(([meat, qty]) => {
  console.log("destructured", meat, qty);
});

Object.keys(meats).forEach((meat) => {
  console.log(meat);
});

Object.values(meats).forEach((qty) => {
  console.log(qty);
});
```

### Array Cardio - Instance Methods

Here we run through the most common methods.

Join items in an array into a comma separated string using `myArr.join()` or pass in any delimitere e.g. `myArr.join(' or ')`.

Convert string into an array, default it split by comma, `'hot dogs,hamburgers,sausages,corn'.split()`, but can use a delimiter e.g. `console.log('hot dogs,hamburgers,sausages,corn'.split(' '))`.

Splitting on nothing would place each character as an item in the array e.g `console.log('hello'.split(''))`.

Removing the last item of array using pop method i.e. `myArr.pop()` and adding to the end of an array via push i.e. `myArr.push('something')`.

Remove the first item of an array using shift method i.e. `myArr.shift()` and adding an item to start of an array using unshift method i.e. `myArr.unhift('something')`

`pop`, `push`. `shift()` and `unshift()` are mutable methods, i.e. they change the original array.

Get arround `pop` mutability by making a copy of a slice of the original array `newArr = myArr.slice(0, myArr.length - 1)`.

Get arround `shift` mutability by making a copy of a slice of the original array `newArr = myArr.slice(1)`.

Get arround `push` mutability by spread `newArr = myArr.slice(newArr, myArr[length - 1])`.

Get arround `unshift` mutability by spread `newArr = myArr.slice(myArr[0], newArr)`.

`myArr.indexOf('something')` will find the index of an item in an array, while `myArr.lastIndexOf('something')` last index of the last instance of an item in an array.

`myArr.includes('something')` returns a boolean if the item exists in the array.

`myArr.reverse()` reverses the items in an array, and it mutable i.e. changes the original array. Workaround is `[...myArr].reverse()`.

### Array Cardio - Callback Methods and Function Generation

Array methods that take a function as an arguement, often called a callback.

```js
myArr.find((item) => item.includes("something")); // returns the matching item
```

```js
const feedback = [
  { comment: "Love the burgs", rating: 4 },
  { comment: "Horrible Service", rating: 2 },
  { comment: "Smoothies are great, liked the burger too", rating: 5 },
  { comment: "Ambiance needs work", rating: 3 },
  { comment: "I DONT LIKE BURGERS", rating: 1 },
];
// find the first rating that talks about a burger with find()
const burgerComment = feedback.find((rating) =>
  rating.comment.includes("burg")
);
console.log(burgerComment);

// call back can be any type of function
// normal function
// function findBurgRating(singleFeedback) {
//         return singleFeedback.comment.includes('burg');
// }

// function expression
// const findBurgRating = function (singleFeedback) {
//         return singleFeedback.comment.includes('burg');
// };

// arrow function with implicit return
const findBurgRating = (singleFeedback) =>
  singleFeedback.comment.includes("burg");

const burgerComment2 = feedback.find(findBurgRating);
console.log(burgerComment2);

// create a utilities object with methods for what functions we need
const util = {
  findBurgRating: function findBurgRating(singleFeedback) {
    return singleFeedback.comment.includes("burg");
  },
};

const burgerComment3 = feedback.find(util.findBurgRating);
console.log(burgerComment3);

// another method is to use modeules where we import and export them - stay tuned

// higher order functions return a function
// currently findBurgRating works only for burgers, so we need a functions that'll return the function to find a specific word

function findByWord(word) {
  return function (singleFeedback) {
    return singleFeedback.comment.includes(word);
  };
}

const burgFinder = findByWord("burg"); // burger function
const burgerComment4 = feedback.find(burgFinder);
console.log(burgerComment4);

const smoothieFinder = findByWord("Smooth"); // smoothie function
const smoothieComment = feedback.find(smoothieFinder);
console.log(smoothieComment);

// or pass the master function directly in the callback
const smoothieComment2 = feedback.find(findByWord("Smooth"));
console.log(smoothieComment2);
```

Higher order functions return a function.

Filter method

```js
myArr.filter((item) => item.includes("something")); // returns array of the matching items
```

```js
const goodReviews = feedback.filter((review) => review.rating > 2);
console.table(goodReviews);

function filterByMinRating(minRating) {
  return function (singleFeedback) {
    return singleFeedback.rating >= 2;
  };
}

const goodReviews2 = feedback.filter(filterByMinRating(3));
console.table(goodReviews2);

const burgReviews = feedback.filter((review) =>
  review.comment.includes("burg")
);
console.table(burgReviews);

// findByWord function can be in .find and .filter methods - DRY
const burgReviews2 = feedback.filter(findByWord("burg"));
console.table(burgReviews2);

// filter items out of the array of review objects
const legitReviews = feedback.filter((review) => review.rating !== 1);
console.table(legitReviews);
```

`myArr.some(callback)` and `myArr.every(callback)`returns a boolean.

- `some` checks if any array items meet the criteria
- `every`checks if all array items meet the criteria

```js
const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

// check if there is at least 5 of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(
  (meatVal) => meatVal >= 5
);
console.log(isThereEnoughOfAtLeastOneMeat);

// make sure we have at least 3 of every meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every(
  (meatVal) => meatVal >= 3
);
console.log(isThereEnoughOfEveryMeat);
```

`myArr.sort(callback)` sorts array items according to a _compare_ callback function. When looping through the array, `sort` compares the current item to the next item and switches the elements around according the condition that resolves to 0,1, or -1.

- `-1` maintains the items positions as they are, status quo
- `0 ` leaves the current and next items unchanged w.r.t. each other, but sorted w.r.t. other items
- `1` moves the next itme before current item

Sorting numbers:

```js
const nums = [1, 2, 100, 3, 200, 400, 155];
const numsSorted = nums.sort();
console.log(numsSorted); // sorted alphabetically as strings

const numsSorted2 = nums.sort((a, b) => a - b);
console.log(numsSorted2);
```

```js
const toppings = [
  "Mushrooms ",
  "Tomatoes",
  "Eggs",
  "Chili",
  "Lettuce",
  "Avocado",
  "Chiles",
  "Bacon",
  "Pickles",
  "Onions",
  "Cheese",
];

// sort the toppings alphabetically with sort()
const toppingsSorted = toppings.sort();
console.log(toppingsSorted);

const toppingsSorted2 = toppings.sort((a, b) => a - b);
console.log(toppingsSorted2);

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const orderTotalsSorted = orderTotals.sort((a, b) => b - a);
console.log(orderTotalsSorted);

function numberSort(a, b) {
  return b - a;
}

const orderTotalsSorted2 = orderTotals.sort(numberSort);
console.log(orderTotalsSorted2);

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

// Sort the prices with sort()

// Object.entries creates an 2d array [[hotDog, 453], [burger, 765], ...]
// the prices is in position 1in the nested arrays, so we use that to sort
const pricesSortedArr = Object.entries(prices).sort((a, b) => a[1] - b[1]);
console.table(pricesSortedArr);

// convert back to an object
const pricesSortedObject = Object.fromEntries(pricesSortedArr);
console.log(pricesSortedObject);

// in one line - not good for readability
const pricesSortedObject2 = Object.fromEntries(
  Object.entries(prices).sort((a, b) => a[1] - b[1])
);
console.log(pricesSortedObject2);
```

**NOTE**: Objects now do maintain order, except if the parameter (key) is named with a number. Parameters starting with a number will go to the top of the object.

Data massaging using Array methods such as `sort`, `filter`, `forEach`, `map`, `reduce` is the bulk of what devs do when they get data returned from a database and before they put that data into the frontend.

## Looping and Iterating

Most looping in JS is done over an array.

### Looping and Iterating: Array .forEach()

`.forEach()` is the most basic loop - it executes the callback for each item in the array.

`.forEach()` is different than the rest of the looping values, as it doesnt return anything to us, it just does some work for every item in the array e.g.

- log each item
- attach an event listener to each item
- display data on the page

This is referred to side effects i.e. when you're inside of a function and you reach outside of a function to do someting else.

The big 3, `map()`, `filter()` and `reduce()` take in data and return modified/ massaged/ transformed data, and they don't reach outside of the function to do this.

A good illustration of the differences between [map, filter and reduce](https://www.globalnerdy.com/2016/06/23/map-filter-and-reduce-explained-using-emoji/)

```js
const toppings = [
  "Mushrooms ",
  "Tomatoes",
  "Eggs",
  "Chili",
  "Lettuce",
  "Avocado",
  "Chiles",
  "Bacon",
  "Pickles",
  "Onions",
  "Cheese",
];

function logTopping(topping) {
  console.log(topping);
}

toppings.forEach(logTopping);

// or in one line
toppings.forEach((topping) => console.log(topping));

// we have access to the item, the index and the entire Array
function logTopping2(topping, index, array) {
  console.log(topping, index, array);
}

toppings.forEach(logTopping2);

toppings.forEach((topping, i, array) => console.log(topping, i, array));

function logTopping3(topping, index, originalArray) {
  // log the topping
  console.log(topping);
  // log the prev topping if there is one
  const prevTopping = originalArray[index - 1];
  prevTopping ? console.log(prevTopping) : null;

  // log the next topping if there is one
  const nextTopping = originalArray[index + 1];
  nextTopping ? console.log(nextTopping) : null;

  // if its the last item in the array, say good bye
  console.log("-------🍕-------");

  if (index === originalArray.length - 1) {
    console.log("Goodbye");
  }

  index === originalArray.length - 1 && console.log("Goodbye hack");
}

toppings.forEach(logTopping3);
```

### Looping and Iterating: Mapping

`myArr.map()` is like a machine in a factory, it takes in data, performs an operation and spits it out on the other side. It will always produce the same length array as it started with.

```js
const faces = ["😃", "🤠", "🤡", "🤑", "😵", "🌞", "🐶", "😺"];

function addArms(face) {
  return `👋 ${face} 👋`;
}

const toys = faces.map(addArms);
console.log(toys);

const fullNames = ["wes", "jim", "jon"].map((name) => `${name} Bos`);
console.log(fullNames);

// more advanced Maps
function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function bosify(name) {
  return `${capitalize(name)} Bos`;
}

const fullNames2 = ["wes", "jim", "jon"].map(bosify);
console.log(fullNames2);

// or chain Maps
const fullNames3 = ["wes", "jim", "jon"].map(capitalize).map(bosify);
console.log(fullNames3);

// Map with numbers
const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const orderTotalsWithTax = orderTotals.map((total) =>
  Math.round((total *= 1.12))
);
console.log(orderTotalsWithTax);
```

More often than not, we'll be working with an array of objects that comes back from an API which is not in the format that you need it.

Don't evern update the DOM inside a map function, that's what `forEach` is for.

Mapping on arrays of objects:

```js
const people = [
  {
    birthday: "April 22, 1993",
    names: {
      first: "Keith",
      last: "Buckley",
    },
  },
  {
    birthday: "January 3, 1975",
    names: {
      first: "Larry",
      last: "Heep",
    },
  },
  {
    birthday: "February 12, 1944",
    names: {
      first: "Linda",
      last: "Bermeer",
    },
  },
];

const cleanPeople = people.map(function (person) {
  // get birthday timestamp
  const bday = new Date(person.birthday).getTime();
  // console.dir(bday); // to see all date methods

  // calculate age
  const now = Date.now(); // current timestamp
  // console.dir(now);

  // to compare dates, change to timestamps in milliseconds

  // 1000 ms in a second, 60s in mins, 60m in hour, 24h in day, 365d in year
  const age = Math.floor((now - bday) / (1000 * 60 * 60 * 24 * 365));
  // onsole.log(age);

  // return object of full name, birthday
  return { name: `${person.names.first} ${person.names.last}`, age };
});

console.table(cleanPeople);
```

[Epoch](https://epoch.vercel.app/) website to convert dates to epoch timestamp.

JavaScript deals with milliseconds, while other languages may deal in seonds.

There is a library of date functions called [date-fns](https://date-fns.org/)

### Looping and Iterating: Filter, Find and Higher Order Functions

`myArr.filter(callback)` looks over every item in the array, where the callback has a condition that results in a boolean for where to include the item in the resulting array or not.

```js
const over40 = cleanPeople.filter((person) => person.age > 40);

console.table(over40);
```

`myArr.find(callback)` will only return one item from the orignal array, while `filter` will always return an array, even if it's an empty array.

```js
const students = [
  {
    id: "11ce",
    first_name: "Dall",
    last_name: "Puckring",
  },
  {
    id: "2958",
    first_name: "Margarete",
    last_name: "Brandi",
  },
  {
    id: "565a",
    first_name: "Bendicty",
    last_name: "Woodage",
  },
  {
    id: "3a16",
    first_name: "Micki",
    last_name: "Mattes",
  },
  {
    id: "f396",
    first_name: "Flory",
    last_name: "Gladeche",
  },
  {
    id: "de5f",
    first_name: "Jamill",
    last_name: "Emilien",
  },
  {
    id: "54cb",
    first_name: "Brett",
    last_name: "Aizikowitz",
  },
  {
    id: "9135",
    first_name: "Lorry",
    last_name: "Smallman",
  },
  {
    id: "978f",
    first_name: "Gilly",
    last_name: "Flott",
  },
];

const student = students.find((s) => s.id === "565a");
console.log(student);

// higer order func
function findById(id) {
  return function isStudent(student) {
    return student.id === id;
  };
}

const student3 = students.find(findById("565a"));
console.log(student3);

// more flexible higher order func to find by any property
function findByProp(prop, propWeAreLookingFor) {
  return function isStudent(student) {
    return student[prop] === propWeAreLookingFor;
  };
}

const student4 = students.find(findByProp("id", "565a"));
console.log(student4);

const student5 = students.find(findByProp("last_name", "Flott"));
console.log(student5);
```

### Looping and Iterating: Reduce

`myArr.reduce(callback)` is one of the tricker methods, as it does so much.

It takes in an array of data and returns a result or a single value.

```js
const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

// add the orderTotals array
const grandTotal = orderTotals.reduce((a, b) => a + b, 0);
console.log(grandTotal);

function tallyNumbers(tally, current) {
  return tally + current;
}

// optional 2nd arg for where to start the tally (accumulator)
const grandTotal2 = orderTotals.reduce(tallyNumbers, 0); // start tally at 0
console.log(grandTotal2);
```

Reduce on objects:

```js
const inventory = [
  { type: "shirt", price: 4000 },
  { type: "pants", price: 4532 },
  { type: "socks", price: 234 },
  { type: "shirt", price: 2343 },
  { type: "pants", price: 2343 },
  { type: "socks", price: 542 },
  { type: "pants", price: 123 },
];

function inventoryReducer(totals, item) {
  //     console.log(item.type);
  // increment the type by one
  totals[item.type] = totals[item.type] + 1 || 1;
  // return the total (accumulator) so the next loop can use it
  return totals;
}

// return object
const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);

// return a single number
const totalInventoryPrice = inventory.reduce(
  (acc, item) => acc + item.price,
  0
);
console.log(totalInventoryPrice);
```

### Looping and Iterating: Reduce Exercise

[Regexr](https://regexr.com/) is a good site for learning and testing regex.

```js
const text = `Skip to main content
Skip to search
Technologies
Change language
Table of contents
Array.prototype.reduce()
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.`;

// convert to string to array, filter out special characters and map all char to lowercase, reduce to an object of the count of characters

// callbacks
function isValidChar(char) {
  return !!char.match(/[a-z0-9]/i);
}
const lowercase = (char) => char.toLowerCase();

function instanceCounter(counts, char) {
  counts[char] ? counts[char]++ : (counts[char] = 1);
  return counts;
}

// split, filter, map, reduce
const result = text
  .split("")
  .filter(isValidChar)
  .map(lowercase)
  .reduce(instanceCounter, {});

console.log(result);

// sort low to high
const sorted = Object.entries(result).sort((a, b) => a[1] - b[1]);
console.log(sorted);
```

It is possible to do all this in one reduce function, but it's more readable to chain multiple functions filter, map,reduce functions.

### Looping and Iterating: for, for in, for of and while loops

for, for in, for of and while loops are not as popular as the array methods such as forEach, filter, map, reduce.

`for` loop requires 3 things

- initial expression
- condition
- increment expression

```js
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// custom increments are handy when looping over RBGalpha values of pixels where the increment needs to be 4
for (let i = 100; i <= 200; i += 4) {
  console.log(i);
}

// loop over arrays
const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

`for of` is faily new to JS, and is used for looping over iterables, i.e. something that has a length e.g. array or string.

`for of` can loop over emojis, which a `for` cannot.

The primacy use case for `for of` is to do with `promises`. If you ever have to sequence a bunch of data, meaning you have to do one thing after another in a loop, the `for of`loop will allow you to do something called `await` inside of it.

```js
const name = "Wes Bos👪🏻🎅🏻👩‍👩‍👧‍👦";
for (const char of name) {
  const name = "Wes Bos";
  console.log(char);
}

// also name.split() won't work with emojis, use spread
[...name];
```

`for in`is for looping over keys of an object, but you're likely to use `Object.entries()`, `Object.keys()` and `Object.values()`.

```js
const person = {
  name: "wes",
  age: 100,
  cool: true,
};

for (prop in person) {
  console.log(prop);
}
```

There is one gotcha for `for in` vs. `Object.entries()`, `Object.keys()` and `Object.values()`, which has something to do with prototypes.

`for in` loops through the object key and the prototype keys, whereas `Object.key()`only gives the object keys.

```js
const baseHumanStats = {
  feet: 2,
  arms: 2,
  eyes: 2,
  head: 1,
};
function Human(name) {
  this.name = name;
}

Human.prototype = baseHumanStats;

const wes = new Human("wes");

console.log(wes);

// we can reference values of the prototype
// it first check the property on the object, if it's not there, it then checks in the prototype
console.log(wes.feet);

console.log(Object.keys(wes)); // ['name'] - only returns object keys

for (prop in wes) {
  console.log(prop); // loops through object keys and prototype keys
}
```

`while` loop will take a condition and run infinitely until the conidtion is false.

```js
let cool = true;
let i = 0;
while (cool === true) {
  console.log("you are cool");
  i++;
  i > 100 ? (cool = false) : null; // exit condition
}
```

`do while` loop the `do` part will run first then check the condition after the first run, so you get at least one run of the loop. Whereas the `while`loop check the condition before running the loop, so you're not guranteed a run of the loop at all.

```js
let smart = true;
let j = 0;
do {
  console.log("you are smart");
  j++;
  j > 99 ? (smart = false) : null; // exit condition
} while (smart === true);
```

npm ## Harder Practice Exercises

### Face Detection and Censorship

[see live ]()

This project will access the webcam so that browser can detect a face and pixelate it.

Face detection is an experimental API supported in browsers.

Chrome browser supports face detection.

To enable it go to `chrome://flags/#enable-experimental-web-platform-features` in chrome, enable Experimental Web Platform features, then relaunch the browser.

Check the dev tools console by typing in FaceDetector.

There are some advanced concepts in this project not yet covered, such as async wait, promsises and bundling tools like Parcel. We learn about Parcel in the modules section.

We need to use a server to run this, as accessing a user's webcam is a security issue, you have to ask the user first for access to webcam i.e. permission based API, similar to asking for location. Permissions are tied to the origin, a.k.a domain name, which in our case will be localhost.

Parcel - when we change something on the page, it will automatically refresh the page for us, after saving the changes in the text editor.

We need node and npm installed. To check we have these installed, in the terminal:

- `nonde -v`
- `npm -v`

In the terminal, navigate to the Face Detection exercise folder and run `npm install` to isntall all the dependancies in the `package.json` file.

Run the server using `npm start` in the terminal, and then navigate to the localhost server url, which is `http://localhost:1234` in this case.

You may see `DevTools`errors/ warnings in the browser console. Filter these out in the console by typing `-DevTools` in the filter box.

### Sarcastic Text Generator

[see live ]()

Convetts input text into sarcastic, funky and 'unable' text.

We cover

- emitting of custom events
- event delegation (how to listen to clicks on things that happen in the future)
- different DOM events
- local storage (see Dev Tools > Application tab > Local Storage > file://)

### Shopping Form with Custom Events, Delegation and localstorage

[see live ]()

A shopping list that we can add things to, check the item off and delete it.

We'll install Parcel globally so that we don't have to keep refreshing the page manually for every update to our html and JS files.

In the console run `npm install -g parcel-bundler` or `sudo npm install -g parcel-bundler` in mac to install Parcel globally, so the Parcel command will be available anywhere in the terminal.

Check if it is installed by running `parcel --version`in the terminal.

Run `pracel index.html` in the terminal for your project folder. This will start a local server usually on `http://localhost:1234`

Best practice to listen for `submit` event rather than click when it comes to forms, as form submissions can occur via mouse click and keyboard enter, so we cover all bases by listening for `submit`.

Custom events are created using the `dispatchEvent()` method with a `new CustomEvent('myEvent')` constructor. It's available on all DOM elements.

Local storage is like a mini database in the browser, that allows users to comeback and pick where they left off.

### Build a Gallery Exercise

[see live ]()

Here we build the gallery in a standard way, but it will be later refactored in the prototypes section and again in the classes section.

The idea is the build a gallery once and reuse the same code in multiple galleries, while keeping them separate.

The problem with the current method is that the functions created are not actually shared between the different galleries, they just duplicated. This means we have double the functions that do the same thing.

Using Prototypes and classes, we'll be able to share the functionality between galleries and open up the functionality to other developers.

Run `parcel index.html` in the terminal for your project folder. This will start a local server usually on `http://localhost:1234`

### Building a Slider

[see live ]()

Sliders are a common thing to create, but are often complex sucht that people opt for slider libraries.

The aim here is to build the basics of a slider in a few lines of code.

It will be later refactored in the prototypes section and again in the classes section.

A slider is a fancy CSS `class` adder and remover.

It's common to place `. js` files in a `src` or `lib` folder.

This needed exercise needed an update of the `package.json`

```json
{
  "name": "slider",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "sass": "^1.26.10"
  },
  "dependencies": {
    "parcel": "latest"
  }
}
```

use `npm start` in the project folder in the terminal to run the server.

## Prototypes, this, new and Inheritance

These are the foundation for Object Oriented Programming (OOP) a.k.a Functional Programming.

### The new Keyword

When you create a new `Date`, an `Object`, an `Array`, a `String`, a `Number`, you are essentially creating a new object in JS, that is extended fromt the constructor for that type, which gives you access to methods. Constructors are just parent functions with child functions (methods). You can create a new instance of a constructor using the new keyword like so `new Constructor()`

Dates don't have a literal syntax, which is why you need to use `new Date()` to create an instance of a new date. The other commin constructors (`String`, `Number`, `Array`, `Object`) have literal sytax.

When you use the `new` keyword on a function (custom function), it creates a new instance object of that function instead of whatever has been returned from the function.

```js
new Number();
new String();
new Date();
new Object();
new Array();

const myNum = new Number(100);
myNum instanceof Number; // true

const myDate = new Date("August 11, 2025");
console.dir(myDate);
console.log(myDate.getFullYear());
console.log(myDate instanceof Date); // true
console.log(myDate.constructor); // Date

const names = ["wes", "jon", "jim"];
const names2 = new Array(["wes", "jon", "jim"]);
console.log(names instanceof Array); // true
console.log(names2 instanceof Array); // true
console.log(names2.constructor); // Array

const person = { name: "wes", age: 30 };
const person2 = new Object({ name: "jon", age: 30 });
console.log(person instanceof Object); // true
console.log(person2 instanceof Object); // true
console.log(person2.constructor); // Object

const span = document.createElement("span");
console.log(span instanceof Node); // true
console.log(span instanceof Element); // true
console.log(span instanceof HTMLSpanElement); // true
console.log(span.constructor); // HTMLSpanElement
// this is known as extending

function Pizza() {
  console.log("Making a Pizza");
}

const pepperoniPizza = new Pizza();
console.log(pepperoniPizza);
console.log(pepperoniPizza instanceof Pizza); // true
console.log(pepperoniPizza.constructor); // Pizza
```

### The this Keyword

`this` keyword in JS refers to the instance of an object that a function is bound.

In simple terms `this` is the object that is left of the dot `.`.

```js
const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");

// normal callback
function tellMeAboutTheButton() {
  console.log(this);
}

// 'this' is the button
button1.addEventListener("click", tellMeAboutTheButton);
button2.addEventListener("click", tellMeAboutTheButton);

// arrow callback
const tellMeAboutTheButton2 = () => {
  console.log(this);
};

// 'this' is the window
button1.addEventListener("click", tellMeAboutTheButton2);
button2.addEventListener("click", tellMeAboutTheButton2);
```

Button one and two are instances of a html element.

The callback is bound to the button. When something is bound to something, it means that the `this` keyword is equal to whatever it was bound to. We can change that with the `.bind()` method.

`this` keyword is always scope to a function.

`this` keyword does not change when using an arrow function, so the `this` keyword will be equal to whatever it was at the higher level outside of the arrow function. If there is no higher function around the arrow function, then `this` is equal to the window. The use case for that is

```js
function tellMeAboutTheButton3() {
  setTimeout(function () {
    // won't work as `this` is now the window
    this.textContent = "You clicked me";
  }, 1000);
}

// 'this' is the button
button1.addEventListener("click", tellMeAboutTheButton3);
button2.addEventListener("click", tellMeAboutTheButton3);

// Solved by using Arrow function
function tellMeAboutTheButton4() {
  setTimeout(() => {
    // 'this' is picked from higher level
    this.textContent = "You clicked me";
  }, 1000);
}

// 'this' is the button
button1.addEventListener("click", tellMeAboutTheButton4);
button2.addEventListener("click", tellMeAboutTheButton4);
```

`this` refers to the instance of the thing that was made.

A function that makes an object is called a constructor.

When you're creating a `new` instance of an object `this` keyword is used to store information about that instance.

```js
function Pizza2(toppings = [], customer) {
  // save the topping & customer that were passed in to this instance of pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
}

const cheesePizza = new Pizza2(["cheese"], "wes");
console.log(cheesePizza);
console.log(cheesePizza instanceof Pizza2); // true
console.log(cheesePizza.constructor); // Pizza2

const hawaianPizza = new Pizza2(["pineapple", "ham"], "jon");
console.log(hawaianPizza);
console.log(hawaianPizza instanceof Pizza2); // true
console.log(hawaianPizza.constructor); // Pizza2
```

### Prototypes and Prototypal Inheritance

The downside to the below is that we're actually creating this function once for every single pizza that is made

The .eat() are not the same i.e. we're duplicating the functionality of this function once for every single pizza.

The pizza does need to have its own toppings, customer, ID, and maintain it's own slice count, but doesnt need to have it's own version of the `eat()` method - this functionality is the same for every pizza.

```js
function Pizza3(toppings = [], customer) {
  // save the topping & customer that were passed in to this instance of pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
  this.slices = 10;
  this.eat = function () {
    if (this.slices > 0) {
      this.slices -= 1;
      console.log(`chomp`, `you have ${this.slices} slices left`);
    } else {
      console.log(`sorry, no slices left`);
    }
  };
}

const margharitaPizza = new Pizza3(["cheese"], "wes");
console.log(margharitaPizza); // eat() is an instance property
console.log(margharitaPizza.slices);
margharitaPizza.eat();
console.log(margharitaPizza.slices);

const vegPizza = new Pizza3(["pineapple", "onion"], "jon");
console.log(vegPizza); // eat() is an instance property
console.log(vegPizza.slices);
for (let i = 0; i < 11; i++) {
  vegPizza.eat();
}
console.log(vegPizza.slices);

// duplicatoin of functions
console.log(margharitaPizza === vegPizza.eat); // false
```

This problem with this is that if we have thousands of pizzas, then the duplicatoins of the eat() method takes up memory, which is what causes computers and websites to go slow in a lot of cases.

So instead of putting functions as methods on every instance, we can place them as a method on the prototype, so there is only one instance of it shared amongs all the thousands of pizzas.

Looking at built in prototype methods - there is only one instance of them.

For example, no matter how many arrays we create, they all share the same protoype methods and so those methods are equal.

```js
const first = ["wes", "jon", "jim"];
const nums = [1, 2, 3, 4, 5];

console.log(first.filter === nums.filter); // true
console.log(first.map === nums.map); // true
console.log(first.reduce === nums.reduce); // true
console.log(first.slice === nums.slice); // true
console.log(first.splice === nums.splice); // true
console.log(first.pop === nums.pop); // true
console.log(first.push === nums.push); // true
console.log(first.shift === nums.shift); // true
console.log(first.unshift === nums.unshift); // true
console.log(first.sort === nums.sort); // true
console.log(first.reverse === nums.reverse); // true
```

Prototype methods are not duplicated each time we create an instance of a constructor - instead the method is shared.

We need to add the method in the prototype

Now there is only one `.eat()` method for every pizza created.

```js
function Pizza4(toppings = [], customer) {
  // save the topping & customer that were passed in to this instance of pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
  this.slices = 10;
}

// adding protoype method
Pizza4.prototype.eat = function () {
  if (this.slices > 0) {
    this.slices -= 1;
    console.log(`chomp`, `you have ${this.slices} slices left`);
  } else {
    console.log(`sorry, no slices left`);
  }
};

Pizza4.prototype.describe = function () {
  return `This pizza is for ${
    this.customer
  } with toppings: ${this.toppings.join(",")}, and ${this.slices} slices left`;
};

const veganPizza = new Pizza4(["vegan cheese"], "wes");
console.log(veganPizza); // eat() is a prototype property
console.log(veganPizza.slices);
veganPizza.eat();
console.log(veganPizza.slices);
console.log(veganPizza.describe());

const pestoPizza = new Pizza4(["pesto", "garlic"], "jon");
console.log(pestoPizza); // eat() is a prototype property
console.log(pestoPizza.slices);
for (let i = 0; i < 11; i++) {
  pestoPizza.eat();
}
console.log(pestoPizza.slices);
console.log(pestoPizza.describe());

console.log(veganPizza.eat === pestoPizza.eat); // true
```

The prototype lookup - if you lookup a property on an instance of an objects, and it doesnt exist on the instance, it will look for it on the Constructor prototype.

The benefit of the prototype methods is that you can change the function and it will apply to every instance of that constructor.

While constructors such as `new String()` have many built-in prototype methods, you can actually create your own prototype methods or overwrite existing ones - but, you should never do this.

```js
// edit existing prototype method
String.prototype.toUpperCase = function () {
  return "YELLING";
};

// add a prototype method
String.prototype.sarcastic = function () {
  const sarcastic = this.split("")
    .map((char, i) => {
      if (i % 2) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    })
    .join("");
  return sarcastic;
};

const jimbob = "jimbob";
console.log(jimbob.sarcastic());
```

If older brwosers don't support a built-in prototype methods, such is the case of `.includes()` for Internet Explorer, then you can find pollyfill for it in vanilla JS. [Pollyfill for `.includes()` for IE8](https://stackoverflow.com/questions/53308396/how-to-polyfill-array-prototype-includes-for-ie8)

### bind, call and apply

`bind`, `call` and `apply` are three functions used to change the scope of `this` inside of a function or method.

Though these are not used very often, the came up alot in interview questions.

`this` keyword is always defined by where the function is being called, not where the function is being defined.

In the example below, even though we define the `sayHi()` function in the `person` object, it's not bound to it unless we call it as a method of an object.

```js
const person = {
  name: "jon snow",
  sayHi() {
    console.log(this); // this is window, as there was nothing the method was bound to on the left side
    console.log(`Hey ${this.name}`);
    return `Hey ${this.name}`;
  },
};
console.log(person.sayHi()); // 'Hey jon snow'

const { sayHi } = person;
console.log(sayHi()); // 'Hey '
// sayHi method is bound to the window, so cannot access person.name yet.
```

We can use the `bind` keyword to change what the `this` keyword is bound to.

```js
const sayHi2 = person.sayHi.bind(person);
console.log(sayHi2()); // 'Hey jon snow'
```

What this says is create a function called `sayHi()` that when called it's `this` will be equal to whatever I pass into the `bind` method.

The use case for this is that sometimes you want to use a method of an object wiht some other information.

```js
const jim = { name: "jim bob" };
const sayHi3 = person.sayHi.bind(jim);
console.log(sayHi3()); // 'Hey jib bob'

const sayHi4 = person.sayHi.bind({ name: "john doe" });
console.log(sayHi4()); // 'Hey john doe'
```

Example with makeing `document.querySelector` into shortform:

```js
let $ = document.querySelector;
console.log($);
console.log($ === document.querySelector); // true

// select wrapper
const wrapper = document.querySelector(".wrapper"); // this is bound to document
const p = wrapper.querySelector("p"); // this is bound to wrapper element
console.log(p);

// We can't do the same thing with $ variable, even though $ = document.querySelector, we've taken away the object to which the method was called against, and so this is not bound to anything (defaults to being bound to window)

$ = document.querySelector.bind(document); // when calling against querySelector set 'this' to be the document. We're essentially returning a new function
console.log($(".wrapper")); // it works
console.log($ === document.querySelector); // FALSE
```

Using `bind` will change the context of what `this` is equal to inside a function or method.

Another use case for `bind` is that you can use it to prep that has arguments preloaded. We can pass `bind` additional arguements that line up with the arguments of the function or method. The first argument in `bind()` will always be the `this` object, and the additional arguments will line up with arguements that get passed into the function.

Sometimes when you're generating functions, say you're looping over a list of data, you have access to that data at the time of function creation and may be later you want to call it. Sometimes it's easier to pass the function what the arguments will be at call time, when you are binding it. Then you can take that function whereever you want, knowing that the arguments are pre-installed on it and so you can call it whenever you want.

```js
const bill = {
  total: 1000,
  calculate(taxRate) {
    return this.total + this.total * taxRate;
  },
};

const total = bill.calculate(0.13);
console.log(total); // 1130

const calc = bill.calculate;
console.log(calc(0.13)); // NaN as 'this' is bound to window

const calc2 = bill.calculate.bind(bill);
console.log(calc2(0.13)); // 1130

// preload taxRate args into 'bind'
const calc3 = bill.calculate.bind({ total: 500 }, 0.1);
console.log(calc3()); // 550
```

`call` and `apply` work exactly the same way `bind` does, except they will call the functions for you. Instead of returning a function like `bind` does, which you then have to run later, `call` invoke the function immediately.

`apply` also immediately invokes the function, but you have to pass the additional arguments in as an array.

```js
// call
const total2 = bill.calculate.call({ total: 500 }, 0.1);
console.log(total2); // 550

// apply
const total3 = bill.calculate.apply({ total: 500 }, [0.1]); // additional arg as an array
console.log(total3); // 550
```

```js
const bill = {
  total: 1000,
  calculate(taxRate) {
    return this.total + this.total * taxRate;
  },
  describe(mealType, drinkType, taxRate) {
    console.log(
      `your meal of ${mealType}with a drink of ${drinkType} was ${this.calculate(
        taxRate
      )}`
    );
  },
};

// call
const desc1 = bill.describe.call(bill, "steak", "coke", 0.1);
console.log(desc1); // your meal of steakwith a drink of coke was 1100

// apply
const desc2 = bill.describe.apply(bill, ["steak", "coke", 0.1]);
console.log(desc2); // your meal of steakwith a drink of coke was 1100
```

### Prototype Refactor of the Gallery Exercise

[See Live]()

Refactoring gallery exercise using prototypes so that Gallery 1 and 2 share the methods across gallery object, rather than have their own instances.

Run `parcel index.html` in the terminal for your project folder. This will start a local server usually on `http://localhost:1234`

### Prototype Refactor of the Slider Exercise

[See Live]()

Refactoring slider exercise using prototypes so that each instance of the Slider shares the methods across the slider object, rather than having an instances of their own slider methods.

This needed exercise needed an update of the `package.json`

```json
{
  "name": "slider",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel index.html"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "sass": "^1.26.10"
  },
  "dependencies": {
    "parcel": "latest"
  }
}
```

use `npm start` in the project folder in the terminal to run the server.

## Advanced Flow Control

### The Event Loop and Callback Hell

Before getting into Promises, we need to look at how JS is asynchronous (non-blocking) and how the event loop works.

JS is a single thread language, which means that only one thing can be run at a time. Some languages are multi-threaded, which means multiple processes can be run at once.

The call stack and the event loop is complext to understand, but Philip Roberts has a [talk](https://www.youtube.com/watch?v=8aGhZQkoFbQ) on this on Youtube and has a tool called [Loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) that helps us visualize the call stack.

When you click something, the call stack gives a trail of what functions were called up until that, but the call stack can only run one function at a time.

```js
console.log("starting");
setTimeout(function () {
  console.log("running");
}, 3000);
console.log("ending");
```

The console log `starting`, then `ending`, then `running`. JS is asynchronous meaning that it will put the setTimeout into the Web Apis, then when it comes back after 3seconds, it'll stick it in the callback queue.

- The call stack is that JS is doing
- The Web APIs are things that are waiting or things that we are listening for (event handlers), then when something happens in the Web Apis it'll stick it in the callback queue.
- The call stack reaches into the callbakc queue, when it has nothing left to do

This means that even if the setTimout was 0 seconds, the callback functions still gets added to the Web Apis and then the callback queue, so the console log will still be `starting`, then `ending`, then `running`.

How do we deal with things that take time, i.e. that does need to wait for a network request to come back?

Below is callback hell for a simple animation with nested callback dependent on the pior callback. This is also refered to as christmas tree code.

The solution to callback hell is Promises, an IOU, that allow us to write that's much easier to read, much flatter.

```js
const go = document.querySelector(".go");

// change test to go when clicked
go.addEventListener("click", function (e) {
  const el = e.currentTarget;
  // console.log(el);

  el.textContent = "Go";

  // make it a circle after 2 secs
  setTimeout(function () {
    el.classList.add("circle");

    // make it red after 0.5s
    setTimeout(function () {
      el.classList.add("red");

      // make it square after 0.25s
      setTimeout(function () {
        el.classList.remove("circle");

        // make it purple after 0.3s
        setTimeout(function () {
          el.classList.remove("red");
          el.classList.add("purple");

          // fade out after 0.5s
          setTimeout(function () {
            el.classList.add("fadeOut");
          }, 500);
        }, 300);
      }, 250);
    }, 500);
  }, 2000);
});
```

### Promises

A promise is an IOU for something that will happen in the future.

When we set a timeout or wait for data to be returned from an API, or someone giving us access to the webcam/ microphone - when we request these, we don't get the immediate data back but a promise.

Promises are made immediately but don't resolve until they are ready.

A `Promise` takes a callback function with 2 arguments.

- resolve
- reject

```js
function makePizza() {
  // promise

  const pizzaPromise = new Promise(function (resolve, reject) {
    // when you are ready you can resolve this promise
    resolve("🍕");
    // if something went wrong, we can reject this promise
  });
  return pizzaPromise;
}

const pizza = makePizza();
console.log(pizza); // a promise with status resolved
```

What's import here is that the function doesnt give us the Pizza, it gives us a promise of Pizza.

```js
function makePizza(toppings) {
  // promise

  const pizzaPromise = new Promise(function (resolve, reject) {
    // wait 1 sec for the pizza to be cooked
    setTimeout(function () {
      // resolve inside the timeout
      // when you are ready you can resolve this promise
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(",")}`);
    }, 1000);

    // if something went wrong, we can reject this promise
  });

  // imediately return the promise
  return pizzaPromise;
}

// run function to return a promise of pizza
const pepperoniPromise = makePizza(["pepperoni"]);

console.log(pepperoniPromise); // promise pending

// to access the resolved value, in this case Pizza, in the promise, chain a .then callback onto it
pepperoniPromise.then(function (pizza) {
  console.log(pizza);
});
```

The logic of how the promise get's resolved is always inside the promise body.

To access the resolved value, in the promise, chain a .then callback on to it.

We can chain using `.then` to conintue to return a new promise and resolve it.

```js
function makePizza(toppings = []) {
  // promise

  return new Promise(function (resolve, reject) {
    const amountOfTimeToBake = 500 + toppings.length * 200;

    // wait 1 sec for the pizza to be cooked
    setTimeout(function () {
      // resolve inside the timeout
      // when you are ready you can resolve this promise
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(", ")}`);
    }, amountOfTimeToBake);

    // if something went wrong, we can reject this promise
  });

  // imediately return the promise
  return pizzaPromise;
}

makePizza(["pepperoni"])
  .then(function (pizza) {
    console.log(pizza);

    return makePizza(["ham", "pineapple"]);
  })
  .then(function (pizza) {
    console.log(pizza);

    return makePizza(["mushroon", "onion"]);
  })
  .then(function (pizza) {
    console.log(pizza);

    return makePizza(["corn", "onion", "olives", "peppers", "chillis"]);
  })
  .then(function (pizza) {
    console.log(pizza);

    return makePizza([
      "one",
      "two",
      "three",
      "four",
      "one",
      "two",
      "three",
      "four",
      "one",
      "two",
      "three",
      "four",
    ]);
  })
  .then((pizza) => {
    console.log("All done, here is the last pizza:");
    console.log(pizza);
  });
```

Running the promises concurrently rather than sequentially, but sing `Promise.all()`. This will only resolve once all the promises contained within are resolved.

```js
const pizzaPromise1 = makePizza(["mushroon", "onion"]);
const pizzaPromise2 = makePizza([
  "corn",
  "onion",
  "olives",
  "peppers",
  "chillis",
]);
const pizzaPromise3 = makePizza([
  "one",
  "two",
  "three",
  "four",
  "one",
  "two",
  "three",
  "four",
  "one",
  "two",
  "three",
  "four",
]);

// convert the promises into a mega promise that we can wait upon
const dinnerPromise = Promise.all([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);

dinnerPromise.then((pizzas) => {
  console.log(pizzas); // logs all pizzas together
});
```

Or with destructuring

```js
dinnerPromise.then(function (pizzas) {
  const [pizza1, pizza2, pizza3] = pizzas;

  console.log(pizza1, pizza2, pizza3);
});
```

or destructuring with less code

```js
dinnerPromise.then(function ([pizza1, pizza2, pizza3]) {
  console.log(pizza1, pizza2, pizza3);
});
```

`Promise.race` will resolve the first promise to finish rendering.

```js
const firstPizzaPromise = Promise.race([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);

firstPizzaPromise.then((pizza) => {
  console.log(" here is the first pizza ready:");
  console.log(pizza);
});
```

### Error Handling

The opposite of resolving a promise is rejecting it.

The way to handle an error in a promise is to chain a `.catch` after the `.then`.

Almost always we should chain a `.then` and `.catch` on a promsise function call.

If you have multiple promsises chained together, not every single promise needs a catch on the end, you just need to put one `.catch` at the end that'll handle the error.

```js
function makePizza(toppings = []) {
  // promise

  return new Promise(function (resolve, reject) {
    // reject if people try pineapple
    if (toppings.includes("pineapple")) {
      reject("pineapple!, seriously? Get out 🍍");
    }
    const amountOfTimeToBake = 500 + toppings.length * 200;

    // wait 1 sec for the pizza to be cooked
    setTimeout(function () {
      // resolve inside the timeout
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(", ")}`);
    }, amountOfTimeToBake);
  });

  // imediately return the promise
  return pizzaPromise;
}

// .then will only happen if promise resolves successfully and the .catch will run when the promise doesn't go successfully
makePizza(["ham", "pineapple"])
  .then((pizza) => {
    console.log(pizza);
  })
  .catch((err) => {
    console.log("oh no ");
    console.log(err);
  });
```

Or pass in a handleError callback:

```js
function handleError(err) {
  console.log("oh no ");
  console.log(err);
}

makePizza(["ham", "pineapple"])
  .then((pizza) => {
    console.log(pizza);
  })
  .catch(handleError);
```

We just needs one `catch()` to handle the error for multiple promises chained together.

```js
makePizza(["pepperoni"])
  .then(function (pizza) {
    console.log(pizza);

    return makePizza(["ham", "pineapple"]);
  })
  .then(function (pizza) {
    console.log(pizza);

    return makePizza(["mushroon", "onion"]);
  })
  .then(function (pizza) {
    console.log(pizza);

    return makePizza(["corn", "onion", "olives", "peppers", "chillis"]);
  })
  .then(function (pizza) {
    console.log(pizza);

    return makePizza([
      "one",
      "two",
      "three",
      "four",
      "one",
      "two",
      "three",
      "four",
      "one",
      "two",
      "three",
      "four",
    ]);
  })
  .then((pizza) => {
    console.log("All done, here is the last pizza:");
    console.log(pizza);
  })
  .catch(handleError);
```

But the thing about and error happening in a promise chain, wherever the error happens it'll then bail out of the rest of the promise chain.

If the promises are not dependent on each other, then you shouldn't use a promise chain, isntead use `Promise.allSettled()`.

`Promise.allSettled()` will show all the promises that were fullfilled (resolved) and rejected.

You could use `Promise.all()` or `Promise.race()`, but would have to chain a `.catch()` to handle the error.

`Promise.allSettled()` will tell you when all promises are done regardless of whether they were resolved or rejected.

```js
const p1 = makePizza(["pepperoni"]);
const p2 = makePizza(["ham", "pineapple"]);
const p3 = makePizza(["mushroom", "onion"]);

const dinnerPromise2 = Promise.allSettled([p1, p2, p3]);

dinnerPromise2.then((results) => {
  console.log(results);
});
```

### Refactoring Callback Hell to Promise Land

We create wait helper functions so that our code is Dry-er

Then we take the nested callback functions and make it one level deep.

Even though this is one level deep, this is still callback hel, but Async will fix this.

```js
// wait function with a promise
const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

function animate(e) {
  const el = e.currentTarget;

  el.textContent = "Go";

  // make it a circle after 2 secs
  // make it red after 0.5s
  // make it square after 0.25s
  // make it purple after 0.3s
  // fade out after 0.5s
  wait(2000)
    .then(() => {
      el.classList.add("circle");
      return wait(500);
    })
    .then(() => {
      el.classList.add("red");
      return wait(250);
    })
    .then(() => {
      el.classList.remove("circle");
      return wait(300);
    })
    .then(() => {
      el.classList.remove("red");
      el.classList.add("purple");
      return wait(500);
    })
    .then(() => {
      el.classList.add("fadeOut");
    });
}

go.addEventListener("click", animate);
```

### Async Await

Async is a new syntax that will allow us to use the keywords `aysnc` and `await` for a much nicer and easier to read code.

There's nothing that needs to change in the `Promise` generating functions, it's all in where we actually call the function where `aysnc awaits` comes in handy.

You can only use `aysnc awaits` that is marked as `async`.

Place `await` infront of a `Promise` based function, and the function will temporaily pause until that promise is resolved (fullfilled/ rejected).

`await` is only valid in `async` functions.

This saves us having to chain `.then()`.

```js
// wait function with a promise
const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

// async function
async function go() {
  console.log("starting");
  await wait(2000);
  console.log("running");
  await wait(2000);
  console.log("ending");
}
```

You can mark any type of function with `async`.

```js
// function declarations
async function df() {}

// arrow functions
const arrowFn = async () => {};

// callback functions
window.addEventListener("click", async function () {});

// methods
const myObject = {
  sayHi: async function () {}, // method
  async sayHello() {}, // mehod shorthand
  sayHay: async () => {}, // function property
};
```

You cannot do top level await in a JS file. but it does work in the browser console, and it may be added to node.js.

This will work the cconsole and is called top level await, but wont' work in a JS file unless it's inside of an `async` function.

```js
console.log("starting");
await wait(2000);
console.log("ending");
```

```js
function makePizza(toppings = []) {
  // promise
  return new Promise(function (resolve, reject) {
    // reject if people try pineapple
    if (toppings.includes("pineapple")) {
      reject("pineapple!, seriously? Get out 🍍");
    }
    const amountOfTimeToBake = 500 + toppings.length * 200;

    // wait 1 sec for the pizza to be cooked
    setTimeout(function () {
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(", ")}`);
    }, amountOfTimeToBake);
  });

  // imediately return the promise
  return pizzaPromise;
}

// async await pizzas
async function makeDinner() {
  const p1 = await makePizza(["pepperoni"]);
  console.log(p1);

  const p2 = await makePizza(["mushroom"]);
  console.log(p2);
}

makeDinner();
```

More efficient/ performant to make things concurrent

```js
async function makeDinner() {
  const pizzaPromise1 = makePizza(["pepperoni"]);
  const pizzaPromise2 = makePizza(["mushroom"]);

  // create a parent promsie and await that, concurrency is better for performance
  const pizzas = await Promise.all([pizzaPromise1, pizzaPromise2]);
  console.log(pizzas);
}

makeDinner();
```

or destructure

```js
async function makeDinner() {
  // create a parent promise and await that, concurrency is better for performance
  const pizzaPromise1 = makePizza(["pepperoni"]);
  const pizzaPromise2 = makePizza(["mushroom"]);

  const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
  console.log(pep, mush);
}

makeDinner();
```

Refactoring animation with `async await`.

```js
const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

const go = document.querySelector(".go");

async function animate2(e) {
  const el = e.currentTarget;

  el.textContent = "Go";

  // make it a circle after 2 secs
  // make it red after 0.5s
  // make it square after 0.25s
  // make it purple after 0.3s
  // fade out after 0.5s
  await wait(2000);
  el.classList.add("circle");
  await wait(500);
  el.classList.add("red");
  await wait(250);
  el.classList.remove("circle");
  await wait(300);
  el.classList.remove("red");
  el.classList.add("purple");
  await wait(500);
  el.classList.add("fadeOut");
}

go.addEventListener("click", animate2);
```

### Async Await Error Handling

Since we're no longer chaining `.then`, the error handling is not as simple as chaining a `.catch at the end.

There are 4 different ways to do error handling in `async await`.

- 1: try-catch

  - this is a safety blanked
  - downside is that it messess with the simplicity of `async await`

- 2: mix & match when defining the function

  - `async await` with Promise syntax for error handling
  - helpful if you want to handle the error at the time that you define the function
  - use case may be to diplay a modal/ popup or prompt for the user

- 3: mix & match when calling the function

  - sometimes you want to handle the error when you call the function
  - when you mark a function as `async` it will immediately return a `promise` to you, (without `async` it's a regular function), so we can chain the `.then` and `.catch` syntax on `async` functions if we want
  - this is the best of both world and one that is used most often

- 4: Higher Order function HOF
  - i.e. a function that returns another function
  - write all your functions as if you never to have any errors
  - then when it comes time to calling the function, you have 2 options
    - catch it at run time (method 3 of error handling as bove)
    - make a safe function with a high order function (HOF)
      - you only have to make this once and run it whenever your want, knowing that the error handler will be attached
      - i.e. it is more DRY
      - typically used in Node.js and Express projects i.e. have just one safe function for all pages that display information

```js
const wait = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

function makePizza(toppings = []) {
  // promise
  return new Promise(function (resolve, reject) {
    // reject if people try pineapple
    if (toppings.includes("pineapple")) {
      reject("pineapple!, seriously? Get out 🍍");
    }
    const amountOfTimeToBake = 500 + toppings.length * 200;

    // wait 1 sec for the pizza to be cooked
    setTimeout(function () {
      resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(", ")}`);
    }, amountOfTimeToBake);
  });

  // imediately return the promise
  return pizzaPromise;
}

// 4 ways to handle errors
// 1. Try-catch
async function go() {
  try {
    const pizza = await makePizza(["pineapple"]);
    console.log(pizza);
  } catch (err) {
    console.log("oh no");
    console.log(err);
  }
}

go();
```

```js
// 2. Mix & Match - async await with Promise syntax for error handling
function handleError(err) {
  console.log("oh no");
  console.log(err);
}

async function go() {
  const pizza = await makePizza(["pineapple"]).catch(handleError);
  console.log(pizza);
}

go();
```

```js
// 3. mix & match when calling the function - async await with Promise syntax for error handling
function handleError(err) {
  console.log("oh no");
  console.log(err);
}

async function go() {
  const pizza = await makePizza(["pineapple"]);
  console.log(pizza);
  return pizza; // returns a promise
}

const result = go().catch(handleError);
console.log(result); // a promise

// or
go()
  .then((result) => {
    console.log(result);
  })
  .catch(handleError);
```

```js
// 4. Higher Order function (HOF)
function handleError(err) {
  console.log("oh no");
  console.log(err);
}

async function go() {
  const pizza = await makePizza(["pineapple"]);
  console.log(pizza);
  return pizza; // returns a promise
}

function makeSafe(fn, errorHandler) {
  return function () {
    fn().catch(errorHandler);
  };
}

const safeGo = makeSafe(go, handleError);
safeGo();
```

### Async Await Prompt UI

[See Live]()

It's coommon to build a prompt interface to ask the user for something, when a user clicks a button or when something happens on page, then fetch that data back and display it on the page somehow.

The problem with native browser prompts is that you can only have one input box and it blocks you from doing anything else on the page- what if you want multiple inputs and images - here we can use promises and async await.

Note that we use a `For Of` loop as it allows you to pause the loop as you `await` something inside of it. `forEach` doesnt allow this.

### Async Typer UI - two ways

[See Live]()

In this exercise we make text appear on page as if it is being typed.

This is done using 2 methods

- async await with for-of loop
- async await with recursion

## Ajax and Fetching Data

## ES Modules and Structuring Larger Apps

## Final Round of Exercises
