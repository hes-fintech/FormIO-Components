export const fetchComponentEditDisplay = [
      {
        type: 'textfield',
        input: true,
        label: 'URL',
        key: 'url',
        placeholder: 'Enter the URL to fetch',
        validate: {
          required: true
        }
      },
      {
        type: 'select',
        input: true,
        label: 'Method',
        key: 'requestType',
        placeholder: 'Select the HTTP method',
        defaultValue: 'GET',
        dataSrc: 'values',
        data: {
          values: [
            { label: 'GET', value: 'GET' },
            { label: 'POST', value: 'POST' },
            { label: 'PUT', value: 'PUT' },
            { label: 'DELETE', value: 'DELETE' }
          ]
        }
      },
      {
        type: 'datagrid',
        input: true,
        label: 'POST Body / GET Url queries',
        tooltip:
            'you can use this table as body for POST request and as url query string for GET requests',
        key: 'requestBody',
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
      // Exclude unnecessary settings
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
      }
];
