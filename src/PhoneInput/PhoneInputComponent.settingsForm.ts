import baseEditForm from 'formiojs/components/_classes/component/Component.form';
import { phoneInputComponentEditDisplay } from './PhoneInput.edit.display';
import { phoneInputApiEditDisplay } from './PhoneInputComponentApi.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: phoneInputComponentEditDisplay,
            },
            {
                key: 'api',
                components: phoneInputApiEditDisplay,
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