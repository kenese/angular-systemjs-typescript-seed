/// <reference path="../../../_references.d.ts" />
'use strict';
import * as angular    from 'angular';

class HomeController {
    public subtitle: string;

    constructor () {
        this.subtitle = 'Hello world!';
    }
}

export default angular.module('homeController', [])
    .controller('homeController', HomeController);
