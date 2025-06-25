import Component from 'formiojs/components/_classes/component/Component';
import DmnJS from "dmn-js/lib/Modeler";
import "dmn-js/dist/assets/diagram-js.css";
import "dmn-js/dist/assets/dmn-font/css/dmn-embedded.css";
import "dmn-js/dist/assets/dmn-js-decision-table-controls.css";
import "dmn-js/dist/assets/dmn-js-decision-table.css";
import "dmn-js/dist/assets/dmn-js-drd.css";
import "dmn-js/dist/assets/dmn-js-literal-expression.css";
import "dmn-js/dist/assets/dmn-js-shared.css";

export class dmnComponent extends Component {
  static schema(...extend: any[]) {
    return Component.schema({
      type: 'dmnComponent',
      label: 'DMN',
      key: 'dmnComponent',
      inputType: 'string',
      height: '500px',
      ...extend
    });
  }

  static get builderInfo() {
    return {
      title: 'DMN',
      group: 'advanced',
      icon: 'project-diagram',
      documentation: 'https://bpmn.io/toolkit/bpmn-js/',
      schema: dmnComponent.schema()
    };
  }

  /* ---------- render ---------- */
  render() {
    return super.render(`
      <div style="height:${(this as any).component.height}">
        <div ref="canvas" style="height:100%; border:1px solid #ccc;"></div>
      </div>
    `);
  }

  /* ---------- life-cycle ---------- */
  async attach(el: HTMLElement) {
    const attached = super.attach(el);
    (this as any).loadRefs(el, { canvas: 'single' });

    (this as any).modeler = new DmnJS({
      container: (this as any).refs.canvas,
      keyboard: { bindTo: document }
    });

    (this as any).modeler.on('import.done', ({ error }) => {
      if (error) { console.error(error); return; }
    
      (this as any).hookInto((this as any).modeler.getActiveViewer()); 
    });

    return attached;
  }

  hookInto(viewer) {
    const bus = viewer.get('eventBus');
  
    /* --- typical listeners --- */
    bus.on('commandStack.changed', () => {
      (this as any).modeler.saveXML({ format: true }, (err, xml) => {
        if (err) {
          console.error('Could not save', err);
        } else {
          console.log(xml);
          super.setValue(xml, false);
        }
      });

    }, 500);
  }

  detach() {
    (this as any).modeler?.destroy();
    return super.detach();
  }

  setValue(value: string, flags: any) {
    if (typeof value !== 'string') return;


    const xml = JSON.parse(JSON.stringify(value)); 

    (this as any).modeler.importXML(xml, (err) => {
      if (err) {
        return console.log(err, "Error to parse XML");
      }
    });
  }
}
