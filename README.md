# Wes Bos [Beginner JavaScript](https://beginnerjavascript.com/) Course

## Contents

1. [Chrome Dev Tools](#chrome-dev-tools)
2. [Terminal](#windows-command-prompt-vs.-linux-terminal)
3. [Relative file paths](#relative-file-paths)
4. [Running and loading JS](#running-and-loading-js)
5. [Tooling](#tooling)
6. [Types in JS](#types-in-js)
7. [Functions](#functions)
8. [Debugging](#debugging)
9. [Scope](#scope)
10. [Hoisting](#hoisting)
11. [Closures](#closures)
12. [Document Object Model (DOM)](#document-object-model)

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
