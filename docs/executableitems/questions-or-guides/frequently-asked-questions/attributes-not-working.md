# Attributes Not Working

## Problem

When creating an ExecutableItem with materials that normally have attributes (like diamond sword with attack damage, or netherite chestplate with armor), the item loses its vanilla attributes.

**Example:** A diamond sword ExecutableItem has no attack damage, or a netherite chestplate has no armor value.

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/VURkId4Li2A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Solutions

### Solution 1: Enable Keep Attributes (Recommended)

The easiest solution is to enable `keepAttributes` in your ExecutableItem configuration:

```yaml
material: DIAMOND_SWORD
name: '&6Custom Sword'

keepAttributes: true  # Preserves vanilla attributes
```

This preserves all vanilla attributes for the material.

### Solution 2: Use NBTAPI Integration

If `keepAttributes` doesn't work, try using ExecutableItems' NBTAPI integration:

1. **Install NBTAPI** plugin on your server
   - Download: [NBTAPI on SpigotMC](https://www.spigotmc.org/resources/nbt-api.7939/)

2. **Enable NBTAPI in ExecutableItems config**:

```yaml
# In ExecutableItems/config.yml
enableNBTAPI: true
```

3. **Restart your server**

4. **Test your item** - attributes should now work

### Solution 3: Manually Add Attributes

If neither solution works, manually add the attributes using the `attributeModifiers` feature:

#### For Weapons (Swords, Axes):

```yaml
material: DIAMOND_SWORD
name: '&6Custom Sword'

attributeModifiers:
  GENERIC_ATTACK_DAMAGE:
    amount: 7.0  # Diamond sword damage
    operation: ADD_NUMBER
    slot: HAND
  GENERIC_ATTACK_SPEED:
    amount: -2.4  # Diamond sword speed
    operation: ADD_NUMBER
    slot: HAND
```

#### For Armor (Helmets, Chestplates, Leggings, Boots):

```yaml
material: NETHERITE_CHESTPLATE
name: '&4Custom Chestplate'

attributeModifiers:
  GENERIC_ARMOR:
    amount: 8.0  # Netherite chestplate armor
    operation: ADD_NUMBER
    slot: CHEST
  GENERIC_ARMOR_TOUGHNESS:
    amount: 3.0  # Netherite toughness
    operation: ADD_NUMBER
    slot: CHEST
  GENERIC_KNOCKBACK_RESISTANCE:
    amount: 0.1  # Netherite knockback resistance
    operation: ADD_NUMBER
    slot: CHEST
```

## Vanilla Attribute Values

### Weapons

| Material | Attack Damage | Attack Speed |
|----------|---------------|--------------|
| Wooden Sword | 4.0 | -2.4 |
| Stone Sword | 5.0 | -2.4 |
| Iron Sword | 6.0 | -2.4 |
| Gold Sword | 4.0 | -2.4 |
| Diamond Sword | 7.0 | -2.4 |
| Netherite Sword | 8.0 | -2.4 |

### Armor

**Helmets:**
| Material | Armor | Toughness | Knockback Resistance |
|----------|-------|-----------|---------------------|
| Leather | 1.0 | 0 | 0 |
| Chainmail | 2.0 | 0 | 0 |
| Iron | 2.0 | 0 | 0 |
| Gold | 2.0 | 0 | 0 |
| Diamond | 3.0 | 2.0 | 0 |
| Netherite | 3.0 | 3.0 | 0.1 |

**Chestplates:**
| Material | Armor | Toughness | Knockback Resistance |
|----------|-------|-----------|---------------------|
| Leather | 3.0 | 0 | 0 |
| Chainmail | 5.0 | 0 | 0 |
| Iron | 6.0 | 0 | 0 |
| Gold | 5.0 | 0 | 0 |
| Diamond | 8.0 | 2.0 | 0 |
| Netherite | 8.0 | 3.0 | 0.1 |

**Leggings:**
| Material | Armor | Toughness | Knockback Resistance |
|----------|-------|-----------|---------------------|
| Leather | 2.0 | 0 | 0 |
| Chainmail | 4.0 | 0 | 0 |
| Iron | 5.0 | 0 | 0 |
| Gold | 3.0 | 0 | 0 |
| Diamond | 6.0 | 2.0 | 0 |
| Netherite | 6.0 | 3.0 | 0.1 |

**Boots:**
| Material | Armor | Toughness | Knockback Resistance |
|----------|-------|-----------|---------------------|
| Leather | 1.0 | 0 | 0 |
| Chainmail | 1.0 | 0 | 0 |
| Iron | 2.0 | 0 | 0 |
| Gold | 1.0 | 0 | 0 |
| Diamond | 3.0 | 2.0 | 0 |
| Netherite | 3.0 | 3.0 | 0.1 |

## Common Attribute Types

- `GENERIC_ATTACK_DAMAGE` - Weapon damage
- `GENERIC_ATTACK_SPEED` - Attack speed (negative = slower)
- `GENERIC_ARMOR` - Armor points
- `GENERIC_ARMOR_TOUGHNESS` - Armor toughness
- `GENERIC_KNOCKBACK_RESISTANCE` - Knockback resistance
- `GENERIC_MAX_HEALTH` - Max health
- `GENERIC_MOVEMENT_SPEED` - Movement speed
- `GENERIC_LUCK` - Luck

## Slot Types

- `HAND` - Main hand (weapons)
- `OFF_HAND` - Off hand
- `HEAD` - Helmet slot
- `CHEST` - Chestplate slot
- `LEGS` - Leggings slot
- `FEET` - Boots slot

## Operation Types

- `ADD_NUMBER` - Adds the amount directly (most common)
- `ADD_SCALAR` - Multiplies base value, then adds
- `MULTIPLY_SCALAR_1` - Multiplies total value

## Troubleshooting

### keepAttributes: true Not Working

1. **Check Minecraft version**: Some versions have bugs with attribute preservation
2. **Try NBTAPI**: Install NBTAPI plugin and enable it in config
3. **Use manual attributes**: Add them manually as shown above

### NBTAPI Not Working

1. **Verify NBTAPI is installed**: `/plugins` should show NBTAPI
2. **Check version compatibility**: Ensure NBTAPI supports your Minecraft version
3. **Enable in config**: Make sure `enableNBTAPI: true` in ExecutableItems config.yml
4. **Restart server**: Changes require full server restart

### Manual Attributes Not Showing

1. **Check slot**: Armor must use correct slot (HEAD, CHEST, LEGS, FEET)
2. **Verify attribute name**: Must be exact (GENERIC_ARMOR not just ARMOR)
3. **Operation**: Most cases use `ADD_NUMBER`
4. **Reload item**: `/ei reload` and get new copy of item

### Different Values Than Expected

1. **Check operation type**: `ADD_NUMBER` vs `ADD_SCALAR` vs `MULTIPLY_SCALAR_1`
2. **Verify amount**: Negative values for attack speed, positive for damage/armor
3. **Multiple modifiers**: Attributes stack if multiple are defined

## Related Documentation

- [Item Features - Keep Attributes](/docs/executableitems/configurations/item-configuration/item-features#keep-attributes)
- [Attribute Modifiers](/docs/executableitems/configurations/item-configuration/item-features#attribute-modifiers)
- [NBTAPI Plugin](https://www.spigotmc.org/resources/nbt-api.7939/)

## Summary

**Quick Fix:** Add `keepAttributes: true` to your ExecutableItem configuration.

**If that fails:**
1. Install and enable NBTAPI plugin
2. Or manually add attributes using `attributeModifiers`

**Most common cause:** ExecutableItems replaces item NBT, removing vanilla attributes. The `keepAttributes` option preserves them.
