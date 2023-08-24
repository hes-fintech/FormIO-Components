import Component from 'formiojs/components/_classes/component/Component';
export declare class refreshComponent extends Component {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
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
}
