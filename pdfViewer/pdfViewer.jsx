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
import { settingsForm } from './pdfViewer/pdfViewer.settingsForm';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs.2.12.313.worker.js';

const INITIAL_NUM_PAGES = 0;
const INITIAL_PAGE_NUMBER = 1;
const INITIAL_SCALE = 100;

const PDFViewerComponent = (props) => {
    const { context } = props;
    const { withPagination, withDownload, withZoom } = context.component;
    const [numPages, setNumPages] = useState(INITIAL_NUM_PAGES);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE_NUMBER);
    const [scale, setScale] = useState(INITIAL_SCALE);

    const onDocumentLoadSuccess = ({ numPages }) => {
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

    attachReact(element) {
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

    detachReact(element) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
}

const getTemplateString = (context) => {
    const compiled = context._.template(
        context.component.src,
        // eslint-disable-next-line no-param-reassign
        (context._.templateSettings.interpolate = /{{([\s\S]+?)}}/g),
    );

    return compiled(context);
};
