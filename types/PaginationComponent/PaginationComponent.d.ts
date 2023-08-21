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
    checkRefresh(refreshData: any, changed: any, flags: any): void;
    render(children: any): any;
    get defaultSchema(): any;
    static editForm: (...extend: any) => any;
    attach(element: any): any;
}
