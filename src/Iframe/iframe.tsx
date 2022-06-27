import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';

import { settingsForm } from './Iframe.settingsForm';

type InformationComponentType = {
    src: string;
    width: string;
    height: string;
};

type ContextType = {
    i18n: i18next.i18n;
    component: InformationComponentType;
    data: any;
    _: LoDashStatic;
};

type IframeComponentProps = {
    context: ContextType;
    onChange: () => void;
};

class IframeComponent extends React.Component<IframeComponentProps> {

    render() {
        const iframeRef = React.createRef<any>();
        return (
            <iframe
                ref={iframeRef}
                width={this.props.context.component.width}
                height={this.props.context.component.height}
                src={getTemplateString(this.props.context)}
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
        return `${(this as any).component.customClass}`;
    }

    attachReact(element) {
        const context = {
            i18n: (this as any).i18next,
            component: (this as any).component,
            data: (this as any).data,
            _: Utils._,
        };

        // eslint-disable-next-line react/no-render-return-value
        return ReactDOM.render(
            <IframeComponent context={context} onChange={(this as any).updateValue} />,
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