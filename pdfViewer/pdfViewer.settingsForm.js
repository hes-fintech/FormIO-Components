import baseEditForm from 'formiojs/components/_classes/component/Component.form';
import { pdfViewerDisplay } from './pdfViewer/pdfViewer.edit.display';

export const settingsForm = (...extend) => {
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
