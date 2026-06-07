declare const SelectComponent: any;
export declare class selectComponentExtended extends SelectComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => import("@formio/core").Component[];
    get requestBody(): {};
    get requestHeaders(): Map<any, any>;
    loadItems(url: any, search: any, headers: any, options: any, method: any): void;
}
export {};
