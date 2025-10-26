#!/usr/bin/env python3
"""
Remove GitBook {% embed %} tags and {% endembed %} tags
"""

import re
from pathlib import Path

def fix_embed_tags(content):
    """Convert GitBook embed tags to markdown links"""

    # Pattern to match {% embed url="..." %} and optionally {% endembed %}
    # Convert to markdown link format
    def replace_embed(match):
        url = match.group(1)
        return f'[{url}]({url})'

    # Match {% embed url="..." %}
    content = re.sub(r'\{%\s*embed\s+url="([^"]+)"\s*%\}', replace_embed, content)

    # Remove {% endembed %} tags
    content = re.sub(r'\{%\s*endembed\s*%\}', '', content)

    # Clean up multiple consecutive blank lines
    content = re.sub(r'\n{4,}', '\n\n\n', content)

    return content

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        fixed_content = fix_embed_tags(content)

        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True

        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function"""
    docs_dir = Path('/home/ssomar/Gitbook/docs')
    md_files = list(docs_dir.rglob('*.md'))

    print(f"Found {len(md_files)} markdown files")
    print("Removing GitBook embed tags...")

    fixed_count = 0
    for md_file in md_files:
        if fix_markdown_file(md_file):
            fixed_count += 1
            print(f"Fixed: {md_file.relative_to(docs_dir)}")

    print(f"\nProcessing complete!")
    print(f"Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
