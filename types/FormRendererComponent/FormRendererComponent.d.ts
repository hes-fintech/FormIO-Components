declare const ContainerComponent: any;
export declare class formRendererComponent extends ContainerComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    get defaultSchema(): any;
    static editForm: (...extend: any) => import("@formio/core").Component[];
    get className(): string;
    setComponents(): void;
    render(children: any): any;
    attach(element: any): any;
}
export {};
