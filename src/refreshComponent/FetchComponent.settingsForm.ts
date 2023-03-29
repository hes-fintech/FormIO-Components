import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { fetchComponentEditDisplay } from './FetchComponent.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: fetchComponentEditDisplay,
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