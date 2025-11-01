# Custom Textures [1.21+]

This guide covers creating custom textures for ExecutableItems in Minecraft 1.21 and above. The process has been streamlined in 1.21+ compared to earlier versions.

:::info Version Information
This guide is specifically for **Minecraft 1.21, 1.21.2, 1.21.3, and 1.21.4+**.

For version-specific differences:
- **1.21 - 1.21.3**: Use `pack_format: 34`
- **1.21.4+**: Use `pack_format: 41` (includes new item model format)

See [1.21.4+ Article Version](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21.4+-article-version) for 1.21.4+ specific changes.
:::

## Video Tutorials

For visual learners, here are comprehensive video tutorials:

### Tutorial 1: Basic Custom Textures (Recommended for beginners)
<iframe width="560" height="315" src="https://www.youtube.com/embed/K39U55l4-O0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Tutorial 2: Advanced Techniques
<iframe width="560" height="315" src="https://www.youtube.com/embed/eGjDxMrwpRk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Written Step-by-Step Guide

For those who prefer text instructions or cannot access videos, here's a complete guide.

### Prerequisites

- Minecraft 1.21+ server
- ExecutableItems plugin installed
- Image editing software (Photoshop, GIMP, Paint.NET, etc.)
- Text editor (VS Code, Notepad++, etc.)

### Overview

The process involves:
1. Creating custom texture images
2. Creating a resource pack structure
3. Configuring JSON model files
4. Setting custom_model_data in ExecutableItems
5. Uploading the resource pack

## Step 1: Create Your Custom Texture

### Create the Image File

1. **Size**: Create a 16x16 pixel image (or multiples like 32x32, 64x64 for HD packs)
2. **Format**: Save as PNG with transparency support
3. **Naming**: Use lowercase and underscores (e.g., `my_custom_sword.png`)

:::tip Image Requirements
- Must be PNG format
- Recommended: 16x16 pixels (vanilla Minecraft size)
- Higher resolutions (32x32, 64x64) require Optifine or similar mods
- Use transparency for non-square items
:::

### Example Items to Texture
- Weapons (swords, axes, bows)
- Tools (pickaxes, shovels, hoes)
- Food items
- Custom items (sticks, diamonds, etc.)

## Step 2: Create Resource Pack Structure

Create these folders and files:

```
MyCustomPack/
├── pack.mcmeta
├── pack.png (optional icon)
└── assets/
    └── executableitems/
        ├── textures/
        │   └── custom_textures/
        │       └── my_custom_sword.png
        └── models/
            └── item/
                └── my_custom_sword.json
```

### Create pack.mcmeta

```json
{
  "pack": {
    "pack_format": 34,
    "description": "My Custom ExecutableItems Textures"
  }
}
```

:::warning Pack Format Versions
- Minecraft 1.21 - 1.21.3: `pack_format: 34`
- Minecraft 1.21.4+: `pack_format: 41`

Using the wrong pack_format will cause Minecraft to reject the pack!
:::

## Step 3: Create Model JSON File

### For Regular Items

Create `assets/executableitems/models/item/my_custom_sword.json`:

```json
{
  "parent": "minecraft:item/handheld",
  "textures": {
    "layer0": "executableitems:custom_textures/my_custom_sword"
  }
}
```

### Parent Model Types

Different items need different parent models:

| Item Type | Parent Model |
|-----------|--------------|
| Swords, Axes, Tools | `minecraft:item/handheld` |
| Blocks, Food, Simple Items | `minecraft:item/generated` |
| Bows (with pulling states) | `minecraft:item/bow` |
| Shields | `builtin/entity` |
| Fishing Rods | `minecraft:item/handheld_rod` |

### For Items with Multiple States (Bows, Crossbows)

See the [Per States Texture Guide](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/per-states-texture) for items that change appearance.

## Step 4: Configure Base Item Override

You need to add an override to the vanilla item's JSON file. For example, for a diamond sword:

Create `assets/minecraft/models/item/diamond_sword.json`:

```json
{
  "parent": "minecraft:item/handheld",
  "textures": {
    "layer0": "minecraft:item/diamond_sword"
  },
  "overrides": [
    {
      "predicate": {
        "custom_model_data": 1
      },
      "model": "executableitems:item/my_custom_sword"
    }
  ]
}
```

This tells Minecraft: "When an item has `custom_model_data: 1`, use our custom model instead."

## Step 5: Configure ExecutableItem

In your ExecutableItem configuration, set the custom_model_data value:

```yaml
material: DIAMOND_SWORD
displayName: '&6Custom Legendary Sword'
lore:
- '&7A sword with custom texture'

customModelData: 1
```

The `customModelData: 1` matches the value in your override JSON.

### Multiple Custom Items

You can have multiple custom textures for the same base item:

**In diamond_sword.json overrides**:
```json
"overrides": [
  {"predicate": {"custom_model_data": 1}, "model": "executableitems:item/fire_sword"},
  {"predicate": {"custom_model_data": 2}, "model": "executableitems:item/ice_sword"},
  {"predicate": {"custom_model_data": 3}, "model": "executableitems:item/lightning_sword"}
]
```

