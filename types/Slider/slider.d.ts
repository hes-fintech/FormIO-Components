declare const NumberComponent: any;
export declare class sliderComponent extends NumberComponent {
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        schema: any;
    };
    static schema(): any;
    static editForm: (...extend: any) => any;
    get prefix(): any;
    get suffix(): any;
    get defaultValue(): any;
    createNumberMask(): any;
    getCustomDefaultValue(): any;
    getFormattedValue: (value: string) => any;
    getSlierMaxValue: () => any;
    getSlierMinValue: () => any;
    interval: any;
    calculateBackgroundValue: (value: string) => number;
    attach(elements: string): void;
    formatValue(value: string): string;
    detach(): void;
}
export {};
