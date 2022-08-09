export declare const pdfViewerDisplay: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    weight?: undefined;
    input?: undefined;
    tooltip?: undefined;
    label?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
} | {
    type: string;
    weight: number;
    input: boolean;
    tooltip: string;
    label: string;
    key: string;
    ignore?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
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
    defaultValue?: undefined;
} | {
    type: string;
    weight: number;
    label: string;
    key: string;
    defaultValue: boolean;
    ignore?: undefined;
    input?: undefined;
    tooltip?: undefined;
    validate?: undefined;
})[];
