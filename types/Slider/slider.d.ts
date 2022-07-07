import { ReactComponent } from 'react-formio';
import './styles/index.scss';
export declare class sliderComponent extends ReactComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => any;
    get className(): string;
    attachReact(element: HTMLElement): void;
    detachReact(element: HTMLElement): void;
}
