/// <reference path="../_references.d.ts" />
'use strict';

// Entry point for our application. Start by pulling in angular + tangram
import * as angular from 'angular';
import 'angular-route';

// Pull in the router which defines the structure of your application
import EntryRouter from './EntryRouter';

// Create the root angular module for your application
angular.module('fedexApp', [
    'ngRoute',
    EntryRouter.name
]);

// Finally, bootstrap angular
angular.bootstrap(document, ['fedexApp'], { });
