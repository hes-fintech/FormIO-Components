export const paginationComponentApiEditData = [
    {
        type: 'textfield',
        input: false,
        label: 'Data source path',
        tooltip: 'Use this path to paginate data in the submission if you have a full list that needs to be paginated. There is no need to use it if you have an endpoint with paginated data.',
        key: 'dataSourcePath',
        weight: 1,
    },
    {
        type: 'textfield',
        input: false,
        label: 'Total elements value path',
        tooltip: 'Path to total elements value in case you are use request for paginated data. Use it if you have endpoint with paginated data.',
        key: 'totalElementsValuePath',
        weight: 2,
    },
    {
      type: 'select',
      input: true,
      key: 'resetCurrentPageBy',
      label: 'Reset current page by',
      weight: 3,
      tooltip: 'Reset page to first if another component changes.',
      dataSrc: 'custom',
      valueProperty: 'value',
      multiple: true,
      data: {
        custom(context) {
          var values: any = [];
          context.utils.eachComponent(context.instance.options.editForm.components, function(component, path) {
            if (component.key !== context.data.key) {
              values.push({
                label: component.label || component.key,
                value: path
              } as any);
            }
          });
          return values;
        }
      },
      conditional: {
        json: { '!' : [{ var: 'data.dataSrc' }] },
      },
    },
    {
        key: 'allowCalculateOverride',
        ignore: true,
    },
    {
        key: 'calculateServer',
        ignore: true,
    },
    {
        key: 'clearOnHide',
        ignore: true,
    },
    {
        key: 'redrawOn',
        ignore: true,
    },
    {
        key: 'encrypted',
        ignore: true,
    },
    {
        key: 'dbIndex',
        ignore: true,
    },
    {
        key: 'protected',
        ignore: true,
    },
    {
        key: 'persistent',
        ignore: true,
    },
    {
        key: 'defaultValue',
        ignore: true,
    },
    {
        key: 'multiple',
        ignore: true,
    },
    {
        key: 'customDefaultValue',
        ignore: true,
    },
    {
        key: 'calculateValue',
        ignore: true,
    }
];