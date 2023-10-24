import * as i18next from 'i18next';
import _ from 'lodash';
import { createNumberMask } from '@formio/text-mask-addons';
import { settingsForm } from './sliderComponent.settingsForm';
import Components from 'formiojs/components/Components';
import { NumberHelper } from '../utils/NumberHelper';



const NumberComponent = (Components as any).components.number;

export class sliderComponent extends NumberComponent {

    static get builderInfo() {
        return {
            title: 'Slider Component',
            group: 'layout',
            icon: 'slider',
            schema: sliderComponent.schema(),
        };
    }
    
    static schema() {
        return NumberComponent.schema({
            type: 'sliderComponent',
        });
    }

    static editForm = settingsForm;

    get prefix() {
        const parentPrefix = super.prefix;

        return parentPrefix
            ? this.interpolate(parentPrefix, {
                  data: this?.root?.data,
                  row: this?.row || this?.data,
              })
            : '';
    }

    get suffix() {
        const parentSuffix = super.suffix;

        return parentSuffix
            ? this.interpolate(parentSuffix, {
                  data: this?.root?.data,
                  row: this?.row || this?.data,
              })
            : '';
    }

    get defaultValue() {
        return this.interpolate((this as any).component?.max, {
            data: this?.root?.data,
            row: this?.row || this?.data,
        });
    }

    createNumberMask() {
        return createNumberMask({
            prefix: '',
            suffix: '',
            requireDecimal: _.get(this.component, 'requireDecimal', false),
            thousandsSeparatorSymbol: _.get(
                this.component,
                'thousandsSeparator',
                NumberHelper.getSeparatorsByLocale(this.i18next.language)?.thousands,
            ),
            decimalSymbol: _.get(
                this.component,
                'decimalSymbol',
                NumberHelper.getSeparatorsByLocale(this.i18next.language)?.decimal,
            ),
            decimalLimit: _.get(
                this.component,
                'decimalLimit',
                this.decimalLimit,
            ),
            allowNegative: _.get(this.component, 'allowNegative', true),
            allowDecimal: this.isDecimalAllowed(),
        });
    }

    getCustomDefaultValue() {
        return this.interpolate((this as any).component?.max, {
            data: this?.root?.data,
            row: this?.row || this?.data,
        });
    }

    getFormattedValue = (value: string) => {
        return this.getValueAsString(
            this.formatValue(this.parseValue(value)),
        ).replace(/"/g, '&quot;');
    };

    getSlierMaxValue = () => {
        return this.interpolate(this.component?.max, {
            data: this?.root?.data,
            row: this?.row || this?.data,
        });
    };

    getSlierMinValue = () => {
        return this.interpolate(this.component?.min, {
            data: this?.root?.data,
            row: this?.row || this?.data,
        });
    };

    interval: any;

    calculateBackgroundValue = (value: string) => {
        const min = Number(this.getSlierMinValue());
        const max = Number(this.getSlierMaxValue());

        const sliderRangeDeltaValue = max - min;

        return ((Number(value) - min) * 100) / sliderRangeDeltaValue;
    };

    attach(elements: string) {
        this.loadRefs(elements, {
            slider: 'single',
        });

        this.addEventListener(this.refs?.slider, 'input', (event: Event) => {
            const sliderValue = (event.target as HTMLInputElement).value;
            const input = this.refs?.input?.[0];
            input.value = this.getFormattedValue(sliderValue);

            const coloredPercentage =
                this.calculateBackgroundValue(sliderValue);

            (
                event.target as HTMLInputElement
            ).style.backgroundSize = `${coloredPercentage}% 100%`;
        });

        this.addEventListener(this.refs?.slider, 'change', (event: Event) => {
            const sliderValue = (event.target as HTMLInputElement).value;
            this.setValue(sliderValue);
        });

        this.decimalSeparator = NumberHelper.getSeparatorsByLocale(
            this.i18next.language,
        )?.decimal;
        this.delimiter = NumberHelper.getSeparatorsByLocale(
            this.i18next.language,
        )?.thousands;

        if (this.refs?.slider) {
            const coloredPercentage = this.calculateBackgroundValue(
                this.getValue(),
            );
            this.refs.slider.style.backgroundSize = `${coloredPercentage}% 100%`;
        }

        this.interval = setTimeout(() => {
            if (this.getValue() === null) {
                const defaultValue = this.interpolate(this.component?.max, {
                    data: this?.root?.data,
                    row: this?.row || this?.data,
                });
                this.setValue(defaultValue);
            }
        }, 0);

        super.attach(elements);
    }

    formatValue(value: string) {
        if (
            this.component.requireDecimal &&
            value &&
            !value.includes(this.decimalSeparator)
        ) {
            return `${value}${this.decimalSeparator}${_.repeat(
                '0',
                this.decimalLimit,
            )}`;
        }
        if (
            this.component.requireDecimal &&
            value &&
            value.includes(this.decimalSeparator)
        ) {
            return `${value}${_.repeat(
                '0',
                this.decimalLimit -
                    value.split(this.decimalSeparator)[1].length,
            )}`;
        }

        return value;
    }

    detach() {
        clearInterval(this.interval);
        super.detach();
    }
}
