import NestedComponent from 'formiojs/components/_classes/nested/NestedComponent';
export declare class refreshComponent extends NestedComponent {
    static schema(...extend: any[]): any;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    static editForm: (...extend: any) => any;
    getValueWithType(value: any): any;
    getNestedValue(obj: any, key: string): any;
    getTemplateString(context: any, value: string): any;
    getRequestBody(requestBody: any): any;
    getTemplateStringContext(comp: any): string;
    updateDataGrid(): void;
    fetchData(): Promise<void>;
    init(): void;
    get defaultSchema(): any;
    get templateName(): string;
    attach(element: any): void;
    detach(): void;
}
