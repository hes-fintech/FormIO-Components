
import Component from 'formiojs/components/_classes/component/Component';
import { Utils } from 'formiojs';
import _ from 'lodash';
import { settingsForm } from './Refresh.settingsForm';
import fetch from 'node-fetch'; // or window.fetch in the browser

export class refreshComponent extends Component {
  static get builderInfo() {
    return {
      title: 'Fetch Component',
      group: 'data',
      icon: 'refresh',
      schema: refreshComponent.schema(),
    };
  }

  static schema() {
    return Component.schema({
      type: 'refreshComponent',
      hidden: true,
    });
  }

  render() {
    return super.render(`
          <div>
              <label class="col-form-label">
                Fetch component
              </label>
              <div class="drag-container">
                  <p>
                      <b>"${(this as any).component.requestType}" </b>
                      request, to url: <b>"${(this as any).component.url || ""}"</b>
                  </p>
              </div>
          </div>
        `);
  }

  static editForm = settingsForm;

  getValueWithType(value: any) {
    if (typeof (value) === "object") {
      return value;
    } else {
      return value ? value : null;
    };
  };


  getTemplateString(value: string) {
    const compiledValue = (this as any).interpolate(value, {
      data: (this as any).root.data,
      row: (this as any).row,
    });

    return this.getValueWithType(compiledValue);
  };

  getRequestBody(requestBody: any) {
    return requestBody?.reduce((initial, current: any) => {
      return {
        ...initial,
        [current.key]: this.getTemplateString(current?.value),
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

  updateDataGrid() {
    const dataGrids = (Utils as any).findComponents((this as any)?._currentForm?.components, { type: 'datagrid' });
    dataGrids?.forEach(async (dataGrid) => {
      await dataGrid.rebuild();
    });
  }

  addDataGridLoaders = () => {
    const dataGrids = (Utils as any).findComponents((this as any)?._currentForm?.components, { type: 'datagrid' });
    const filteredDataGrids = dataGrids.filter(dataGrid => {
      return [(this as any).component.key].includes(dataGrid.component.redrawOn);
    })
    filteredDataGrids?.forEach(async (dataGrid) => {
      const element = document.getElementById(dataGrid?.id);
      if (element)
        element.innerHTML = `
            <div class="grid-loader-wrapper">
                <div class="grid-loader"></div>
            </div>
        `;
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

      this.addDataGridLoaders();

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
    if (!this.isFetched || !(this as any).component?.refreshOn?.includes("data")) {
      this.fetchData()
    }
    super.attach(element);
  }
}
