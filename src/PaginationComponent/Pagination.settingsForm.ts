import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { paginationComponentEditDisplay } from './PaginationComponent.edit.display';
import { paginationComponentApiEditDisplay } from './PaginationComponentApi.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: paginationComponentEditDisplay,
            },
            {
                key: 'api',
                components: paginationComponentApiEditDisplay,
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
            {
                key: 'conditional',
                ignore: true,
            },
        ],
        ...extend,
    );
};