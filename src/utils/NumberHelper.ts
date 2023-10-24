const formatToUsd = (value: number, minimumFractionDigits = 2) => {
    return Intl.NumberFormat('en-us', {
        minimumFractionDigits,
        currency: 'USD',
        style: 'currency',
    }).format(value);
};

type SeparatorType = 'decimal' | 'group';

const getSeparator = (locale: string, separatorType: SeparatorType) => {
    const numberWithGroupAndDecimalSeparator = 1000.1;

    return (
        Intl.NumberFormat(locale)
            .formatToParts(numberWithGroupAndDecimalSeparator)
            .find((part) => part.type === separatorType)?.value || ''
    );
};

const getEscapedSearchPattern = (separatorType: SeparatorType) => {
    const separator = getSeparator('en-us', separatorType);

    return separator === '.' ? /\./gim : new RegExp(separator, 'gmi');
};

const parseFromUsd = (value: string) => {
    const parsedValue = value
        .replace('$', '')
        .replace(getEscapedSearchPattern('group'), '')
        .replace(getEscapedSearchPattern('decimal'), '.');

    return Number.parseFloat(parsedValue);
};

const getSeparatorsByLocale = (
    locale: string,
): {
    thousands: string;
    decimal: string;
} => {
    const numberFormat = new Intl.NumberFormat(
        getLocaleForNumberFormat(locale),
    );

    return {
        thousands: numberFormat.format(1111).replace(/1/g, ''),
        decimal: numberFormat.format(1.1).replace(/1/g, ''),
    };
};

const getLocaleForNumberFormat = (locale: string) => {
    return locale === 'es' ? 'fr' : locale;
};

export const NumberHelper = {
    formatToUsd,
    parseFromUsd,
    getSeparatorsByLocale,
};
