import baseEditForm from 'formiojs/components/_classes/component/Component.form';

import { pdfViewerDisplay } from './PDFViewerComponent.edit.display';

export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: pdfViewerDisplay,
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
