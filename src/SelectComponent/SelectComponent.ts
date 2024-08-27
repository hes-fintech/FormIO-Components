
import { settingsForm } from './SelectComponent.settingsForm';
import Components from 'formiojs/components/Components';
import _, { set } from 'lodash';

const SelectComponent = (Components as any).components.select;

export class selectComponentExtended extends SelectComponent {
  static get builderInfo() {
    return {
      title: 'Select (Extended)',
      group: 'basic',
      icon: 'refresh',
      schema: selectComponentExtended.schema(),
    };
  }

  static schema() {
    return SelectComponent.schema({
      type: 'selectComponentExtended',
    });
  }

  static editForm = settingsForm;

  get requestBody() {
    // Create the headers object.
    const body = {};
    // Add custom headers to the url.
    if ((this as any).component.data && (this as any).component.data.body) {
      try {
        _.each((this as any).component.data.body, (bodyItem) => {
          if (bodyItem.key) {
            set(body, bodyItem.key, (this as any).interpolate(bodyItem.value))
          }
        });
      }
      catch (err) {
        console.warn((err as Error).message);
      }
    }

    return body;
  }

  get requestHeaders() {
    // Create the headers object.
    const headers = new Map();
    // Add custom headers to the url.
    if ((this as any).component.data && (this as any).component.data.headers) {
      try {
        _.each((this as any).component.data.headers, (header) => {
          if (header.key) {
            headers.set(header.key, (this as any).interpolate(header.value));
          }
        });
      }
      catch (err) {
        console.warn((err as Error).message);
      }
    }

    return headers;
  }

  loadItems(url, search, headers, options, method) {
    super.loadItems(url, search, headers, options, method, (this as any).requestBody)
  }
}

