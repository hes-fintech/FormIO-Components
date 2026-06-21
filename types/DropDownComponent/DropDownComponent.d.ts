import NestedComponent from 'formiojs/components/_classes/nested/NestedComponent';
export declare class dropDownComponent extends NestedComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    get templateName(): string;
    static schema(...extend: any[]): any;
    get defaultSchema(): any;
    static editForm: (...extend: any) => any;
}
