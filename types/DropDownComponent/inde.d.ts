declare const DataFetcher: {
    key: string;
    icon: string;
    label: string;
    settings: {
        input: boolean;
        tableView: boolean;
        label: string;
        key: string;
        dataSrc: string;
        data: {
            url: string;
            method: string;
            headers: never[];
            body: string;
            raw: boolean;
        };
        clearOnRefresh: boolean;
        customOptions: {};
    };
    init(): Promise<void>;
    render(): any;
    attach(element: any): void;
    detach(): void;
};
export default DataFetcher;
