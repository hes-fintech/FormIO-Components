# Changelog

## 2.0.0 — Form.io 5 migration

**Breaking.** This release moves the library from Form.io 4 (`formiojs@4`) to
Form.io 5 (`@formio/js@^5`). Consuming apps must migrate to Form.io 5 in the same
release — `formiojs@4` and `@formio/js@5` cannot coexist in one renderer.

### For consuming apps (Borrower Portal, Back Office, FormIO Modeler)

Required before/with upgrading to `hes-formio-components@2`:

- **Install the new peers:** `@formio/js@^5.4`, `@formio/react@^6`
  (replacing `formiojs@4` and `react-formio@4`). React `>=17`.
- **Replace deep imports.** v5's `package.json#exports` removes the
  `formiojs/components/*` paths. Migrate your own custom components:
  - `formiojs` → `@formio/js`
  - `formiojs/components/_classes/component/Component` →
    `Components.components.component` (from `import { Components } from '@formio/js'`)
  - `formiojs/components/container/Container` → `Components.components.container`
  - `formiojs/components/_classes/nested/NestedComponent` → `Components.components.nested`
  - `formiojs/utils/utils` → `@formio/js/utils`
- **React wrapper:** `react-formio` → `@formio/react`. `FormBuilder`'s `form`
  prop is now `initialForm`.
- **Bootstrap / icons:** v5 defaults to Bootstrap 5 + Bootstrap Icons (was
  Bootstrap 4 + Font Awesome). Keep Bootstrap 4 explicitly or migrate templates.
- **Validation API:** `component.error` → `component.errors[]`
  (+ `component.visibleErrors`); `editGrid.validateRows()` now returns an array.

The library now ships real type declarations (`types/index.d.ts`), so you can
drop any `declare module 'hes-formio-components'` shim.

### Library changes

- Switched all base-class imports to the `Components.components.*` registry
  pattern (verified stable in v5): Component, Container, Nested, Select, Number.
- `baseEditForm` now imported from
  `@formio/js/lib/cjs/components/_classes/component/Component.form`.
- `@formio/js`, `@formio/react`, `react`, `react-dom` are now
  **peerDependencies** and **webpack externals** (no longer bundled). Bundle size
  dropped accordingly.
- Added missing `@formio/text-mask-addons` dependency (used by the slider).
- Fixed the `package.json#types` path (`build/types/...` → `types/...`).
- Removed the dead `src/refreshComponent/` module (unused; pulled in `node-fetch`).
- Bumped to `2.0.0`.

### Verified unchanged in v5 (no action needed)

- `Utils.getComponent`, `Utils.getComponentPath`, `Utils.getRandomComponentId`
- `Select.loadItems(url, search, headers, options, method, body)` 6-arg signature
