# js-webpack-template

- [License](#license)
- [How to Use](#how-to-use)
- [Repository Structure](#repository-structure)
  - [`.vscode`](#vscode)
  - [`src`](#src)
  - [`webpack`](#webpack)
  - [`LICENSE` and `README.MD`](#license-and-readmemd)
  - [Git Configuration](#git-configuration)
  - [Build dependencies and artifacts](#build-dependencies-and-artifacts)
- [Build Pipeline](#build-pipeline)
  - [NPM](#npm)
  - [Webpack](#webpack-1)
  - [Babel](#babel)
- [Code Styles and Linting](#code-styles-and-linting)
  - [EditorConfig](#editorconfig)
  - [Prettier](#prettier)
  - [ESLint](#eslint)
- [NPM Scripts](#npm-scripts)
  - [`clean`](#clean)
  - [`purge`](#purge)
  - [`build`](#build)
  - [`build:dev`](#builddev)
  - [`build:prod`](#buildprod)
  - [`copyStatic`](#copystatic)
  - [`start`](#start)
  - [`lint`](#lint)
  - [`lint:fix`](#lintfix)
- [TODO](#todo)

## License

BSD 2-Clause. See [LICENSE](/LICENSE) for details.

## How to Use

- Fork this repository or use as a template in Github <TODO: link>
- Checkout locally using `git clone`
- Install Node.js 12.17.0 <TODO: link> or (optionally) [install Nodist or nvm](#nodist-and-nvm)
- Run `npm install` to pull down the required dependencies
- Start coding :sunglasses:

## Repository Structure

The different directories and their contents are described here. Most of the files in the root directory are build and code style configurations and are described in the [Build Pipeline](#build-pipeline) and [Code Styles and Linting](#code-styles-and-linting) sections.

### `.vscode`

Contains some preconfigured settings and recommended extensions for getting started using VS Code.

### `src`

All source code is in here. See [the directory README](/src) for details.

### `webpack`

Contains Webpack build configuration files. See [Webpack](#webpack-1) for an overview of the build process or [the directory README](/webpack) for details.

### `LICENSE` and `README.MD`

`LICENSE` contains the terms under which this code is licensed.

`README.MD` is the file you are currently reading :wink:

### Git Configuration

These files are for configuring Git.

#### `.gitignore`

#### `.gitattributes`

### Build dependencies and artifacts

These directories are created during the build and should not be checked in. They are explicitly ignored in the `.gitignore` file.

#### `dist`

Build output will be put in here.

#### `node_modules`

NPM dependencies for the build will be downloaded into here when `npm install` is run.

## Build Pipeline

The build pipeline is pretty typical for a modern JavaScript app. NPM is used for dependency management and defining build scripts. The actual transpiling and bundling is done with Webpack using the Babel loader. This also adds the capability for running a dev server with hot reloading of code. The tools are documented here.

### NPM

#### Nodist and nvm

I've added optional support for version management of Node.js and NPM using [Nodist](https://github.com/nullivex/nodist) (for Windows) or [nvm](https://github.com/nvm-sh/nvm) (for macOS/Linux). These tools will ensure the required versions of Node.js and NPM are used.

### Webpack

### Babel

#### `babel-preset-env` and Browserslist

## Code Styles and Linting

The following tools are used for enforcing coding styles and linting code in order of precedence:

### EditorConfig

### Prettier

### ESLint

## NPM Scripts

These scripts are predefined in the `package.json` file to get you started. They can be run with `npm run <script> [-- <options>]`

### `clean`

Removes the `dist` directory to ensure the next build is run from a clean state.

### `purge`

Runs clean and also removes `node_modules` (so you will have to run `npm install`) again afterwards.

### `build`

Alias for [`build:prod`](#buildprod).

### `build:dev`

### `build:prod`

### `copyStatic`

### `start`

### `lint`

### `lint:fix`

## TODO

Fill in empty sections in documentation

Outlines for tests

React/JSX? (Fork)

TypeScript? (Fork)
