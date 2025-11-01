---
description: This is an example of an unlisted page that won't appear in navigation
unlisted: true
---

# Example Unlisted Page

This page demonstrates the `unlisted` feature.

## What this means:

- ✅ This page is accessible via direct URL
- ❌ This page does NOT appear in the sidebar navigation
- ❌ This page does NOT appear in generated indexes
- ❌ This page does NOT appear in next/previous navigation

## When to use unlisted pages:

1. **Draft content** - Pages you're working on but not ready to publish
2. **Legacy content** - Old pages you want to keep accessible but hidden
3. **Private sharing** - Pages you want to share with specific people via direct link

## How to make a page unlisted:

Simply add `unlisted: true` to the frontmatter:

```markdown
---
description: Your page description
unlisted: true
---

# Your Page Title
```

That's it! The page will be hidden from all navigation but remain accessible via URL.

---

**Note:** You can delete this example page - it's just here to demonstrate the feature.
