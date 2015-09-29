/// <reference path="../../../../_references.d.ts" />
'use strict';
import angular          from 'angular';
import IWidgetService   from '../IWidgetService';
import IWidgetModel     from '../IWidgetModel';
import WidgetService    from '../WidgetService';

class ListController {
    public widgets: Array<IWidgetModel>;

    constructor (widgetService: IWidgetService) {
        this.widgets = widgetService.getWidgets();
    }

    public get hasResults (): boolean {
        return !!this.widgets.length;
    }

    public displayWidgetCount (): void {
        let count = this.widgets.length;

        alert(`There are ${count} widgets!`);
    }
}

export default angular.module('listController', [
    WidgetService.name
]).controller('listController', ListController);
export = ListController;
