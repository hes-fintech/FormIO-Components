export const paginationComponentEditDisplay = [
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
        key: 'customClass',
        ignore: true,
    },
    {
        key: 'hidden',
        ignore: true,
    },
    {
        key: 'modalEdit',
        ignore: true,
    },
    {
        key: 'description',
        ignore: true,
    },
    {
        key: 'label',
        ignore: true,
    },
    {
        type: 'textfield',
        input: false,
        label: 'Items per page',
        key: 'itemsPerPage',
        weight: 0,
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Data source path',
        tooltip: 'Path to data in submission that will be paginated. Use it in case if you have full list in submission that should be paginated. No need to use it if you have endpoint with paginated data.',
        key: 'dataSourcePath',
        weight: 1,
    },
    {
        type: 'textfield',
        input: false,
        label: 'Total elements value path',
        tooltip: 'Path to total elements value in case you are use request for paginated data. Use it if you have endpoint with paginated data.',
        key: 'totalElementsValuePath',
        weight: 2,
    },
];