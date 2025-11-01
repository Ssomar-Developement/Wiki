# Custom armor (using armor trims)

This guide shows you how to create custom armor textures in Minecraft 1.20+ by replacing armor trims.

:::info Version Requirements
- **Minecraft 1.20+**: This method uses armor trims introduced in 1.20
- **Pre-1.20**: For older versions, use OptiFine CIT (Custom Item Textures) retexturing instead
:::

:::warning
THIS METHOD NEEDS TO REMOVE A CURRENT TRIM TO ADD YOUR CUSTOM ARMOR

EACH TRIM YOU REMOVE, ONE CUSTOM ARMOR MORE YOU HAVE
:::

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cfef11fQlhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Step 1: Create the Armor Texture

We have to create the texture for our new armor, we can do this here or using another programs up to you.

\{% embed url="https://minecraft.novaskin.me/resourcepacks#default/assets/minecraft/textures/models/armor" %\}

What you have to create is the custom armor using diamond files, so in this case, this will be the ones used

We can download them clicking on Save, then download, and right click the image to save it

Having something like this

Well, now we have our armor textures, perfect ! Now let's create the texture pack

## Step 2: Create the Texture Pack Structure

Create the following folder structure for your texture pack:

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁trims
                    - 📁models
                        - 📁armor
                            - <Here we will place our images>

```

## Step 3: Name Your Texture Files

Choose which armor trim to replace. Available trims include:
- coast, dune, eye, host, raiser, rib, sentry, shaper, silence, snout, spire, tide, vex, ward, wayfinder, wild

For this example, we'll replace the **coast** trim.

### File Naming Convention:
- `coast.png` - Helmet, chestplate, and boots texture
- `coast_leggings.png` - Leggings texture

Place these files in the armor folder:

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁trims
                    - 📁models
                        - 📁armor
                            - 📷coast.png
                            - 📷coast_leggings.png
```

## Step 4: Apply the Trim in Minecraft

1. Load your texture pack in Minecraft
2. Get any armor piece (diamond armor recommended)
3. Apply the **coast** trim using a Smithing Table
4. Your custom armor texture will appear!

## Step 5: Create ExecutableItem with Custom Armor

Now configure your ExecutableItem to use the custom armor:

```yaml
material: DIAMOND_CHESTPLATE
name: '&6&lCustom Legendary Armor'
lore:
- '&7Epic custom armor'

armorTrim:
  material: QUARTZ  # Trim material (color)
  pattern: COAST    # The trim we replaced
```

:::tip
You can replace multiple trims to have multiple custom armor sets! Each trim replacement gives you one new custom armor design.
:::

## Available Armor Trims

Here are all 16 armor trims you can replace (1.20+):

| Trim Name | Location | Notes |
|-----------|----------|-------|
| coast | End City | Common in End |
| dune | Desert Temple | Desert biome |
| eye | Stronghold | Stronghold library |
| host | Trail Ruins | Archaeology |
| raiser | Trail Ruins | Archaeology |
| rib | Nether Fortress | Nether |
| sentry | Pillager Outpost | Overworld |
| shaper | Trail Ruins | Archaeology |
| silence | Ancient City | Deep Dark |
| snout | Bastion Remnant | Nether |
| spire | End City | Tall structures |
| tide | Ocean Monument | Ocean |
| vex | Woodland Mansion | Rare |
| ward | Ancient City | Deep Dark |
| wayfinder | Trail Ruins | Archaeology |
| wild | Jungle Temple | Jungle |

Choose trims you don't use often to replace with custom armor!

## Related Documentation

- [Custom Textures 1.21+](/docs/executableitems/questions-or-guides/custom-textures/custom-texture-1.21+)
- [Armor Trim Configuration](/docs/executableitems/configurations/item-configuration/item-features#armor-trim)

## Example Texture Pack

{% file src="../img/texture.zip" %}
