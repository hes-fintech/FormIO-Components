export const dropdownComponentEditDisplay = [
    {
        type: 'textfield',
        input: false,
        label: 'Button name',
        key: 'buttonName',
        validate: {
            required: true,
        },
        weight: 0,
    },
    {
        type: 'datagrid',
        input: true,
        label: 'Start loading event',
        tooltip: 'Event that will trigger loader.',
        key: 'triggerEventsStartLoading',
        weight: 1,
        components: [
            {
                label: 'Events',
                key: 'event',
                input: true,
                type: 'textfield',
            },
        ],
    },
    {
        type: 'datagrid',
        input: true,
        label: 'Stop loading event',
        tooltip: 'Event that will remove loader.',
        key: 'triggerEventsStopLoading',
        weight: 2,
        components: [
            {
                label: 'Events',
                key: 'event',
                input: true,
                type: 'textfield',
            },
        ],
    },
    {
        key: 'label',
        ignore: true,
    },
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
        key: 'hidden',
        ignore: true,
    },
    {
        key: 'modalEdit',
        ignore: true,
    },
];
