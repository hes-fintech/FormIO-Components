declare const Component: any;
export declare class pdfViewer extends Component {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
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
    shouldSkipValidation(): boolean;
}
export default pdfViewer;
