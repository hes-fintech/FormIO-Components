import { InputNumber, Slider } from 'antd';
import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';
import { settingsForm } from './sliderComponent.settingsForm';
import './styles/index.scss';

type InformationComponentType = {
    sliderTitle: string;
    inputId: string;
    helpText?: string;
    minTermMonths: number;
    maxTermMonths: number;
};

type ContextType = {
    i18n: i18next.i18n;
    component: InformationComponentType;
    data: any;
    _: LoDashStatic;
};

type SliderComponentProps = {
    context: ContextType;
    onChange: () => void;
};

const INITIAL_TERM_MONTHS = 0;

const SliderComponent = (props: SliderComponentProps) => {
    const { context } = props;
    const {
        sliderTitle,
        inputId,
        helpText,
        minTermMonths = 0,
        maxTermMonths = 0,
    } = context.component;

    const [termMonths, setTermMonths] = useState(INITIAL_TERM_MONTHS);

    return (
        <div className="formio-slider-container">
            <span>{sliderTitle}</span>
            <InputNumber
                className="formio-slider-input"
                bordered={false}
                controls={false}
                id={inputId}
                value={termMonths}
                formatter={(value) => `${value} ${helpText || ''}`}
                parser={(value) => Number.parseInt(value || '0')}
                onChange={(value) => {
                    setTermMonths(value);
                }}
                min={Number(minTermMonths)}
                max={Number(maxTermMonths)}
            />
            <Slider
                className="formio-slider-slider"
                min={Number(minTermMonths)}
                max={Number(maxTermMonths)}
                value={termMonths}
                onChange={(value: number) => {
                    setTermMonths(value);
                }}
            />
        </div>
    );
};

export class sliderComponent extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'SliderComponent',
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