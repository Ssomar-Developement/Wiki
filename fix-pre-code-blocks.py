#!/usr/bin/env python3
"""
Fix <pre><code> blocks with mismatched HTML tags by converting to markdown code fences
"""

import re
from pathlib import Path

def fix_pre_code_blocks(content):
    """Convert <pre><code> blocks to markdown code fences and fix mismatched tags"""

    # Pattern to match <pre class="language-X"><code class="lang-X"> blocks
    # This handles cases where there are mismatched closing tags
    pattern = r'<pre[^>]*class="language-([^"]+)"[^>]*><code[^>]*class="lang-\1"[^>]*>(.*?)</code></pre>'

    def replace_block(match):
        lang = match.group(1)
        code_content = match.group(2)

        # Remove any stray HTML tags inside the code block
        code_content = re.sub(r'</strong>', '', code_content)
        code_content = re.sub(r'</em>', '', code_content)
        code_content = re.sub(r'<strong>', '', code_content)
        code_content = re.sub(r'<em>', '', code_content)

        # Remove markdown bold markers that shouldn't be in code blocks
        code_content = re.sub(r'^\*\*', '', code_content)
        code_content = re.sub(r'\*\*$', '', code_content)

        # Clean up the content
        code_content = code_content.strip()

        # Return as markdown code fence
        return f'```{lang}\n{code_content}\n```'

    # First pass: handle properly closed blocks
    content = re.sub(pattern, replace_block, content, flags=re.DOTALL)

    # Second pass: handle improperly closed blocks (missing </code></pre>)
    # This pattern looks for <pre><code> that doesn't have proper closing
    pattern2 = r'<pre[^>]*class="language-([^"]+)"[^>]*><code[^>]*class="lang-\1"[^>]*>(.*?)(?=\n\n|\n#{1,6}\s|\n```|\Z)'

    def replace_broken_block(match):
        lang = match.group(1)
        code_content = match.group(2)

        # Remove any stray HTML tags
        code_content = re.sub(r'</?(strong|em|code|pre)>', '', code_content)

        # Remove markdown bold markers
        code_content = re.sub(r'\*\*([^*]+)\*\*', r'\1', code_content)

        # Clean up
        code_content = code_content.strip()

        return f'```{lang}\n{code_content}\n```'

    content = re.sub(pattern2, replace_broken_block, content, flags=re.DOTALL)

    # Third pass: remove any remaining orphaned closing tags
    content = re.sub(r'^\s*</code></pre>\s*$', '', content, flags=re.MULTILINE)

    return content

def fix_markdown_file(file_path):
    """Fix a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        fixed_content = fix_pre_code_blocks(content)

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
    # List of files that have <pre class="language-" patterns
    problem_files = [
        '/home/ssomar/Gitbook/docs/executablecrafting/configurations/recipe-configuration/recipe-features.md',
        '/home/ssomar/Gitbook/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/per-states-texture.md',
        '/home/ssomar/Gitbook/docs/executableitems/configurations/activator-configuration/activators-features.md',
        '/home/ssomar/Gitbook/docs/executableitems/configurations/item-configuration/item-features.md',
        '/home/ssomar/Gitbook/docs/executableitems/configurations/item-configuration/item-restrictions-resistances.md',
        '/home/ssomar/Gitbook/docs/executableitems/questions-or-guides/methods-or-template/armor-set-bonus.md',
        '/home/ssomar/Gitbook/docs/executableitems/questions-or-guides/methods-or-template/worldedit-schematic.md',
        '/home/ssomar/Gitbook/docs/myfurniture/configurations/furniture-configuration/furniture-features.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-commands/item-commands.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-commands/mixed-commands-player-and-entity.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-commands/utility-commands.md',
        '/home/ssomar/Gitbook/docs/executableevents/configurations/activator-configuration/activators-features.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-conditions/block-conditions.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-projectiles.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/custom-triggers.md',
        '/home/ssomar/Gitbook/docs/tools-for-all-plugins-score/score-particles.md',
    ]

    print(f"Fixing {len(problem_files)} files with <pre><code> blocks")

    fixed_count = 0
    for file_path in problem_files:
        if fix_markdown_file(Path(file_path)):
            fixed_count += 1
            print(f"Fixed: {Path(file_path).name}")

    print(f"\nProcessing complete!")
    print(f"Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
