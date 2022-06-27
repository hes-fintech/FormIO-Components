export declare const iframeEditDisplay: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    tooltip?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
    weight?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    validate: {
        required: boolean;
    };
    ignore?: undefined;
    defaultValue?: undefined;
    weight?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    defaultValue: string;
    validate: {
        required: boolean;
    };
    ignore?: undefined;
    weight?: undefined;
} | {
    weight: number;
    type: string;
    label: string;
    tooltip: string;
    key: string;
    input: boolean;
    ignore?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
})[];
