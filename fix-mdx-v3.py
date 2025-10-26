#!/usr/bin/env python3
"""
Fix remaining MDX issues - specifically <mark> tags and other HTML elements
"""

import os
import re
from pathlib import Path

def fix_mark_tags(content):
    """Convert <mark> tags to bold markdown since they don't work well in MDX"""
    # Replace <mark style="...">text</mark> with **text**
    content = re.sub(
        r'<mark\s+style="[^"]*">(.*?)</mark>',
        r'**\1**',
        content
    )
    # Replace simple <mark>text</mark> with **text**
    content = re.sub(
        r'<mark>(.*?)</mark>',
        r'**\1**',
        content
    )
    return content

def fix_html_elements(content):
    """Fix other problematic HTML elements"""
    # Convert <details> and <summary> to proper MDX format
    # MDX requires proper nesting

    # Fix unclosed tags
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Remove or fix problematic HTML
        # Convert <br> to <br />
        line = re.sub(r'<br\s*>',  r'<br />', line)

        # Fix details/summary if they exist
        line = line.replace('<details>', '\n<details>\n')
        line = line.replace('</details>', '\n</details>\n')

        fixed_lines.append(line)

    return '\n'.join(fixed_lines)

def fix_code_blocks_with_braces(content):
    """Ensure braces in inline code are not escaped"""
    # Find inline code blocks and unescape braces in them
    def unescape_in_code(match):
        code_content = match.group(1)
        # Unescape braces in code blocks
        code_content = code_content.replace('\\{', '{').replace('\\}', '}')
        return f'`{code_content}`'

    # Match inline code blocks
    content = re.sub(r'`([^`]+)`', unescape_in_code, content)

    return content

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # Apply fixes
        content = fix_mark_tags(content)
        content = fix_html_elements(content)
        content = fix_code_blocks_with_braces(content)

        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True

        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        import traceback
        traceback.print_exc()
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
    print("Fixing remaining MDX issues (v3 - mark tags and HTML)...")

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
