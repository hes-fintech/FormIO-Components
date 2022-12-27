import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent, FormBuilder } from 'react-formio';
import { settingsForm } from './FormioBuilderComponent.settingsForm';

type InformationComponentType = any;

type ContextType = {
    instance: any;
    instanceCurrentForm: any;
    componentKey: string;
    i18n: i18next.i18n;
    component: InformationComponentType;
    data: any;
    row: any,
    setValue: (arg: any) => void;
    isBuilderMode: boolean;
    _: LoDashStatic;
};

type FormioBuilderComponentProps = {
    context: ContextType;
};

const FormioBuilderComponent = (props: FormioBuilderComponentProps) => {
    const { context } = props;
    const playerContainerFinds = (Utils as any).findComponents(context?.instance?.parent?.components, { key: 'formContainer' })
    const playerContainer = playerContainerFinds[0];
    const playerComponents = playerContainer.components;
    console.log(playerContainer, 'playerContainer')
    return (
        <FormBuilder
            onSaveComponent={(currentComponent, componentInstance, scheme) => {
                playerContainer.destroy();
                playerContainer.addComponent({
                    "label": "Container",
                    "tableView": false,
                    "key": "container",
                    "type": "container",
                    "input": true,
                    "components": scheme.components,
                })
                console.log(playerContainer, 'data')
                playerContainer.redraw()
            }}
            form={{ display: 'form' }}
            options={{
              // Controls for components categories
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
                      number: true
                    }
                  },
              },
              // Controls for specific component
              editForm: {
                  textfield: [
                      {
                          key: 'display',
                          ignore: true,
                      },
                      {
                          key: 'data',
                          ignore: true,
                      },
                      {
                          key: 'api',
                          ignore: true,
                      },
                      {
                          key: 'conditional',
                          ignore: true,
                      },
                      {
                          key: 'logic',
                          ignore: true,
                      },
                      {
                          weight: 0,
                          key: 'customDisplay',
                          type: 'textfield',
                          label: 'Display',
                          components: [
                              {
                                  weight: 0,
                                  type: 'textfield',
                                  input: true,
                                  key: 'label',
                                  label: 'Label',
                                  placeholder: 'Field Label',
                                  validate: {
                                      required: true,
                                  },
                              },
                          ],
                      },
                  ]
              }
            }}
        />
    );
}

export class formioBuilderComponent extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'Formio builder Component',
            group: 'Data',
            // TODO: Chnage icon
            icon: 'refresh',
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
            setValue: (value: any) => {
                (this as any).updateValue(value);
            },
            isBuilderMode: (this as any).builderMode || (this as any).options.preview,
            _: Utils._,
        };
        console.log(this, 'playerContainer1')
        
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
