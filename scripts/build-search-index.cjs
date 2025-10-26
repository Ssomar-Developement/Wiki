#!/usr/bin/env node

/**
 * Generates a lightweight search index with stripped markdown content.
 * This script should be run before starting the dev server or building docs.
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'search');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'searchIndex.json');
const MAX_CONTENT_PREVIEW = 12000;

const FRONT_MATTER_REGEX = /^---\n[\s\S]*?\n---/;
const CODE_BLOCK_REGEX = /```[\s\S]*?```/g;
const INLINE_CODE_REGEX = /`[^`]*`/g;
const HTML_TAG_REGEX = /<\/?[^>]+>/g;
const LINK_REGEX = /\[([^\]]+)\]\([^)]+\)/g;
const EMBED_DIRECTIVE_REGEX = /\{%\s*embed[^%]*%\}/g;
const MARKDOWN_SYNTAX_REGEX = /[*_>#\[\]!]/g;
const WHITESPACE_REGEX = /\s+/g;
const HEADING_REGEX = /^#{1,6}\s+(.+)$/gm;

function extractHeadings(markdown) {
  if (!markdown) {
    return [];
  }

  const headings = [];
  // Remove front matter first
  const withoutFrontMatter = markdown.replace(FRONT_MATTER_REGEX, '');

  let match;
  while ((match = HEADING_REGEX.exec(withoutFrontMatter)) !== null) {
    headings.push(match[1].trim());
  }

  return headings;
}

function stripMarkdown(markdown) {
  if (!markdown) {
    return '';
  }

  return markdown
    .replace(FRONT_MATTER_REGEX, ' ')
    .replace(CODE_BLOCK_REGEX, ' ')
    .replace(INLINE_CODE_REGEX, ' ')
    .replace(HTML_TAG_REGEX, ' ')
    .replace(LINK_REGEX, '$1')
    .replace(EMBED_DIRECTIVE_REGEX, ' ')
    .replace(MARKDOWN_SYNTAX_REGEX, ' ')
    .replace(WHITESPACE_REGEX, ' ')
    .trim();
}

function posixPath(value) {
  return value.split(path.sep).join('/');
}

function collectMarkdownFiles(dir) {
  const results = [];

  const entries = fs.readdirSync(dir, {withFileTypes: true});
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMarkdownFiles(fullPath));
    } else if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

function buildIndex() {
  if (!fs.existsSync(DOCS_DIR)) {
    throw new Error(`Docs directory not found: ${DOCS_DIR}`);
  }

  const files = collectMarkdownFiles(DOCS_DIR);
  const items = files.map((absolutePath) => {
    const relative = path.relative(DOCS_DIR, absolutePath);
    const source = `@site/docs/${posixPath(relative)}`;
    const raw = fs.readFileSync(absolutePath, 'utf8');
    const headings = extractHeadings(raw);
    const plain = stripMarkdown(raw).slice(0, MAX_CONTENT_PREVIEW);

    return {
      source,
      content: plain,
      headings,
    };
  });

  items.sort((a, b) => a.source.localeCompare(b.source));

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, {recursive: true});
  }

  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        items,
      },
      null,
      2,
    ),
    'utf8',
  );
}

try {
  buildIndex();
  console.log(`[search-index] Generated ${OUTPUT_FILE}`);
} catch (error) {
  console.error('[search-index] Failed to generate search index');
  console.error(error);
  process.exitCode = 1;
}
