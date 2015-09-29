/// <reference path="../_references.d.ts" />
'use strict';

import * as angular from 'angular';
import HomeController from './features/home/HomeController';
import AboutController  from './features/about/AboutController';

// Pull in templates with html loader
import HomeTemplate from './features/home/home.html';
import AboutTemplate from './features/about/about.html';

//Pull in dependencies that are not directly used by this router but need to be required to be added into the bundle
import WidgetsRouter from './features/widgets/WidgetsRouter';    //This includes sub-routers
import AppController from './AppController';

export default angular.module('mainRouter', [
    HomeController.name,
    AboutController.name,
    WidgetsRouter.name,
    AppController.name
]).config((
        $routeProvider: angular.route.IRouteProvider,
        $locationProvider: angular.ILocationProvider
    ) => {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        template: HomeTemplate,
        controller: HomeController.name,
        controllerAs: 'home'
    });

    $routeProvider.when('/about', {
        template: AboutTemplate,
        controller: AboutController.name,
        controllerAs: 'about'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});
