export const sliderComponentDisplay = [
    {
        key: 'placeholder',
        ignore: true,
    },
    {
        key: 'labelPosition',
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
        key: 'hidden',
        ignore: true,
    },
    {
        key: 'modalEdit',
        ignore: true,
    },
    {
        key: 'customClass',
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
        label: 'Slider title',
        key: 'sliderTitle',
        weight: 0,
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Tooltip',
        key: 'tooltip',
    },
    {
        type: 'textfield',
        input: false,
        label: 'Prefix',
        key: 'prefix',
    },
    {
        type: 'textfield',
        input: false,
        label: 'Suffix',
        key: 'suffix',
    },
    {
        type: 'textfield',
        input: false,
        label: 'Min',
        key: 'min',
        weight: 3,
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Max',
        key: 'max',
        weight: 4,
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Initial value',
        key: 'initialValue',
        weight: 5,
        validate: {
            required: true,
        },
    },
    {
        type: 'textfield',
        input: false,
        label: 'Slider step',
        key: 'sliderStep',
        weight: 6,
        defaultValue: 1,
        validate: {
            required: true,
        },
    },
    {
      type: 'number',
      input: true,
      weight: 80,
      key: 'decimalLimit',
      label: 'Decimal Places',
      tooltip: 'The maximum number of decimal places.'
    },
    {
      type: 'select',
      input: true,
      key: 'refreshOn',
      label: 'Refresh Options On',
      weight: 7,
      tooltip: 'Refresh data when another field changes.',
      dataSrc: 'custom',
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
];