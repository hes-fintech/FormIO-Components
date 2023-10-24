export declare const NumberHelper: {
    formatToUsd: (value: number, minimumFractionDigits?: number) => string;
    parseFromUsd: (value: string) => number;
    getSeparatorsByLocale: (locale: string) => {
        thousands: string;
        decimal: string;
    };
};
