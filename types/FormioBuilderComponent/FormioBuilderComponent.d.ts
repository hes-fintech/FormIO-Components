import { ReactComponent } from '@formio/react';
import './styles/index.scss';
export declare class formioBuilderComponent extends ReactComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => import("@formio/core").Component[];
    get className(): string;
    shouldSkipValidation(): boolean;
    attachReact(element: HTMLElement): any;
    detachReact(element: HTMLElement): void;
}
