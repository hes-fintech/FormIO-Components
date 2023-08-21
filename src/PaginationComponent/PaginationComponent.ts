// import Field from 'formiojs/components/_classes/field/field';
import ContainerComponent from 'formiojs/components/container/container';
// import NestedArrayComponent from 'formiojs/components/_classes/nestedarray/NestedArrayComponent';
import { settingsForm } from './Pagination.settingsForm';
import _ from 'lodash';


export class paginationComponent extends ContainerComponent {
    static get builderInfo() {
      return {
        title: 'Table pagination',
        group: 'data',
        icon: 'arrow-down',
        schema: paginationComponent.schema(),
      };
    }

    get templateName() {
      return 'paginationTemplate';
    }
    
  
    static schema(...extend) {
      return ContainerComponent.schema({
        type: 'paginationComponent',
        components: [
          {
            label: 'Address 1',
            tableView: false,
            key: 'amortisationSchedule',
            type: 'textfield',
            input: true,
          },
        ],
      }, ...extend);
    }

    

    checkRefresh(refreshData, changed, flags) {
      if (refreshData === 'data') {
        (this as any).refresh((this as any).data, changed, flags);
      }
    }

    render(children) {
        // If already rendering, don't re-render.
        return super.render(children || (this as any).renderTemplate(this.templateName, {
          currentPage: 1,
          totalPages: 10,
          children: (this as any).renderComponents(),
        }));
    }

    get defaultSchema() {
        return paginationComponent.schema();
    }

    static editForm = settingsForm;

    attach(element) {
      console.log(this, 'getValue', (this as any).component.key)
      console.log((this as any).getValue(), 'getValue', (this as any).component.key)
      console.log((this as any).data, 'getValue DATA', (this as any).component.key)
      return super.attach(element);
    }
    
}
