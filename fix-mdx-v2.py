#!/usr/bin/env python3
"""
Fix GitBook markdown files to be compatible with Docusaurus MDX format
Version 2: Handles GitBook-specific syntax
"""

import os
import re
from pathlib import Path

def convert_gitbook_hints(content):
    """Convert GitBook hint blocks to Docusaurus admonitions"""

    # Map GitBook hint styles to Docusaurus admonition types
    hint_map = {
        'info': 'info',
        'warning': 'warning',
        'danger': 'danger',
        'success': 'tip',
        'tip': 'tip'
    }

    # Pattern for GitBook hints with escaped braces
    patterns = [
        (r'\\?\{%\s*hint\s+style="(\w+)"\s*%\\?\}(.*?)\\?\{%\s*endhint\s*%\\?\}', 'block'),
        (r'\{%\s*hint\s+style="(\w+)"\s*%\}(.*?)\{%\s*endhint\s*%\}', 'block'),
    ]

    for pattern, mode in patterns:
        def replace_hint(match):
            style = match.group(1)
            hint_content = match.group(2).strip()
            admonition_type = hint_map.get(style, 'note')
            return f'\n:::{admonition_type}\n{hint_content}\n:::\n'

        content = re.sub(pattern, replace_hint, content, flags=re.DOTALL)

    # Also handle single-line format
    content = re.sub(
        r'\\?\{%\s*hint\s+style="(\w+)"\s*%\\?\}\s*\n',
        lambda m: f'\n:::{hint_map.get(m.group(1), "note")}\n',
        content
    )
    content = re.sub(r'\\?\{%\s*endhint\s*%\\?\}\s*\n', '\n:::\n', content)

    return content

def convert_gitbook_tabs(content):
    """Convert GitBook tabs to simple sections"""

    # Remove tab markers
    content = re.sub(r'\\?\{%\s*tabs\s*%\\?\}', '', content)
    content = re.sub(r'\\?\{%\s*endtabs\s*%\\?\}', '', content)
    content = re.sub(r'\\?\{%\s*tab\s+title="([^"]+)"\s*%\\?\}', r'### \1', content)
    content = re.sub(r'\\?\{%\s*endtab\s*%\\?\}', '', content)

    return content

def convert_gitbook_content_ref(content):
    """Remove GitBook content-ref tags"""
    content = re.sub(r'\\?\{%\s*content-ref.*?%\\?\}.*?\\?\{%\s*endcontent-ref\s*%\\?\}', '', content, flags=re.DOTALL)
    return content

def fix_mdx_content(content):
    """Fix common MDX issues in markdown content"""

    # First, convert GitBook-specific syntax
    content = convert_gitbook_hints(content)
    content = convert_gitbook_tabs(content)
    content = convert_gitbook_content_ref(content)

    # Now fix remaining issues
    lines = content.split('\n')
    fixed_lines = []
    in_code_block = False

    for line in lines:
        # Track code blocks
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            fixed_lines.append(line)
            continue

        # Don't modify code blocks
        if in_code_block:
            fixed_lines.append(line)
            continue

        # Fix broken image references to .gitbook/assets
        line = re.sub(
            r'!\[([^\]]*)\]\([\.\/]*\.gitbook/assets/[^\)]+\)',
            r'<!-- Image: \1 (removed - gitbook asset) -->',
            line
        )

        # Remove figure tags
        line = re.sub(r'<figure>', '', line)
        line = re.sub(r'</figure>', '', line)
        line = re.sub(r'<figcaption>.*?</figcaption>', '', line)

        # Fix self-closing img tags
        line = re.sub(r'<img\s+([^>]+)>(?!</img>)', r'<img \1 />', line)

        # Now escape curly braces in regular text (not in inline code)
        # Split by inline code markers
        if '`' not in line:
            # Simple case: no inline code
            line = line.replace('{', '\\{').replace('}', '\\}')
        else:
            # Complex case: preserve inline code
            parts = []
            in_inline_code = False
            current = ''
            i = 0
            while i < len(line):
                if line[i] == '`':
                    if in_inline_code:
                        # End of inline code
                        parts.append(('code', current + '`'))
                        current = ''
                        in_inline_code = False
                    else:
                        # Start of inline code
                        if current:
                            parts.append(('text', current))
                        current = '`'
                        in_inline_code = True
                    i += 1
                else:
                    current += line[i]
                    i += 1

            if current:
                parts.append(('code' if in_inline_code else 'text', current))

            # Escape braces in text parts only
            result_parts = []
            for part_type, part_text in parts:
                if part_type == 'text':
                    part_text = part_text.replace('{', '\\{').replace('}', '\\}')
                result_parts.append(part_text)
            line = ''.join(result_parts)

        fixed_lines.append(line)

    return '\n'.join(fixed_lines)

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        fixed_content = fix_mdx_content(content)

        # Only write if content changed
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True

        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all markdown files"""
    docs_dir = Path('/home/ssomar/Gitbook/docs')

    if not docs_dir.exists():
        print(f"Error: {docs_dir} does not exist")
        return

    # Find all markdown files
    md_files = list(docs_dir.rglob('*.md'))

    print(f"Found {len(md_files)} markdown files")
    print("Fixing MDX compatibility issues (v2)...")

    fixed_count = 0
    for md_file in md_files:
        if fix_markdown_file(md_file):
            fixed_count += 1
            print(f"Fixed: {md_file.relative_to(docs_dir)}")

    print(f"\nProcessing complete!")
    print(f"Fixed {fixed_count} files")
    print(f"Skipped {len(md_files) - fixed_count} files (no changes needed)")

if __name__ == '__main__':
    main()
