# Break blocks not depending on item

If you want to create a pickaxe, axe, or whatever, that can break everything, for example, a wooden_pickaxe that can break diamond ore, this is your place:

## Overview

By default, Minecraft restricts which tools can break which blocks (e.g., you need a diamond pickaxe to mine obsidian). This guide shows you how to bypass these restrictions and create custom tools that can break any block regardless of vanilla mining requirements.

## Method 1: Using Tool Rules (1.20.5+)

For Minecraft 1.20.5 and above, you can use the `toolRulesGroupFeature` to override vanilla mining restrictions.

### Configuration

```yaml
material: WOODEN_PICKAXE
displayName: '&6Universal Pickaxe'
lore:
- '&7Can mine any block!'

toolRulesGroupFeature:
  toolRules:
    rule_1:
      blocks:
      - DIAMOND_ORE
      - DEEPSLATE_DIAMOND_ORE
      - OBSIDIAN
      - ANCIENT_DEBRIS
      speed: 8.0
      correctForDrops: true
```

### Explanation

- `blocks`: List of blocks this tool can mine
- `speed`: Mining speed multiplier (higher = faster)
- `correctForDrops`: If true, the block will drop items as if mined with the correct tool

## Method 2: Using PLAYER_BLOCK_BREAK Activator

For all versions, you can use the `PLAYER_BLOCK_BREAK` activator with custom logic.

### Basic Example - Instant Break Any Block

```yaml
material: WOODEN_PICKAXE
displayName: '&cInstant Breaker'

activators:
  break_any_block:
    activators:
    - PLAYER_BLOCK_BREAK

    cancelEvent: true

    commands:
    - "SETBLOCK air %block_x% %block_y% %block_z% %block_world%"
    - "DROP_ITEM_NATURALLY %block_type% 1 %block_world% %block_x% %block_y% %block_z%"
```

### How It Works

