# Formio custom components

Custom component will derive from a base class, whose behavior is closest to the behavior of the component you wish to
create. It is possible to extend any other component within the Form.io renderer

Each of the components can be extended by first referencing them from the Components.components object, and then
extending them as follows.

You can also create your own custom React component and get the formio context and the current form data (submission)

```
const Input = Formio.Components.components.input;
class MyInput extends Input {
  ...
  ...
}
```

```
class IframeComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }
   ...
   ...
  }
```

## This function tells the form builder about your component. It's name, icon, custumClass and what group it should be in.

```
export class iframe extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'Iframe',
            group: 'Data',
            documentation: '',
            schema: iframe.schema(),
        };
    }

    static schema() {
        return ReactComponent.schema({
            type: 'iframe',
        });
    }

    static editForm = settingsForm;

    get className() {
        return `${this.component.customClass}`;
    }

    attachReact(element: HTMLElement) {
        const context = {
            i18n: this.i18next,
            component: this.component,
            data: this.data,
            _: Utils._,
        };

        return ReactDOM.render(
            <IframeComponent context={context} onChange={this.updateValue} />,
            element,
        );
    }

    detachReact(element: HTMLElement) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
}
```

- builderInfo() - This function tells the form what group it should be in, and the name of the custom element.

- schema() - This function is the default settings for the component. At a minimum you want to set the type to the
  registered
    * type of your component (i.e. when you call Components.component('type', MyComponent) these types should match.
    *

- attachReact() - We take the necessary data from the context. and also use the i18n library from Formia, lodash if
  necessary

## SettingsForm

- You can ignore existing fields.
- Or add your own. The syntax is form.io component definitions
- You can change existing fields, add validate, defaultValue, tooltip ...

```
export const settingsForm = (...extend: any) => {
    return baseEditForm(
        [
            {
                key: 'display',
                components: [],
            },
          ...
          ...
            {
                key: 'logic',
                components: [],
            },
        ],
        ...extend,
    );
};
```

## FormBuilder

```
<FormBuilder
    form={{ display: 'form' }}
    options={{
        builder: {
            basic: {
                components: {
                    iframe: true,
                },
            },
            advanced: false,
        },
    }}
/>
```

- To render a custom component in Form Builder, you need to pass the component name with the value true to the
  components object
