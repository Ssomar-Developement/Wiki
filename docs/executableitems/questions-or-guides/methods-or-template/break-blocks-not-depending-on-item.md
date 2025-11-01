# Break blocks not depending on item

If you want to create a pickaxe, axe, or whatever, that can break everything, for example, a wooden_pickaxe that can break diamond ore, this is your place:

## Overview

By default, Minecraft restricts which tools can break which blocks (e.g., you need a iron pickaxe to mine diamond). This guide shows you how to bypass these restrictions and create custom tools that can break any block regardless of vanilla mining requirements.

## Method 1: Using PLAYER_BLOCK_BREAK Activator

For all versions, you can use the `PLAYER_BLOCK_BREAK` activator with custom logic.

### Basic Example - Instant Break Any Block

```yaml
material: WOODEN_PICKAXE
displayName: '&cInstant Breaker'

activators:
  break_any_block:
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - DROPITEM %block% 1
```

### How It Works

1. `DROPITEM` - Drops the block item at its location

### Advanced Example - With whitelist of blocks type

```yaml
material: WOODEN_PICKAXE
displayName: '&cInstant Breaker'

activators:
  break_any_block:
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - DROPITEM %block% 1
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
```

## Related Documentation

- [PLAYER_BLOCK_BREAK Activator](/docs/executableitems/configurations/activator-configuration/list-of-the-activators#player_block_break)
- [Block Commands](/docs/tools-for-all-plugins-score/custom-commands/block-commands)
- [DetailedBlocks](/docs/executableitems/configurations/activator-configuration/activators-features#p_b-detailedblocks)
- [Block placeholders](/docs/tools-for-all-plugins-score/placeholders#block-placeholders)