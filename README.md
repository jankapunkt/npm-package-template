# :package: NPM Package Template :package:

![Test suite](https://github.com/jankapunkt/npm-package-template/workflows/Test%20suite/badge.svg)
[![Build Status](https://travis-ci.org/jankapunkt/npm-package-template.svg?branch=master)](https://travis-ci.org/jankapunkt/npm-package-template)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![GitHub](https://img.shields.io/github/license/jankapunkt/npm-package-template)

Minimal tested and fully functional NPM package template project for ES6+ Javascript.

## About this package

This template is intended to allow you to **start developing immediatly** with a working set
of tools and scripts that play well together.

It is little opinionated to the point, that only the most basic tools are integrated.
If you want a different flavour you can fork this project and easily replace the tools or add new ones.

## Which tools are used?

All tools are only defined as **`dev-dependencies`**:

* [Babel](https://babeljs.io/) for transpiling ES6+ to ES5 plus minification, sourcemaps etc.
* [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com) for testing
* [Istanbul](https://istanbul.js.org/) for code coverage
* [Standard](https://standardjs.com/) for linting
* [JSDoc](https://jsdoc.app/) for documentation and [jsdoc-to-markdown](https://www.npmjs.com/package/jsdoc-to-markdown) to create docs as markdown files
* [Travis-CI](https://travis-ci.org/) for continuous integration
* [GitHub actions](https://github.com/features/actions) for continuous integration


## Getting started

Just create your Js files in the `./lib` folder and add the tests in the `test` folder.


## Code Quality

We use `standard` as opinionated but zero-config linter.
You can run lint in two modes:

##### lint 
 
```bash
$ npm run lint
``` 

##### lint with auto fixing

```bash
$ npm run lint:fix
``` 

## Run the tests

We use mocha and chai with a mostly (but not strict) behavioural style for testing.
You can run the tests in three different contexts:

##### Single run

```bash
$ npm run test
``` 

##### Watch mode

```bash
$ npm run test:watch
``` 

##### Coverage

```bash
$ npm run test:coverage
``` 

## Documentation

Documentation is using jsDoc and is available as [html](docs/index.html) or [markdown](api.md) version.

To build the documentation in development, you need to run 

```bash
$ npm run docs
``` 

## License

MIT, see [license file](LICENSE)
