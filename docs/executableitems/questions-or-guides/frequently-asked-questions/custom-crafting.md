# Custom Crafting

## Does ExecutableItems Support Custom Crafting?

ExecutableItems does **not** have built-in custom crafting mechanics. To create custom recipes for ExecutableItems, you need to use a third-party custom crafting plugin.

## Recommended Custom Crafting Plugins

### Option 1: CustomCrafting (Recommended)

**CustomCrafting** is a powerful plugin that allows you to create custom recipes for ExecutableItems.

{% embed url="https://modrinth.com/plugin/customcrafting" %}

**Features:**
- Visual recipe editor
- Supports shaped and shapeless recipes
- Works with ExecutableItems
- Regular updates and support
- Compatible with most Minecraft versions

### Option 2: Other Popular Plugins

Depending on your Minecraft version, you may also consider:

- **CrazyEnchantments** - Includes custom crafting for enchanted items
- **MMOItems** - Has recipe system (if using MMOItems alongside ExecutableItems)
- **SlimeCrafting** - Lightweight custom crafting solution
- **AdvancedRecipes** - Advanced recipe configurations

:::tip Choose Based on Your Version
Some plugins work better on specific Minecraft versions. Test which plugin works best for your server version before committing to one.
:::

## Setting Up Custom Recipes for ExecutableItems

### Step 1: Install a Custom Crafting Plugin

1. Download your chosen custom crafting plugin
2. Place it in your server's `plugins` folder
3. Restart your server

### Step 2: Create Your ExecutableItem

Create your custom item using ExecutableItems:

```bash
/ei create <item_name>
/ei edit <item_name>
```

Configure your item with:
- Custom name
- Custom lore
- Material
- Activators
- Commands

### Step 3: Get the ExecutableItem

Get a copy of your ExecutableItem to use as the recipe result:

```bash
/ei give <item_name> [amount]
```

### Step 4: Configure the Recipe

Using your custom crafting plugin (example with CustomCrafting):

1. Open the recipe editor: `/cc recipe create`
2. Set the crafting pattern using the GUI
3. Set the result to your ExecutableItem
4. Save the recipe

## Example: Creating a Custom Sword Recipe

### 1. Create the ExecutableItem

```yaml
name: '&6&lLegendary Sword'
material: DIAMOND_SWORD
lore:
- '&7A sword of legends'
- '&e+50% Damage'

activators:
  activator1:
    activators:
    - PLAYER_ALL_CLICK
    commands:
    - "SENDMESSAGE &eYou wield legendary power!"
```

### 2. Configure CustomCrafting Recipe

Open recipe editor and create shaped recipe:

```
[Diamond] [Diamond] [Diamond]
    [ ]   [Stick]      [ ]
    [ ]   [Stick]      [ ]
```

**Result:** Legendary Sword ExecutableItem

### 3. Test the Recipe

1. Gather materials: 3 diamonds, 2 sticks
2. Open crafting table
3. Place items according to pattern
4. Receive your ExecutableItem

## ExecutableCrafting Plugin (Coming Soon)

:::info Future Development
Ssomar Development is working on **ExecutableCrafting**, a dedicated custom crafting plugin designed specifically for ExecutableItems integration.

**Status:** In Development

This will provide native support for ExecutableItems recipes without needing third-party plugins.
:::

## Common Issues

### Recipe Not Working

1. **Verify plugin compatibility** - Check if your custom crafting plugin supports your Minecraft version
2. **Check item NBT** - Some plugins don't recognize items with custom NBT data
3. **Recipe conflicts** - Ensure your recipe doesn't conflict with vanilla recipes
4. **Reload recipes** - Restart server or reload the custom crafting plugin

### ExecutableItem Not Appearing

1. **Use exact item** - Make sure you're using the exact ExecutableItem in the recipe configuration
2. **Check amount** - Verify the result amount is set correctly
3. **Permission issues** - Some crafting plugins require permissions to use custom recipes

### Recipe Works But Item Has No Features

This usually means the recipe created a vanilla item instead of the ExecutableItem:

1. **Use the plugin's item selection** - Don't manually create the item
2. **Get fresh copy** - Use `/ei give` to get a fresh ExecutableItem
3. **Configure as result** - Set the ExecutableItem as the recipe result, not a regular diamond sword

## Getting Help

If you're having trouble setting up custom crafting:

1. **Check plugin documentation** - Each custom crafting plugin has different configuration methods
2. **Join Ssomar Discord** - Ask in the support channels for help
3. **Verify compatibility** - Ensure ExecutableItems and your crafting plugin are both updated

## Summary

- ExecutableItems does **not** have built-in custom crafting
- Use **CustomCrafting** or similar plugins for custom recipes
- Create your ExecutableItem first, then configure the recipe
- **ExecutableCrafting** plugin coming soon for native support

**Quick Setup:**
1. Install CustomCrafting (or similar plugin)
2. Create your ExecutableItem
3. Configure recipe using the crafting plugin
4. Test and enjoy!
