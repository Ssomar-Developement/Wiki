---
description: Example page demonstrating custom tags with icons
unlisted: true
not-for-ai: true
---

import CustomTag from '@site/src/components/CustomTag';

# Custom Tags Examples

This page demonstrates the custom tag component that can be used to indicate platform requirements, version requirements, and premium features.

## Usage Examples

### Paper Server Requirement

<CustomTag type="paper" />

This feature is only available on Paper servers and their forks (Purpur, Pufferfish, etc.).

### Version Requirements

<CustomTag type="version" version="1.20.4" />

This command requires Minecraft version 1.20.4 or higher.

<CustomTag type="version" version="5.0.0">Only for SCore 5.0.0+</CustomTag>

You can also customize the text while keeping the version styling.

### Premium Features

<CustomTag type="premium" />

This is a premium-only feature available to supporters.

<CustomTag type="premium" compact />

This is the compact version of the premium tag - smaller and more subtle.

### Spigot Compatibility

<CustomTag type="spigot" />

This feature works on Spigot servers.

### Multiple Tags Together

<CustomTag type="paper" />
<CustomTag type="version" version="1.19.4" />
<CustomTag type="premium" />

You can use multiple tags together to show combined requirements.

### Player Interaction Tags

These tags indicate which type of player interaction or target is required:

<CustomTag type="player_none" />
<CustomTag type="player_block" />
<CustomTag type="player_entity" />
<CustomTag type="player_target" />

Compact versions:

<CustomTag type="player_none" compact />
<CustomTag type="player_block" compact />
<CustomTag type="player_entity" compact />
<CustomTag type="player_target" compact />

### Activator-Specific Tag

<CustomTag type="specific_activators" />

This tag indicates that a feature or command only works with specific activators.

<CustomTag type="specific_activators" compact />

## In Context Example

### ADVANCED_TELEPORT Command

<CustomTag type="paper" />
<CustomTag type="version" version="1.20" />

Teleports the player with advanced options including rotation and velocity preservation.

**Command settings:**
- `{x}`: X coordinate
- `{y}`: Y coordinate
- `{z}`: Z coordinate
- `[pitch]`: (Optional) Pitch rotation
- `[yaw]`: (Optional) Yaw rotation

**Example:**
```yaml
playerCommands:
  - ADVANCED_TELEPORT 100 64 200 0 90
```

---

### PREMIUM_PARTICLE Effect

<CustomTag type="premium" />

Creates a custom particle effect only available in the premium version.

**Command settings:**
- `{particle}`: Particle type
- `{amount}`: Number of particles

**Example:**
```yaml
commands:
  - PREMIUM_PARTICLE FLAME 50
```

---

## How to Use Custom Tags in Your Documentation

To use these tags in your markdown files:

1. **Import the component** at the top of your markdown file:
   ```mdx
   import CustomTag from '@site/src/components/CustomTag';
   ```

2. **Add tags** where needed:
   ```mdx
   <CustomTag type="paper" />
   <CustomTag type="version" version="1.20.4" />
   <CustomTag type="premium" />
   <CustomTag type="spigot" />
   ```

3. **Customize the text** (optional):
   ```mdx
   <CustomTag type="version" version="5.0.0">Only for SCore 5.0.0+</CustomTag>
   <CustomTag type="premium">Premium Tier 2 Required</CustomTag>
   ```

4. **Use compact mode** for smaller tags:
   ```mdx
   <CustomTag type="premium" compact />
   <CustomTag type="paper" compact />
   ```

## Available Tag Types

### Platform/Feature Tags
- `type="paper"` - Orange tag for Paper server requirements
- `type="version"` - Green tag for version requirements (use `version` prop)
- `type="premium"` - Purple/gold gradient for premium features
- `type="spigot"` - Yellow tag for Spigot compatibility

### Player Interaction Tags
- `type="player_none"` - Gray tag indicating no player interaction
- `type="player_block"` - Brown tag for block-related interactions
- `type="player_entity"` - Blue tag for entity-related interactions
- `type="player_target"` - Pink/Magenta tag for targeted interactions

### Special Tags
- `type="specific_activators"` - Teal/Cyan tag for activator-specific features

### Modifiers
- `compact` - Makes the tag smaller (works with any type)
- `version="X.X.X"` - Specifies version number (for version type)
- Custom children text - Override default label

## Notes

- Tags will gracefully hide the icon if the image file doesn't exist
- You can add logo images to `/static/img/` directory:
  - `paper-logo.png` - Paper server logo
  - `minecraft-logo.png` - Minecraft logo for versions
  - `premium-icon.png` - Crown or star icon for premium
  - `spigot-logo.png` - Spigot logo
