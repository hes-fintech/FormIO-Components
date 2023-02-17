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
                    label: 'Submission data key',
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
              defaultValue: true,
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
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
                    label: 'Submission data key',
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
              defaultValue: true,
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
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
                    label: 'Submission data key',
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
              defaultValue: true,
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
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
                    label: 'Submission data key',
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
              defaultValue: true,
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
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
                    label: 'Submission data key',
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
                  type: 'textfield',
                  input: true,
                  key: 'format',
                  label: 'Format',
                  placeholder: 'Format',
                  description: 'Use formats provided by <a href="https://github.com/angular-ui/bootstrap/tree/master/src/dateparser/docs#uibdateparsers-format-codes" target="_blank">DateParser Codes</a>',
                  tooltip: 'The date format for displaying the datetime value.',
                  weight: 3
                },
            ],
        },
        {
          label: 'Validation',
          key: 'customValidation',
          weight: 5,
          components: [
            {
              weight: 10,
              type: 'checkbox',
              label: 'Required',
              defaultValue: true,
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
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
                    label: 'Submission data key',
                    validate: {
                        required: true,
                    },
                },
                {
                    weight: 1,
                    type: 'textfield',
                    input: true,
                    key: 'title',
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
              defaultValue: true,
              tooltip: 'A required field must be filled in before the form can be submitted.',
              key: 'validate.required',
              input: true
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
                  label: 'Submission data key',
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
            defaultValue: true,
            tooltip: 'A required field must be filled in before the form can be submitted.',
            key: 'validate.required',
            input: true
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
        key: 'conditional',
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
          label: 'Submission data key',
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
          label: 'Submission data key',
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
        {
          type: 'select',
          input: true,
          key: 'inputType',
          label: 'Input Type',
          tooltip: 'This is the input type used for this checkbox.',
          dataSrc: 'values',
          weight: 2,
          data: {
            values: [
              { label: 'Checkbox', value: 'checkbox' },
              { label: 'Radio', value: 'radio' },
            ],
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
          defaultValue: true,
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
        key: 'conditional',
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
          label: 'Submission data key',
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
    {
      label: 'Validation',
      key: 'customValidation',
      weight: 2,
      components: [
        {
          weight: 10,
          type: 'checkbox',
          label: 'Required',
          defaultValue: true,
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
      ],
    },
  ],
  file: [
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
          key: 'file',
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
                  label: 'Submission data key',
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
          weight: 1,
          key: 'customFile',
          label: 'File',
          components: [
            {
              type: 'textfield',
              input: true,
              key: 'dir',
              label: 'Directory',
              placeholder: '(optional) Enter a directory for the files',
              tooltip: 'This will place all the files uploaded in this field in the directory',
              weight: 1,
              conditional: {
                json: {
                  '!==': [{
                    var: 'data.storage'
                  }, 'googledrive']
                }
              }
            },
            {
              type: 'datagrid',
              input: true,
              label: 'File Types',
              key: 'fileTypes',
              tooltip: 'Specify file types to classify the uploads. This is useful if you allow multiple types of uploads but want to allow the user to specify which type of file each is.',
              weight: 3,
              components: [
                {
                  label: 'Label',
                  key: 'label',
                  input: true,
                  type: 'textfield'
                },
                {
                  label: 'Value',
                  key: 'value',
                  input: true,
                  type: 'textfield'
                }
              ]
            },
            {
              type: 'checkbox',
              input: true,
              key: 'image',
              label: 'Display as image(s)',
              tooltip: 'Instead of a list of linked files, images will be rendered in the view.',
              weight: 4
            },
            {
              type: 'textfield',
              input: true,
              key: 'imageSize',
              label: 'Image Size',
              placeholder: '100',
              tooltip: 'The image size for previewing images.',
              weight: 5,
              conditional: {
                json: { '==': [{ var: 'data.image' }, true] }
              }
            },
            {
              type: 'checkbox',
              input: true,
              key: 'webcam',
              label: 'Enable web camera',
              tooltip: 'This will allow using an attached camera to directly take a picture instead of uploading an existing file.',
              weight: 7,
            },
            {
              type: 'textfield',
              input: true,
              key: 'webcamSize',
              label: 'Webcam Width',
              placeholder: '320',
              tooltip: 'The webcam size for taking pictures.',
              weight: 8,
              conditional: {
                json: { '==': [{ var: 'data.webcam' }, true] }
              }
            },
            {
              weight: 9,
              type: 'checkbox',
              label: 'Multiple Values',
              tooltip: 'Allows multiple values to be entered for this field.',
              key: 'multiple',
              input: true
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
            defaultValue: true,
            tooltip: 'A required field must be filled in before the form can be submitted.',
            key: 'validate.required',
            input: true
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
        ]
      },
  ],
}
