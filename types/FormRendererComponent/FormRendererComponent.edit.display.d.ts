export declare const formRendererComponentEditDisplay: ({
    type: string;
    input: boolean;
    label: string;
    key: string;
    weight: number;
    validate?: undefined;
    ignore?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    validate: {
        required: boolean;
    };
    weight: number;
    ignore?: undefined;
} | {
    key: string;
    ignore: boolean;
    type?: undefined;
    input?: undefined;
    label?: undefined;
    weight?: undefined;
    validate?: undefined;
})[];
