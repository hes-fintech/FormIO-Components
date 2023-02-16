import NestedComponent from 'formiojs/components/_classes/nested/NestedComponent';
import { settingsForm } from './DropDownComponent.settingsForm';

export class dropDownComponent extends NestedComponent {
    static get builderInfo() {
        return {
            title: 'Dropdown Component',
            group: 'Data',
            icon: 'arrow-down',
            schema: dropDownComponent.schema(),
        };
    }

    get templateName() {
       return 'dropDownTemplate';
    }

    static schema(...extend) {
        return NestedComponent.schema({
            type: 'dropDownComponent',
            collapsible: true,
            components: [],
            clearOnHide: false,
            input: false,
            tableView: false,
            persistent: false
        }, ...extend);
    }

    get defaultSchema() {
        return dropDownComponent.schema();
    }

    static editForm = settingsForm;
}
