Phaser3 Es6 Webpack4 Boilerplate
===========

> Plain webpack 4 Boilerplate with Babel, SASS and Phaser3 on board

## Setup
You'll need to install a few things before you have a working copy of the project.

### 1. Clone this repo:
Navigate into your workspace directory.

Run:
```sh
$ git clone https://github.com/rafaeldelboni/phaser3-es6-webpack4.git
```
### 2. Install node.js and [yarn](https://yarnpkg.com/):
https://nodejs.org/en/

### 3. Install dependencies:
Navigate to the cloned repo's directory.

Run:
```sh
$ yarn
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:3000/](http://localhost:3000/)
```sh
$ yarn dev
```
## Deployment
Build the current application
```sh
$ yarn build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.

## Credits

Phaser + ES6: https://github.com/lean/phaser-es6-webpack  
Webpack 4 + Babel: https://github.com/cvgellhorn/webpack-boilerplate  
Phaser 3 + ES6 + Webpack 3: https://github.com/nkholski/phaser3-es6-webpack  
