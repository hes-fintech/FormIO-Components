import baseEditForm from 'formiojs/components/_classes/component/Component.form';
import { formRendererComponentEditDisplay } from './FormRendererComponent.edit.display';
import { formRendererComponentApiEditDisplay } from './FormRendererComponentApi.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: formRendererComponentEditDisplay,
            },
            {
                key: 'api',
                components: formRendererComponentApiEditDisplay,
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