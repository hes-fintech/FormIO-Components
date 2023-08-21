export declare const paginationComponentEditDisplay: ({
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    weight?: undefined;
    validate?: undefined;
    tooltip?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
    multiple?: undefined;
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
    multiple?: undefined;
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
    multiple?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    tooltip: string;
    dataSrc: string;
    multiple: boolean;
    valueProperty: string;
    data: {
        custom(context: any): {
            label: string;
            value: string;
        }[];
    };
    ignore?: undefined;
    validate?: undefined;
})[];
