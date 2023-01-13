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
    datetime: [
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
    panel: [
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
    columns: [
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
              {
                weight: 2,
                type: 'datagrid',
                input: true,
                key: 'columns',
                label: 'Column Properties',
                addAnother: 'Add Column',
                tooltip: 'The width, offset, push, and pull settings for each column.',
                reorder: true,
                components: [
                  {
                    type: 'hidden',
                    key: 'components',
                    defaultValue: []
                  },
                  {
                    type: 'select',
                    key: 'size',
                    defaultValue: 'md',
                    label: 'Size',
                    data: {
                      values: [
                        { label: 'xs', value: 'xs' },
                        { label: 'sm', value: 'sm' },
                        { label: 'md', value: 'md' },
                        { label: 'lg', value: 'lg' },
                        { label: 'xl', value: 'xl' },
                      ],
                    },
                  },
                  {
                    type: 'number',
                    key: 'width',
                    defaultValue: 6,
                    label: 'Width'
                  },
                  {
                    type: 'number',
                    key: 'offset',
                    defaultValue: 0,
                    label: 'Offset'
                  },
                  {
                    type: 'number',
                    key: 'push',
                    defaultValue: 0,
                    label: 'Push'
                  },
                  {
                    type: 'number',
                    key: 'pull',
                    defaultValue: 0,
                    label: 'Pull'
                  }
                ]
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
    datagrid: [
    {
      key: 'api',
      ignore: true,
    },
    {
      key: 'layout',
      ignore: true,
    },
    {
      key: 'logic',
      ignore: true,
    },
    {
      key: 'data',
      ignore: true,
    },
    {
      key: 'display',
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
    checkbox: [
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
          tooltip:
            'The label for this field that will appear next to it.',
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
          tooltip:
            'A required field must be filled in before the form can be submitted.',
          key: 'validate.required',
          input: true,
        },
        {
          weight: 190,
          type: 'textfield',
          input: true,
          key: 'errorLabel',
          label: 'Error Label',
          placeholder: 'Error Label',
          tooltip: 'The label for this field when an error occurs.',
        },
        {
          weight: 200,
          key: 'validate.customMessage',
          label: 'Custom Error Message',
          placeholder: 'Custom Error Message',
          type: 'textfield',
          tooltip: 'Error message displayed if any error occurred.',
          input: true,
        },
      ],
    },
  ],
    select: [
    {
      key: 'api',
      ignore: true,
    },
    {
      key: 'logic',
      ignore: true,
    },
    {
      key: 'layout',
      ignore: true,
    },
    {
      key: 'data',
      ignore: true,
    },
    {
      key: 'display',
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
      weight: 1,
      key: 'customData',
      type: 'textfield',
      label: 'Data',
      components: [
        {
          type: 'datagrid',
          input: true,
          label: 'Data Source Values',
          key: 'data.values',
          tooltip:
            'Values to use as the data source. Labels are shown in the select field. Values are the corresponding values saved with the submission.',
          weight: 10,
          reorder: true,
          defaultValue: [{ label: '', value: '' }],
          components: [
            {
              label: 'Label',
              key: 'label',
              input: true,
              type: 'textfield',
            },
            {
              label: 'Value',
              key: 'value',
              input: true,
              type: 'textfield',
              allowCalculateOverride: true,
              calculateValue: 'value = _.camelCase(row.label);',
            },
          ],
          conditional: {
            json: { '===': [{ var: 'data.dataSrc' }, 'values'] },
          },
        },
        {
          type: 'checkbox',
          input: true,
          weight: 21,
          key: 'searchEnabled',
          label: 'Enable Static Search',
          defaultValue: true,
          tooltip:
            'When checked, the select dropdown will allow for searching within the static list of items provided.',
        },
      ],
    },
  ],
}
