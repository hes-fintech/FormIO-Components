export declare const formRendererComponentEditDisplay: ({
    type: string;
    input: boolean;
    label: string;
    key: string;
    weight: number;
    tooltip?: undefined;
    validate?: undefined;
    data?: undefined;
    ignore?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    validate: {
        required: boolean;
    };
    weight: number;
    data?: undefined;
    ignore?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    validate: {
        required: boolean;
    };
    weight: number;
    tooltip?: undefined;
    data?: undefined;
    ignore?: undefined;
} | {
    key: string;
    type: string;
    data: {
        custom(context: any): string;
    };
    input?: undefined;
    label?: undefined;
    weight?: undefined;
    tooltip?: undefined;
    validate?: undefined;
    ignore?: undefined;
} | {
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    weight?: undefined;
    tooltip?: undefined;
    validate?: undefined;
    data?: undefined;
})[];
