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

    const minValue = context.isBuilderMode ? 0 : Number(getTemplateString(context, min));
    const maxValue = context.isBuilderMode ? 0 : Number(getTemplateString(context, max));
    const initialDataValue = context.isBuilderMode ? 0 : Number(getTemplateString(context, initialValue));

    const [sliderValue, setSliderValue] = useState(initialDataValue);

    useEffect(() => {
        if (!context.isBuilderMode) {
            context.setValue(initialDataValue);
        };
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
                min={minValue}
                max={maxValue}
            />
            <Slider
                className="formio-slider-slider"
                min={minValue}
                max={maxValue}
                value={sliderValue}
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
}

const getTemplateString = (context: ContextType, value: any) => {
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    const compiled = _.template(
        value
    );
    
    return compiled(context);
};
