import ContainerComponent from 'formiojs/components/container/container';
export declare class paginationComponent extends ContainerComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    get templateName(): string;
    static schema(...extend: any[]): any;
    setValue(value: any, flags?: {}): any;
    getPagesNum(): number;
    paginateArray(array: never[] | undefined, currentPage: any, itemsPerPage: any): never[];
    getInitialPaginatedData(): any;
    setNewPageValue(nextPage: number): void;
    goToNextPage(): void;
    goToPreviousPage(): void;
    goToPage(page: string): void;
    render(children: any): any;
    get defaultSchema(): any;
    static editForm: (...extend: any) => any;
    attach(element: any): any;
}
