# hes-formio-components

Custom [Form.io](https://form.io) components used across HES front-end apps
(Borrower Portal, Back Office, FormIO Modeler).

> **v2 targets Form.io 5 (`@formio/js@^5`).** The `1.x` line (Form.io 4 /
> `formiojs@4`) is no longer maintained. See [CHANGELOG.md](./CHANGELOG.md) for
> the migration notes.

## Components

| Export | Builder type | Notes |
| --- | --- | --- |
| `iframe` | `iframe` | React-based iframe embed |
| `sliderComponent` | `sliderComponent` | Number slider with locale-aware mask |
| `refreshComponent` | `refreshComponent` | Fetch component (HTTP request → value + events) |
| `pdfViewer` | `pdfViewer` | PDF viewer (requires `window.pdfjsLib`) |
| `formioBuilderComponent` | `formioBuilderComponent` | Embedded form builder (React) |
| `formRendererComponent` | `formRendererComponent` | Renders a nested form schema |
| `dropDownComponent` | `dropDownComponent` | Collapsible nested container |
| `paginationComponent` | `paginationComponent` | Client/server table pagination |
| `selectComponentExtended` | `selectComponentExtended` | Select with request body support |
| `dmnComponent` | `dmnComponent` | DMN decision-table editor (dmn-js) |

## Installation

This package declares Form.io as **peer dependencies**, so the host app provides
a single shared Form.io instance (the components extend the host's base classes).

```bash
npm install hes-formio-components @formio/js @formio/react
```

Required peers: `@formio/js@^5.4`, `@formio/react@^6`, `react@>=17`, `react-dom@>=17`.

## Usage

Register the components into the host's Form.io renderer:

```ts
import Components from '@formio/js/lib/cjs/components/Components';
import AllComponents from '@formio/js/lib/cjs/components';
import { customComponents } from 'hes-formio-components';

Components.setComponents({
  ...AllComponents,
  ...customComponents,
});
```

Or register individually / extend a component locally:

```ts
import { customComponents } from 'hes-formio-components';

const Pagination = customComponents.paginationComponent;

class MyPagination extends Pagination {
  // override as needed
}
```

## Development

```bash
npm install        # installs deps (uses the committed lockfile)
npm run build      # webpack bundle (build/) + type declarations (types/)
npm test           # jest
```

The build externalizes `@formio/js`, `@formio/react`, `react`, and `react-dom`
(see `webpack.config.js`) so they are not bundled.
