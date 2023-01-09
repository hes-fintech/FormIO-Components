import ContainerComponent from 'formiojs/components/container/Container';
export declare class formRendererComponent extends ContainerComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    get defaultSchema(): any;
    static editForm: (...extend: any) => any;
    get className(): string;
    setComponents(): void;
    render(children: any): any;
    attach(element: any): any;
}
