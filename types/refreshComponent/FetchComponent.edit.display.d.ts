export declare const fetchComponentEditDisplay: ({
    type: string;
    input: boolean;
    label: string;
    key: string;
    placeholder: string;
    validate: {
        required: boolean;
    };
    defaultValue?: undefined;
    dataSrc?: undefined;
    data?: undefined;
    tooltip?: undefined;
    components?: undefined;
    ignore?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    placeholder: string;
    defaultValue: string;
    dataSrc: string;
    data: {
        values: {
            label: string;
            value: string;
        }[];
    };
    validate?: undefined;
    tooltip?: undefined;
    components?: undefined;
    ignore?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    components: {
        label: string;
        key: string;
        input: boolean;
        type: string;
    }[];
    placeholder?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
    dataSrc?: undefined;
    data?: undefined;
    ignore?: undefined;
} | {
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    defaultValue?: undefined;
    dataSrc?: undefined;
    data?: undefined;
    tooltip?: undefined;
    components?: undefined;
})[];
