/// <reference path="../../../_references.d.ts" />
'use strict';
import * as angular         from 'angular';
import ListController       from './list/ListController';
import DetailsController    from './details/DetailsController';
import ListTemplate         from './list/list.html';
import DetailsTemplate      from './details/details.html';
import WidgetService        from './WidgetService';

export default angular.module('widgetRouter',[
    ListController.name,
    DetailsController.name,
    WidgetService.name
]).config((
    $routeProvider: angular.route.IRouteProvider
) => {
    $routeProvider.when('/widgets', {
        template: ListTemplate,
        controller: ListController.name,
        controllerAs: 'list'
    });

    $routeProvider.when('/widget/:widgetId', {
        template: DetailsTemplate,
        controller: DetailsController.name,
        controllerAs: 'details'
    });
});
