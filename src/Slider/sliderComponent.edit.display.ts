export const sliderComponentDisplay = [
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
        input: false,
        label: 'Slider title',
        key: 'sliderTitle',
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Prefix',
        key: 'prefix',
    },
    {
        type: 'textfield',
        input: false,
        label: 'Suffix',
        key: 'suffix',
    },
    {
        type: 'textfield',
        input: false,
        label: 'Min',
        key: 'minTerm',
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Max',
        key: 'maxTerm',
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Initial value',
        key: 'initialValue',
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Slider step',
        key: 'sliderStep',
        defaultValue: 1,
        validate: {
            required: true,
        },
    },
];