export const fetchComponentEditTrigger = [
  {
    type: 'select',
    input: true,
    key: 'redrawOn',
    label: 'Trigger on Data change',
    weight: 0,
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
      type: 'textfield',
      input: false,
      label: 'Trigger on event',
      tooltip: 'Event that will trigger request.',
      key: 'triggerOnEvent',
      weight: 1,
  },
  {
      type: 'textfield',
      input: false,
      label: 'Triggered event',
      tooltip: 'Event will be called after request has been finished.',
      key: 'triggeredEvent',
      weight: 2,
  },
];