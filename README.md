# Wes Bos [Beginner JavaScript](https://beginnerjavascript.com/) Course

## Notes

- Chrome Dev Tools
  - Shortcut for Console `Ctrl` `Shift` `J`
  - Shortcut for Inspect Element `Ctrl` `Shift` `I`
- Windows Command Prompt vs. Linux Terminal
  - Clear: `cls` vs `clear`
  - List directories: `dir` vs `ls`
- Relative file paths
  - same directory: `./file.js`
  - one directory up: `../file.js`
- Running and loading JS
  - In command prompt/ terminal via node: `node file.js`
- Tooling
  - ESLint
    - JS Linter tool
    - to indentify/ report on JS issues (bad practices/ design patterns, unused variables/ functions)
    - modifiable config - can use someone else's like from [wes bos](https://github.com/wesbos/eslint-config-wesbos)
    - best practice to set the cofig locally, but can do globally
    - pluggable - many plugins available e.g. for Vue, React, Angular, Prettier
  - Prettier
    - Formats code
    - quit opinionated, only a few settings availabel to toggle
- Node
  - `npm init` via terminal for your project folder, in order to create a `package.json` file for depdendencies like ESLint and Prettier
- Types in JS

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

  -

- git
- github
