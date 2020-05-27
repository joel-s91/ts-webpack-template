# js-webpack-template

## Table of Contents

- [License](#license)
- [How to Use](#how-to-use)
- [Repository Structure](#repository-structure)
- [Build Pipeline](#build-pipeline)
- [Code Styles and Linting](#code-styles-and-linting)
- [NPM Scripts](#npm-scripts)

## License

## How to Use

- Fork this repository or use as a template in Github <TODO: link>
- Checkout locally using `git clone`
- Install Node.js 12.17.0 <TODO: link> or (optionally) install Nodist or nvm <TODO: links>
- Run `npm install` to get the required dependencies
- Start coding :sunglasses:

## Repository Structure

The different directories and their contents are described here. Most of the files in the root directory are build and code style configurations and are described in the [Build Pipeline](#build-pipeline) and [Code Styles and Linting](#code-styles-and-linting) sections.

### `.vscode`

### `src`

### `webpack`

Contains Webpack build configuration files. See [Webpack](#webpack-1) for an overview of the build process or [the directory README](/webpack) for details.

### `LICENSE` and `README.MD`

### Git

These files are for configuring Git

#### `.gitignore`

#### `.gitattributes`

### Build dependencies and artifacts

These directories are created during the build and should not be checked in. They are explicitly ignored in the `.gitignore` file.

#### `dist`

#### `node_modules` 

## Build Pipeline

### NPM

#### Nodist and nvm

### Webpack

### Babel

#### `babel-preset-env` and Browserslist

## Code Styles and Linting

### EditorConfig

### Prettier

### ESLint

## NPM Scripts

### `clean`

Removes the `dist` directory

### `purge`

Runs clean and also removes `node_modules` (so you will have to run `npm install`) again afterwards

### `build`

Alias for [`build:prod`](#buildprod)

### `build:dev`

### `build:prod`

### `copyStatic`

### `start`

### `lint`

### `lint:fix`

## TODO

Outlines for tests
TOC
React/JSX? (Fork)
TypeScript? (Fork)
