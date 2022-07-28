export const pdfViewerDisplay = [
    {
        key: 'placeholder',
        ignore: true,
    },
    {
        key: 'labelPosition',
        ignore: true,
    },
    {
        key: 'tooltip',
        ignore: true,
    },
    {
        key: 'tabindex',
        ignore: true,
    },
    {
        key: 'autofocus',
        ignore: true,
    },
    {
        key: 'hideLabel',
        ignore: true,
    },
    {
        key: 'disabled',
        ignore: true,
    },
    {
        key: 'tableView',
        ignore: true,
    },
    {
        key: 'autofocus',
        ignore: true,
    },
    {
        key: 'label',
        ignore: true,
    },
    {
        type: 'textfield',
        weight: 0,
        input: false,
        label: 'Src',
        tooltip:
            'you can get data from formio, use http://localhost/profile?id={{data.id}}',
        key: 'src',
        validate: {
            required: true,
        },
    },
    {
        type: 'checkbox',
        weight: 1,
        label: 'Enable pagination',
        key: 'withPagination',
    },
    {
        type: 'checkbox',
        weight: 2,
        label: 'Enable file download',
        key: 'withDownload',
    },
    {
        type: 'checkbox',
        weight: 3,
        label: 'Enable zoom',
        key: 'withZoom',
    },
];
