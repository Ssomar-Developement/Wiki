# Contributing to Ssomar Plugins Wiki

Welcome to the Ssomar Plugins Wiki repository! This guide will help you understand how to contribute to the documentation for ExecutableItems, ExecutableBlocks, ExecutableEvents, and other Ssomar plugins.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Documentation Standards](#documentation-standards)
- [Writing Guide](#writing-guide)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Prerequisites

Before contributing, make sure you have:

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git** for version control
- A code editor (VS Code recommended)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ssomar-Developement/Wiki.git
   cd Wiki
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The wiki will be available at `http://localhost:3000/Wiki/`

4. **Build for production** (optional)
   ```bash
   npm run build
   ```

## Project Structure

```
Wiki/
├── docs/                          # All documentation files
│   ├── executableitems/          # ExecutableItems documentation
│   ├── executableblocks/         # ExecutableBlocks documentation
│   ├── executableevents/         # ExecutableEvents documentation
│   ├── executablecrafting/       # ExecutableCrafting documentation
│   └── tools-for-all-plugins-score/  # SCore shared features
│       ├── custom-commands/      # Command documentation
│       ├── custom-conditions/    # Condition documentation
│       └── placeholders.md       # Placeholder reference
├── static/
│   └── img/                      # All images and screenshots
├── src/
│   ├── components/               # Custom React components
│   ├── css/                      # Custom styling
│   └── theme/                    # Docusaurus theme customizations
├── docusaurus.config.js          # Docusaurus configuration
└── sidebars.js                   # Sidebar navigation structure
```

## Documentation Standards

### File Format

All documentation files must:
- Be written in **Markdown** (`.md` extension)
- Use **UTF-8 encoding**
- Include a **frontmatter** section at the top

### Frontmatter

Each documentation file should start with frontmatter:

```markdown
---
description: Brief description of the page content (for SEO)
---

# Page Title
```

## Writing Guide

### Headings

Use proper heading hierarchy:

```markdown
# H1 - Page Title (only one per page)
## H2 - Major sections
### H3 - Subsections
#### H4 - Minor subsections
```

### Code Blocks

Always specify the language for syntax highlighting:

```markdown
```yaml
activators:
  activator0:
    option: PLAYER_CLICK
    commands:
      - SENDMESSAGE &eHello World!
\```
```

### Images

#### Image Paths
- All images must be stored in `/static/img/`
- Use **absolute paths** from the root: `![](</img/image-name.png>)`
- Never use relative paths like `../../../img/`

#### Adding Images
1. Place your image in `/static/img/`
2. Reference it in markdown:
   ```markdown
   ![](</img/my-screenshot.png>)
   ```

#### Image Guidelines
- Use descriptive filenames (e.g., `activator-config-example.png` instead of `image (123).png`)
- Optimize images before uploading (compress PNG/JPG files)
- Use PNG for screenshots, JPG for photos
- Maximum width: 1200px recommended

### Links

#### Internal Links
Link to other documentation pages:
```markdown
[Custom Commands](../tools-for-all-plugins-score/custom-commands/player-and-target-commands.md)
```

#### External Links
```markdown
[Spigot Page](https://www.spigotmc.org/resources/executableitems.77578/)
```

### Command Documentation Format

When documenting commands, follow this standard format:

```markdown
### COMMAND_NAME

Description of what the command does.

**Command settings:**
- `{required_setting}`: Description of required setting
- `[optional_setting]`: (Optional) (default = value) Description of optional setting
- `{command(s)}`: Commands to execute (use `<+>` as separator for multiple commands)

**Example:**
```yaml
commands:
  - COMMAND_NAME value1 value2
\```

**More info:**
Additional notes or warnings about the command.
```

### Condition Documentation Format

```markdown
### conditionName

Description of what the condition checks.

**Condition settings:**
- `{value}`: What value to check
- `[comparator]`: (Optional) (default = EQUALS) Comparison operator

**Accepted values:**
- `EQUALS`
- `GREATER_THAN`
- `LESS_THAN`

**Example:**
```yaml
conditions:
  - conditionName: value
\```
```

### Admonitions (Info Boxes)

Use Docusaurus admonitions for important notes:

```markdown
:::note
This is a note
:::

:::tip
This is a helpful tip
:::

:::info
This is informational content
:::

:::warning
This is a warning
:::

:::danger
This is critical information
:::
```

## Development Workflow

### Branch Strategy

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit documentation files
   - Add images if needed
   - Test locally with `npm start`

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. **Push to GitHub**
   ```bash
   git push -u origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Describe your changes
   - Wait for review

### Commit Message Guidelines

Write clear, descriptive commit messages:

```
Good:
- "Add SENDMESSAGE command documentation"
- "Fix broken image links in activator guide"
- "Update ExecutableItems configuration examples"

Bad:
- "update"
- "fix stuff"
- "changes"
```

## Style Guidelines

### Formatting Standards

#### Command Settings
- Required settings: Use `{setting}` in backticks
- Optional settings: Use `[setting]` in backticks with default value
- Always specify if a setting is optional and its default value

#### Code Examples
- Always include YAML examples for configuration
- Use consistent indentation (2 spaces)
- Include comments in examples when helpful

#### Consistency
- Use "activator" not "activators" when referring to a single one
- Use "ExecutableItems" with capital E and I
- Use "SCore" not "Score" when referring to the core plugin
- Plugin names are proper nouns: ExecutableBlocks, not executable blocks

### Writing Style

- **Be clear and concise**: Avoid unnecessary jargon
- **Use active voice**: "The command teleports the player" not "The player is teleported by the command"
- **Be specific**: Include version numbers when features are version-specific
- **Use examples**: Real examples help users understand features

## Common Tasks

### Adding a New Command

1. Navigate to the appropriate file in `/docs/tools-for-all-plugins-score/custom-commands/`
2. Add the command following the standard format
3. Include at least one working example
4. Test the example in-game if possible

### Adding a New Page

1. Create a new `.md` file in the appropriate directory
2. Add frontmatter with description
3. Write content following style guidelines
4. Update `sidebars.js` if needed to include the page in navigation

### Updating Images

1. Delete old image from `/static/img/`
2. Add new image with descriptive name
3. Update markdown references
4. Test that images load correctly

### Creating Custom Categories

To customize a category name in the sidebar:

1. Create `_category_.json` in the directory:
   ```json
   {
     "label": "Custom Category Name",
     "position": 3,
     "link": {
       "type": "generated-index",
       "description": "Description for the category page"
     }
   }
   ```

### Adding Icons to Categories

You can add custom icons/logos to sidebar categories:

1. Place your icon image in `/static/img/` (e.g., `ei-logo.png`)
2. Add the `customProps` field to your `_category_.json`:
   ```json
   {
     "label": "ExecutableItems",
     "position": 3,
     "customProps": {
       "icon": "/img/ei-logo.png"
     },
     "link": {
       "type": "doc",
       "id": "executableitems/information-ei"
     }
   }
   ```

**Icon Guidelines:**
- Use PNG or SVG format
- Recommended size: 24x24px to 32x32px
- Icons will be automatically resized to fit
- Use transparent backgrounds for best results
- Path must be absolute from `/img/` directory

### Hiding Pages from Navigation

To hide a page from the sidebar and navigation while keeping it accessible via direct URL:

1. Add `unlisted: true` to the page's frontmatter:
   ```markdown
   ---
   description: Work in Progress - New Feature
   unlisted: true
   ---

   # Page Title

   Your content here...
   ```

2. The page will be completely hidden from navigation:
   - ❌ **Will NOT appear** in the sidebar navigation
   - ❌ **Will NOT appear** in generated indexes
   - ❌ **Will NOT appear** in next/previous navigation
   - ✅ **Will STILL be accessible** via direct URL (useful for sharing drafts)

**When to use this:**
- Work-in-progress pages you want to draft before publishing
- Legacy pages you want to keep accessible but hidden
- Pages you want to share with specific users via link only

**Note:** The page will still be included in the production build and can be found via direct URL. It's only hidden from navigation elements.

## Troubleshooting

### Development Server Issues

**Port already in use:**
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill -9
# Or start on a different port
npx docusaurus start --port 3003
```

**Build errors:**
```bash
# Clear cache and rebuild
npm run clear
npm run build
```

### Common Markdown Issues

**Broken links:**
- Always use relative paths from the current file
- Check that referenced files exist
- Use the exact filename (case-sensitive)

**Images not loading:**
- Verify the image exists in `/static/img/`
- Use absolute path: `![](</img/filename.png>)`
- Check image file extension matches (`.png` vs `.PNG`)

**Code blocks not highlighting:**
- Specify language: ` ```yaml ` not just ` ``` `
- Supported languages: yaml, javascript, bash, markdown

### Git Issues

**Merge conflicts:**
```bash
# Pull latest changes
git pull origin main
# Resolve conflicts in your editor
# Add resolved files
git add .
git commit -m "Resolve merge conflicts"
```

**Accidentally committed to main:**
```bash
# Move changes to a new branch
git branch feature/my-changes
git reset --hard origin/main
git checkout feature/my-changes
```

## Testing Your Changes

Before submitting a pull request:

1. **Start the dev server**
   ```bash
   npm start
   ```

2. **Check your changes visually**
   - Navigate to modified pages
   - Verify formatting looks correct
   - Test all links work
   - Ensure images load properly

3. **Build the site**
   ```bash
   npm run build
   ```
   This checks for broken links and build errors

4. **Preview production build**
   ```bash
   npm run serve
   ```

## Getting Help

- **Documentation issues**: Open an issue on GitHub
- **Discord**: Join the Ssomar Plugins Discord server
- **Spigot**: Post in the plugin discussion threads

## Thank You!

Thank you for contributing to the Ssomar Plugins Wiki! Your contributions help thousands of users create amazing custom items, blocks, and events for their Minecraft servers.
