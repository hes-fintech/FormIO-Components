import Component from 'formiojs/components/_classes/component/Component';

export class pdfViewer extends Component {
  static get builderInfo() {
    return {
      title: 'PDF Viewer',
      group: 'basic',
      icon: 'file-pdf',
      schema: pdfViewer.schema(),
    };
  }

  static schema() {
    return Component.schema({
      type: 'pdfViewer',
      label: 'PDF Viewer',
      key: 'pdfViewer',
      url: '',
      clearOnHide: false,
    });
  }

  static editForm() {
    return {
      components: [
        {
          type: 'textfield',
          key: 'url',
          label: 'PDF URL',
          input: true,
        },
      ],
    };
  }

  render() {
    return super.render(`
      <div class="formio-pdf-viewer">
        <label class="col-form-label">${(this as any).component.label}</label>
        <div class="pdf-controls" style="margin-bottom: 10px;">
          <button class="zoomOut" type="text" ref="zoomOut" title="Zoom Out" style="background: transparent; border: none;"><i class="fa fa-search-minus"></i></button>
          <span ref="zoomLevel">100%</span>
          <button class="zoomIn" type="text" ref="zoomIn" title="Zoom In" style="background: transparent; border: none;"><i class="fa fa-search-plus"></i></button>
          <a ref="downloadBtn" class="downloadBtn" title="Download PDF" style="margin-left: 10px; text-decoration: none;" download><i class="fa fa-download"></i></a>
        </div>
        <div ref="pdfContainer" style="width: 100%; overflow: auto; max-height: 600px; display: flex; flex-direction: column;"></div>
      </div>
    `);
  }

  attach(element: HTMLElement) {
    (this as any).loadRefs(element, {
      pdfContainer: 'single',
      zoomIn: 'single',
      zoomOut: 'single',
      zoomLevel: 'single',
      downloadBtn: 'single',
    });

    const container = (this as any).refs.pdfContainer;
    const zoomIn = (this as any).refs.zoomIn;
    const zoomOut = (this as any).refs.zoomOut;
    const zoomLevelText = (this as any).refs.zoomLevel;
    const downloadBtn = (this as any).refs.downloadBtn;

    if (!container || !zoomIn || !zoomOut || !zoomLevelText || !downloadBtn) {
      return super.attach(element);
    }

    let scale = 1;
    let currentUrl = '';

    const updateZoomText = () => {
      zoomLevelText.textContent = `${Math.round(scale * 100)}%`;
    };

    const loadPdf = async () => {
      const url = (this as any).interpolate((this as any).component.url, {
        data: (this as any).root?.data,
        row: (this as any).data,
      });

      currentUrl = url;
      if (downloadBtn instanceof HTMLAnchorElement) {
        downloadBtn.href = url;
      }

      if (!url) {
        container.innerHTML = '<p style="color:red;">No PDF URL provided.</p>';
        return;
      }

      const pdfjsLib = (window as any).pdfjsLib;
      if (!pdfjsLib) {
        container.innerHTML = `<p style="color:red;">PDF.js is not loaded.</p>`;
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.statusText}`);

        const arrayBuffer = await response.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        container.innerHTML = '';

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d')!;
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;
          container.appendChild(canvas);
        }

        updateZoomText();
      } catch (err: any) {
        container.innerHTML = `<p style="color:red;">Error loading PDF: ${err.message}</p>`;
      }
    };

    zoomIn.addEventListener('click', () => {
      scale = Math.min(scale + 0.1, 3);
      loadPdf();
    });

    zoomOut.addEventListener('click', () => {
      scale = Math.max(scale - 0.1, 0.5);
      loadPdf();
    });

    setTimeout(loadPdf, 0);

    return super.attach(element);
  }

  shouldSkipValidation() {
    return true;
  }
}

export default pdfViewer;
