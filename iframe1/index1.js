const HTMLComponent = Formio.Components.components.htmlelement;

class iframe extends HTMLComponent {

    static schema(...extend) {
        return HTMLComponent.schema({
          label: 'Iframe',
          type: 'iframe',
          tag: 'iframe'
        }, ...extend);
      }

    static get builderInfo() {
        return {
            title: 'Iframe',
            group: 'layout',
            icon: 'code',
            weight: 2,
            schema: iframe.schema(),
        };
    }
}

export default iframe
