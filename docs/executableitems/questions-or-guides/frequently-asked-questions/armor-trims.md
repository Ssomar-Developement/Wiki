# Armor Trims

Armor trims are a Minecraft 1.20+ feature that allows you to customize armor appearance. ExecutableItems supports armor trims, but requires proper configuration and dependencies.

## Requirements

### NBTAPI Plugin

Armor trims require the **NBTAPI** plugin to function properly in ExecutableItems.

:::warning NBTAPI Required
If your armor trims are not working or you're importing items with armor trims, you **must** have NBTAPI installed. Without it, trim data cannot be read or written.
:::

**Download NBTAPI**: https://www.spigotmc.org/resources/nbt-api.7939/

### Minecraft Version

- **Minimum**: Minecraft 1.20+ (armor trims were introduced in 1.20)
- Works on: Paper, Spigot, Purpur

## Creating an Item with Armor Trims

There are two methods to create armor with trims in ExecutableItems:

### Method 1: Copy from Existing Item (Recommended)

This is the easiest way to create an ExecutableItem with armor trims:

1. **In-game**: Apply the armor trim you want to an armor piece using the Smithing Table
2. **Hold the trimmed armor** in your hand
3. **Run the command**:
   ```
   /ei create <item_id>
   ```
   Replace `<item_id>` with your desired item ID (e.g., `my_trimmed_chestplate`)

4. The ExecutableItem will be created with the armor trim data automatically copied

:::tip
This method automatically captures all NBT data including the trim pattern and material, ensuring it works perfectly.
:::

### Method 2: Manual YAML Configuration

For advanced users, you can manually configure armor trims in the YAML file:

```yaml
material: DIAMOND_CHESTPLATE
displayName: '&6Royal Chestplate'
lore:
- '&7A majestic piece of armor'
- '&7with golden trim'

# Armor trim configuration
armorTrim:
  pattern: COAST  # The trim pattern
  material: GOLD  # The trim material
```

#### Available Trim Patterns (1.20+)

- `COAST`
- `DUNE`
- `EYE`
- `HOST`
- `RAISER`
- `RIB`
- `SENTRY`
- `SHAPER`
- `SILENCE`
- `SNOUT`
- `SPIRE`
- `TIDE`
- `VEX`
- `WARD`
- `WAYFINDER`
- `WILD`

#### Additional Patterns (1.20.5+)

- `BOLT` (added in 1.20.5)
- `FLOW` (added in 1.20.5)

#### Available Trim Materials

- `AMETHYST`
- `COPPER`
- `DIAMOND`
- `EMERALD`
- `GOLD`
- `IRON`
- `LAPIS`
- `NETHERITE`
- `QUARTZ`
- `REDSTONE`

## Troubleshooting

### Armor Trims Not Showing

**Problem**: Armor trims appear in the config but don't display on the item.

**Solutions**:
1. ✅ Install NBTAPI plugin
2. ✅ Restart the server after installing NBTAPI
3. ✅ Check you're running Minecraft 1.20 or higher
4. ✅ Verify the trim pattern and material names are correct (case-sensitive)

### Imported Items Lose Trims

**Problem**: When importing ExecutableItems from another server, armor trims disappear.

**Solutions**:
1. ✅ Install NBTAPI on the destination server
2. ✅ Ensure both servers use the same Minecraft version
3. ✅ Re-import the item after installing NBTAPI
4. ✅ If still not working, recreate the item using Method 1

### Wrong Trim Applied

**Problem**: The trim appears different than expected.

**Solutions**:
1. ✅ Check the YAML for typos in pattern/material names
2. ✅ Remember that trim appearance varies by armor material
3. ✅ Use Method 1 to copy the exact trim you want

### Trim Patterns Not Available

**Problem**: Certain trim patterns (BOLT, FLOW) aren't working.

**Solutions**:
1. ✅ Check your Minecraft version (BOLT and FLOW require 1.20.5+)
2. ✅ Update to the latest server version
3. ✅ Verify your NBTAPI version is up to date

## Example Configuration

Here's a complete example of an armored set with trims:

```yaml
material: NETHERITE_CHESTPLATE
displayName: '&4&lInfernal Guardian Chestplate'
lore:
- '&7Forged in the depths of the Nether'
- '&7Adorned with ancient patterns'
- ''
- '&6+10 Defense'
- '&c+5 Fire Resistance'

armorTrim:
  pattern: RIB
  material: NETHERITE

# Add custom stats or abilities
attributeModifiers:
  generic.armor:
    uuid: random
    amount: 10
    operation: ADD_NUMBER
```

## Related Documentation

- [Item Configuration](/docs/executableitems/configurations/item-configuration/basic-configuration)
- [NBTAPI Resource Page](https://www.spigotmc.org/resources/nbt-api.7939/)
- [Minecraft Wiki - Armor Trim](https://minecraft.wiki/w/Armor_Trim)

## Additional Tips

### Creating Full Armor Sets

To create a matching trimmed armor set:

1. Apply the same trim to all four armor pieces in-game
2. Hold each piece and run `/ei create <helmet_id>`, `/ei create <chestplate_id>`, etc.
3. All pieces will maintain the same trim pattern and material

### Combining with Other Features

Armor trims work alongside all other ExecutableItems features:
- ✅ Attribute modifiers
- ✅ Custom enchantments
- ✅ Activators (PLAYER_ALL_CLICK, etc.)
- ✅ Usage requirements
- ✅ Custom durability

### Performance Note

Armor trims are vanilla Minecraft features and have no performance impact when used with ExecutableItems. The NBTAPI plugin only reads/writes the data during item creation.
