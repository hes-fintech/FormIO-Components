import { Utils } from 'formiojs';
import * as i18next from 'i18next';
import { LoDashStatic } from 'lodash';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from 'react-formio';
import { settingsForm } from './FileComponent.settingsForm';
import { useDropzone } from 'react-dropzone';
// import mammoth from 'mammoth';
import { Document, Page, pdfjs } from 'react-pdf';
// import './styles/docx.scss';
import './styles/index.scss';
import axios from 'axios';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type File = {
    path: string;
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    preview: string;
    webkitRelativePath: string;
};

type InformationComponentType = {
    url: string;
    label: string;
    key: string;
    multiple: boolean;
};

type ContextType = {
    i18n: i18next.i18n;
    component: InformationComponentType;
    data: any;
    setValue: (arg: any) => void;
    isBuilderMode: boolean;
    _: LoDashStatic;
};

type FileComponentProps = {
    context: ContextType;
    onChange: () => void;
};

const FileComponent = (props: FileComponentProps) => {
    const { context } = props;

    
    return (
        <>
            <Dropzone data={context} />
        </>
    );
}

export class fileComponent extends ReactComponent {
    static get builderInfo() {
        return {
            title: 'File Component',
            group: 'Data',
            icon: 'file',
            schema: fileComponent.schema(),
        };
    }

    static schema() {
        return ReactComponent.schema({
            type: 'fileComponent',
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
            setValue: (value: any) => {
                (this as any).updateValue(value);
            },
            isBuilderMode: (this as any).builderMode || (this as any).options.preview,
            _: Utils._,
        };
        // eslint-disable-next-line react/no-render-return-value
        return ReactDOM.render(
            <FileComponent context={context} onChange={(this as any).updateValue} />,
            element,
        );
    }

    detachReact(element: HTMLElement) {
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
}

const uploadFile = async (file: File, url: string, setData: any, data: any, key: string, isMultiple: boolean) => {
    const formData = new FormData();
    const fileName = `${new Date().getMilliseconds()}-${Math.random()}-${file.name}`;
    //@ts-ignore
    formData.append("file", file);
    formData.append("name", fileName);
    formData.append("dir", "");
    const resp = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
    });
    setData([...(data[key] || []), {
        name: fileName,
        originalName: file.name,
        size: file.size,
        storage: "url",
        type: file.type,
        url: `${url}?form=${resp.data.filePath}`,
    }]);
}

    const Dropzone = ({data}: {data: ContextType}) => {
        const [files, setFiles] = useState<File[]>([]);
        const { getRootProps, getInputProps, open } = useDropzone({
        onDrop: (acceptedFiles: any[]) => {
            const transformedFile = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
            )
            setFiles(transformedFile);
            uploadFile(acceptedFiles[0], data.component.url, data.setValue, data.data, data.component.key, data.component.multiple);
        }
        });
  
    const removeFile = (file: File) => () => {
      const newFiles = [...files];
      newFiles.splice(newFiles.indexOf(file), 1);
      setFiles(newFiles);
      data.setValue([]);
    };
  
    const thumbs = [...(data.data[data.component.key] || files)].map((file: File) => (
      <div key={file.name} className="preview-file-container">
        <div onClick={removeFile(file)} className="remove-btn"><i className="fa fa-remove" /></div>
        <div className='viewer-wrapper'>
            <Viewer file={file} />
        </div>
      </div>
    ));
  
    useEffect(
      () => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach((file: any) => URL.revokeObjectURL(file.preview));
      },
      [files, data.data[data.component.key]]
    );

    return (
        <>
            {(data.data[data.component.key] || files).length > 0 ? (thumbs) : (
                <section className="dropzone-container">
                    <div
                    {...getRootProps({ className: "dropzone" })}
                    onClick={(e) => e.stopPropagation}
                    >
                        <input {...getInputProps()} />
                        <div className='dropzone-text-container'>
                            <div>
                                <i className="fa fa-cloud-upload" /> Drop files to attach, or{' '}
                                <span className='browse-btn' onClick={open}>browse</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
  }

  // const DocxViewer = ({file}: {file: File}) => {
  //   const [doc, setDoc] = useState('');

  //   useEffect(() => {
  //     const jsonFile = new XMLHttpRequest();
  //     jsonFile.open('GET', file.preview, true);
  //     jsonFile.send();
  //     jsonFile.responseType = 'arraybuffer';
  //     jsonFile.onreadystatechange = () => {
  //       if (jsonFile.readyState === 4 && jsonFile.status === 200) {
  //         mammoth.convertToHtml(
  //           { arrayBuffer: jsonFile.response },
  //           { includeDefaultStyleMap: true },
  //         )
  //         .then((result) => {
  //           const docEl = document.createElement('div');
  //           docEl.className = 'document-container';
  //           docEl.innerHTML = result.value;
  //           setDoc(docEl.outerHTML);
  //         })
  //         .catch((a) => {
  //           console.log('something went wrong', a);
  //         });
  //       }
  //     };
  //   }, [])
    
  //   return (
  //       <div id="docx" dangerouslySetInnerHTML={ { __html: doc }} />
  //   );
  // }

  const PDFViewer = ({file}: {file: File}) => {
    return (
        <Document
            file={ file.preview}
        >
            <Page pageNumber={1} scale={0.5} />
        </Document>
    );
  }

  const ImageViewer = ({file}: {file: File}) => {
    return (
        <img src={file.preview} alt={file.name} />
    );
  };



  const Viewer = ({file}: {file: File}) => {
    const fileNameArray = file.name.split('.');
    switch (fileNameArray[fileNameArray.length - 1]) {
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'bmp':
      case 'png': {
        return <ImageViewer file={file} />;
      }
      case 'pdf': {
        return <PDFViewer file={file} />;
      }
      // case 'docx': {
      //   return <DocxViewer file={file} />;
      // }
      default: {
        return <ImageViewer file={file} />;
      }
    }
  }
