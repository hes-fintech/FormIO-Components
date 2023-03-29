import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { refreshComponentEditDisplay } from './RefreshComponent.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: refreshComponentEditDisplay,
            },
            {
                key: 'data',
                ignore: true,
            },
            {
                key: 'validation',
                ignore: true,
            },
        ],
        ...extend,
    );
};