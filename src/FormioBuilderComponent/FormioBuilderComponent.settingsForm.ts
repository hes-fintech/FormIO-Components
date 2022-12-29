import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { formioBuilderComponentEditDisplay } from './FormioBuilderComponent.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: formioBuilderComponentEditDisplay,
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