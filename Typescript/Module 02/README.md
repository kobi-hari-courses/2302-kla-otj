# Module 2 - Typescript Basics

## Projects
|     |     |
| --- | --- |
| [fun-with-ts](./projects/fun-with-ts/) | Working with Typescript - how to create development environment | 
| [ts-basic-types](./projects/ts-basic-types/) | About the basic types of typescript |


## Work Environment
* We saw how to turn a folder into an npm package by running `npm init`
* We saw how to use the node.js `require` command in order to incorporate another module (file) into our code
* We saw how the `package.json` file manages the project as a package.
* We saw how to install external packages using `npm install` and the `package.json > dependencies` section
* We talked about the diffrence between `dependencies` and `devDependencies` 
* We saw how to use scripts in node.js
* We saw how to install the typescript compiler into the package
* We saw how to create the `tsconfig.json` file and configure different aspects of the typescript project
  * What the target version of javascript is
  * Where to locate the source files
  * Where to place the compiled files
  * Libreries to include
  * Adding `map` files to support debugging
  * Running in the compiler in `watch` mode for continous compilation
* We saw how to configure the `VS Code Debugger` for work with our `node.js` project


## Typescript basics
* We learned about the basic types of typescript
  * The 6 atomic types of javascript: `boolean`, `number`, `string`, `object`, `function` and `undefined`
  * Typed arrays: `number[]` and `Array<number>`
  * Tuples: `[number, number], [string, boolean, number]`
  * Fixed object notation: `{x: number, y: boolean}`
  * Flexible object notation: `{[key: string]: number}` and the equivilent: `Record<string, number>`
  * Function notation: `(x: number, y: string) => boolean` 


