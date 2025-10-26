#!/usr/bin/env python3
"""
Final comprehensive fix for all MDX issues
"""

import os
import re
from pathlib import Path

def fix_all_mdx_issues(content):
    """Apply all fixes to content"""

    # 1. Fix malformed self-closing tags like "/ />" or " / />"
    content = re.sub(r'\s*/\s*/>', r' />', content)
    content = re.sub(r'\s*/\s+/>', r' />', content)

    # 2. Remove broken GitBook images entirely (they reference non-existent files)
    content = re.sub(
        r'<img[^>]*\.gitbook/assets/[^>]*>',
        '',
        content
    )

    # 3. Remove any remaining figure/figcaption tags
    content = re.sub(r'<figure[^>]*>', '', content)
    content = re.sub(r'</figure>', '', content)
    content = re.sub(r'<figcaption[^>]*>.*?</figcaption>', '', content, flags=re.DOTALL)

    # 4. Fix double-escaped backslashes in inline code
    # Sometimes we get things like \\{id\\} in inline code which should be {id}
    def fix_inline_code(match):
        code = match.group(1)
        # Remove excessive escaping in code
        code = code.replace('\\\\{', '{').replace('\\\\}', '}')
        code = code.replace('\\{', '{').replace('\\}', '}')
        return f'`{code}`'

    content = re.sub(r'`([^`]+)`', fix_inline_code, content)

    # 5. Fix any remaining <br> tags
    content = re.sub(r'<br\s*/?\s*/?>', '<br />', content)
    content = re.sub(r'<br\s+/\s+/>', '<br />', content)

    # 6. Fix details/summary tags - ensure proper format
    content = re.sub(r'<details\s*/?\s*/?>', '<details>', content)
    content = re.sub(r'<summary\s*/?\s*/?>', '<summary>', content)

    # 7. Remove any HTML comments that might cause issues
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)

    # 8. Fix any remaining double slashes in self-closing tags
    content = re.sub(r'<(\w+)([^>]*?)\s+/\s*/>', r'<\1\2 />', content)

    # 9. Clean up multiple consecutive blank lines
    content = re.sub(r'\n\n\n+', '\n\n', content)

    return content

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        fixed_content = fix_all_mdx_issues(content)

        # Only write if content changed
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
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
    print("Applying comprehensive MDX fixes...")

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
