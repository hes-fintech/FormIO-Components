export declare const fetchComponentEditDisplay: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    weight?: undefined;
    defaultValue?: undefined;
    label?: undefined;
    data?: undefined;
    validate?: undefined;
    tooltip?: undefined;
    components?: undefined;
} | {
    type: string;
    input: boolean;
    weight: number;
    key: string;
    defaultValue: string;
    label: string;
    data: {
        values: {
            label: string;
            value: string;
        }[];
    };
    ignore?: undefined;
    validate?: undefined;
    tooltip?: undefined;
    components?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    weight: number;
    validate: {
        required: boolean;
    };
    ignore?: undefined;
    defaultValue?: undefined;
    data?: undefined;
    tooltip?: undefined;
    components?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    weight: number;
    components: {
        label: string;
        key: string;
        input: boolean;
        type: string;
    }[];
    ignore?: undefined;
    defaultValue?: undefined;
    data?: undefined;
    validate?: undefined;
})[];
