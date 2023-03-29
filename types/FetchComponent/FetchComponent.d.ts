import NestedComponent from 'formiojs/components/_classes/nested/NestedComponent';
export declare class FetchComponent extends NestedComponent {
    static schema(...extend: any[]): any;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    static editForm: (...extend: any) => any;
    getValueWithType: (value: any) => any;
    getNestedValue: (obj: any, key: string) => any;
    getTemplateString: (context: ContextType, value: string) => any;
    getRequestBody: (requestBody: any) => any;
    fetchData(): Promise<void>;
    init(): void;
    get defaultSchema(): any;
    get templateName(): string;
    render(): any;
    attach(element: any): void;
    detach(): void;
}
