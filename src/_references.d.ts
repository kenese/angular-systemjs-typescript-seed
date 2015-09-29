/*
	This file contains hints for the typescript compiler about globals, 3rd party libs etc that exist, but that typescript has no way of knowing about.
	Include a reference to this file at the top of each of your TypeScript files, and these compiler hints will be "in scope".
	Note that this file does not actually generate any JavaScript when run through the compiler, it just provides compiler hints.
*/

/*
	First, import the 3rd party library references. These are managed with a library called 'tsd'.
	To add a new 3rd party references file:
	npm install tsd -g
	(globally installs tsd on your system, so you can run it from your command line - only need to do this once)
	tsd query angular -r -o -s -a install
	(replacing angular with the 3rd party library you're looking for. You can browse all available definition files here: https://github.com/borisyankov/DefinitelyTyped)
*/
/// <reference path="typings/tsd.d.ts" />

/*
	Next, we provide hints about a few nodeJS things which the build uses, but TypeScript does not know about.
*/
declare var require: (id: string) => any;	// Definition for browserify require:
declare var __dirname: string;	// Declare global NodeJS __dirname variable:
declare module 'fs' {	// Declare global NodeJS 'fs' module for Browserify:
  export function readFileSync (filename: string, encoding: string): string;
}
