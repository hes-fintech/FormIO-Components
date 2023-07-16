
import Component from 'formiojs/components/_classes/component/Component';
import { Utils } from 'formiojs';
import { settingsForm } from './FetchComponent.settingsForm';
import _ from 'lodash';
import fetch from 'node-fetch'; // or window.fetch in the browser

export class refreshComponent extends Component {
  static schema(...extend) {
    return Component.schema({
      type: 'refreshComponent',
      label: 'Fetch Data',
      input: false,
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
                [current.key]: (this as any).interpolate(current.value, {
                  data: (this as any).data,
                  row: (this as any).row,
              }) || null,
            };
        }, {});
  };

  getTemplateStringContext(comp: any) {
    const compiled = _.template(
      comp.component.url,
        // eslint-disable-next-line no-param-reassign
        (_.templateSettings.interpolate = /{{([\s\S]+?)}}/g) as any,
    );

    return compiled(comp);
}

getValue() {
  return super.getValue();
}

updateDataGrid () {
    const dataGrids = (Utils as any).findComponents((this as any)?._currentForm?.components, { type: 'datagrid' });
    dataGrids?.forEach(async (dataGrid) => {
        await dataGrid.rebuild();
    });
}
shouldSkipValidation() {
    return true;
}

isFetched = false;

  async fetchData() {
    if ((this as any)?.currentForm?.submissionSet) {
      const { requestType, requestBody } = (this as any).component;
  
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
          (this as any).setValue(data, {});
          this.updateDataGrid();
        } else {
          throw new Error(response.statusText);
        }
        this.isFetched = true;
      } catch (error) {
        console.error('Fetch component request error:', error);
      }

    }
  }

  get defaultSchema() {
    return refreshComponent.schema();
  }


  attach(element) {
    setTimeout(() => {
      if(!this.isFetched && !(this as any).component?.refreshOnParams?.includes("data")) {
        this.fetchData()
      }
    }, 0)
    super.attach(element);
  }

}
