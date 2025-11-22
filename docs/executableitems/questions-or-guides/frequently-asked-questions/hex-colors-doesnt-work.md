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

**Problem:** HEX colors work in display name/lore but may require the tag BRUT_HEX in custom commands.

**Solution:** Use `BRUT_HEX` for commands that send colored messages:

```yaml
playerCommands:
- "SEND_MESSAGE &#FF5733This text will be orange!"
- "ACTIONBAR &#00FF00This text will be green! 20"
- "custom_command_from_another_plugin #00FF00This text will be green! BRUT_HEX"
```

**Why BRUT_HEX?**
- Some plugin requires to receive the brut hex code to send it correctly
- By default our plugins automatically replace it, so use BRUT_HEX to let the other plugin replace the codes.

### Issue 3: Version Requirements

**Problem:** HEX colors aren't working at all.

**Solution:** Check your Minecraft version:
- HEX colors require **Minecraft 1.16+**
- If you're on 1.15 or below, hex colors are not supported by the game
- Use legacy color codes instead (`&a`, `&c`, etc.)


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
    option: PLAYER_ALL_CLICK
    playerCommands:
    - "SEND_MESSAGE &#FF5733&lYou clicked the item!"
    - "ACTIONBAR &#00FF00Success! 20"
```

### Gradient Effect (Manual)

```yaml
lore:
- '&#FF0000R&#FF3300a&#FF6600i&#FF9900n&#FFCC00b&#FFFF00o&#CCFF00w &#99FF00T&#66FF00e&#33FF00x&#00FF00t'
```

## Related Documentation

- [How to use vanilla commands](/executableitems/questions-or-guides/frequently-asked-questions/how-to-use-vanilla-commands)
- [Custom Commands - SEND_MESSAGE](/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
- [Item Features - Display Name](/executableitems/configurations/item-configuration/item-features#display-name)