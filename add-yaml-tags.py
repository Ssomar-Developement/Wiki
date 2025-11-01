#!/usr/bin/env python3

with open('docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md', 'r') as f:
    lines = f.readlines()

new_lines = []
in_code_block = False

for line in lines:
    if line.strip() == '```' and not in_code_block:
        # This is an opening tag without yaml
        new_lines.append('```yaml\n')
        in_code_block = True
    elif line.strip().startswith('```'):
        # This is either a closing tag or an opening tag with a language
        new_lines.append(line)
        in_code_block = not in_code_block
    else:
        new_lines.append(line)

with open('docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands.md', 'w') as f:
    f.writelines(new_lines)

print("Added yaml tags to code blocks successfully!")
