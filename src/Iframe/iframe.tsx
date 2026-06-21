import { Components, Utils } from '@formio/js';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import React from 'react';
import { createRoot, Root } from 'react-dom/client';

import { settingsForm } from './Iframe.settingsForm';

const Component = (Components as any).components.component;

type ContextType = {
    i18n: i18next.i18n;
    component: {
        src: string;
        width: string;
        height: string;
    };
    data: any;
    row: any;
    _: LoDashStatic;
};

class IframeComponent extends React.Component<{ context: ContextType }> {
    render() {
        const { context } = this.props;
        const getAllowValue = () =>
            'geolocation; microphone; camera; midi; encrypted-media; accelerometer; gyroscope; deviceorientation; devicemotion;';
        return (
            <iframe
                ref={React.createRef()}
                width={context.component.width}
                height={context.component.height}
                src={getTemplateString(context)}
                allow={getAllowValue()}
            />
        );
    }
}

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

    get className() {
        return `${(this as any).component.customClass}`;
    }

    render() {
        return super.render(`<div ref="iframeContainer"></div>`);
    }

    attach(element: HTMLElement) {
        super.attach(element);
        this.loadRefs(element, { iframeContainer: 'single' });
        this.mountReact((this as any).refs.iframeContainer);
    }

    reactRoot: Root | null = null;

    detach() {
        this.reactRoot?.unmount();
        this.reactRoot = null;
        super.detach();
    }

    mountReact(element: HTMLElement) {
        if (!element) return;
        const context: ContextType = {
            i18n: (this as any).i18next,
            component: (this as any).component,
            data: (this as any).data,
            row: (this as any).data,
            _: Utils._,
        };
        this.reactRoot = createRoot(element);
        this.reactRoot.render(<IframeComponent context={context} />);
    }
}

const getTemplateString = (context: ContextType) => {
    const compiled = context._.template(context.component.src, {
        interpolate: /{{([\s\S]+?)}}/g,
    });
    return compiled(context);
};
