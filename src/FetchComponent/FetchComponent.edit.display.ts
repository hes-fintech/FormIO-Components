export const fetchComponentEditDisplay = [
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
      key: 'hidden',
      ignore: true,
  },
  {
      key: 'customClass',
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
    key: 'modalEdit',
    ignore: true,
  },
  {
    key: 'description',
    ignore: true,
  },
  {
    type: 'select',
    input: true,
    weight: 1,
    key: 'requestType',
    defaultValue: 'GET',
    label: 'Type of request',
    data: {
      values: [
        { label: 'GET', value: 'GET' },
        { label: 'POST', value: 'POST' },
      ],
    },
  },
  {
      type: 'textfield',
      input: false,
      label: 'URL',
      key: 'url',
      weight: 2,
      validate: {
          required: true,
      },
  },
  {
    type: 'datagrid',
    input: true,
    label: 'POST Body / GET Url queries',
    tooltip:
        'you can use this table as body for POST request and as url query string for GET requests',
    key: 'requestBody',
    weight: 3,
    components: [
      {
        label: 'Key',
        key: 'key',
        input: true,
        type: 'textfield',
      },
      {
        label: 'Value',
        key: 'value',
        input: true,
        type: 'textfield',
      },
    ],
  },
];