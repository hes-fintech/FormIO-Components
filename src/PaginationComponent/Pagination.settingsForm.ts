import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { paginationComponentEditDisplay } from './PaginationComponent.edit.display';
import { paginationComponentApiEditDisplay } from './PaginationComponentApi.edit.display';
import { paginationComponentApiEditData } from './PaginationComponentApi.edit.data';

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
                components: paginationComponentApiEditData,
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