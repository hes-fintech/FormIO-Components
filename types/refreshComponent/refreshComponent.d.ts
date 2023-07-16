import Component from 'formiojs/components/_classes/component/Component';
export declare class refreshComponent extends Component {
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
    getValue(): any;
    updateDataGrid(): void;
    shouldSkipValidation(): boolean;
    isFetched: boolean;
    fetchData(): Promise<void>;
    get defaultSchema(): any;
    attach(element: any): void;
}
