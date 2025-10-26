#!/usr/bin/env python3
"""
Escape curly braces in Command: lines that are not already escaped
"""

import re
from pathlib import Path

def fix_curly_braces(content):
    """Escape unescaped curly braces in Command lines"""

    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Check if line starts with "* Command:" or similar patterns with command syntax
        if re.match(r'^\s*\*\s+Command:', line):
            # Only escape curly braces that aren't already escaped
            # Replace { with \{ if not already \{
            line = re.sub(r'(?<!\\){', r'\\{', line)
            # Replace } with \} if not already \}
            line = re.sub(r'(?<!\\)}', r'\\}', line)

        #Also check for bullet points that describe parameters with curly braces
        elif re.match(r'^\s*\*\s+\{[A-Z]', line):
            # Escape curly braces in parameter descriptions
            line = re.sub(r'(?<!\\){', r'\\{', line)
            line = re.sub(r'(?<!\\)}', r'\\}', line)

        fixed_lines.append(line)

    return '\n'.join(fixed_lines)

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        fixed_content = fix_curly_braces(content)

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
    print("Escaping curly braces in Command lines...")

    fixed_count = 0
    for md_file in md_files:
        if fix_markdown_file(md_file):
            fixed_count += 1
            print(f"Fixed: {md_file.relative_to(docs_dir)}")

    print(f"\nProcessing complete!")
    print(f"Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
