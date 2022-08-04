import { ReactComponent } from 'react-formio';
import './styles/docx.scss';
import './styles/index.scss';
export declare class fileComponent extends ReactComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => any;
    get className(): string;
    attachReact(element: HTMLElement): any;
    detachReact(element: HTMLElement): void;
}
