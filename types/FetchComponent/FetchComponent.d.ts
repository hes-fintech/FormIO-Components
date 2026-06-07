declare const Component: any;
export declare class refreshComponent extends Component {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    init(): void;
    abortController: AbortController;
    intervalId: any;
    abortRequest(): void;
    static schema(): any;
    render(): any;
    static editForm: (...extend: any) => import("@formio/core").Component[];
    formatEmptyValueToNull(value: any): any;
    getFormatStringValueToObject(requestBody: any): any;
    shouldSkipValidation(): boolean;
    isFetched: boolean;
    fetchData(): Promise<void>;
    attachEventsForListen: (events: {
        event: string;
    }[]) => void;
    emitEvents: (events: {
        event: string;
    }[]) => void;
    allowSameRequests(): boolean;
    getData(): void;
    getDataAfterSubmissionSet(): void;
    attach(element: any): void;
    destroy(): void;
    testIncludesRefresh(randomString: string, array: string[]): boolean | undefined;
    checkRefresh(refreshData: any, changed: any, flags: any): void;
    checkRefreshOn(changes: any, flags?: any): void;
}
export {};
