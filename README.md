[![Build Status](https://travis-ci.org/CodefuseInc/manga-framework.svg?branch=master)](https://travis-ci.org/CodefuseInc/manga-framework)

## Manga-framework

This is an next gen eLearning framework written in React.

## Running

You must have [npm](https://www.npmjs.org/) installed on your computer.
From the root project directory run these commands from the command line:

`npm install`

This will install all dependencies.

To build the project, first run this command:

`npm start`

This will perform an initial build and start a watcher process that will
update bundle.js with any changes you wish to make.  This watcher is
based on 
* [Browserify](http://browserify.org/) and
* [Watchify](https://github.com/substack/watchify), and it transforms
* React's JSX syntax into standard JavaScript with [Reactify](https://github.com/andreypopp/reactify).


## Dev notes
* [Node version 4.4.2 or greater](https://nodejs.org/en/) needs to be installed for the tests to work 
* node-gyp is required to compile certain packages. This has a dependency on [Python](https://www.python.org/)



After starting the watcher, you can open `index.html` in your browser to
open the app.
