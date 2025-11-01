#!/usr/bin/env python3
import re

# Read the file
with open('docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find single-activator examples that need updating
# This matches yaml blocks that only have activator0 and no activator1
pattern = r'(```yaml\nactivators:\n  activator0:[^\n]+\n    option:[^\n]+\n    commands:\n(?:    - [^\n]+\n)+)```'

def add_target_commands(match):
    original = match.group(1)

    # Extract the commands from activator0
    commands_match = re.search(r'commands:\n((?:    - [^\n]+\n)+)', original)
    if not commands_match:
        return match.group(0)

    commands = commands_match.group(1)

    # Build the new format with both activators
    new_block = original
    new_block += f"  activator1: # Activator ID, you can create as many activators on the activators list\n"
    new_block += f"    option: # Here goes an activator that is at least instance of target\n"
    new_block += f"    targetCommands:\n"
    new_block += commands
    new_block += "```"

    return new_block

# Apply the transformation
new_content = re.sub(pattern, add_target_commands, content, flags=re.MULTILINE)

# Write back
with open('docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("File updated successfully!")
