export const fetchComponentEditTrigger = [
  {
      type: 'checkbox',
      input: false,
      label: 'Trigger on attach',
      tooltip: 'Trigger when component has been attached.',
      key: 'triggerOnAttach',
      customClass: "form-group",
      defaultValue: false,
      weight: 1,
  },
  {
    type: 'select',
    input: true,
    key: 'refreshOn',
    label: 'Trigger on Data change',
    weight: 2,
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
              label: `${component.label || component.key} (${path})`,
              value: path
            });
            context.instance.dataValue = context.instance.dataValue || [];
          }
        });
        return values;
      }
    },
  },
  {
    type: 'datagrid',
    input: true,
    label: 'Trigger on event',
    tooltip: 'Event that will trigger request.',
    key: 'triggerOnEvents',
    weight: 3,
    components: [
      {
        label: 'Events',
        key: 'event',
        input: true,
        type: 'textfield',
      },
    ],
  },
  {
    type: 'datagrid',
    input: true,
    label: 'Triggered event',
    tooltip: 'Event will be called after request has been finished.',
    key: 'triggeredEvents',
    weight: 4,
    components: [
      {
        label: 'Events',
        key: 'event',
        input: true,
        type: 'textfield',
      },
    ],
  },
];