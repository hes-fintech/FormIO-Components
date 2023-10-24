import baseEditForm from 'formiojs/components/_classes/component/Component.form';
import { sliderComponentDisplay } from './sliderComponent.edit.display';
import { sliderComponentValidation } from './sliderComponent.edit.validation';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: sliderComponentDisplay,
            },
            {
                key: 'validation',
                components: sliderComponentValidation,
            },
            {
                key: 'data',
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
