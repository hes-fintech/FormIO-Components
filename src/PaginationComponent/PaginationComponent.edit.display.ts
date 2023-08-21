export const paginationComponentEditDisplay = [
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
    {
        key: 'description',
        ignore: true,
    },
    {
        key: 'label',
        ignore: true,
    },
    {
        type: 'textfield',
        input: false,
        label: 'Items per page',
        key: 'itemsPerPage',
        weight: 0,
        validate: {
            required: true,
        },
    },
    {
      type: 'select',
      input: true,
      key: 'tableInstance',
      label: 'Data grid',
      weight: 1,
      tooltip: 'Data grid that will use pagination.',
      dataSrc: 'custom',
      valueProperty: 'value',
      data: {
        custom(context: any) {
          var values: {label: string, value: string}[] = [];
          context.utils.findComponents(context.instance.options.editForm.components, { type: 'datagrid' }).forEach(function(component: any) {
            if (component.key !== context.data.key) {
              values.push({
                label: component.key || component.label,
                value: component.key
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
      key: 'refreshOn',
      label: 'Refresh Options On',
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