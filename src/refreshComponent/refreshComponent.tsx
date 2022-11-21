import { Utils, Form } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import _ from 'lodash';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';

import { settingsForm } from './Refresh.settingsForm';

type RequestBodyItem = {
    key: string,
    value: string
};

type InformationComponentType = {
    url: string;
    requestType: 'GET' | 'POST';
    requestBody: RequestBodyItem[];
    firstRenderRequest: boolean;
    requestDelay: number;
};

type ContextType = {
    i18n: i18next.i18n;
    component: InformationComponentType;
    data: any;
    setValue: (arg: any) => void;
    isBuilderMode: boolean;
    _: LoDashStatic;
    updateDataGrid: () => void;
};

type RefreshComponentProps = {
    context: ContextType;
    onChange: () => void;
};

const RefreshComponent = (props: RefreshComponentProps) => {
    const { context } = props;
    const getDataDebounced = _.debounce(getData, context.component.requestDelay);

    useEffect(() => {
        if (!context.isBuilderMode) {
            getDataDebounced(props.context);
        };
    }, []);

    return (
        <div>
            {context.isBuilderMode && (
                <label className="col-form-label">
                    {context.component.url ? `"${context.component.requestType}" request, to url: "${context.component.url}"` : "Request component"}
                </label>
            )}
            <div className={`${context.isBuilderMode ? "drag-container" : ""}`}>
                {context.isBuilderMode && (
                    <p>
                        <b>"{context.component.requestType}" </b>
                        request, to url: <b>"{context.component.url}"</b>
                    </p>
                )}
            </div>
        </div>
    );
}

export class refreshComponent extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'Fetch Component',
            group: 'Data',
            icon: 'refresh',
            schema: refreshComponent.schema(),
        };
    }

    static schema() {
        return ReactComponent.schema({
            type: 'refreshComponent',
        });
    }

    static editForm = settingsForm;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    updateDataGrid = () => {
        const dataGrids = (Utils as any).findComponents((this as any)?._currentForm?.components, { type: 'datagrid' });
        dataGrids?.forEach(async (dataGrid) => {
            await dataGrid.rebuild();
        });
    }

    attachReact(element: HTMLElement) {
        const context = {
            i18n: (this as any).i18next,
            component: (this as any).component,
            data: (this as any).data,
            row: (this as any).data,
            setValue: (value: any) => {
                (this as any).updateValue(value);
            },
            isBuilderMode: (this as any).builderMode || (this as any).options.preview,
            _: Utils._,
            updateDataGrid: this.updateDataGrid.bind(this),
        };
        // eslint-disable-next-line react/no-render-return-value
        return ReactDOM.render(
            <RefreshComponent context={context} onChange={(this as any).updateValue} />,
            element,
        );
    }

    detachReact(element: HTMLElement) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
}

const getTemplateStringContext = (context: ContextType) => {
    const compiled = context._.template(
        context.component.url,
        // eslint-disable-next-line no-param-reassign
        (context._.templateSettings.interpolate = /{{([\s\S]+?)}}/g) as any,
    );

    return compiled(context);
};

const getTemplateString = (context: ContextType, value: string) => {
    const compiledValue = getNestedValue(context, value?.substring(value.lastIndexOf("{{") + 2, value.lastIndexOf("}}")));

    return getValueWithType(compiledValue);
};

const getData = (context: ContextType) => {
    const requestBody = getRequestBody(context);
    const requestUrlParams = `?${new URLSearchParams(requestBody)}`;
    const requestType = context.component?.requestType;
    const postRequestOptions = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(requestBody),
    };
    const requestOptions = requestType === 'POST' ? postRequestOptions : {};
    const requestUrl = requestType === 'GET' ? requestUrlParams : "";
    fetch(`${getTemplateStringContext(context)}${requestUrl}`, {
        method: requestType,
        ...requestOptions,
    }).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        context.setValue(jsonResponse);
    }).then(() => {
        context.updateDataGrid();
    });
};

const getRequestBody = (context: ContextType) => {
    return context?.component?.requestBody?.reduce((initial, current: RequestBodyItem) => {
        return {
            ...initial,
            [current.key]: getTemplateString(context, current.value),
        };
    }, {});
};

const getValueWithType = (value: any) => {
    if (typeof (value) === "object") {
        return value;
    } else {
        if (isNaN(+value)) {
            return value ? value : null;
        } else {
            return value ? +value : null;
        };
    };
};

const getNestedValue = (obj: any, key: string) => {
    const splitCondition = key.includes("?") ? "?." : ".";
    return key.split(splitCondition).reduce((result, key) => {
        return result?.[key]
    }, obj);
};
