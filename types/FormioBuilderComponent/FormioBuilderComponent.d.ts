import { ReactComponent } from 'react-formio';
import './styles/index.scss';
export declare class formioBuilderComponent extends ReactComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => any;
    get className(): string;
    shouldSkipValidation(): boolean;
    attachReact(element: HTMLElement): any;
    detachReact(element: HTMLElement): void;
}
