import baseEditForm from 'formiojs/components/_classes/component/Component.form';
import { dropdownComponentEditDisplay } from './DropDownComponent.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: dropdownComponentEditDisplay,
            },
            {
                key: 'api',
                ignore: true,
            },
            {
                key: 'data',
                ignore: true,
            },
            {
                key: 'validation',
                ignore: true,
            },
            {
                key: 'logic',
                ignore: true,
            },
            {
                key: 'layout',
                ignore: true,
            },
            {
                key: 'addons',
                ignore: true,
            },
        ],
        ...extend,
    );
};