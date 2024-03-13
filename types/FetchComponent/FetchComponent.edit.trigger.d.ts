export declare const fetchComponentEditTrigger: ({
    type: string;
    input: boolean;
    label: string;
    tooltip: string;
    key: string;
    customClass: string;
    defaultValue: boolean;
    weight: number;
    dataSrc?: undefined;
    multiple?: undefined;
    valueProperty?: undefined;
    data?: undefined;
    components?: undefined;
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
    customClass?: undefined;
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
    customClass?: undefined;
    defaultValue?: undefined;
    dataSrc?: undefined;
    multiple?: undefined;
    valueProperty?: undefined;
    data?: undefined;
})[];
