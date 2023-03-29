
import NestedComponent from 'formiojs/components/_classes/nested/NestedComponent';
import { Utils } from 'formiojs';
import { settingsForm } from './FetchComponent.settingsForm';
import _ from 'lodash';
import fetch from 'node-fetch'; // or window.fetch in the browser

export class refreshComponent extends NestedComponent {
  static schema(...extend) {
    return NestedComponent.schema({
      type: 'refreshComponent',
      label: 'Fetch Data',
      input: true,
      key: 'refreshComponent',
      dataSrc: 'url',
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Fetch Data',
      group: 'advanced',
      icon: 'fa fa-cloud-download',
      weight: 50,
      schema: refreshComponent.schema()
    };
  }

  static editForm = settingsForm;

  getValueWithType(value: any) {
    if (typeof (value) === "object") {
        return value;
    } else {
        if (isNaN(+value)) {
            return value ? value : null;
        } else {
            return value ? +value : null;
        };
    };
  };

  getNestedValue(obj: any, key: string) {
    const splitCondition = key.includes("?") ? "?." : ".";
    return key.split(splitCondition).reduce((result, key) => {
        return result?.[key]
    }, obj);
  };

  getTemplateString(context: any, value: string) {
    const compiledValue = this.getNestedValue(context, value?.substring(value.lastIndexOf("{{") + 2, value.lastIndexOf("}}")));

    return this.getValueWithType(compiledValue);
  };

  getRequestBody(requestBody: any) {
        return requestBody?.reduce((initial, current: any) => {
            return {
                ...initial,
                [current.key]: this.getTemplateString((this as any).data, current.value),
            };
        }, {});
  };

  getTemplateStringContext(comp: any) {
    const compiled = _.template(
      comp.component.url,
        // eslint-disable-next-line no-param-reassign
        (_.templateSettings.interpolate = /{{([\s\S]+?)}}/g) as any,
    );

    console.log(compiled(comp), '123compiled(comp)')

    return compiled(comp);
    // return '';
}

updateDataGrid() {
  const dataGrids = (Utils as any).findComponents((this as any)?._currentForm?.components, { type: 'datagrid' });
  dataGrids?.forEach(async (dataGrid) => {
      await dataGrid.refresh();
  });
}

  async fetchData() {
    if ((this as any)?.currentForm?.submissionSet) {
      const { url, requestType, requestBody } = (this as any).component;
  
      console.log('Fetch')
  
      const requestBody1 = this.getRequestBody(requestBody);
      const requestUrlParams = `?${new URLSearchParams(requestBody1)}`;
      const hasRequestQueryParams = Object.values(requestBody1).filter((req) => req !== null).length > 0;
      const postRequestOptions = {
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(requestBody1),
      };
      const requestOptions = requestType === 'POST' ? postRequestOptions : {};
      const requestParams = (requestType === 'GET' && hasRequestQueryParams) ? requestUrlParams : "";
  
      const requestUrl = `${this.getTemplateStringContext({ component: (this as any).component, row: (this as any)._data, data: (this as any)._data })}${requestParams}`
  
      const options = {
        method: requestType,
        ...requestOptions,
      };
  
      try {
        const response = await fetch(requestUrl, options);
        if (response.ok) {
          const data = await response.json();
          (this as any).updateValue(data);
        } else {
          throw new Error(response.statusText);
        }
        this.updateDataGrid();
      } catch (error) {
        console.error(error);
        alert(`Failed to fetch data: ${(error as any).message}`);
      }

    }
  }

  init() {
    console.log(this, '123')
    console.log((this as any).data, '123')
    console.log((this as any)._data, '123')
    super.init();
  }

  get defaultSchema() {
    return refreshComponent.schema();
  }

  get templateName() {
    return 'fetch';
  }

  attach(element) {
    super.attach(element);
    this.fetchData()
    // this.addEventListener(this.refs.input, 'change', () => this.fetchData());
  }

  detach() {
    super.detach();
    // this.removeEventListener(this.refs.input, 'change', () => this.fetchData());
  }
}
