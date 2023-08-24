import ContainerComponent from 'formiojs/components/container/container';
import { settingsForm } from './Pagination.settingsForm';
import { Utils } from 'formiojs';
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
        redrawOn: 'data',
        components: [
          {
            label: 'Data list',
            tableView: false,
            key: 'dataList',
            redrawOn: 'data',
            type: 'hidden',
            input: true,
          },
          {
            label: 'Paginated list',
            tableView: false,
            key: 'paginatedList',
            redrawOn: 'data',
            type: 'hidden',
            input: true,
          },
          {
            label: 'Current page',
            tableView: false,
            key: 'currentPage',
            type: 'hidden',
            input: true,
          },
          {
            label: 'Total elements',
            tableView: false,
            key: 'totalElements',
            type: 'hidden',
            input: true,
          },
          {
            label: 'Items per page',
            tableView: false,
            key: 'itemsPerPage',
            type: 'hidden',
            input: true,
          },
          {
            label: 'Total pages',
            tableView: false,
            key: 'totalPages',
            type: 'hidden',
            input: true,
          },
        ],
      }, ...extend);
    }

    setValue(value, flags = {}) {
      return super.setValue(value, flags);
    }

    getPagesNum() {
      const totalElementsValue = _.get((this as any).root.data, (this as any).component.totalElementsValuePath) || _.get((this as any).root.data, (this as any).component.dataSourcePath)?.length;

      return Math.ceil(totalElementsValue / (this as any).component.itemsPerPage);
    }

    paginateArray(array = [], currentPage, itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + Number(itemsPerPage);
      return array?.slice(startIndex, endIndex);
    }

    getInitialPaginatedData() {
      return Boolean((this as any).component.dataSourcePath) ? 
      this.paginateArray(_.get((this as any).root.data, (this as any).component.dataSourcePath), 1, (this as any).component.itemsPerPage) :
      (this as any).getValue().paginatedList;
    }

    setNewPageValue(nextPage: number) {
      if(Boolean((this as any).component.dataSourcePath)) {
        const dataList = (this as any).getValue()?.dataList;
        const paginatedListComponent = (Utils as any).getComponent((this as any).components, 'paginatedList');
        const paginatedList = this.paginateArray(dataList, nextPage, (this as any).component.itemsPerPage);
        paginatedListComponent.setValue(paginatedList);
      }
      const currentPageComponent = (Utils as any).getComponent((this as any).components, 'currentPage');
      currentPageComponent.setValue(nextPage);
    }

    goToNextPage() {
      const currentPage = (this as any).getValue()?.currentPage;
      const nextPage = Number(currentPage) + 1;
      this.setNewPageValue(nextPage);
    }

    goToPreviousPage() {
      const currentPage = (this as any).getValue()?.currentPage;
      const nextPage = Number(currentPage) - 1;
      this.setNewPageValue(nextPage);
    }

    goToPage(page: string) {
      const nextPage = Number(page);
      this.setNewPageValue(nextPage);
    }

    render(children) {
        return super.render(children || (this as any).renderTemplate(this.templateName, {
          currentPage: (this as any).getValue()?.currentPage || 1,
          totalPages:(this as any).getValue()?.totalPages || 1,
          children: (this as any).renderComponents(),
        }));
    }

    get defaultSchema() {
      return paginationComponent.schema();
    }

    static editForm = settingsForm;

    interval;

    attach(element) {
      (this as any).loadRefs(element, {
        nextPageButton: 'single',
        previousPageButton: 'single',
        buttonPage: 'multiple',
      });

      this.interval = setTimeout(() => {
        const initialValue = {
          dataList: _.get((this as any).root.data, (this as any).component.dataSourcePath),
          paginatedList: this.paginateArray(_.get((this as any).root.data, (this as any).component.dataSourcePath), 1, (this as any).component.itemsPerPage),
          currentPage: (this as any).getValue().currentPage || 1,
          totalElements: _.get((this as any).root.data, (this as any).component.totalElementsValuePath) || _.get((this as any).root.data, (this as any).component.dataSourcePath)?.length,
          totalPages: this.getPagesNum(),
        }

        if((this as any).getValue().currentPage < 2) {
          this.setValue(initialValue);
        }
      }, 0);

      (this as any).addEventListener((this as any).refs.nextPageButton, 'click', (event) => {
        event.preventDefault();
        this.goToNextPage();
      });

      (this as any).addEventListener((this as any).refs.previousPageButton, 'click', (event) => {
        event.preventDefault();
        this.goToPreviousPage();
      });


      (this as any).refs.buttonPage.forEach((pageButton) => {
        (this as any).addEventListener(pageButton, 'click', (event) => {
          event.preventDefault();
          const pageNumber = event.target.dataset.pageNumber;
          this.goToPage(pageNumber);
        });
      });

      return super.attach(element);
    }

    detach() {
      clearInterval(this.interval);
      super.detach();
    }
    
}
