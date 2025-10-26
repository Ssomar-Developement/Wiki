#!/usr/bin/env python3
"""
Fix GitBook markdown files to be compatible with Docusaurus MDX format
"""

import os
import re
from pathlib import Path

def fix_mdx_content(content):
    """Fix common MDX issues in markdown content"""

    # Split content into code blocks and regular text
    # This helps us avoid modifying code blocks
    parts = []
    in_code_block = False
    lines = content.split('\n')
    current_block = []
    block_type = 'text'

    i = 0
    while i < len(lines):
        line = lines[i]

        # Check for code block markers
        if line.strip().startswith('```'):
            if in_code_block:
                # End of code block
                current_block.append(line)
                parts.append(('code', '\n'.join(current_block)))
                current_block = []
                in_code_block = False
                block_type = 'text'
            else:
                # Start of code block
                if current_block:
                    parts.append(('text', '\n'.join(current_block)))
                current_block = [line]
                in_code_block = True
                block_type = 'code'
        else:
            current_block.append(line)

        i += 1

    # Add remaining block
    if current_block:
        parts.append((block_type, '\n'.join(current_block)))

    # Process each part
    fixed_parts = []
    for part_type, part_content in parts:
        if part_type == 'code':
            # Don't modify code blocks
            fixed_parts.append(part_content)
        else:
            # Fix text content
            # 1. Escape curly braces that are not in inline code
            # Split by inline code to preserve it
            segments = re.split(r'(`[^`]+`)', part_content)
            for j, segment in enumerate(segments):
                if not segment.startswith('`'):
                    # This is regular text, escape curly braces
                    segment = segment.replace('{', '\\{')
                    segment = segment.replace('}', '\\}')
                segments[j] = segment
            part_content = ''.join(segments)

            # 2. Fix broken image references to .gitbook/assets
            part_content = re.sub(
                r'!\[([^\]]*)\]\([\.\/]*\.gitbook/assets/[^\)]+\)',
                r'<!-- Image: \1 (removed - gitbook asset) -->',
                part_content
            )

            # 3. Fix self-closing img tags
            part_content = re.sub(
                r'<img\s+([^>]+)>(?!</img>)',
                r'<img \1 />',
                part_content
            )

            # 4. Remove figure tags that cause issues
            part_content = re.sub(r'<figure>', '', part_content)
            part_content = re.sub(r'</figure>', '', part_content)
            part_content = re.sub(r'<figcaption>.*?</figcaption>', '', part_content, flags=re.DOTALL)

            # 5. Fix HTML code tags that aren't closed
            # Simple heuristic: if there's an opening <code> without closing, add </code>
            open_code_count = part_content.count('<code>')
            close_code_count = part_content.count('</code>')
            if open_code_count > close_code_count:
                part_content += '</code>' * (open_code_count - close_code_count)

            fixed_parts.append(part_content)

    return '\n'.join(fixed_parts)

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if file has issues that need fixing
        needs_fix = (
            '{' in content or
            '}' in content or
            '.gitbook/assets' in content or
            '<figure>' in content or
            '<img' in content
        )

        if not needs_fix:
            return False

        fixed_content = fix_mdx_content(content)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)

        return True
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
    print("Fixing MDX compatibility issues...")

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
