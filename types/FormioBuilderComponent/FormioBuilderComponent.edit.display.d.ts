export declare const formioBuilderComponentEditDisplay: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    weight?: undefined;
    tooltip?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
    defaultValue?: undefined;
    validate?: undefined;
    components?: undefined;
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
        values?: undefined;
    };
    ignore?: undefined;
    defaultValue?: undefined;
    validate?: undefined;
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
    tooltip?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    validate?: undefined;
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
    tooltip?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
    defaultValue?: undefined;
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
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
    defaultValue?: undefined;
    validate?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    defaultValue: number;
    weight: number;
    ignore?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
    validate?: undefined;
    components?: undefined;
})[];
