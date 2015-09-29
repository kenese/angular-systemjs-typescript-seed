/// <reference path="../_references.d.ts" />
'use strict';
import * as angular from 'angular';

//This is the top level "app" controller.
//It is usually responsible for pan-app things, such as changing the document title,
//updating meta tags, or showing/hiding loading states as the application is booting up.

class AppController {
    public title: string;

    constructor () {
        this.title = 'FedEx App';
    }
}

export default angular.module('appController', [])
    .controller('appController', AppController);
