import ContainerComponent from 'formiojs/components/container/Container';
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';
import { settingsForm } from './FormRendererComponent.settingsForm';

export class formRendererComponent extends ContainerComponent {
    static get builderInfo() {
        return {
            title: 'Form renderer Component',
            group: 'Data',
            // TODO: Chnage icon
            icon: 'refresh',
            schema: formRendererComponent.schema(),
        };
    }

    static schema() {
        return ContainerComponent.schema({
            key: 'formContainer',
        });
    }

    static editForm = settingsForm;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    shouldSkipValidation() {
        return true;
    }
}
