#!/usr/bin/env python3
import re

# Read the file
with open('docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Split into yaml blocks and non-yaml content
parts = re.split(r'(```yaml.*?```)', content, flags=re.DOTALL)

result = []
for part in parts:
    if part.startswith('```yaml'):
        # Check if this block has activator0 but not activator1
        has_activator0 = 'activator0:' in part
        has_activator1 = 'activator1:' in part
        has_commands = '\n    commands:\n' in part

        # Only update if it has activator0 with commands but no activator1
        if has_activator0 and has_commands and not has_activator1:
            # Extract the commands section
            commands_pattern = r'(  activator0:[^\n]*\n    option:[^\n]*\n    commands:\n)((?:    - [^\n]*\n)+)'
            match = re.search(commands_pattern, part)

            if match:
                activator0_block = match.group(0)
                commands_lines = match.group(2)

                # Create activator1 block
                activator1_block = "  activator1: # Activator ID, you can create as many activators on the activators list\n"
                activator1_block += "    option: # Here goes an activator that is at least instance of target\n"
                activator1_block += "    targetCommands:\n"
                activator1_block += commands_lines

                # Insert activator1 before the closing ```
                part = part.replace('```', activator1_block + '```')

        result.append(part)
    else:
        result.append(part)

new_content = ''.join(result)

# Write back
with open('docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("File updated successfully!")
