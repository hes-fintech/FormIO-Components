import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { fetchComponentEditDisplay } from './FetchComponent.edit.display';
import { fetchComponentEditApi } from './FetchComponent.edit.api';
import { fetchComponentEditTrigger } from './FetchComponent.edit.trigger';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                label: 'Fetch',
                key: 'display',
                components: fetchComponentEditDisplay,
            },
            {
                key: 'api',
                components: fetchComponentEditApi,
            },
            {
                weight: 5,
                key: 'trigger',
                label: 'Trigger',
                components: fetchComponentEditTrigger,
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