import Container from 'formiojs/components/container/Container';
export declare class paginationComponent extends Container {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    get templateName(): string;
    static schema(...extend: any[]): any;
    setValue(value: any, flags?: {}): any;
    getStartPageValue(): "0" | "1";
    getPagesNum(): number;
    paginateArray(array: never[] | undefined, currentPage: any, itemsPerPage: any): never[];
    getInitialPaginatedData(): never[];
    setNewPageValue(nextPage: number): void;
    setNewPageFetchedValue(): void;
    goToNextPage(): void;
    goToPreviousPage(): void;
    goToPage(page: string): void;
    setPageSize(page: string): void;
    render(children: any): any;
    get defaultSchema(): any;
    static editForm: (...extend: any) => any;
    interval: any;
    attach(element: any): any;
    checkRefresh(refreshData: any, changed: any, flags: any): void;
    detach(): void;
}
