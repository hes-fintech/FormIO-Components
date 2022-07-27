export declare const pdfViewerDisplay: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    weight?: undefined;
    input?: undefined;
    label?: undefined;
    tooltip?: undefined;
    validate?: undefined;
} | {
    type: string;
    weight: number;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    validate: {
        required: boolean;
    };
    ignore?: undefined;
} | {
    type: string;
    weight: number;
    label: string;
    key: string;
    ignore?: undefined;
    input?: undefined;
    tooltip?: undefined;
    validate?: undefined;
})[];
