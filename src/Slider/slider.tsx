import { InputNumber, Slider } from 'antd';
import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';
import { settingsForm } from './sliderComponent.settingsForm';
import './styles/index.scss';

type InformationComponentType = {
    sliderTitle: string;
    inputId: string;
    suffix?: string;
    prefix?: string;
    sliderStep: number;
    min: number;
    max: number;
    initialValue: number;
};

type ContextType = {
    i18n: i18next.i18n;
    component: InformationComponentType;
    data: any;
    setValue: (value: any) => void;
    isBuilderMode: boolean;
    _: LoDashStatic;
};

type SliderComponentProps = {
    context: ContextType;
    onChange: () => void;
};

const SliderComponent = (props: SliderComponentProps) => {
    const { context } = props;
    const {
        sliderTitle,
        inputId,
        suffix,
        prefix,
        sliderStep = 1,
        min,
        max,
        initialValue
    } = context.component;

    const numberWithCommas = (x: number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const prefixValue = getTemplateString(context, prefix);
    const suffixValue = getTemplateString(context, suffix);

    const [sliderValue, setSliderValue] = useState(0);
    const [minValue, setMinInitialValue] = useState(0);
    const [maxValue, setMaxInitialValue] = useState(0);

    const setValues = _.debounce(() => {
        context.setValue(Number(getTemplateString(context, initialValue)));
        setMinInitialValue(Number(getTemplateString(context, min)) as number);
        setMaxInitialValue(Number(getTemplateString(context, max)) as number);
        setSliderValue(Number(getTemplateString(context, initialValue)));
    }, 0);

    useEffect(() => {
        if (!context.isBuilderMode) {
            setValues();
        };
    }, [context.data]);

    return (
        <div className="formio-slider-container">
            <span>{context.i18n.t(sliderTitle) as string}</span>
            <InputNumber
                className="formio-slider-input"
                bordered={false}
                controls={false}
                id={inputId}
                value={sliderValue as number}
                formatter={(value: any) => `${context.i18n.t(prefixValue || '') || ''} ${numberWithCommas(value)} ${context.i18n.t(suffixValue || '') || ''}`}
                parser={(value: any) => Number.parseInt(value || '0')}
                onChange={(value: any) => {
                    setSliderValue(value);
                    context.setValue(value);
                }}
                min={minValue as number}
                max={maxValue as number}
            />
            <Slider
                className="formio-slider-slider"
                min={minValue as number}
                max={maxValue as number}
                value={sliderValue as number}
                step={Number(getTemplateString(context, sliderStep))}
                onChange={(value: number) => {
                    setSliderValue(value);
                }}
                onAfterChange={(value: number) => {
                    context.setValue(value);
                }}
            />
        </div>
    );
};

export class sliderComponent extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'Slider Component',
            group: 'layout',
            icon: 'slider',
            schema: sliderComponent.schema(),
        };
    }

    static schema() {
        return ReactComponent.schema({
            type: 'sliderComponent',
        });
    }

    static editForm = settingsForm;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    attachReact(element: HTMLElement) {
        const context = {
            i18n: (this as any).i18next,
            component: (this as any).component,
            data: (this as any).data as any,
            row: (this as any).data as any,
            setValue: (this as any).updateValue,
            isBuilderMode: Boolean((this as any).builderMode) || Boolean((this as any).options.preview),
            _: Utils._,
        };
        // eslint-disable-next-line react/no-render-return-value
        return ReactDOM.render(
            <SliderComponent context={context} onChange={(this as any).updateValue} />,
            element,
        );
    }

    detachReact(element: HTMLElement) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
};

const getTemplateString = (context: ContextType, value: any) => {
    if (value?.toString()?.includes('{{')) {
        const src = value ? getNestedValue(context, value.substring(value.lastIndexOf("{{") + 2, value.lastIndexOf("}}"))) : "";
        return value?.replace(/\{{(.+?)\}}/g, `${src}`);
    };
    return value
};

const getNestedValue = (obj: any, key: string) => {
    const splitCondition = key.includes("?") ? "?." : ".";
    return key.split(splitCondition).reduce((result, key) => {
        return result?.[key]
    }, obj);
};
