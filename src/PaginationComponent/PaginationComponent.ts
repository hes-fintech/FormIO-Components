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

    getStartPageValue() {
      return (this as any).component.isStartPageZero ? "0" : "1";
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
      [];
    }

    setNewPageValue(nextPage: number) {
      if(Boolean((this as any).component.dataSourcePath)) {
        const paginatedListComponent = (Utils as any).getComponent((this as any).components, 'paginatedList');
        const dataList = (this as any)?.getValue()?.dataList;
        const paginatedList = this.paginateArray(dataList, nextPage, (this as any).component.itemsPerPage);
        paginatedListComponent?.setValue(paginatedList);
      }
      const currentPageComponent = (Utils as any).getComponent((this as any).components, 'currentPage');
      currentPageComponent?.setValue(nextPage);
    }

    setNewPageFetchedValue() {
      if(Boolean((this as any).component.paginatedDataSourcePath)) {
        const paginatedListComponent = (Utils as any).getComponent((this as any).components, 'paginatedList');
        const paginatedList = _.get((this as any).root.data, (this as any).component.paginatedDataSourcePath);
        paginatedListComponent.setValue(paginatedList);
      }
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

    setPageSize(page: string) {
      const currentPageSizeComponent = (Utils as any).getComponent((this as any).components, 'itemsPerPage');
      currentPageSizeComponent?.setValue(page);
    }

    render(children) {
        return super.render(children || (this as any).renderTemplate(this.templateName, {
          currentPage: (this as any).getValue()?.currentPage,
          totalPages:(this as any).getValue()?.totalPages,
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
        sizeBtns: 'single',
        buttonPage: 'multiple',
        sizeBtn: 'multiple',
      });

      this.interval = setTimeout(() => {
        const initialValue = {
          dataList: _.get((this as any).root.data, (this as any).component.dataSourcePath),
          paginatedList: this.getInitialPaginatedData(),
          currentPage: (this as any).component.isStartPageZero ? 0 : 1,
          itemsPerPage: (this as any).getValue()?.itemsPerPage || (this as any).component.itemsPerPage || 10,
          totalElements: _.get((this as any).root.data, (this as any).component.totalElementsValuePath) || _.get((this as any).root.data, (this as any).component.dataSourcePath)?.length,
          totalPages: this.getPagesNum(),
        }

        const pageForSetInitialValue = (this as any).component.isStartPageZero ? 1 : 2;
        
        if((this as any).getValue().currentPage < pageForSetInitialValue) {
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

      (this as any).refs.sizeBtn.forEach((sizeButton) => {
        (this as any).addEventListener(sizeButton, 'click', (event) => {
          event.preventDefault();
          const pageSize = event.target.dataset.itemsPerPage;

          this.setPageSize(pageSize);
        });
      });

      return super.attach(element);
    }

    
    checkRefresh(refreshData, changed, flags) {
      const changePath = _.get(changed, 'instance.path', false);
      // Don't let components change themselves.
      if (changePath && (this as any).path === changePath) {
        return;
      }
      if (refreshData === 'data') {
        (this as any).refresh((this as any).data, changed, flags);
      }
      else if (
        (changePath && (Utils as any).getComponentPath(changed.instance) === refreshData) && changed && changed.instance &&
        // Make sure the changed component is not in a different "context". Solves issues where refreshOn being set
        // in fields inside EditGrids could alter their state from other rows (which is bad).
        (this as any).inContext(changed.instance)
      ) {
        (this as any).refresh(changed.value, changed, flags);
      }

      if(changed?.component?.type === "tabs") {
        const pageNumber = this.getStartPageValue();
        if((this as any).getValue()?.currentPage > pageNumber) {
          this.goToPage(pageNumber);
        }
      }
    }

    detach() {
      clearInterval(this.interval);
      super.detach();
    }
    
}
