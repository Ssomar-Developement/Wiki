# Custom Item Textures

:::info Premium Feature Required
Custom textures for ExecutableItems require **ExecutableItems Premium**.

[Get ExecutableItems Premium on SpigotMC](https://www.spigotmc.org/resources/custom-executable-items-premium.84441/)
:::

## What Are Custom Textures?

Custom textures allow you to change how your ExecutableItems look in-game without changing the base material.

**Examples:**
- Make a stick look like a magic wand
- Create custom swords with unique designs
- Design custom armor with special patterns
- Add glowing effects or animations

## Quick Start Guide

For detailed setup instructions, see the complete custom textures guide:

{% embed url="https://docs.ssomar.com/executableitems/questions-or-guides/premium-custom-textures" %}

## Requirements

### Plugin Requirements

- ✅ **ExecutableItems Premium** - Required for custom texture features
- ✅ **Server 1.14+** - Custom model data added in 1.14

### Resource Pack Requirements

- ✅ **Custom resource pack** - Players must download and enable it
- ✅ **Texture files** - Create or obtain custom .png textures
- ✅ **JSON models** - Define how textures display

## How It Works

### Basic Process

1. **Create texture file** (`.png` image)
2. **Create JSON model** file referencing texture
3. **Build resource pack** with both files
4. **Host resource pack** (server resource pack or manual download)
5. **Configure ExecutableItem** with `customModelData` value
6. **Players join** with resource pack enabled

### ExecutableItem Configuration

```yaml
name: '&6&lMagic Wand'
material: STICK

# Custom texture configuration
customModelData: 1  # Must match model JSON file
```

## Premium Verification

If you've purchased ExecutableItems Premium:

1. **Join Ssomar Discord**: [discord.gg/ssomar](https://discord.gg/ssomar)
2. **Go to #purchase-verification** channel
3. **Follow verification instructions**
4. **Get Premium role** and access to premium support

## Getting Help

### Before Asking for Help

Make sure you've checked:
- ✅ Complete custom textures guide (linked above)
- ✅ Video tutorials on premium custom textures
- ✅ Wiki documentation sections
- ✅ Common issues below

### Common Issues

#### Textures Not Showing

**Check these:**
1. **Premium verified**: ExecutableItems Premium installed and working
2. **Resource pack enabled**: Players have resource pack active
3. **Correct customModelData**: Value matches JSON model file
4. **Pack format**: Resource pack format matches Minecraft version
5. **File paths**: Textures and models in correct folders

#### Purple/Black Checkered Texture

This means texture file is missing:
- Verify texture file exists in resource pack
- Check file name matches JSON model reference
- Ensure file path is correct (`assets/minecraft/textures/...`)

#### Default Texture Showing

This means custom model data not applied:
- Verify `customModelData` is set in ExecutableItem config
- Check value matches JSON model predicate
- Reload ExecutableItems: `/ei reload`
- Get fresh item: `/ei give <item> 1`

### Discord Support

For premium texture support:

1. **Join Discord**: [discord.gg/ssomar](https://discord.gg/ssomar)
2. **Verify premium** in #purchase-verification (if not done)
3. **Ask in appropriate channel**:
   - #premium-support for premium members
   - #support for general questions
4. **Include this information**:
   - Minecraft version
   - ExecutableItems version
   - Resource pack format version
   - What you've already tried

## Related Documentation

- [Complete Custom Textures Guide](/docs/executableitems/questions-or-guides/premium-custom-textures) - Detailed setup instructions
- [Custom Textures 1.21+](/docs/executableitems/questions-or-guides/custom-textures/custom-texture-1.21) - Version-specific guide
- [Custom Model Data Feature](/docs/executableitems/configurations/item-configuration/item-features#custom-model-data) - Configuration reference

## Summary

**To use custom textures:**
1. ✅ Purchase ExecutableItems Premium
2. ✅ Create/obtain custom textures and models
3. ✅ Build resource pack
4. ✅ Configure `customModelData` in ExecutableItem
5. ✅ Players enable resource pack

**Need help?**
- Check complete guide (linked above)
- Watch video tutorials
- Ask in Discord after verification
