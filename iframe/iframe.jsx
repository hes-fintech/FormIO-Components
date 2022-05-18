import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';

import { settingsForm } from './Iframe.settingsForm';

class IframeComponent extends React.PureComponent {
    render() {
        const { context } = this.props;

        return (
            <iframe
                width={context.component.width}
                height={context.component.height}
                src={getTemplateString(context)}
            />
        );
    }
}

export class iframe extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'Iframe',
            group: 'Data',
            schema: iframe.schema(),
        };
    }

    static schema() {
        return ReactComponent.schema({
            type: 'iframe',
        });
    }

    static editForm = settingsForm;

    get className() {
        return `${this.component.customClass}`;
    }

    attachReact(element) {
        const context = {
            i18n: this.i18next,
            component: this.component,
            data: this.data,
            _: Utils._,
        };

        // eslint-disable-next-line react/no-render-return-value
        return ReactDOM.render(
            <IframeComponent context={context} onChange={this.updateValue} />,
            element,
        );
    }

    detachReact(element) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
}

const getTemplateString = (context) => {
    const compiled = context._.template(
        context.component.src,
        // eslint-disable-next-line no-param-reassign
        (context._.templateSettings.interpolate = /{{([\s\S]+?)}}/g),
    );

    return compiled(context);
};