export declare const paginationComponentApiEditData: ({
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    weight: number;
    dataSrc?: undefined;
    valueProperty?: undefined;
    multiple?: undefined;
    data?: undefined;
    conditional?: undefined;
    ignore?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    tooltip: string;
    dataSrc: string;
    valueProperty: string;
    multiple: boolean;
    data: {
        custom(context: any): any;
    };
    conditional: {
        json: {
            '!': {
                var: string;
            }[];
        };
    };
    ignore?: undefined;
} | {
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    tooltip?: undefined;
    weight?: undefined;
    dataSrc?: undefined;
    valueProperty?: undefined;
    multiple?: undefined;
    data?: undefined;
    conditional?: undefined;
})[];
