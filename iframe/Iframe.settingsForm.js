import {baseEditForm} from 'formiojs/components/_classes/component';

import iframeEditDisplay from './Iframe.edit.display';

export default settingsForm = (...extend) => {
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