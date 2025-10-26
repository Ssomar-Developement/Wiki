#!/usr/bin/env python3
"""
Final fix for all remaining MDX issues
"""

import re
from pathlib import Path

def fix_escaped_asterisks(content):
    """Fix escaped asterisks that cause MDX issues"""
    # In regular text (not in code blocks), \* should just be *
    # But we need to be careful not to change them in code blocks

    lines = content.split('\n')
    fixed_lines = []
    in_code_block = False
    in_admonition = False

    for line in lines:
        # Track code blocks
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            fixed_lines.append(line)
            continue

        # Track admonitions
        if line.strip().startswith(':::'):
            in_admonition = not in_admonition
            fixed_lines.append(line)
            continue

        # Don't modify code blocks
        if in_code_block:
            fixed_lines.append(line)
            continue

        # Fix escaped asterisks in regular text and admonitions
        # Replace \* with just * when not in inline code
        if '\\*' in line and '`' not in line:
            line = line.replace('\\*', '*')
        elif '\\*' in line:
            # Complex case: has both inline code and escaped asterisks
            # Split by inline code and fix only text parts
            parts = []
            in_inline = False
            current = ''
            for char in line:
                if char == '`':
                    if in_inline:
                        parts.append(('code', current + '`'))
                        current = ''
                    else:
                        if current:
                            parts.append(('text', current))
                        current = '`'
                    in_inline = not in_inline
                else:
                    current += char

            if current:
                parts.append(('code' if in_inline else 'text', current))

            # Fix escaped asterisks in text parts
            result = []
            for part_type, part_text in parts:
                if part_type == 'text':
                    part_text = part_text.replace('\\*', '*')
                result.append(part_text)
            line = ''.join(result)

        fixed_lines.append(line)

    return '\n'.join(fixed_lines)

def fix_table_syntax(content):
    """Fix GitBook table syntax issues"""
    # GitBook sometimes has tables with <table> tags mixed with markdown
    # Remove HTML table tags and convert to markdown if possible
    content = re.sub(r'<table[^>]*>', '', content)
    content = re.sub(r'</table>', '', content)
    content = re.sub(r'<thead[^>]*>', '', content)
    content = re.sub(r'</thead>', '', content)
    content = re.sub(r'<tbody[^>]*>', '', content)
    content = re.sub(r'</tbody>', '', content)
    content = re.sub(r'<tr[^>]*>', '', content)
    content = re.sub(r'</tr>', '', content)
    content = re.sub(r'<th[^>]*>', '| ', content)
    content = re.sub(r'</th>', ' ', content)
    content = re.sub(r'<td[^>]*>', '| ', content)
    content = re.sub(r'</td>', ' ', content)

    return content

def fix_all_remaining_issues(content):
    """Apply all remaining fixes"""

    # 1. Fix escaped asterisks
    content = fix_escaped_asterisks(content)

    # 2. Fix table syntax
    content = fix_table_syntax(content)

    # 3. Fix any remaining double-escaped backslashes outside of code
    lines = content.split('\n')
    fixed_lines = []
    in_code_block = False

    for line in lines:
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            fixed_lines.append(line)
            continue

        if not in_code_block and '`' not in line:
            # Fix double backslashes in regular text
            line = re.sub(r'\\\\([^\s])', r'\\\1', line)

        fixed_lines.append(line)

    content = '\n'.join(fixed_lines)

    # 4. Fix any stray HTML entities that might cause issues
    content = re.sub(r'&lt;', '<', content)
    content = re.sub(r'&gt;', '>', content)
    content = re.sub(r'&#x20;', ' ', content)

    # 5. Remove empty admonition blocks
    content = re.sub(r':::\w+\s*\n\s*:::', '', content)

    return content

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        fixed_content = fix_all_remaining_issues(content)

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
    print("Applying final comprehensive fixes...")

    fixed_count = 0
    for md_file in md_files:
        if fix_markdown_file(md_file):
            fixed_count += 1
            print(f"Fixed: {md_file.relative_to(docs_dir)}")

    print(f"\nProcessing complete!")
    print(f"Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
