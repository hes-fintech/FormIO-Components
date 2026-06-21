export const fetchComponentEditApi = [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'key',
    label: 'Property Name',
    tooltip: 'The name of this field in the API endpoint.',
    validate: {
      pattern: '(\\w|\\w[\\w-.]*\\w)',
      patternMessage: 'The property name must only contain alphanumeric characters, underscores, dots and dashes and should not be ended by dash or dot.',
      required: true
    }
  },
  {
    ignore: true,
    key: 'tags'
  },
  {
    ignore: true,
    key: 'properties',
  },
];