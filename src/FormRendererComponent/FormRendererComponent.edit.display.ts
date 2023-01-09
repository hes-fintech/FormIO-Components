export const formRendererComponentEditDisplay = [
  {
      type: 'textfield',
      input: false,
      label: 'Component label',
      key: 'label',
      weight: 0,
  },
  {
      type: 'textfield',
      input: false,
      label: 'Property Name',
      tooltip: "The name of this field in the API endpoint.",
      key: 'nestedKey',
      validate: {
          required: true,
      },
      weight: 2,
  },
  {
      type: 'textfield',
      input: false,
      label: 'Path to components',
      key: 'componentsKey',
      validate: {
          required: true,
      },
      weight: 3,
  },
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
  },
];