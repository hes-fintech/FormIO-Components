import Component from 'formiojs/components/_classes/component/Component';
// @ts-ignore
import DmnJS from 'dmn-js/lib/Modeler';

export class dmnComponent extends Component {
  static schema(...extend) {
    return Component.schema({
      type: 'dmnComponent',
      label: 'DMN',
      key: 'dmnComponent',
      height: '400px',
      ...extend
    });
  }

  static get builderInfo() {                    
    return {
      title: 'DMN',
      group: 'advanced',
      icon: 'project-diagram',
      documentation: 'https://bpmn.io/toolkit/dmn-js/',
      schema: dmnComponent.schema()
    };
  }

  render() {
    return super.render(`
      <div style="height:${(this as any).component.height}">
        <div ref="canvas" class="dmn-container"
             style="height:100%;"></div>
      </div>
    `);
  }

  /* ===== DOM attachment & dmn-js ===== */
  attach(el) {
    super.attach(el);
    (this as any).loadRefs(el, { canvas: 'single' });

    (this as any).modeler = new DmnJS({ container: (this as any).refs.canvas });

    // load existing XML if (this as any) field already has data
    if ((this as any).dataValue) {
      (this as any).modeler.importXML((this as any).dataValue).catch(console.error);
    }

    // keep Form.io value in sync
    (this as any).modeler.on('commandStack.changed', async () => {
      const { xml } = await (this as any).modeler.saveXML({ format: true });
      (this as any).setValue(xml);                       // pushes XML into form data
    });

    return el;
  }

  detach() {
    (this as any).modeler?.destroy();
    return super.detach();
  }
}
