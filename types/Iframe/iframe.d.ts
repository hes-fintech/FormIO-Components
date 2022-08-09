import { ReactComponent } from 'react-formio';
export declare class iframe extends ReactComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => any;
    get className(): string;
    attachReact(element: any): any;
    detachReact(element: any): void;
}
