export const phoneInputApiEditDisplay = [
    {
        type: 'textfield',
        input: false,
        label: 'Property Name',
        tooltip: "The name of this field in the API endpoint.",
        key: 'nestedKey',     
        validate: {
            pattern: '(\\w|\\w[\\w-.]*\\w)',
            patternMessage: 'The property name must only contain alphanumeric characters, underscores, dots and dashes and should not be ended by dash or dot.',
            required: true
        },
        weight: 0,
    },
    {
        key: 'key',
        ignore: true,
    },
    {
        key: 'tags',
        ignore: true,
    },
    {
        key: 'properties',
        ignore: true,
    },
];