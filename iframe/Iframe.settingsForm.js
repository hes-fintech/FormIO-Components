import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { iframeEditDisplay } from './Iframe.edit.display';

export const settingsForm = (...extend) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: iframeEditDisplay,
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
