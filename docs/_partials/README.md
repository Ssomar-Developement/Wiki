# Reusable Content Partials

This folder contains reusable markdown snippets that can be included in multiple documentation pages.

## How to Use Partials

To include a partial in your documentation page, use the MDX `import` statement:

```mdx
---
title: My Documentation Page
---

import PremiumNotice from './_partials/premium-features-notice.md';
import Requirements from './_partials/installation-requirements.md';

# My Page Title

<PremiumNotice />

Some content here...

<Requirements />
```

## Adjusting Import Paths

The import path depends on where your document is located relative to the `_partials` folder:

- Same level: `import Component from './_partials/file.md';`
- One level deep: `import Component from '../_partials/file.md';`
- Two levels deep: `import Component from '../../_partials/file.md';`

Or use absolute paths from the docs root:

```mdx
import PremiumNotice from '@site/docs/_partials/premium-features-notice.md';
```

## Available Partials

- **premium-features-notice.md** - Notice box for premium-only features
- **installation-requirements.md** - Standard installation requirements section

## Creating New Partials

1. Create a new `.md` file in this folder
2. Write your reusable content using standard markdown or MDX
3. Import and use it in your documentation pages

## Notes

- Files in this folder are automatically excluded from the sidebar
- Partials support all Docusaurus markdown features (admonitions, code blocks, etc.)
- Keep partials focused on a single reusable piece of content
