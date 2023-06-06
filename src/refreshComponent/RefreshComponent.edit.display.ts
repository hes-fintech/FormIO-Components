export const refreshComponentEditDisplay = [
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
    type: 'select',
    input: true,
    key: 'refreshOn',
    label: 'Refresh Options On',
    weight: 3,
    tooltip: 'Refresh data when another field changes.',
    dataSrc: 'custom',
    multiple: true,
    valueProperty: 'value',
    data: {
      custom(context: any) {
        var values: {label: string, value: string}[] = [];
        values.push({ label: 'Any Change', value: 'data' });
        context.utils.eachComponent(context.instance.options.editForm.components, function(component: any, path: any) {
          if (component.key !== context.data.key) {
            values.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
        return values;
      }
    },
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
  {
      type: 'textfield',
      input: false,
      label: 'Delay of request',
      tooltip:
          'definding delay for request, default delay is 0 ms, value definings in ms',
      key: 'requestDelay',
      defaultValue: 0,
      weight: 4,
  },
];