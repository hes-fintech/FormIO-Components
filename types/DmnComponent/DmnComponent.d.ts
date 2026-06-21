import 'dmn-js/dist/assets/diagram-js.css';
import 'dmn-js/dist/assets/dmn-font/css/dmn-embedded.css';
import 'dmn-js/dist/assets/dmn-js-decision-table-controls.css';
import 'dmn-js/dist/assets/dmn-js-decision-table.css';
import 'dmn-js/dist/assets/dmn-js-drd.css';
import 'dmn-js/dist/assets/dmn-js-literal-expression.css';
import 'dmn-js/dist/assets/dmn-js-shared.css';
declare const Component: any;
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
    attach(el: HTMLElement): Promise<any>;
    hookInto(viewer: any): void;
    detach(): any;
    setValue(value: string, flags: any, initial?: boolean): void;
}
export {};
