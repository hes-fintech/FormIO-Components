import Component from 'formiojs/components/_classes/component/Component';
import DmnJS from 'dmn-js/lib/Modeler';

import 'dmn-js/dist/assets/diagram-js.css';
import 'dmn-js/dist/assets/dmn-font/css/dmn-embedded.css';
import 'dmn-js/dist/assets/dmn-js-decision-table-controls.css';
import 'dmn-js/dist/assets/dmn-js-decision-table.css';
import 'dmn-js/dist/assets/dmn-js-drd.css';
import 'dmn-js/dist/assets/dmn-js-literal-expression.css';
import 'dmn-js/dist/assets/dmn-js-shared.css';

export class dmnComponent extends Component {
  /* ---------- meta ---------- */
  static schema(...extend: any[]) {
    return Component.schema({
      type: 'dmnComponent',
      label: 'DMN',
      key: 'dmnComponent',
      inputType: 'string',
      height: '500px',
      ...extend,
    });
  }

  static get builderInfo() {
    return {
      title: 'DMN',
      group: 'advanced',
      icon: 'project-diagram',
      documentation: 'https://bpmn.io/toolkit/bpmn-js/',
      schema: dmnComponent.schema(),
    };
  }

  /* ---------- render ---------- */
  render() {
    return super.render(`
      <div style="height:${((this as any) as any).component.height}">
        <div ref="canvas" style="height:100%; border:1px solid #ccc;"></div>
      </div>
    `);
  }

  /* ---------- life-cycle ---------- */
  async attach(el: HTMLElement) {
    const attached = super.attach(el);
    ((this as any) as any).loadRefs(el, { canvas: 'single' });
  
    const modeler = ((this as any) as any).modeler = new DmnJS({
      container: ((this as any) as any).refs.canvas,
      keyboard: { bindTo: document }
    });
  
    ((this as any) as any)._detachListener = null;
  
    /* after the XML is in */
    modeler.on('import.done', ({ error }) => {
      if (error) { console.error(error); return; }
      (this as any)._wire(modeler.getActiveViewer());          // ★ changed
    });
  
    /* every time the user switches DRD ↔ table ↔ literal expression … */
    modeler.on('views.changed', () =>                 // ★ changed
      (this as any)._wire(modeler.getActiveViewer())           // ★ changed
    );
  
    return attached;
  }

  /**
   * (Re-)attach a single `elements.changed` listener
   * to the viewer that is active right now.
   */
  _wire(viewer) {
    if (!viewer) return;                              // ★ guard
  
    /* remove old handler */
    (this as any)._detachListener?.();
    (this as any)._detachListener = null;
  
    const bus = viewer.get('eventBus');
  
    const onChanged = () => {
      ((this as any) as any).modeler.saveXML({ format: true }, (err, xml) => {
        if (!err) super.setValue(xml, false, false);
      });
    };
  
    bus.on('elements.changed', onChanged);
    (this as any)._detachListener = () => bus.off('elements.changed', onChanged);
  }

  detach() {
    ((this as any) as any)._detachListener?.();
    ((this as any) as any).modeler?.destroy();
    return super.detach();
  }

  setValue(value: string, flags: any, initial: boolean = true) {
    if (typeof value !== 'string') return;

    ((this as any) as any).modeler.importXML(value, (err) => {
      if (err) console.error('Error parsing XML', err);
    });

    if (initial) super.setValue(value, flags);
  }
}
