import { Root } from 'react-dom/client';
import './styles/index.scss';
declare const Component: any;
export declare class formioBuilderComponent extends Component {
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
    render(): any;
    attach(element: HTMLElement): void;
    reactRoot: Root | null;
    detach(): void;
    mountReact(element: HTMLElement): void;
}
export {};
