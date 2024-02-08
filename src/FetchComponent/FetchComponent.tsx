
import Component from 'formiojs/components/_classes/component/Component';
import _ from 'lodash';
import { settingsForm } from './FetchComponent.settingsForm';
import fetch from 'node-fetch'; // or window.fetch in the browser

export class fetchComponent extends Component {
  static get builderInfo() {
    return {
      title: 'Fetch Component (New)',
      group: 'data',
      icon: 'refresh',
      schema: fetchComponent.schema(),
    };
  }

  abortController = new AbortController();

  abortRequest() {
    this.abortController?.abort();
  }

  static schema() {
    return Component.schema({
      type: 'fetchComponent',
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


  getTemplateString (value: string) {
    const compiledValue = getNestedValue({ data: (this as any).root.data }, value?.substring(value.lastIndexOf("{{") + 2, value.lastIndexOf("}}")));

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

  shouldSkipValidation() {
    return true;
  }

  isFetched = false;

  async fetchData() {
    this.abortRequest();
    this.abortController = new AbortController();

    if ((this as any)?.currentForm?.ready) {
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
        signal: this.abortController.signal,
      };

      try {
        const response = await fetch(requestUrl, options);

        if (response.ok) {
          const data = await response.json();
          (this as any).setValue(data);
        } else {
          throw new Error(response.statusText);
        }

        this.emitEvents((this as any).component.triggeredEvent);

        this.isFetched = true;
      } catch (error) {
        console.error('Fetch component request error:', error);
      }

    }
  }

  attachEventsForListen = (events: string) => {
    const eventsList = events?.split(',');
  
    if(eventsList.length) {
      eventsList.forEach((event) => {
        (this as any).on(event, () => {
          (this as any).fetchData();
        })
      });
    }
  };

  emitEvents = (events: string) => {
    const eventsList = events?.split(',');
  
    if(eventsList.length) {
      eventsList.forEach((event) => {
        (this as any).emit(event);
      });
    }
  };

  attach(element) {

    if (!this.isFetched || !(this as any).component?.refreshOn?.includes("data") || (this as any).component.requestType === 'POST') {
      this.fetchData()
    }

    (this as any)?.on('cancelFetchComponentRequest', () => {
      this.abortRequest();
    });

    this.attachEventsForListen((this as any).component.triggerOnEvent);
    
    super.attach(element);
  }

  destroy() {
    super.destroy()
    this.abortRequest();
  }

}

const getNestedValue = (obj: any, key: string) => {
  const splitCondition = key.includes("?") ? "?." : ".";
  console.log(obj, 'form submission')
  return key.split(splitCondition).reduce((result, key) => {
      return result?.[key]
  }, obj);
};
