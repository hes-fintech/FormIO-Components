export declare const fetchComponentEditTrigger: ({
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
} | {
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    multiple: boolean;
    weight: number;
    dataSrc?: undefined;
    valueProperty?: undefined;
    data?: undefined;
})[];
