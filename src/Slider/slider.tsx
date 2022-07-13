import { InputNumber, Slider } from 'antd';
import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
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

    const isFirstRender = useFirstRender();

    const [sliderValue, setSliderValue] = useState(Number(getTemplateString(context, initialValue) || initialValue));

    useEffect(() => {
        if (isFirstRender) {
            context.setValue(Number(getTemplateString(context, max)));
        }
    }, [context.data]);

    return (
        <div className="formio-slider-container">
            <span>{sliderTitle}</span>
            <InputNumber
                className="formio-slider-input"
                bordered={false}
                controls={false}
                id={inputId}
                value={sliderValue}
                formatter={(value: any) => `${prefix || ''} ${value} ${suffix || ''}`}
                parser={(value: any) => Number.parseInt(value || '0')}
                onChange={(value: any) => {
                    setSliderValue(value);
                    context.setValue(value);
                }}
                min={Number(getTemplateString(context, min) || min)}
                max={Number(getTemplateString(context, max) || max)}
            />
            <Slider
                className="formio-slider-slider"
                min={Number(getTemplateString(context, min) || min)}
                max={Number(getTemplateString(context, max) || max)}
                value={sliderValue}
                step={Number(getTemplateString(context, sliderStep) || sliderStep)}
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
            group: 'Data',
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
            data: (this as any).data,
            row: (this as any).data,
            setValue: (this as any).updateValue,
            _: Utils._,
        };
        (this as any).component.refreshOn = "change";
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
}

const getTemplateString = (context: ContextType, value: any) => {
    const compiled = context._.template(
        value,
        // eslint-disable-next-line no-param-reassign
        (context._.templateSettings.interpolate = /{{([\s\S]+?)}}/g) as any,
    );
    return compiled(context);
};

const useFirstRender = () => {
    const ref = useRef(true);
    const firstRender = ref.current;
    ref.current = false;
    return firstRender;
};
