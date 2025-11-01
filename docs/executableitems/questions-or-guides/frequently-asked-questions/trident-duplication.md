# Trident Duplication

## Problem

When creating an ExecutableItem with `material: TRIDENT`, throwing the trident causes it to duplicate - you end up with multiple copies of the item instead of just one.

## Quick Solution

Set the item's `usage` to `0` in your ExecutableItem configuration:

```yaml
material: TRIDENT
name: '&bCustom Trident'
lore:
- '&7A custom trident item'

usage: 0  # This prevents duplication
```

## Why This Happens

### The Root Cause

Tridents in Minecraft have unique behavior compared to other items:

1. **Vanilla Tridents Return**: When you throw a vanilla trident, it returns to your inventory after hitting something or landing
2. **Item Durability System**: Tridents use durability damage to track usage
3. **ExecutableItems Interaction**: When ExecutableItems handles trident usage, it can conflict with vanilla trident mechanics

The duplication occurs because:
- ExecutableItems tries to manage the item's usage/durability
- Vanilla Minecraft tries to return the thrown trident
- Both systems create their own copy of the item
- Result: Multiple tridents appear

### How `usage: 0` Fixes It

Setting `usage: 0` tells ExecutableItems:
- **Don't track item usage** through the durability system
- Let vanilla Minecraft handle the trident's return behavior
- Prevents the conflict between ExecutableItems and vanilla mechanics
- The trident behaves like a vanilla trident (infinite durability)

## Complete Example

Here's a complete custom trident configuration that won't duplicate:

```yaml
material: TRIDENT
name: '&3&lPoseidon''s Trident'
lore:
- '&7A legendary weapon of the seas'
- '&bCauses lightning on impact'

usage: 0  # Prevents duplication

# Custom enchantments still work
enchantments:
  LOYALTY: 3
  IMPALING: 5
  RIPTIDE: 2

# Activators work normally
activators:
  on_projectile_hit:
    activators:
    - PROJECTILE_HIT_ENTITY
    commands:
    - "LIGHTNING %victim_x% %victim_y% %victim_z% %victim_world%"
    - "SENDMESSAGE &3⚡ The power of Poseidon strikes!"
```

## Alternative: Limited Usage Trident

If you want the trident to have limited uses but not duplicate, use the `usageLimit` feature instead:

```yaml
material: TRIDENT
name: '&eFragile Trident'
lore:
- '&7This trident will break after 10 throws'

usage: 0  # Still prevents duplication

# Use usageLimit feature instead
usageLimitFeature:
  enabled: true
  limit: 10
  resetOnRepair: false
  commandsWhenLimitReached:
  - "SENDMESSAGE &cYour trident has broken!"
  - "REMOVE 1"
```

## Troubleshooting

### Trident Still Duplicates

If setting `usage: 0` doesn't fix the issue:

1. **Check your activators**: Some activators like `PLAYER_LAUNCH_TRIDENT` might conflict
2. **Verify the config**: Make sure `usage: 0` is saved and the item is regenerated
3. **Test without activators**: Temporarily disable all activators to isolate the issue
4. **Check for other plugins**: Some anti-cheat or inventory plugins might interfere

### Trident Doesn't Return

If your trident doesn't return after throwing:

1. **Add Loyalty enchantment**:
```yaml
enchantments:
  LOYALTY: 3  # Level 1-3, higher = faster return
```

2. **Check game mode**: Creative mode tridents behave differently
3. **Verify you're in range**: Tridents need to land or hit to return

### Want Trident to Break on Use

If you want the trident to be consumed when thrown:

```yaml
usage: 0

activators:
  on_launch:
    activators:
    - PLAYER_LAUNCH_TRIDENT
    commands:
    - "REMOVE 1"  # Removes the trident from inventory
```

## Related Documentation

- [Usage Configuration](/docs/executableitems/configurations/item-configuration/item-features#usage) - Item usage/durability settings
- [Usage Limit Feature](/docs/executableitems/configurations/item-configuration/item-features#usage-limit) - Alternative usage tracking
- [Projectile Activators](/docs/executableitems/configurations/activator-configuration/list-of-the-activators#projectile-activators) - Trident launch detection

## Technical Notes

:::info Minecraft Version Compatibility
This issue affects all Minecraft versions that support tridents (1.13+). The `usage: 0` fix works across all versions.
:::

:::warning Other Throwable Items
This duplication issue is **specific to tridents**. Other throwable items (snowballs, eggs, ender pearls, potions) don't have this problem because they don't have the vanilla "return" mechanic.
:::

:::tip Premium Feature Alternative
Premium users can use the [KEEP_ITEM](/docs/tools-for-all-plugins/custom-commands/player-and-target-commands#keep_item) command for more advanced item persistence control.
:::

## Summary

- **Problem**: Tridents duplicate when thrown due to conflict between ExecutableItems and vanilla mechanics
- **Solution**: Set `usage: 0` in your item configuration
- **Why**: Disables ExecutableItems durability tracking, letting vanilla handle the trident
- **Benefit**: Trident works normally without duplication, infinite durability by default
- **Alternative**: Use `usageLimitFeature` if you need limited uses
