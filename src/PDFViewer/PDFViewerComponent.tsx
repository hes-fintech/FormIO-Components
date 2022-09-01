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
import { ReactComponent } from 'react-formio';
import { Document, Page, pdfjs } from 'react-pdf';
import { settingsForm } from './PDFViewer.settingsForm';
import './styles/index.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type InformationComponentType = {
    src: string;
    withPagination?: boolean;
    withDownload?: boolean;
    withZoom?: boolean;
    devLabel: string;
};

type ContextType = {
    i18n: i18next.i18n;
    component: InformationComponentType;
    isBuilderMode: boolean;
    data: any;
    row: any;
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
        <>
            {context.isBuilderMode && (
                <label className="col-form-label">
                    {context.component.devLabel}
                </label>
            )}
            <div className={`${context.isBuilderMode ? "drag-container padding-10" : ""} formio-pdf-viewer`}>
                {(context.isBuilderMode && context.component.src) && (
                    <div>
                       File from {context.component.src}
                    </div>
                )}
                <div className="formio-pdf-viewer_toolbar">
                    <div className="formio-pdf-viewer_page-container">
                        {withPagination && (
                            <>
                                <Button type="text" onClick={setPrevPage}>
                                    <LeftOutlined />
                                </Button>
                                <div className="formio-pdf-viewer_page-numbers">
                                    Page {pageNumber} of {numPages}
                                </div>
                                <Button type="text" onClick={setNextPage}>
                                    <RightOutlined />
                                </Button>
                            </>
                        )}
                    </div>
                    <div className="formio-pdf-viewer_btn-group">
                        {withDownload && (
                            <div className="formio-pdf-viewer_download-container">
                                <Button
                                    type="text"
                                    href={getTemplateString(context)}
                                    download
                                    className="formio-pdf-viewer_download-btn"
                                >
                                    <DownloadOutlined />
                                </Button>
                            </div>
                        )}
                        {withZoom && (
                            <div className="formio-pdf-viewer_zoom-container">
                                <Button type="text" onClick={zoomOut}>
                                    <ZoomOutOutlined />
                                </Button>
                                <div className="formio-pdf-viewer_page-numbers">
                                    {scale}%
                                </div>
                                <Button type="text" onClick={zoomIn}>
                                    <ZoomInOutlined />
                                </Button>
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
        </>
    );
};

export class pdfViewer extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'PDF Viewer',
            group: 'Data',
            icon: 'file',
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
        return `${(this as any).component.customClass}`;
    }

    attachReact(element: HTMLElement) {
        const context = {
            i18n: (this as any).i18next,
            component: (this as any).component,
            data: (this as any).data,
            row: (this as any).data,
            isBuilderMode: (this as any).builderMode || (this as any).options.preview,
            _: Utils._,
        };
        (this as any).component.refreshOn = 'data'

        // eslint-disable-next-line react/no-render-return-value
        return ReactDOM.render(
            <PDFViewerComponent
                context={context}
                onChange={(this as any).updateValue}
            />,
            element,
        );
    }

    detachReact(element: HTMLElement) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
};

const getTemplateString = (context: ContextType) => {
    const src = context.component.src ? getNestedValue(context, context.component.src.substring(context.component.src.lastIndexOf("{{") + 2, context.component.src.lastIndexOf("}}"))) : "";
    return context.component.src?.replace(/\{{(.+?)\}}/g, `${src}`);
};

const getNestedValue = (obj: any, key: string) => {
    const splitCondition = key.includes("?") ? "?." : ".";
    return key.split(splitCondition).reduce((result, key) => {
        return result?.[key]
    }, obj);
};
