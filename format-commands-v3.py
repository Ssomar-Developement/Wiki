#!/usr/bin/env python3
import re

# Read the file
with open('docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all yaml code blocks
yaml_blocks = re.finditer(r'```yaml\n(.*?)```', content, flags=re.DOTALL)

replacements = []
for match in yaml_blocks:
    block_content = match.group(1)
    full_block = match.group(0)

    # Check if this block has activator0 with commands but no activator1
    has_activator0 = re.search(r'  activator0:.*?\n.*?commands:\n((?:    - .*?\n)+)', block_content, re.DOTALL)
    has_activator1 = 'activator1:' in block_content

    if has_activator0 and not has_activator1:
        # Extract the commands from activator0
        commands = has_activator0.group(1)

        # Create the new block with activator1 added
        new_block = full_block.replace('```',
            f"  activator1: # Activator ID, you can create as many activators on the activators list\n"
            f"    option: # Here goes an activator that is at least instance of target\n"
            f"    targetCommands:\n"
            f"{commands}```")

        replacements.append((full_block, new_block))

# Apply all replacements
for old, new in replacements:
    content = content.replace(old, new, 1)

# Write back
with open('docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Updated {len(replacements)} command examples")
