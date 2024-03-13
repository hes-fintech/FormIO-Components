export declare const fetchComponentEditDisplay: ({
    key: string;
    ignore: boolean;
    weight?: undefined;
    type?: undefined;
    label?: undefined;
    defaultValue?: undefined;
    tooltip?: undefined;
    input?: undefined;
    customClass?: undefined;
    validate?: undefined;
    components?: undefined;
    data?: undefined;
} | {
    weight: number;
    type: string;
    label: string;
    key: string;
    defaultValue: boolean;
    tooltip: string;
    input: boolean;
    ignore?: undefined;
    customClass?: undefined;
    validate?: undefined;
    components?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    customClass: string;
    weight: number;
    validate: {
        required: boolean;
    };
    ignore?: undefined;
    defaultValue?: undefined;
    tooltip?: undefined;
    components?: undefined;
    data?: undefined;
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
    customClass?: undefined;
    validate?: undefined;
    data?: undefined;
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
    tooltip?: undefined;
    customClass?: undefined;
    validate?: undefined;
    components?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
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
    tooltip?: undefined;
    customClass?: undefined;
    validate?: undefined;
    data?: undefined;
})[];
