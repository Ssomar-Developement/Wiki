#!/usr/bin/env python3
"""
Fix unclosed and mismatched HTML tags in markdown
"""

import re
from pathlib import Path

def fix_html_tags(content):
    """Fix unclosed HTML tags"""
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Fix unclosed <code> tags - close them at end of line
        open_code = line.count('<code>')
        close_code = line.count('</code>')
        if open_code > close_code:
            line += '</code>' * (open_code - close_code)

        # Fix unclosed <strong> tags
        open_strong = line.count('<strong>')
        close_strong = line.count('</strong>')
        if open_strong > close_strong:
            line += '</strong>' * (open_strong - close_strong)

        # Fix unclosed <em> tags
        open_em = line.count('<em>')
        close_em = line.count('</em>')
        if open_em > close_em:
            line += '</em>' * (open_em - close_em)

        # Convert problematic <code> tags to backticks if they span multiple lines
        # This is safer for MDX
        if '<code>' in line and '</code>' not in line:
            line = line.replace('<code>', '`').replace('</code>', '`')

        fixed_lines.append(line)

    content = '\n'.join(fixed_lines)

    # Fix nested emphasis/strong issues
    # Replace <em>*text*</em> with just *text*
    content = re.sub(r'<em>\*([^*]+)\*</em>', r'*\1*', content)
    content = re.sub(r'<strong>\*\*([^*]+)\*\*</strong>', r'**\1**', content)

    # Remove any remaining problematic HTML tags and convert to markdown
    content = re.sub(r'<em>([^<]+)</em>', r'*\1*', content)
    content = re.sub(r'<strong>([^<]+)</strong>', r'**\1**', content)
    content = re.sub(r'<code>([^<]+)</code>', r'`\1`', content)

    return content

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        fixed_content = fix_html_tags(content)

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
    print("Fixing HTML tags...")

    fixed_count = 0
    for md_file in md_files:
        if fix_markdown_file(md_file):
            fixed_count += 1
            print(f"Fixed: {md_file.relative_to(docs_dir)}")

    print(f"\nProcessing complete!")
    print(f"Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
