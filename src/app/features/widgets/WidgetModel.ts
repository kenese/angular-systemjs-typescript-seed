/// <reference path="../../../_references.d.ts" />
'use strict';

import IWidgetModel from 'IWidgetModel';

export class WidgetModel implements IWidgetModel {
    public id: number;
    public title: string;
    public description: string;

    constructor(jsonBlob: any) {
        this.id = jsonBlob.id;
        this.title = jsonBlob.title;
        this.description = jsonBlob.description;
    }

    //Example of a read-only getter property adding richer behaviour to the model
    public get truncatedDescription(): string {
        let truncateLength = 16;
        if (this.description.length <= truncateLength) {
            return this.description;
        }
        return this.description.substring(0, truncateLength) + '...';
    }
}
