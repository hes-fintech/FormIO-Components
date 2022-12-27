import ContainerComponent from 'formiojs/components/container/Container';
import { settingsForm } from './FormRendererComponent.settingsForm';

export class formRendererComponent extends ContainerComponent {
    static get builderInfo() {
        return {
            title: 'Form presentation',
            group: 'Data',
            icon: 'folder-open',
            schema: formRendererComponent.schema(),
        };
    }

    static schema(...extend) {
        return ContainerComponent.schema({
            key: 'formContainer',
        }, ...extend);
    }

    static editForm = settingsForm;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    shouldSkipValidation() {
        return true;
    }
}
