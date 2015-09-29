/// <reference path="../../../_references.d.ts" />
'use strict';
import _                from 'lodash';
import angular          from 'angular';
import IWidgetModel     from 'IWidgetModel';
import IWidgetService   from './IWidgetService';
import { WidgetModel }  from './WidgetModel';

class WidgetService implements IWidgetService {
    private _widgetsJsonThatWouldProbablyBeAnApiResponse: Array<any>;

    constructor (private $http: angular.IHttpService) {
        //Hardcoding JSON data for demo purposes. But you may wish to use $http for AJAX calls
        this._widgetsJsonThatWouldProbablyBeAnApiResponse = [
            {id: 0, title: 'Cool widget', description: 'This widget is really cool!'},
            {id: 1, title: 'Rad widget', description: 'This widget is really rad!'},
            {id: 2, title: 'Awesome widget', description: 'This widget is really awesome!'},
            {id: 3, title: 'Super widget', description: 'This widget is really super!'},
            {id: 4, title: 'Neat widget', description: 'This widget is really neat!'}
        ];
    }

    public getWidget (widgetId: number): IWidgetModel {
        let widgetJson = _.find(this._widgetsJsonThatWouldProbablyBeAnApiResponse, (json: any) => {
            return json.id === widgetId;
        });
        return widgetJson
            ? new WidgetModel(widgetJson)
            : null;

        //Example of how an API request might look.
        //Note1: $http returns an angular.IPromise<IWidgetModel> so you'll need to update your return types and change how you're consuming the result
        //Note 2: Mapping into a defined model here, but you can just work directly with the returned JSON if you prefer
        /*
         return this.$http.get(`/myapi/widget/${widgetId}`)
         .then((apiResult: any) => {
         return new WidgetModel(apiResult);
         });
         */
    }

    public getWidgets (): Array<IWidgetModel> {
        return _.map(this._widgetsJsonThatWouldProbablyBeAnApiResponse, (json: any) => {
            return new WidgetModel(json);
        });

        //Example of how an API request might look.
        //Note1: $http returns an angular.IPromise<Array<IWidgetModel>> so you'll need to update your return types and change how you're consuming the result
        //Note 2: Mapping results into an array of defined models here, but you can just work directly with the returned JSON if you prefer
        /*
         return this.$http.get(`/myapi/widget?count=10`)
         .then((apiResults: Array<any>) => {
         return _.map(apiResults, (result) => {
         return new WidgetModel(apiResult);
         });
         });
         */
    }
}

export default angular.module('widgetService', [])
    .service('widgetService', WidgetService);
