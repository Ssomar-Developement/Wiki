---
title: 💬 Giscus Comments Demo
description: Demo page showcasing GitHub-based commenting system
---

import GiscusComments from '@site/src/components/GiscusComments';

# 💬 Giscus Comments Demo

Welcome to the Giscus comments demo! This page demonstrates how we can integrate GitHub-based discussions directly into our documentation.

## What is Giscus?

Giscus is a comments system powered by [GitHub Discussions](https://docs.github.com/en/discussions). It enables visitors to leave comments and reactions on your website via GitHub.

## Features

### ✨ Key Benefits

- **🔐 No Database Required**: All comments are stored in GitHub Discussions
- **🎨 Theme Support**: Automatically adapts to light/dark mode
- **💬 Rich Text**: Supports Markdown, syntax highlighting, and more
- **👍 Reactions**: Users can react with emojis
- **🔒 Moderation**: Uses GitHub's built-in moderation tools
- **🌍 Multiple Languages**: Supports many languages
- **♿ Accessible**: Follows accessibility best practices

### 📝 How It Works

1. **User visits the page**: The comments section loads below the content
2. **User signs in with GitHub**: One-click authentication
3. **User posts a comment**: Creates or adds to a GitHub Discussion
4. **Real-time updates**: Comments appear instantly for all viewers

## Example Use Cases

This commenting system is perfect for:

- **📚 Documentation Feedback**: Users can ask questions or suggest improvements
- **🐛 Bug Reports**: Quick way to report issues without leaving the docs
- **💡 Feature Requests**: Collect user suggestions directly on relevant pages
- **🎓 Tutorials**: Q&A section for learning materials
- **📢 Announcements**: Gather community feedback on updates

## Configuration Options

The component supports various customization options:

```javascript
<Giscus
  repo="owner/repo"           // Your GitHub repository
  repoId="..."                // Repository ID
  category="General"          // Discussion category
  mapping="pathname"          // How to map pages to discussions
  reactionsEnabled="1"        // Enable emoji reactions
  theme="preferred_color_scheme" // Auto theme switching
  lang="en"                   // Interface language
/>
```

## Try It Out!

Feel free to test the commenting system below. You can:

- ✏️ Post a comment
- 👍 React to existing comments
- 💬 Reply to discussions
- 🎨 Use Markdown formatting
- 📝 Edit or delete your own comments

---

<GiscusComments />

## Implementation Notes

To add this to any documentation page, simply:

1. Import the component: `import GiscusComments from '@site/src/components/GiscusComments';`
2. Add it where you want comments: `<GiscusComments />`

The component automatically:
- Detects the current color mode (light/dark)
- Creates a discussion thread for each page
- Handles authentication via GitHub OAuth

## Privacy & Security

- ✅ No tracking or analytics
- ✅ No ads
- ✅ All data stored on GitHub
- ✅ Users control their own content
- ✅ GDPR compliant

---

:::tip Want to add comments to your pages?
This feature can be added to any documentation page. It's especially useful for:
- Getting feedback on complex configurations
- Answering user questions
- Building community engagement
:::

:::info GitHub Account Required
Users need a GitHub account to comment. This helps reduce spam and ensures accountability.
:::