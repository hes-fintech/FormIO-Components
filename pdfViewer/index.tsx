import {
    DownloadOutlined,
    LeftOutlined,
    RightOutlined,
    ZoomInOutlined,
    ZoomOutOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio/lib/components';
import { Document, Page, pdfjs } from 'react-pdf';
import { settingsForm } from './pdfViewer.settingsForm';

type InformationComponentType = {
    src: string;
    withPagination?: boolean;
    withDownload?: boolean;
    withZoom?: boolean;
};

type ContextType = {
    i18n: i18next.i18n;
    component: InformationComponentType;
    data: any;
    _: LoDashStatic;
};

type PDFViewerComponentProps = {
    context: ContextType;
    onChange: () => void;
};

const INITIAL_NUM_PAGES = 0;
const INITIAL_PAGE_NUMBER = 1;
const INITIAL_SCALE = 100;

const PDFViewerComponent = (props: PDFViewerComponentProps) => {
    const { context } = props;
    const { withPagination, withDownload, withZoom } = context.component;
    const [numPages, setNumPages] = useState(INITIAL_NUM_PAGES);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE_NUMBER);
    const [scale, setScale] = useState(INITIAL_SCALE);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const setNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber((prevState) => prevState + 1);
        } else {
            setPageNumber(1);
        }
    };

    const setPrevPage = () => {
        if (pageNumber > 1) {
            setPageNumber((prevState) => prevState - 1);
        }
    };

    const zoomIn = () => {
        if (scale < 200) {
            setScale((prevState) => prevState + 10);
        }
    };

    const zoomOut = () => {
        if (scale > 100) {
            setScale((prevState) => prevState - 10);
        }
    };

    return (
        <div className="formio-pdf-viewer">
            <div className="formio-pdf-viewer_toolbar">
                <div className="formio-pdf-viewer_page-container">
                    {withPagination && (
                        <>
                            <button type="button" onClick={setPrevPage}>
                                <LeftOutlined />
                            </button>
                            <div className="formio-pdf-viewer_page-numbers">
                                Page {pageNumber} of {numPages}
                            </div>
                            <button type="button" onClick={setNextPage}>
                                <RightOutlined />
                            </button>
                        </>
                    )}
                </div>
                <div className="formio-pdf-viewer_btn-group">
                    {withDownload && (
                        <div className="formio-pdf-viewer_download-container">
                            <a
                                href={getTemplateString(context)}
                                download
                                className="formio-pdf-viewer_download-btn"
                            >
                                <DownloadOutlined />
                            </a>
                        </div>
                    )}
                    {withZoom && (
                        <div className="formio-pdf-viewer_zoom-container">
                            <button type="button" onClick={zoomOut}>
                                <ZoomOutOutlined />
                            </button>
                            <div className="formio-pdf-viewer_page-numbers">
                                {scale}%
                            </div>
                            <button type="button" onClick={zoomIn}>
                                <ZoomInOutlined />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Document
                file={getTemplateString(context)}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} scale={scale / 100} />
            </Document>
        </div>
    );
};

export class pdfViewer extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'PDFViewer',
            group: 'Data',
            schema: pdfViewer.schema(),
        };
    }

    static schema() {
        return ReactComponent.schema({
            type: 'pdfViewer',
        });
    }

    static editForm = settingsForm;

    get className() {
        return `${this.component.customClass}`;
    }

    attachReact(element: HTMLElement) {
        const context = {
            i18n: this.i18next,
            component: this.component,
            data: this.data,
            _: Utils._,
        };

        // eslint-disable-next-line react/no-render-return-value
        return ReactDOM.render(
            <PDFViewerComponent
                context={context}
                onChange={this.updateValue}
            />,
            element,
        );
    }

    detachReact(element: HTMLElement) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
}

const getTemplateString = (context: ContextType) => {
    const compiled = context._.template(
        context.component.src,
        // eslint-disable-next-line no-param-reassign
        (context._.templateSettings.interpolate = /{{([\s\S]+?)}}/g as any),
    );

    return compiled(context);
};
