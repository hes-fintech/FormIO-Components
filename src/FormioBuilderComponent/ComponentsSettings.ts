export const componentsSettings = {
    textfield: [
        {
            key: 'display',
            ignore: true,
        },
        {
            key: 'data',
            ignore: true,
        },
        {
            key: 'api',
            ignore: true,
        },
        {
            key: 'conditional',
            ignore: true,
        },
        {
            key: 'logic',
            ignore: true,
        },
        {
            weight: 0,
            key: 'customDisplay',
            type: 'textfield',
            label: 'Display',
            components: [
                {
                    weight: 0,
                    type: 'textfield',
                    input: true,
                    key: 'key',
                    label: 'Component key in form',
                    placeholder: 'Field Label',
                    validate: {
                        required: true,
                    },
                },
                {
                    weight: 1,
                    type: 'textfield',
                    input: true,
                    key: 'label',
                    label: 'Label',
                    placeholder: 'Field Label',
                    validate: {
                        required: true,
                    },
                },
            ],
        },
    ],
    textarea: [
        {
            key: 'display',
            ignore: true,
        },
        {
            key: 'data',
            ignore: true,
        },
        {
            key: 'api',
            ignore: true,
        },
        {
            key: 'conditional',
            ignore: true,
        },
        {
            key: 'logic',
            ignore: true,
        },
        {
            weight: 0,
            key: 'customDisplay',
            type: 'textfield',
            label: 'Display',
            components: [
                {
                    weight: 0,
                    type: 'textfield',
                    input: true,
                    key: 'key',
                    label: 'Component key in form',
                    validate: {
                        required: true,
                    },
                },
                {
                    weight: 1,
                    type: 'textfield',
                    input: true,
                    key: 'label',
                    label: 'Label',
                    validate: {
                        required: true,
                    },
                },
            ],
        },
    ],
    email: [
        {
            key: 'display',
            ignore: true,
        },
        {
            key: 'data',
            ignore: true,
        },
        {
            key: 'api',
            ignore: true,
        },
        {
            key: 'conditional',
            ignore: true,
        },
        {
            key: 'logic',
            ignore: true,
        },
        {
            weight: 0,
            key: 'customDisplay',
            type: 'textfield',
            label: 'Display',
            components: [
                {
                    weight: 0,
                    type: 'textfield',
                    input: true,
                    key: 'key',
                    label: 'Component key in form',
                    validate: {
                        required: true,
                    },
                },
                {
                    weight: 1,
                    type: 'textfield',
                    input: true,
                    key: 'label',
                    label: 'Label',
                    validate: {
                        required: true,
                    },
                },
            ],
        },
    ],
    number: [
        {
            key: 'display',
            ignore: true,
        },
        {
            key: 'data',
            ignore: true,
        },
        {
            key: 'api',
            ignore: true,
        },
        {
            key: 'conditional',
            ignore: true,
        },
        {
            key: 'logic',
            ignore: true,
        },
        {
            weight: 0,
            key: 'customDisplay',
            type: 'textfield',
            label: 'Display',
            components: [
                {
                    weight: 0,
                    type: 'textfield',
                    input: true,
                    key: 'key',
                    label: 'Component key in form',
                    validate: {
                        required: true,
                    },
                },
                {
                    weight: 1,
                    type: 'textfield',
                    input: true,
                    key: 'label',
                    label: 'Label',
                    validate: {
                        required: true,
                    },
                },
            ],
        },
    ],
}
