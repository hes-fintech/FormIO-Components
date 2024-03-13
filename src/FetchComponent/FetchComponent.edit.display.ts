import { RequestTypes } from "./FetchComponent.types";

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
    weight: 700,
    type: 'hidden',
    label: 'Clear Value When Hidden',
    key: 'clearOnHide',
    defaultValue: false,
    tooltip: 'When a field is hidden, clear the value.',
    input: true
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
        { label: RequestTypes.GET, value: RequestTypes.GET },
        { label: RequestTypes.POST, value: RequestTypes.POST },
        { label: RequestTypes.DELETE, value: RequestTypes.DELETE },
        { label: RequestTypes.PUT, value: RequestTypes.PUT },
        { label: RequestTypes.PATCH, value: RequestTypes.PATCH },
        { label: RequestTypes.HEAD, value: RequestTypes.HEAD },
      ],
    },
  },
  {
      type: 'textfield',
      input: false,
      label: 'URL',
      key: 'url',
      customClass: "form-group",
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
    type: 'select',
    input: true,
    weight: 4,
    key: 'corsMode',
    defaultValue: 'cors',
    label: 'Cors mode',
    data: {
      values: [
        { label: 'no-cors', value: 'no-cors' },
        { label: 'cors', value: 'cors' },
        { label: 'same-origin', value: 'same-origin' },
      ],
    },
  },
  {
    type: 'select',
    input: true,
    weight: 5,
    key: 'cache',
    defaultValue: 'default',
    label: 'Cache',
    data: {
      values: [
        { label: 'no-cache', value: 'no-cache' },
        { label: 'default', value: 'default' },
        { label: 'reload', value: 'reload' },
        { label: 'force-cache', value: 'force-cache' },
        { label: 'only-if-cached', value: 'only-if-cached' },
      ],
    },
  },
  {
    type: 'select',
    input: true,
    weight: 6,
    key: 'credentials',
    defaultValue: 'same-origin',
    label: 'Credentials',
    data: {
      values: [
        { label: 'same-origin', value: 'same-origin' },
        { label: 'include', value: 'include' },
        { label: 'omit', value: 'omit' },
      ],
    },
  },
  {
    type: 'select',
    input: true,
    weight: 7,
    key: 'redirect',
    defaultValue: 'follow',
    label: 'Redirect',
    data: {
      values: [
        { label: 'manual', value: 'manual' },
        { label: 'follow', value: 'follow' },
        { label: 'error', value: 'error' },
      ],
    },
  },
  {
    type: 'select',
    input: true,
    weight: 8,
    key: 'referrerPolicy',
    defaultValue: 'no-referrer-when-downgrade',
    label: 'Referrer policy',
    data: {
      values: [
        { label: 'no-referrer', value: 'no-referrer' },
        { label: 'no-referrer-when-downgrade', value: 'no-referrer-when-downgrade' },
        { label: 'origin', value: 'origin' },
        { label: 'origin-when-cross-origin', value: 'origin-when-cross-origin' },
        { label: 'same-origin', value: 'same-origin' },
        { label: 'strict-origin', value: 'strict-origin' },
        { label: 'strict-origin-when-cross-origin', value: 'strict-origin-when-cross-origin' },
        { label: 'unsafe-url', value: 'unsafe-url' },
      ],
    },
  },
  {
    type: 'datagrid',
    input: true,
    label: 'Headers',
    key: 'requestHeaders',
    weight: 9,
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
