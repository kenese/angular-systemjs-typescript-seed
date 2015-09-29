/// <reference path="../../../_references.d.ts" />
'use strict';

import IWidgetModel from './IWidgetModel';

interface IWidgetService {
    getWidget(widgetId: number): IWidgetModel;
    getWidgets(): Array<IWidgetModel>;
}

export default IWidgetService;
