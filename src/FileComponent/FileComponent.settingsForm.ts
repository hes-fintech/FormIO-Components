import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { FileComponentEditDisplay } from './FileComponent.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: FileComponentEditDisplay,
            },
            {
                key: 'data',
                ignore: true,
            },
        ],
        ...extend,
    );
};