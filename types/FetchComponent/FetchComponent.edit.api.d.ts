export declare const fetchComponentEditApi: ({
    weight: number;
    type: string;
    input: boolean;
    key: string;
    label: string;
    tooltip: string;
    validate: {
        pattern: string;
        patternMessage: string;
        required: boolean;
    };
    ignore?: undefined;
} | {
    ignore: boolean;
    key: string;
    weight?: undefined;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    tooltip?: undefined;
    validate?: undefined;
})[];
