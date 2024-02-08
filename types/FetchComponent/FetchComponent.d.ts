import Component from 'formiojs/components/_classes/component/Component';
export declare class fetchComponent extends Component {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    abortController: AbortController;
    abortRequest(): void;
    static schema(): any;
    render(): any;
    static editForm: (...extend: any) => any;
    getValueWithType(value: any): any;
    getTemplateString(value: string): any;
    getRequestBody(requestBody: any): any;
    getTemplateStringContext(comp: any): string;
    getValue(): any;
    shouldSkipValidation(): boolean;
    isFetched: boolean;
    fetchData(): Promise<void>;
    attach(element: any): void;
    destroy(): void;
}
