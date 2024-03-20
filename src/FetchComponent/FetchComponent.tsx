
import Component from 'formiojs/components/_classes/component/Component';
import _ from 'lodash';
import { settingsForm } from './FetchComponent.settingsForm';
import { REQUEST_TYPES_WITH_BODIES, REQUEST_TYPES_WITH_PARAMS } from './FetchComponent.const';

export class refreshComponent extends Component {
  static get builderInfo() {
    return {
      title: 'Fetch (New)',
      group: 'data',
      icon: 'refresh',
      schema: refreshComponent.schema(),
    };
  }

  init() {
    super.init();

    if ((this as any).component?.redrawOn === "data") {
      (this as any).component.refreshOn = "data";
    }
  }

  abortController = new AbortController();

  abortRequest() {
    this.abortController?.abort();
  }

  static schema() {
    return Component.schema({
      type: 'refreshComponent',
      clearOnHide: false,
    });
  }

  render() {
    return super.render(`
            <div>
              <label class="col-form-label">
                ${(this as any).component.label}
              </label>
              <div class="drag-container">
                  <p>
                      <b>"${(this as any).component.requestType || ""}" </b>
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

  getFormatStringValueToObject(requestBody: any) {
    return requestBody?.reduce((initial: any, current: any) => {
      return {
        ...initial,
        [current.key]: (this as any).interpolate(current?.value, {
          data: (this as any)?.root?.data,
          row: (this as any)?.data,
        }),
      };
    }, {});
  };

  shouldSkipValidation() {
    return true;
  }

  isFetched = false;

  async fetchData() {
    this.abortController = new AbortController();
    const { requestType, requestBody, corsMode, cache, credentials, redirect, referrerPolicy, requestHeaders } = (this as any).component;

    const requestBodyAndParams = this.getFormatStringValueToObject(requestBody);
    const requestUrlParams = `?${new URLSearchParams(requestBodyAndParams)}`;
    const hasRequestQueryParams = Object.values(requestBodyAndParams).filter((req) => req).length > 0;
    const requestWithBodyOptions = {
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(requestBodyAndParams),
    };

    const requestOptions = REQUEST_TYPES_WITH_BODIES.includes(requestType) ? requestWithBodyOptions : {};
    const requestParams = (REQUEST_TYPES_WITH_PARAMS.includes(requestType) && hasRequestQueryParams) ? requestUrlParams : "";

    const requestUrl = `${(this as any).interpolate((this as any).component.url, {
      data: (this as any)?.root?.data,
      row: (this as any)?.root?.data,
    })}${requestParams}`

    const formattedHeaders = _.merge((requestOptions as any)?.headers, this.getFormatStringValueToObject(requestHeaders))

    const formattedRequestHeaders = _.isEmpty(formattedHeaders) ? {} : formattedHeaders;

    const options = {
      method: requestType,
      signal: this.abortController.signal,
      mode: corsMode,
      cache: cache,
      credentials: credentials,
      redirect: redirect,
      referrerPolicy: referrerPolicy,
      ...requestOptions,
      ...formattedRequestHeaders,
    };

    const basicRequestMetaData = {
      requestOptions: options,
      requestUrl: requestUrl,
      formSubmission: (this as any)?.root?.data,
      component: this,
    };

    (this as any).emit(`${(this as any).component.key}-request-started`, basicRequestMetaData);

    try {
      const response = await fetch(requestUrl, options);

      if (response.ok) {
        const data = await response.json();
        (this as any).setValue(data);

        (this as any).emit(`${(this as any).component.key}-request-success`, { ...basicRequestMetaData, requestResponse: data });
      } else {
        throw new Error(response.statusText);
      }

      this.isFetched = true;

      this.emitEvents(_.filter((this as any).component?.triggeredEvents, obj => obj.event !== ''));
    } catch (error) {
      console.error('Fetch component request error:', error);
      (this as any).emit(`${(this as any).component.key}-request-error`, { ...basicRequestMetaData, requestError: error });
    } finally {
      (this as any).emit(`${(this as any).component.key}-request-ended`, basicRequestMetaData);
    }
  }

  attachEventsForListen = (events: { event: string }[]) => {
    if (events?.length) {
      events?.forEach((item) => {
        (this as any).on(item?.event, () => {
          this.fetchData();
        })
      });
    }
  };

  emitEvents = (events: { event: string }[]) => {
    if (events?.length) {
      events?.forEach((item) => {
        (this as any).emit(item?.event);
      });
    }
  };

  allowSameRequests() {
    return [
      !((this as any).component?.refreshOn?.includes("data") || false)
    ].some((item) => item)
  }

  getData() {
    if (!this.isFetched || this.allowSameRequests()) {
      this.fetchData();
    }
  }

  getDataAfterSubmissionSet() {
    if ((this as any)?.currentForm?.submissionSet) {
      this.getData();
    }
  }

  attach(element: any) {
    if ((this as any).component.triggerOnAttach
      && (this as any).component?.refreshOn === "") {
      this.getData();
    }

    if (Array.isArray((this as any).component?.refreshOn) &&
      (this as any).component.triggerOnAttach) {
      this.getData();
    }

    // Old logic support
    if ((this as any).component?.refreshOn === "data" &&
      !Array.isArray((this as any).component?.refreshOn)) {
      this.getDataAfterSubmissionSet();
    }

    (this as any)?.on('cancelFetchComponentRequest', () => {
      this.abortRequest();
    });

    this.attachEventsForListen(_.filter((this as any).component?.triggerOnEvents, obj => obj.event !== ''));

    super.attach(element);
  }

  destroy() {
    super.destroy()
    this.abortRequest();
  }

  testIncludesRefresh(randomString: string, array: string[]) {
    if (!Array.isArray(array)) return;
    return array.some(element => {
      const regex = new RegExp('\\b' + element + '\\b');
      return regex.test(randomString);
    });
  }


  checkRefresh(refreshData: any, changed: any, flags: any) {
    const changePath = _.get(changed, 'instance.path', false);
    // Don't let components change themselves.
    if ((changePath && (this as any).path === changePath)
      || changed?.component?.type === "datagrid") {
      return;
    }

    if (refreshData === 'data') {
      (this as any).refresh((this as any).data, changed, flags);
    }

    if ((this as any).testIncludesRefresh(changePath, (this as any).component?.refreshOn) &&
      (this as any).component.triggerOnAttach) {
      (this as any).triggerRedraw();
    }

    if ((this as any).testIncludesRefresh(changePath, (this as any).component?.refreshOn) &&
      Array.isArray((this as any).component?.refreshOn) &&
      !(this as any).component.triggerOnAttach) {
      this.getData();
    }
  }
}
