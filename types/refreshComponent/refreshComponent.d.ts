import { ReactComponent } from 'react-formio';
export declare class refreshComponent extends ReactComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => any;
    get className(): string;
    updateDataGrid: () => void;
    attachReact(element: HTMLElement): any;
    detachReact(element: HTMLElement): void;
}
