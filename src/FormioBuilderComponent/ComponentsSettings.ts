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
            key: 'attributes',
            ignore: true,
        },
        {
            key: 'layout',
            ignore: true,
        },
        {
            key: 'validation',
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
        {
          label: 'Validation',
          key: 'customValidation',
          weight: 2,
          components: [
            {
              weight: 10,
              type: 'checkbox',
              label: 'Required',
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
            },
            {
              weight: 100,
              type: 'checkbox',
              label: 'Unique',
              tooltip: 'Makes sure the data submitted for this field is unique, and has not been submitted before.',
              key: 'unique',
              input: true
            },
            {
              weight: 0,
              type: 'select',
              key: 'validateOn',
              defaultValue: 'change',
              input: true,
              label: 'Validate On',
              tooltip: 'Determines when this component should trigger front-end validation.',
              dataSrc: 'values',
              data: {
                values: [
                  { label: 'Change', value: 'change' },
                  { label: 'Blur', value: 'blur' }
                ]
              }
            },
            {
              weight: 190,
              type: 'textfield',
              input: true,
              key: 'errorLabel',
              label: 'Error Label',
              placeholder: 'Error Label',
              tooltip: 'The label for this field when an error occurs.'
            },
            {
              weight: 200,
              key: 'validate.customMessage',
              label: 'Custom Error Message',
              placeholder: 'Custom Error Message',
              type: 'textfield',
              tooltip: 'Error message displayed if any error occurred.',
              input: true
            },
          ]
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
            key: 'attributes',
            ignore: true,
        },
        {
            key: 'layout',
            ignore: true,
        },
        {
            key: 'validation',
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
        {
          label: 'Validation',
          key: 'customValidation',
          weight: 2,
          components: [
            {
              weight: 10,
              type: 'checkbox',
              label: 'Required',
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
            },
            {
              weight: 100,
              type: 'checkbox',
              label: 'Unique',
              tooltip: 'Makes sure the data submitted for this field is unique, and has not been submitted before.',
              key: 'unique',
              input: true
            },
            {
              weight: 0,
              type: 'select',
              key: 'validateOn',
              defaultValue: 'change',
              input: true,
              label: 'Validate On',
              tooltip: 'Determines when this component should trigger front-end validation.',
              dataSrc: 'values',
              data: {
                values: [
                  { label: 'Change', value: 'change' },
                  { label: 'Blur', value: 'blur' }
                ]
              }
            },
            {
              weight: 190,
              type: 'textfield',
              input: true,
              key: 'errorLabel',
              label: 'Error Label',
              placeholder: 'Error Label',
              tooltip: 'The label for this field when an error occurs.'
            },
            {
              weight: 200,
              key: 'validate.customMessage',
              label: 'Custom Error Message',
              placeholder: 'Custom Error Message',
              type: 'textfield',
              tooltip: 'Error message displayed if any error occurred.',
              input: true
            },
          ]
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
            key: 'attributes',
            ignore: true,
        },
        {
            key: 'layout',
            ignore: true,
        },
        {
            key: 'validation',
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
        {
          label: 'Validation',
          key: 'customValidation',
          weight: 2,
          components: [
            {
              weight: 10,
              type: 'checkbox',
              label: 'Required',
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
            },
            {
              weight: 100,
              type: 'checkbox',
              label: 'Unique',
              tooltip: 'Makes sure the data submitted for this field is unique, and has not been submitted before.',
              key: 'unique',
              input: true
            },
            {
              weight: 0,
              type: 'select',
              key: 'validateOn',
              defaultValue: 'change',
              input: true,
              label: 'Validate On',
              tooltip: 'Determines when this component should trigger front-end validation.',
              dataSrc: 'values',
              data: {
                values: [
                  { label: 'Change', value: 'change' },
                  { label: 'Blur', value: 'blur' }
                ]
              }
            },
            {
              weight: 190,
              type: 'textfield',
              input: true,
              key: 'errorLabel',
              label: 'Error Label',
              placeholder: 'Error Label',
              tooltip: 'The label for this field when an error occurs.'
            },
            {
              weight: 200,
              key: 'validate.customMessage',
              label: 'Custom Error Message',
              placeholder: 'Custom Error Message',
              type: 'textfield',
              tooltip: 'Error message displayed if any error occurred.',
              input: true
            },
          ]
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
            key: 'attributes',
            ignore: true,
        },
        {
            key: 'layout',
            ignore: true,
        },
        {
            key: 'validation',
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
        {
          label: 'Validation',
          key: 'customValidation',
          weight: 2,
          components: [
            {
              weight: 10,
              type: 'checkbox',
              label: 'Required',
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
            },
            {
              weight: 100,
              type: 'checkbox',
              label: 'Unique',
              tooltip: 'Makes sure the data submitted for this field is unique, and has not been submitted before.',
              key: 'unique',
              input: true
            },
            {
              weight: 0,
              type: 'select',
              key: 'validateOn',
              defaultValue: 'change',
              input: true,
              label: 'Validate On',
              tooltip: 'Determines when this component should trigger front-end validation.',
              dataSrc: 'values',
              data: {
                values: [
                  { label: 'Change', value: 'change' },
                  { label: 'Blur', value: 'blur' }
                ]
              }
            },
            {
              weight: 190,
              type: 'textfield',
              input: true,
              key: 'errorLabel',
              label: 'Error Label',
              placeholder: 'Error Label',
              tooltip: 'The label for this field when an error occurs.'
            },
            {
              weight: 200,
              key: 'validate.customMessage',
              label: 'Custom Error Message',
              placeholder: 'Custom Error Message',
              type: 'textfield',
              tooltip: 'Error message displayed if any error occurred.',
              input: true
            },
          ]
        },
    ],
}
