import baseEditForm from '@formio/js/components/_classes/component/Component.form';

import { selectComponentEditData } from './SelectComponent.edit.data';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                label: 'Data',
                key: 'data',
                components: selectComponentEditData,
            },
        ],
        ...extend,
    );
};