1. `cancelEvent: true` - Prevents normal block break (so vanilla tool requirements don't apply)
2. `SETBLOCK air` - Removes the block immediately
3. `DROP_ITEM_NATURALLY` - Drops the block item at its location

### Advanced Example - With Block Drops

```yaml
material: WOODEN_PICKAXE
displayName: '&6Advanced Universal Pickaxe'
lore:
- '&7Breaks any block'
- '&7Drops items correctly'

activators:
  break_any_block:
    activators:
    - PLAYER_BLOCK_BREAK

    cancelEvent: true
    silenceOutput: true

    detailedBlocks:
      blocks:
      - DIAMOND_ORE
      - DEEPSLATE_DIAMOND_ORE
      - GOLD_ORE
      - DEEPSLATE_GOLD_ORE
      - IRON_ORE
      - DEEPSLATE_IRON_ORE
      - OBSIDIAN
      - ANCIENT_DEBRIS
      blockStates: []
      blockTags: []
      whitelist: true

    commands:
    - "SETBLOCK air %block_x% %block_y% %block_z% %block_world%"
    - "IF %block_type% == DIAMOND_ORE || %block_type% == DEEPSLATE_DIAMOND_ORE"
    - "  DROP_ITEM_NATURALLY DIAMOND 1 %block_world% %block_x% %block_y% %block_z%"
    - "  PARTICLE FIREWORKS_SPARK 10 0.3 %block_x% %block_y% %block_z% %block_world%"
    - "ENDIF"
    - "IF %block_type% == OBSIDIAN"
    - "  DROP_ITEM_NATURALLY OBSIDIAN 1 %block_world% %block_x% %block_y% %block_z%"
    - "ENDIF"
    - "IF %block_type% == ANCIENT_DEBRIS"
    - "  DROP_ITEM_NATURALLY ANCIENT_DEBRIS 1 %block_world% %block_x% %block_y% %block_z%"
    - "  SENDMESSAGE &6You found Ancient Debris!"
    - "ENDIF"
```

### Features

- `detailedBlocks` with `whitelist: true` - Only works on specified blocks
- Custom drop logic based on block type
- Particle effects for special blocks
- Messages for rare finds

## Method 3: Hybrid Approach (Recommended)

Combine tool rules for mining speed with activators for custom behavior:

```yaml
material: DIAMOND_PICKAXE
displayName: '&b&lOmni-Tool'
lore:
- '&7Mines any block instantly'
- '&7Auto-smelts ores'

# 1.20.5+ Tool rules for mining speed
toolRulesGroupFeature:
  toolRules:
    rule_1:
      blocks:
      - DIAMOND_ORE
      - DEEPSLATE_DIAMOND_ORE
      - GOLD_ORE
      - DEEPSLATE_GOLD_ORE
      - IRON_ORE
      - DEEPSLATE_IRON_ORE
      speed: 15.0
      correctForDrops: false  # We handle drops with activator

activators:
  auto_smelt_ores:
    activators:
    - PLAYER_BLOCK_BREAK

    detailedBlocks:
      blocks:
      - IRON_ORE
      - DEEPSLATE_IRON_ORE
      - GOLD_ORE
      - DEEPSLATE_GOLD_ORE
      - COPPER_ORE
      - DEEPSLATE_COPPER_ORE
      whitelist: true

    commands:
    - "IF %block_type% contains IRON"
    - "  DROP_ITEM_NATURALLY IRON_INGOT 1 %block_world% %block_x% %block_y% %block_z%"
    - "  PARTICLE FLAME 20 0.3 %block_x% %block_y% %block_z% %block_world%"
    - "ENDIF"
    - "IF %block_type% contains GOLD"
    - "  DROP_ITEM_NATURALLY GOLD_INGOT 1 %block_world% %block_x% %block_y% %block_z%"
    - "  PARTICLE FLAME 20 0.3 %block_x% %block_y% %block_z% %block_world%"
    - "ENDIF"
    - "IF %block_type% contains COPPER"
    - "  DROP_ITEM_NATURALLY COPPER_INGOT 1 %block_world% %block_x% %block_y% %block_z%"
    - "  PARTICLE FLAME 20 0.3 %block_x% %block_y% %block_z% %block_world%"
    - "ENDIF"
```

## Important Notes

### ⚠️ Prevent Duplication

When using `cancelEvent: true`, always manually handle block removal and drops to avoid duplication:

```yaml
# CORRECT
cancelEvent: true
commands:
- "SETBLOCK air %block_x% %block_y% %block_z% %block_world%"
- "DROP_ITEM_NATURALLY %block_type% 1 %block_world% %block_x% %block_y% %block_z%"

# WRONG - Block will drop twice!
cancelEvent: false
commands:
- "SETBLOCK air %block_x% %block_y% %block_z% %block_world%"
```

### 🎯 Target Specific Blocks

Use `detailedBlocks` to limit which blocks the tool can break:

```yaml
detailedBlocks:
  blocks:
  - DIAMOND_ORE
  - EMERALD_ORE
  whitelist: true  # Only these blocks
```

### 💎 Handle Fortune/Silk Touch

If you want fortune-like effects:

```yaml
commands:
- "IF %random_1_100% <= 25"  # 25% chance
- "  DROP_ITEM_NATURALLY DIAMOND 2 %block_world% %block_x% %block_y% %block_z%"
- "ELSE"
- "  DROP_ITEM_NATURALLY DIAMOND 1 %block_world% %block_x% %block_y% %block_z%"
- "ENDIF"
```

## Troubleshooting

### Tool Doesn't Break Blocks

- ✅ Check that `PLAYER_BLOCK_BREAK` activator is configured
- ✅ If using `detailedBlocks`, ensure the block is in the whitelist
- ✅ Make sure `cancelEvent` is set correctly

### Blocks Drop Twice

- ❌ You have `cancelEvent: false` but are manually dropping items
- ✅ Solution: Set `cancelEvent: true` OR don't manually drop items

### Tool Is Too Slow

- For 1.20.5+: Increase `speed` value in `toolRulesGroupFeature`
- For older versions: Use instant break method with `SETBLOCK air`

## Related Documentation

- [PLAYER_BLOCK_BREAK Activator](/docs/executableitems/configurations/activator-configuration/list-of-the-activators#player_block_break)
- [Tool Rules Feature](/docs/executableitems/configurations/item-configuration/item-features#tool-rules-group-feature-120-5)
- [Block Commands](/docs/tools-for-all-plugins-score/custom-commands/block-commands)
- [DetailedBlocks](/docs/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)

## Examples in Default Items

Check these default items for working examples:
- `Premium_Super_Pickaxe` - Universal mining tool
- `Premium_Vein_Miner` - Multi-block breaking

You can view these by running `/ei show` and browsing the Tools folder.
