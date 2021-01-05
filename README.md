# Wes Bos [Beginner JavaScript](https://beginnerjavascript.com/) Course

## Notes

### Chrome Dev Tools

- Shortcut for Console `Ctrl` `Shift` `J`
- Shortcut for Inspect Element `Ctrl` `Shift` `I`

### Windows Command Prompt vs. Linux Terminal

- Clear: `cls` vs `clear`
- List directories: `dir` vs `ls`

### Relative file paths

- same directory: `./file.js`
- one directory up: `../file.js`

### Running and loading JS

- In command prompt/ terminal via node: `node file.js`

### Tooling

- ESLint
  - JS Linter tool
  - to indentify/ report on JS issues (bad practices/ design patterns, unused variables/ functions)
  - modifiable config - can use someone else's like from [wes bos](https://github.com/wesbos/eslint-config-wesbos)
  - best practice to set the cofig locally, but can do globally
  - pluggable - many plugins available e.g. for Vue, React, Angular, Prettier
- Prettier
  - Formats code
  - quite opinionated, only a few settings availabel to toggle
- Node
  - `npm init` via terminal for your project folder, in order to create a `package.json` file for depdendencies like ESLint and Prettier
  - in terminal run `npx install-peerdeps --dev eslint-config-wesbos` to install wes bos eslint setup
  - create new file `.eslintrc` to extend all of the wes bos eslint config by adding the following: `{ "extends": [ "wesbos" ] }`
  - install ESLint Package for VS Code
  - add [wes bos ESLint settings](https://github.com/wesbos/eslint-config-wesbos) in to the VS Code settings.json

### Types in JS

- SNOB'N'US
- String
- Number
  - In console: window.location = \`https://\${0.1+0.2}.com\`;
  - https://0.30000000000000004.com/
  - better to work with whole numbers i.e. cents rather than dollars
- Object - everything in JS is an object, so this is a special case
- Boolean
- Null
- Undefined
- Symbol - unique identifier

### Functions

- allow us to group together sets of statements
- functions take in data as arguements and can return a value
- arguements vs parameters
  - parameters are placeholders
  - arguements are the parameter values you pass into a function
- function vs method
- Built-in functions examples
  - `Math.max(10,12)`
  - `parseFloat('20.234234')`
  - `parseInt('20.234234')`
  - `Date.now()` returns number of milliseconds in epoch time (since 1st Jan 1970)
  - `document.querySelector('p')`
  - `navigator.vibrate(200)`, mobile functions
  - `scrollTo(0,600)`
  - `scrollTo({top: 500, left: 0, behaviour: 'smooth'})`
- DRY - don't repeat your self, keep your code DRY
- Custom Functions
  - normal functions
  - anonymous functions - used in callbacks and IIFE
  - function expressions i.e. stored as a variable
  - arrow functions
  - IIFE - Immediaely Invoked Function Expression
  - Method - a function that lives inside an object
  - callback function
- Hoisting - Functions that are declared with a function keyword (i.e. normal function) are Hoisted. Meaning that JS takes all functions and hoists them up to the top of the file. So that anywhere you call the function, it will be available to you. So technically you can run a function before it is defined. JS does not hoist Function Expressions (variable functions)

### Debugging

- 98% of debugging is done with console.log, breakpoints and network requests, the other methods are handy in edge cases

- **Console Methods**
  - console.log(), console.error(), console.warn(),
  - console.table(), good for a list of objects
  - console.count(), shows how many times something has run
  - console.group() or console.groupCollapsed() with console.groupEnd(), useful for grouping all logs between into a collapsable group
- **Callstack or stack trace**
  - Tells you what function called what function
  - This will be important when going from one file to another
  - e.g. `go()` calls `doctorize()` and `greet()`, which calls `doesntExist()`
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
- **Grabbing Elements**
  - e.g. go to https://developer.mozilla.org/en-US/
  - inspect the search bar in Elements tab
  - switch over to Console and enter \$0, this will return the element currently selected in Elements tab
  - a shorthand to access the last element clicked, this is not jQuery
  - you can check \$0.value
  - $0 is last element clicked, $1 is second last element clicked, and so on
  - $ and $\$ are shorthand selectors for elements
  - e.g. `$('p')` matches the first `<p>` element
  - and `$$('p')` matches all `<p>` elements, returns array of all <p> elements
  - This shorthand won't work if there is jQuery on the site
- **Breakpoints**
  - `debugger;` keyword will pause JS from running only when console is open
  - this adds a breakpoint
  - the Sources tab shows the callstack, variables and their scope
  - and you can step over each line of code from there on
  - or click play to continue running code until you hit the next debugger
  - This is good if console loggging is overwhelming
  - Be sure to remove 'debugger;' from your code, though it only impacts the site if dev tools are open
  - Also, in the Sources tab, navigate to the .js file and click on any line to add a breakpoint
- **Scope**
  - Scope will let us peer into what variables are
- **Network Requests**
  - dev tools Network tab
  - shows all the files need to make this site work and requests being sent to different servers
  - in our case debugging.html, base.css, debugging.js, data:image/svg+xml, icanhazdadjoke.com
  - you can see info about the request: raw response (useful when looking at JSON), a preview and time taken (where the time was taken in that request)
  - e.g. for icanhazdadjoke.com request, 600ms used in waiting for the api to return the joke
  - filter by XHR (data being sent out), JS, CSS, Img, Media
- **Break on Attribute**
  - Another way to add breaks
  - inspect element > in elements tab, right click element > break on > attribute modification (e.g. change font size)
  - (also subtree modification, e.g when something adds a div or something)
  - (also node removal, e.g. when somebody removes an element or text from something)
  - Break On Attribute is not used often, but useful when exploring a random code base
  - Sources tab, Event Listener Breakpoints can be toggled on/off
  - e.g. Event Listener Breakpoint > Mouse > Click
  - Sources tab, XHR breakpoint for anytime a fetch request is made to an external API, it'll break for specified API url or all requests

### Scope

- Scope answers the question 'where are my variables and functions available to me?'
- Global scope
  - anytime you declare a variable that will be available anywhere else you're running JS in your app (console, html file, JS file)
  - Everything that is attached to global scope is inside the `window` object
    - functions and `var` variables are attached to `window` while `let` and `const` variables are not
    - you shouldn't be makint global variables, a recipe for a headache
- Function scope
  - when variables are created inside a function, those variables are onnly available within that function
  - you can explicitly return a value from the function and put it in it's own variable
  - consider curley brackets `{ ... }` as fences, that don't leak out variables
  - however, functions can access variables scope a level or more higher
  - you can name variables the same if they're not in the same scope, however, it's not a good idea to do so as you can no long access a varible of the same name that is scoped higher up, since it's been shadowed (overwritten) locally
- Block scope
  - a block is defined by curly brackets `{...}` e.g.in if statements and for loops
  - `let` and `const` variables are not accessible outside the block
  - `var` variables are accessible outside the block i.e. they leak outside and can cause bugs, so better to use `let` and `const`
  - better to declare the variable outside of the block and update it within the block
  - `var` variables are however function scoped
- Variable best practices

  - try not to create global variables (anyway, it's practically impossible when working with JS modules unless you explicitly attach it to window)

    - global variables lead to bugs down the road where you accidentally overlap variables

  - use `const` by default, `let` if you need to reassign, and `var` only in a very specific use case
    - `let` and `const` are block scoped
    - `var` is function scoped
  - Lexical scoping or static scoping - the way the scope lookup of a variable happens is based on where the functions are defined, not where the functions are run
  - Nested functions are scoped the exact same as variables

### Hoisting

- Hoisting allows you to access functions and variables befor they have been created
- 2 things in JS that are hoisted (1) function declarations and (2) variable declarations
- function hoisting
  - Javascript compiler takes all of the function declarations and hoists them to to the top of the file so they're all available to use below, so you can technically run a function before it's been declared
  - only works for regular functions, not function expressions or arrow functions
  - Good practice to define all the functions first, or place in a separate module
- variable hoisting
  - Javascript hoists the variable declarations but not the values set

### Closures

- one of the scariest things in JS and comes up in interview quesions
- Closures is the ability to access parent level scope from a child level scope, even after the parent function has been terminated/closed over
- a closure is where you call the inner function at a later point in time, rether than in the parent function
- Use case: functions inside functions
  - Javascript is able to create a function inside of functions and it can still reach out to the parent scope and even though the outer function is done running, it'll still maintain the parent variables in memory so that we can access them later
  - when the inner scope references a variable that was created in the outer scope, this is referred to as a closure i.e we're still able to access variables from the outer scope, even after the outer scope function has been 'closed over'
- Use case: to create private variables
  - so the you can maintain a version of that variable for each instance of the outer function
  - Example
    - a parent game() function with a parent score variable,
    - and an inner function to increment the score
    - we can create multiple instances of game(), where each instance will keep track of it's own score variable value, as if score is it's own private variable
- Closure is the ability of an inner/ child function to access the variables from a higher level scope, even after the outer/ parent functions have been called/ closed over

### git

### github
