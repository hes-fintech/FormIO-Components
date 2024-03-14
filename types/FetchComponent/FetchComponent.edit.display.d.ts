export declare const fetchComponentEditDisplay: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    weight?: undefined;
    defaultValue?: undefined;
    validate?: undefined;
    tooltip?: undefined;
    customClass?: undefined;
    components?: undefined;
    data?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    weight: number;
    defaultValue: string;
    validate: {
        required: boolean;
    };
    ignore?: undefined;
    tooltip?: undefined;
    customClass?: undefined;
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
    validate?: undefined;
    customClass?: undefined;
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
    validate?: undefined;
    customClass?: undefined;
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
    validate?: undefined;
    tooltip?: undefined;
    customClass?: undefined;
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
    validate?: undefined;
    tooltip?: undefined;
    customClass?: undefined;
    data?: undefined;
})[];
