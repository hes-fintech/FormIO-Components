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
    currentComponentData: never[];
    updateDataGrid: () => void;
    addDataGridLoaders: () => void;
    shouldSkipValidation(): boolean;
    attachReact(element: HTMLElement): any;
    detachReact(element: HTMLElement): void;
}