**In ExecutableItems**:
```yaml
# Fire Sword
customModelData: 1

# Ice Sword
customModelData: 2

# Lightning Sword
customModelData: 3
```

## Step 6: Package and Upload

### Create ZIP File

1. Select all files in your pack folder (pack.mcmeta, assets folder, pack.png)
2. Create a ZIP archive
3. **Important**: The ZIP should contain pack.mcmeta at the root level, not in a subfolder

### Upload Options

See the [Uploading Texture Pack Guide](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/uploading-texture-pack) for detailed upload instructions.

**Quick options**:
- Dropbox (get direct download link)
- Google Drive (use link converter)
- Self-hosted server
- GitHub releases

### Configure Server

In `server.properties`:
```properties
resource-pack=https://your-url.com/pack.zip
resource-pack-sha1=<SHA1 hash of your ZIP>
require-resource-pack=true
```

## Troubleshooting

### Texture Doesn't Show

1. ✅ Check `customModelData` value matches JSON override
2. ✅ Verify pack_format is correct for your Minecraft version
3. ✅ Ensure texture path is correct: `executableitems:custom_textures/filename`
4. ✅ Check texture file is PNG format
5. ✅ Reload resource pack with F3+T

### Resource Pack Won't Load

1. ✅ Verify pack_format number is correct
2. ✅ Check pack.mcmeta has valid JSON syntax
3. ✅ Ensure ZIP has files at root level (not in subfolder)
4. ✅ Check file size is under 100MB (client limit)

### Custom Model Data Not Working

1. ✅ Verify you added override to vanilla item JSON
2. ✅ Check the predicate value matches: `{"custom_model_data": 1}`
3. ✅ Ensure model path is correct: `executableitems:item/filename`
4. ✅ Check for typos in JSON files

### Wrong Parent Model

If your item displays incorrectly:
- Swords rotating wrong: Use `minecraft:item/handheld`
- Item too large: Try `minecraft:item/generated`
- Transparency issues: Check PNG has alpha channel

## Version-Specific Notes

### Minecraft 1.21 - 1.21.3

- Use `pack_format: 34`
- Standard item model format
- Custom model data works as described above

### Minecraft 1.21.4+

- Use `pack_format: 41`
- New item model format available (optional)
- Backwards compatible with old format
- See [1.21.4+ specific guide](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21.4+-article-version) for new features

## Advanced Topics

### 3D Models

For 3D item models using Blockbench, see the [3D Models Guide](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/3d-models).

### Animated Textures

For animated item textures, see the [Animated Textures Guide](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/animated-textures).

### Armor Textures

For custom armor using trims, see the [Custom Armor Guide](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/custom-armor-using-armor-trims).

## Complete Example

Here's a complete working example for a custom fire sword:

### Directory Structure
```
FireSwordPack/
├── pack.mcmeta
└── assets/
    ├── executableitems/
    │   ├── textures/
    │   │   └── custom_textures/
    │   │       └── fire_sword.png
    │   └── models/
    │       └── item/
    │           └── fire_sword.json
    └── minecraft/
        └── models/
            └── item/
                └── diamond_sword.json
```

### pack.mcmeta
```json
{
  "pack": {
    "pack_format": 34,
    "description": "Fire Sword Custom Texture"
  }
}
```

### fire_sword.json
```json
{
  "parent": "minecraft:item/handheld",
  "textures": {
    "layer0": "executableitems:custom_textures/fire_sword"
  }
}
```

### diamond_sword.json
```json
{
  "parent": "minecraft:item/handheld",
  "textures": {
    "layer0": "minecraft:item/diamond_sword"
  },
  "overrides": [
    {
      "predicate": {
        "custom_model_data": 100
      },
      "model": "executableitems:item/fire_sword"
    }
  ]
}
```

### ExecutableItem Config
```yaml
material: DIAMOND_SWORD
displayName: '&c&lFire Sword'
lore:
- '&7A blazing sword of flames'
- '&eCustom texture enabled'

customModelData: 100

# Optional: Add fire effects
activators:
  on_hit:
    activators:
    - PLAYER_ATTACK_ENTITY
    commands:
    - "BURN 100 %victim%"
    - "PARTICLE FLAME 20 0.3 %victim_x% %victim_y% %victim_z% %world%"
```

## Related Documentation

- [General Items (1.21)](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/general-items)
- [3D Models](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/3d-models)
- [Animated Textures](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/animated-textures)
- [Per-State Textures (Bows, etc.)](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/per-states-texture)
- [Uploading Texture Pack](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21/uploading-texture-pack)
- [1.21.4+ Article Version](/docs/executableitems/questions-or-guides/custom-textures/custom-textures-1.21.4+-article-version)

## Additional Resources

- **Minecraft Wiki**: [Resource Packs](https://minecraft.wiki/w/Resource_Pack)
- **Item Model Documentation**: [Item Models (1.21)](https://minecraft.wiki/w/Model#Item_models)
- **Custom Model Data**: [Predicate Documentation](https://minecraft.wiki/w/Model#Item_predicates)

## Need Help?

If you encounter issues or have questions, join the [ExecutableItems Discord](https://discord.gg/TcDxb2B) for support!
