import { ReactComponent } from '@formio/react';
export declare class iframe extends ReactComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => import("@formio/core").Component[];
    get className(): string;
    attachReact(element: any): any;
    detachReact(element: any): void;
}
