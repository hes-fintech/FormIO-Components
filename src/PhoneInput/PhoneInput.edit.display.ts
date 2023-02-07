export const phoneInputComponentEditDisplay = [
  {
      type: 'textfield',
      input: false,
      label: 'Component label',
      key: 'label',
      validate: {
          required: false,
      },
      weight: 0,
  },
  {
      type: 'textfield',
      input: false,
      label: 'Component source property name',
      tooltip: "Name of the property which contains source of the component.",
      key: 'componentsKey',
      validate: {
          required: true,
      },
      weight: 1,
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