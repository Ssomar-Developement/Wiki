# HEX COLORS doesn't work

HEX COLORS are supported by ExecutableItems so if it doesn't work is because of something, either you typed an incorrect value (it has happened on discord forums, so yea, it is a possibility) or you are adding correctly but you would need to use BRUT_HEX on your command:

## Common Issues and Solutions

### Issue 1: Incorrect HEX Format

**Problem:** Your hex color isn't displaying correctly.

**Solution:** Make sure you're using the correct format:
- Correct: `#FF5733` or `&#FF5733`
- Incorrect: `FF5733` (missing # or &)
- Incorrect: `#FF57` (incomplete - must be 6 characters)

### Issue 2: Using HEX in Commands

**Problem:** HEX colors work in display name/lore but not in custom commands.

**Solution:** Use `BRUT_HEX` for commands that send colored messages:

```yaml
commands:
- "SENDMESSAGE BRUT_HEX:&#FF5733This text will be orange!"
- "ACTIONBAR BRUT_HEX:&#00FF00This text will be green!"
```

**Why BRUT_HEX?**
- Normal HEX codes are parsed when the item is created (for lore/names)
- Commands execute at runtime and need `BRUT_HEX:` prefix to parse colors dynamically

### Issue 3: Version Requirements

**Problem:** HEX colors aren't working at all.

**Solution:** Check your Minecraft version:
- HEX colors require **Minecraft 1.16+**
- If you're on 1.15 or below, hex colors are not supported by the game
- Use legacy color codes instead (`&a`, `&c`, etc.)

### Issue 4: Server Software

**Problem:** HEX colors work in single-player but not on your server.

**Solution:** Make sure your server software supports RGB/HEX colors:
- ✅ **Supported:** Paper, Purpur, Pufferfish (1.16+)
- ⚠️ **Limited:** Spigot (may need plugins)
- ❌ **Not Supported:** Bukkit, CraftBukkit (outdated)

## Examples

### Display Name with HEX Color

```yaml
displayName: '&#FF5733&lFlaming Sword'
```

### Lore with Multiple HEX Colors

```yaml
lore:
- '&#FFD700Golden Text'
- '&#00FFFFCyan Text'
- '&#FF69B4Pink Text'
```

### Custom Command with BRUT_HEX

```yaml
activators:
  activator1:
    activators:
    - PLAYER_ALL_CLICK
    commands:
    - "SENDMESSAGE BRUT_HEX:&#FF5733&lYou clicked the item!"
    - "ACTIONBAR BRUT_HEX:&#00FF00Success!"
```

### Gradient Effect (Manual)

```yaml
lore:
- '&#FF0000R&#FF3300a&#FF6600i&#FF9900n&#FFCC00b&#FFFF00o&#CCFF00w &#99FF00T&#66FF00e&#33FF00x&#00FF00t'
```

## Troubleshooting Checklist

- [ ] Minecraft version is 1.16 or higher
- [ ] HEX code is 6 characters (e.g., `#FF5733`)
- [ ] Using `BRUT_HEX:` prefix for commands
- [ ] Server software supports RGB colors
- [ ] No spaces in hex code
- [ ] Using `&#` not just `#` for color codes

## Related Documentation

- [How to use vanilla commands](/docs/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)
- [Custom Commands - SENDMESSAGE](/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
- [Item Features - Display Name](/docs/executableitems/configurations/item-configuration/item-features#display-name)

## Still Not Working?

If you've tried everything above and HEX colors still don't work:

1. Test with a simple example first (just displayName with one hex color)
2. Check your server console for any color-related errors
3. Ask for help on the [Discord](https://discord.gg/TchenY4) with:
   - Your Minecraft version
   - Your server software and version
   - The exact YAML configuration you're using
   - Whether it works for display name but not commands (or vice versa)
