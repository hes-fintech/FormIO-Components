import Component from 'formiojs/components/_classes/component/Component';
export declare class pdfViewer extends Component {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    static schema(): any;
    static editForm(): {
        components: {
            type: string;
            key: string;
            label: string;
            input: boolean;
        }[];
    };
    render(): any;
    attach(element: HTMLElement): any;
    renderPDF(url: string, container: Element): Promise<void>;
    shouldSkipValidation(): boolean;
}
