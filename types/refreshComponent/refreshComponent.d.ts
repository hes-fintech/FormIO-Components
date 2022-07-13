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
    attachReact(element: HTMLElement): void;
    detachReact(element: HTMLElement): void;
}
