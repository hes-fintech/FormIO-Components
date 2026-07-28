import { Components, Utils } from '@formio/js';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import React from 'react';
import { createRoot, Root } from 'react-dom/client';

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
    row: any;
    _: LoDashStatic;
};

type IframeComponentProps = {
    context: ContextType;
    onChange: () => void;
};

class IframeComponent extends React.Component<any> {
    render() {
        const iframeRef = React.createRef<any>();
        const getAllowValue = () =>
            'geolocation; microphone; camera; midi; encrypted-media; accelerometer; gyroscope; deviceorientation; devicemotion;';
        return (
            <iframe
                ref={iframeRef}
                width={this.props.context.component.width}
                height={this.props.context.component.height}
                src={getTemplateString(this.props.context)}
                allow={getAllowValue()}
            />
        );
    }
}

const Component = (Components as any).components.component;

export class iframe extends Component {
    static get builderInfo() {
        return {
            title: 'Iframe',
            group: 'advanced',
            icon: 'film',
            schema: iframe.schema(),
        };
    }

    static schema() {
        return Component.schema({
            type: 'iframe',
        });
    }

    static editForm = settingsForm;

    reactRoot: Root | null = null;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    render() {
        return super.render(`<div ref="iframeContainer"></div>`);
    }

    attach(element: HTMLElement) {
        super.attach(element);
        (this as any).loadRefs(element, { iframeContainer: 'single' });
        this.mountReact((this as any).refs.iframeContainer);
    }

    detach() {
        this.reactRoot?.unmount();
        this.reactRoot = null;
        super.detach();
    }

    mountReact(element: HTMLElement) {
        const context: ContextType = {
            i18n: (this as any).i18next,
            component: (this as any).component,
            data: (this as any).data,
            row: (this as any).data,
            _: Utils._,
        };
        this.reactRoot = createRoot(element);
        this.reactRoot.render(
            <IframeComponent context={context} onChange={(this as any).updateValue} />,
        );
    }
}

const getTemplateString = (context: ContextType) => {
    const compiled = context._.template(context.component.src, {
        interpolate: /{{([\s\S]+?)}}/g,
    });
    return compiled(context);
};
