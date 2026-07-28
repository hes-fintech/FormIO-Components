import Component from '@formio/js/components/_classes/component/Component';

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
          <button class="zoomOut" type="button" ref="zoomOut" title="Zoom Out" style="background: transparent; border: none; padding: 8px;"><i class="fa fa-search-minus"></i></button>
          <span ref="zoomLevel" style="margin: 0 10px; font-weight: bold;">100%</span>
          <button class="zoomIn" type="button" ref="zoomIn" title="Zoom In" style="background: transparent; border: none; padding: 8px;"><i class="fa fa-search-plus"></i></button>
          <a ref="downloadBtn" class="downloadBtn" title="Download PDF" style="margin-left: 15px; text-decoration: none;" download><i class="fa fa-download"></i></a>
        </div>
        <div ref="pdfContainer" style="width: 100%; overflow: auto; max-height: 600px; border: 1px solid #ddd; background: #f5f5f5;"></div>
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

    let scale = 1.4; // Default scale that looks good (will display as 100%)
    let pdfDocument: any = null;
    const baseScale = 1.4; // This represents 100% to the user

    const updateZoomText = () => {
      const displayPercentage = Math.round((scale / baseScale) * 100);
      zoomLevelText.textContent = `${displayPercentage}%`;
    };

    const renderPdf = async (preserveScrollPosition = false) => {
      if (!pdfDocument) return;

      // Store current scroll position before any changes
      let scrollTopPercent = 0;
      let currentScrollTop = 0;
      if (preserveScrollPosition) {
        currentScrollTop = container.scrollTop;
        const scrollableHeight = container.scrollHeight - container.clientHeight;
        if (scrollableHeight > 0) {
          scrollTopPercent = currentScrollTop / scrollableHeight;
        }
      }

      // Create a temporary placeholder to maintain scroll during re-render
      let placeholder: HTMLDivElement | null = null;
      if (preserveScrollPosition && container.children.length > 0) {
        placeholder = document.createElement('div');
        placeholder.style.height = `${container.scrollHeight}px`;
        placeholder.style.opacity = '0.3';
        placeholder.style.background = '#f0f0f0';
        placeholder.innerHTML = '<p style="text-align: center; padding: 20px;">Loading...</p>';
      }

      container.innerHTML = '';
      
      if (placeholder) {
        container.appendChild(placeholder);
      }

      try {
        // Calculate new total height first
        let totalNewHeight = 0;
        const canvases: HTMLCanvasElement[] = [];
        
        for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
          const page = await pdfDocument.getPage(pageNum);
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d')!;
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.display = 'block';
          canvas.style.margin = '10px auto';
          canvas.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';

          totalNewHeight += viewport.height + 20; // 20px for margins

          await page.render({ canvasContext: context, viewport }).promise;
          canvases.push(canvas);
        }

        // Remove placeholder and add all canvases at once
        container.innerHTML = '';
        canvases.forEach(canvas => container.appendChild(canvas));

        updateZoomText();

        // Restore scroll position based on the new content height
        if (preserveScrollPosition) {
          requestAnimationFrame(() => {
            const newScrollableHeight = container.scrollHeight - container.clientHeight;
            if (newScrollableHeight > 0) {
              const newScrollTop = scrollTopPercent * newScrollableHeight;
              container.scrollTop = newScrollTop;
            }
          });
        }
      } catch (err: any) {
        container.innerHTML = `<p style="color:red; padding: 20px;">Error rendering: ${err.message}</p>`;
      }
    };

    const loadPdf = async () => {
      const url = (this as any).interpolate((this as any).component.url, {
        data: (this as any).root?.data,
        row: (this as any).data,
      });

      if (downloadBtn instanceof HTMLAnchorElement) {
        downloadBtn.href = url;
      }

      if (!url) {
        container.innerHTML = '<p style="color:red; padding: 20px;">No URL provided.</p>';
        return;
      }

      const pdfjsLib = (window as any).pdfjsLib;
      if (!pdfjsLib) {
        container.innerHTML = `<p style="color:red; padding: 20px;">PDF.js is not loaded.</p>`;
        return;
      }



      try {
        container.innerHTML = '<p style="padding: 20px;">Loading...</p>';
        
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.statusText}`);

        const arrayBuffer = await response.arrayBuffer();
        pdfDocument = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        await renderPdf();
      } catch (err: any) {
        container.innerHTML = `<p style="color:red; padding: 20px;">Error loading: ${err.message}</p>`;
      }
    };

    zoomIn.addEventListener('click', (e: Event) => {
      e.preventDefault();
      scale = Math.min(scale + 0.28, 4.2); // 0.28 ≈ 20% increments, max 300%
      renderPdf(true); // Preserve scroll position when zooming
    });

    zoomOut.addEventListener('click', (e: Event) => {
      e.preventDefault();
      scale = Math.max(scale - 0.28, 0.7); // 0.28 ≈ 20% increments, min 50%
      renderPdf(true); // Preserve scroll position when zooming
    });

    // Initial load
    setTimeout(loadPdf, 100);

    return super.attach(element);
  }

  shouldSkipValidation() {
    return true;
  }
}

export default pdfViewer;
