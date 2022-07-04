import baseEditForm from 'formiojs/components/_classes/component/Component.form';
import { sliderComponentDisplay } from './sliderComponent.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: sliderComponentDisplay,
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
