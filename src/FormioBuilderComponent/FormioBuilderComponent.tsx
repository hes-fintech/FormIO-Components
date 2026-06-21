import { Components, Utils } from '@formio/js';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { FormBuilder } from '@formio/react';
import { settingsForm } from './FormioBuilderComponent.settingsForm';
import { componentsSettings } from './ComponentsSettings';
import './styles/index.scss';

const Component = (Components as any).components.component;

type ContextType = {
    instance: any;
    instanceCurrentForm: any;
    componentKey: string;
    i18n: i18next.i18n;
    component: {
        disabled: boolean;
        customClass?: string;
    };
    dataForSetting: any[];
    parentDisabled: boolean;
    data: any;
    row: any;
    setValue: (arg: any) => void;
    isBuilderMode: boolean;
    _: LoDashStatic;
};

type FormioBuilderComponentProps = {
    context: ContextType;
};

const FormioBuilderReact = (props: FormioBuilderComponentProps) => {
    const { context } = props;

    const addComponentsToForm = (components: any[]) => {
        context.setValue(components);
    };

    return (
        <div
            className={`builderComponent ${
                context.component.disabled || context.parentDisabled
                    ? 'disabled-formio-component'
                    : ''
            }`}
        >
            <FormBuilder
                onChange={(scheme: any) => addComponentsToForm(scheme.components)}
                initialForm={{
                    display: 'form',
                    components: context?.dataForSetting,
                }}
                options={
                    {
                        noDefaultSubmitButton: true,
                        language: context.i18n.language,
                        i18next: context.i18n,
                        builder: {
                            basic: false,
                            advanced: false,
                            layout: false,
                            data: false,
                            premium: false,
                            customBasic: {
                                title: 'Basic Components',
                                default: true,
                                weight: 0,
                                components: {
                                    textfield: true,
                                    textarea: true,
                                    email: true,
                                    number: true,
                                    datetime: true,
                                    panel: true,
                                    select: true,
                                    checkbox: true,
                                    datagrid: true,
                                    file: {
                                        title: 'File',
                                        key: 'file',
                                        icon: 'file',
                                        schema: {
                                            type: 'file',
                                            input: true,
                                            storage: 'url',
                                            url: '/api/file',
                                            fileMaxSize: '20MB',
                                        },
                                    },
                                },
                            },
                        },
                        editForm: componentsSettings,
                    } as any
                }
            />
        </div>
    );
};

export class formioBuilderComponent extends Component {
    static get builderInfo() {
        return {
            title: 'Form builder',
            group: 'advanced',
            icon: 'building',
            schema: formioBuilderComponent.schema(),
        };
    }

    static schema() {
        return Component.schema({
            type: 'formioBuilderComponent',
        });
    }

    static editForm = settingsForm;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    shouldSkipValidation() {
        return true;
    }

    render() {
        return super.render(`<div ref="builderContainer"></div>`);
    }

    attach(element: HTMLElement) {
        super.attach(element);
        this.loadRefs(element, { builderContainer: 'single' });
        this.mountReact((this as any).refs.builderContainer);

        window.setTimeout(() => {
            (this as any).refresh();
        }, 0);
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
            instance: this,
            instanceCurrentForm: (this as any).currentForm,
            componentKey: (this as any).component.key,
            i18n: (this as any).i18next,
            component: (this as any).component,
            data: (this as any).data,
            row: (this as any).data,
            dataForSetting: (this as any)?.dataForSetting || [],
            parentDisabled: (this as any)?.parentDisabled,
            setValue: (value: any) => {
                (this as any).updateValue(value);
            },
            isBuilderMode: (this as any).builderMode || (this as any).options.preview,
            _: Utils._,
        };
        this.reactRoot = createRoot(element);
        this.reactRoot.render(<FormioBuilderReact context={context} />);
    }
}
