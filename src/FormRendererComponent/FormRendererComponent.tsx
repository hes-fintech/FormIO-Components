import ContainerComponent from 'formiojs/components/container/Container';
import { settingsForm } from './FormRendererComponent.settingsForm';

export class formRendererComponent extends ContainerComponent {
    static get builderInfo() {
        return {
            title: 'Form player',
            group: 'Data',
            icon: 'indent',
            schema: formRendererComponent.schema(),
        };
    }

    static schema() {
        return ContainerComponent.schema({
            type: 'formRendererComponent',
        });
    }

    static editForm = settingsForm;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    setComponents() {
        if(!(this as any).builderMode) {
            const componentsForRender = (this as any).data.formioBuilderComponent;
            
            (this as any).addComponent({
                "label": "Container",
                "tableView": false,
                "key": (this as any)?.component?.nestedKey,
                "type": "container",
                "input": true,
                "components": componentsForRender,
            })
        }
    }

    render(children) {
        (this as any).type = 'formRendererComponent';
        window.setTimeout(() => {
            const componentsForRender = (this as any).data.formioBuilderComponent;
            if(componentsForRender?.length) {
                this.setComponents();
                (this as any).refresh();
            } else {
                (this as any).redraw();
            }
        }, 0)
        return super.render(children)
    }

    attach(element) {
        return super.attach(element);
    }
}
