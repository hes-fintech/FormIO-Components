export declare const sliderComponentDisplay: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
    weight?: undefined;
    tooltip?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    validate: {
        required: boolean;
    };
    ignore?: undefined;
    defaultValue?: undefined;
    weight?: undefined;
    tooltip?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    ignore?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
    weight?: undefined;
    tooltip?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    defaultValue: number;
    validate: {
        required: boolean;
    };
    ignore?: undefined;
    weight?: undefined;
    tooltip?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    weight: number;
    key: string;
    label: string;
    tooltip: string;
    ignore?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    tooltip: string;
    dataSrc: string;
    valueProperty: string;
    data: {
        custom(context: any): {
            label: string;
            value: string;
        }[];
    };
    ignore?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
})[];
