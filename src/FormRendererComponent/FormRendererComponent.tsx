import ContainerComponent from 'formiojs/components/container/Container';
import { settingsForm } from './FormRendererComponent.settingsForm';

export class formRendererComponent extends ContainerComponent {
    static get builderInfo() {
        return {
            title: 'Form player',
            group: 'advanced',
            icon: 'indent',
            schema: formRendererComponent.schema(),
        };
    }

    static schema() {
        return ContainerComponent.schema({
            type: 'formRendererComponent',
        });
    }

    get defaultSchema() {
        if((this as any)?.component?.key) {
            (this as any).component.key = `${(this as any)?.component?.nestedKey}MainContainer`;
        }
        return formRendererComponent.schema();
    }

    static editForm = settingsForm;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    setComponents() {
        const isComponentDisabled = (this as any)?.parentDisabled || (this as any)?.disabled;

        if(!(this as any).builderMode) {
            const componentsForRender = getNestedValue((this as any).data, (this as any)?.component?.componentsKey);
            
            (this as any).addComponent({
                "label": "Container",
                "tableView": false,
                "key": (this as any)?.component?.nestedKey,
                "type": "container",
                "disabled": isComponentDisabled,
                "input": true,
                "components": componentsForRender,
            })
        }
    }

    render(children) {
        (this as any).type = 'formRendererComponent';
        window.setTimeout(() => {
            const componentsForRender = getNestedValue((this as any).data, (this as any)?.component?.componentsKey);
            if(componentsForRender?.length) {
                this.setComponents();
                (this as any).refresh();
            }
        }, 0)
        return super.render(children)
    }

    attach(element) {
        return super.attach(element);
    }
}

const getNestedValue = (obj: any, key: string) => {
    const splitCondition = ".";
    return key.split(splitCondition).reduce((result, key) => {
        return result?.[key]
    }, obj);
};
