import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent, FormBuilder } from 'react-formio';
import { settingsForm } from './FormioBuilderComponent.settingsForm';
import { componentsSettings } from './ComponentsSettings';
import './styles/index.scss'

type InformationComponentType = {
    nestedFormKey: string;
    textFieldComponent: boolean;
    textAreaComponent: boolean;
    emailComponent: boolean;
    numberComponent: boolean;
    fileComponent: boolean;
    dateTimeComponent: boolean;
    panelComponent: boolean;
    columnsComponent: boolean;
    disabled: boolean;
    selectComponent: boolean;
    checkboxComponent: boolean;
    datagridComponent: boolean;
};

type ContextType = {
    instance: any;
    instanceCurrentForm: any;
    componentKey: string;
    i18n: i18next.i18n;
    component: InformationComponentType;
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

const FormioBuilderComponent = (props: FormioBuilderComponentProps) => {
    const { context } = props;

    const addComponentsToForm = (components: any[]) => {
        context.setValue(components);
    };

    return (
        <div
            className={`builderComponent ${
                (context.component.disabled || context.parentDisabled) ? 'disabled-formio-component' : ''
            }`}
        >
            <FormBuilder
                onSaveComponent={(
                    currentComponent,
                    componentInstance,
                    scheme,
                ) => {
                    addComponentsToForm(scheme.components);
                }}
                onDeleteComponent={(
                    currentComponent,
                    componentInstance,
                    scheme,
                ) => {
                    addComponentsToForm(scheme.components);
                }}
                form={{
                    display: 'form',
                    components: context?.dataForSetting,
                }}
                options={{
                    noDefaultSubmitButton: true,
                    // Controls for component categories
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
                                textfield: context.component.textFieldComponent,
                                textarea: context.component.textAreaComponent,
                                email: context.component.emailComponent,
                                number: context.component.numberComponent,
                                datetime: context.component.dateTimeComponent,
                                panel: context.component.panelComponent,
                                columns: context.component.columnsComponent,
                                select: context.component.selectComponent,
                                checkbox: context.component.checkboxComponent,
                                datagrid: context.component.datagridComponent,
                                file: context.component.fileComponent ? {
                                    title: 'file',
                                    key: 'file',
                                    icon: 'file',
                                    schema: {
                                      type: 'file',
                                      input: true,
                                      storage: 'url',
                                      url: '/api/file',
                                      fileMaxSize: '20MB',
                                    }
                                  } : null,
                            },
                        },
                    },
                    // Controls for specific component
                    editForm: componentsSettings,
                }}
            />
        </div>
    );
};

export class formioBuilderComponent extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'Form builder',
            group: 'Data',
            icon: 'building',
            schema: formioBuilderComponent.schema(),
        };
    }

    static schema() {
        return ReactComponent.schema({
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

    attachReact(element: HTMLElement) {
        const context = {
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

        window.setTimeout(() => {
            (this as any).refresh();
        }, 0);

        return ReactDOM.render(
            <FormioBuilderComponent context={context} />,
            element,
        );
    }

    detachReact(element: HTMLElement) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
}
