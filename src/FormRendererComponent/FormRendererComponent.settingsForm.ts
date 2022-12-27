import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { formRendererComponentEditDisplay } from './FormRendererComponent.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: formRendererComponentEditDisplay,
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