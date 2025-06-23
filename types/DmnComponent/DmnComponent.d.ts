import Component from 'formiojs/components/_classes/component/Component';
export declare class dmnComponent extends Component {
    static schema(...extend: any[]): any;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        documentation: string;
        schema: any;
    };
    render(): any;
    attach(el: any): any;
    detach(): any;
}
