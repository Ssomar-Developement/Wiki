#!/usr/bin/env python3
"""
Fix all remaining <pre> tags by converting them to proper markdown
"""

import re
from pathlib import Path

def fix_pre_tags(content):
    """Remove or convert problematic <pre> tags"""

    # Pattern 1: <pre>`code` without closing tag - just remove the <pre>
    content = re.sub(r'<pre>`([^`]+)`\s*$', r'`\1`', content, flags=re.MULTILINE)

    # Pattern 2: <pre><code><strong>text</code></strong> - convert to code block
    def replace_pre_code_strong(match):
        text = match.group(1)
        # Remove any HTML tags inside
        text = re.sub(r'</?(?:code|strong|em)>', '', text)
        return f'```\n{text}\n```'

    content = re.sub(r'<pre><code><strong>([^<]+)</code></strong>', replace_pre_code_strong, content)
    content = re.sub(r'<pre><code><strong>([^<]+)</strong></code>', replace_pre_code_strong, content)

    # Pattern 3: Remove orphaned </code></pre> tags
    content = re.sub(r'</code></pre>\s*\|', '`\n| ', content)

    # Pattern 4: Fix HTML entities
    content = re.sub(r'&#x3C;', '<', content)
    content = re.sub(r'&#x3E;', '>', content)

    # Clean up multiple blank lines
    content = re.sub(r'\n{4,}', '\n\n\n', content)

    return content

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        fixed_content = fix_pre_tags(content)

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
    # List of files with <pre> tags
    problem_files = [
        '/home/ssomar/Gitbook/docs/executableevents/question-or-guides/frequently-asked-questions/how-to-use-vanilla-commands.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-commands/entity-commands.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-commands/block-commands.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity.md',
        '/home/ssomar/Gitbook/docs/executableblocks/configurations/block-configuration/block-features.md',
        '/home/ssomar/Gitbook/docs/executableblocks/developer-api.md',
        '/home/ssomar/Gitbook/docs/executableblocks/question-or-guides/frequently-asked-questions/how-to-use-vanilla-commands.md',
        '/home/ssomar/Gitbook/docs/myfurniture/question-or-guides/frequently-asked-questions/how-to-use-vanilla-commands.md',
        '/home/ssomar/Gitbook/docs/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands.md',
        '/home/ssomar/Gitbook/docs/executablecrafting/configurations/recipe-book.md',
    ]

    print(f"Fixing {len(problem_files)} files with <pre> tags")

    fixed_count = 0
    for file_path in problem_files:
        if fix_markdown_file(Path(file_path)):
            fixed_count += 1
            print(f"Fixed: {Path(file_path).name}")

    print(f"\nProcessing complete!")
    print(f"Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
