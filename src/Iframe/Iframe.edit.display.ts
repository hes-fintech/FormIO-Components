export const iframeEditDisplay = [
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
        label: 'Src',
        tooltip:
            'you can get data from formio, use http://localhost/profile?id={{data.id}}',
        key: 'src',
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Width',
        tooltip: 'Width in px or %',
        key: 'width',
        defaultValue: '100%',
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Height',
        defaultValue: '350px',
        tooltip: 'Height in px or %',
        key: 'height',
        validate: {
            required: true,
        },
    },
    {
      weight: 85,
      type: 'checkbox',
      label: 'Refresh On Change',
      tooltip: 'Rerender the field whenever a value on the form changes.',
      key: 'refreshOnChange',
      input: true
    },
];