import Component from 'formiojs/components/_classes/component/Component';
export declare class phoneInputComponent extends Component {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    get defaultSchema(): any;
    static editForm: (...extend: any) => any;
    get className(): string;
    phoneMask: any;
    render(children: any): any;
    attach(element: any): any;
    getValue(): string;
}
