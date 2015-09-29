/// <reference path="../../../../_references.d.ts" />
'use strict';
import angular	        from 'angular';
import IWidgetService   from '../IWidgetService';
import WidgetService   from '../WidgetService';
import IWidgetModel     from '../IWidgetModel';

class DetailsController {
    public widget: IWidgetModel;
    public widgetId: number;

    constructor(
        widgetService: IWidgetService,
        $routeParams: { widgetId: string }
    ) {
        this.widgetId = +$routeParams.widgetId;
        this.widget = widgetService.getWidget(this.widgetId);
    }

    public get showNotFoundMessage(): boolean {
        return this.widget === null;
    }
}

export default angular.module('detailsController', [
    WidgetService.name
]).controller('detailsController', DetailsController);
