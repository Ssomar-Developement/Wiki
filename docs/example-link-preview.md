---
unlisted: true
---

# Link Preview Component Example

This page demonstrates how to use the LinkPreview component to create Gitbook-style link cards.

## Basic Usage

```jsx
import LinkPreview from '@site/src/components/LinkPreview';

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material (Spigot-API 1.21.10-R0.1-SNAPSHOT API)"
/>
```

## Live Example

import LinkPreview from '@site/src/components/LinkPreview';

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"
  title="Material (Spigot-API 1.21.10-R0.1-SNAPSHOT API)"
/>

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html"
  title="Attribute (Spigot-API)"
/>

<LinkPreview
  url="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html"
  title="Enchantment (Bukkit API)"
/>

## With Custom Favicon

You can also specify a custom favicon:

<LinkPreview
  url="https://discord.com/invite/TRmSwJaYNv"
  title="Join our Discord Server"
  favicon="https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.png"
/>

## Internal Wiki Links

You can now use relative paths for internal wiki links:

<LinkPreview
  url="/docs/intro"
  title="Getting Started"
  description="Introduction to the Score Plugins Wiki"
/>

<LinkPreview
  url="/docs/executableitems/information-ei"
  title="ExecutableItems Information"
/>

## Usage Instructions

1. Import the component at the top of your markdown file:
   ```jsx
   import LinkPreview from '@site/src/components/LinkPreview';
   ```

2. Use it anywhere in your markdown:

   **For external links:**
   ```jsx
   <LinkPreview
     url="https://external-site.com"
     title="Page Title"
   />
   ```

   **For internal wiki links (no host needed!):**
   ```jsx
   <LinkPreview
     url="/docs/your-page"
     title="Internal Page Title"
   />
   ```

3. Optional props:
   - `description`: Add a description line
   - `favicon`: Custom favicon URL (auto-fetched if not provided)

4. Benefits of internal links:
   - ✅ No need to type the full URL
   - ✅ Works in both local development and production
   - ✅ Uses Docusaurus Link component for better performance
   - ✅ Automatically uses your site's favicon
