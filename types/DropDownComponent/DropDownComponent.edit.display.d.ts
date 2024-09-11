export declare const dropdownComponentEditDisplay: ({
    type: string;
    input: boolean;
    label: string;
    key: string;
    validate: {
        required: boolean;
    };
    weight: number;
    tooltip?: undefined;
    components?: undefined;
    ignore?: undefined;
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
    validate?: undefined;
    ignore?: undefined;
} | {
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    validate?: undefined;
    weight?: undefined;
    tooltip?: undefined;
    components?: undefined;
})[];
