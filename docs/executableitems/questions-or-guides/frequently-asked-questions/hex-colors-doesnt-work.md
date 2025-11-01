# HEX Colors Don't Work

## Problem

You're trying to use HEX colors in your ExecutableItem but they're not displaying correctly or showing as plain text instead of colors.

**Example Issues:**
- HEX codes showing as literal text: `&#FF5733Hello` instead of colored text
- Colors not working in item names or lore
- HEX colors work in chat but not in items

## What Are HEX Colors?

HEX colors allow you to use any RGB color in Minecraft (16.7 million colors) instead of being limited to the 16 vanilla color codes.

**Standard Color Codes (16 colors):**
- `&c` = Red
- `&6` = Gold
- `&e` = Yellow
- `&a` = Green
- `&b` = Aqua
- `&9` = Blue
- etc.

**HEX Colors (16.7 million colors):**
- `&#FF5733` = Custom orange
- `&#00FF00` = Pure green
- `&#9B59B6` = Purple
- Any RGB color you want!

## Version Requirements

:::warning Minecraft Version Required
HEX colors require **Minecraft 1.16+** (Java Edition)

Servers running 1.15.2 or older cannot display HEX colors.
:::

## Correct HEX Color Format

### Basic Format

The correct format for HEX colors in ExecutableItems is:

```
&#RRGGBB
```

**Components:**
- `&` - Ampersand (color code indicator)
- `#` - Hash symbol (indicates HEX)
- `RRGGBB` - Six hexadecimal digits (00-FF for Red, Green, Blue)

### Examples

```yaml
name: '&#FF5733Hello World'  # Orange text
name: '&#FFD700Golden Sword'  # Gold color
name: '&#9B59B6Magic Staff'  # Purple

lore:
- '&#00FF00This is bright green'
- '&#0080FFThis is blue'
- '&#FF1493This is pink'
```

## Common Mistakes

### Mistake 1: Missing Hash Symbol

```yaml
# ❌ Wrong
name: '&FF5733Text'

# ✅ Correct
name: '&#FF5733Text'
```

### Mistake 2: Wrong Hash Position

```yaml
# ❌ Wrong
name: '#&FF5733Text'

# ✅ Correct
name: '&#FF5733Text'
```

### Mistake 3: Incorrect HEX Length

```yaml
# ❌ Wrong (too short)
name: '&#F00Text'

# ❌ Wrong (too long)
name: '&#FF00001Text'

# ✅ Correct (exactly 6 digits)
name: '&#FF0000Text'
```

### Mistake 4: Invalid HEX Characters

HEX only uses: `0-9` and `A-F` (case insensitive)

```yaml
# ❌ Wrong (G, H, Z are not valid HEX)
name: '&#GGHHZZText'

# ✅ Correct
name: '&#AABBCC Text'
```

### Mistake 5: Uppercase X Instead of Hash

```yaml
# ❌ Wrong
name: '&XFF5733Text'

# ✅ Correct
name: '&#FF5733Text'
```

## Solution 1: Use Correct Format

Make sure you're using the correct HEX format:

```yaml
name: '&#FF5733Custom Item Name'
lore:
- '&#9B59B6First line in purple'
- '&#00FF00Second line in green'
- '&#FFD700Third line in gold'
```

## Solution 2: BRUT_HEX for Commands

When using HEX colors in **commands** (like SENDMESSAGE), you need to use `BRUT_HEX` placeholder:

### Why BRUT_HEX?

Some commands process color codes differently. BRUT_HEX ensures HEX colors are converted properly.

### When to Use BRUT_HEX

Use `BRUT_HEX` in:
- `SENDMESSAGE` commands
- `ACTIONBAR` commands
- `TITLE` and `SUBTITLE` commands
- Any command that sends text to players

### BRUT_HEX Syntax

```yaml
activators:
  activator1:
    activators:
    - PLAYER_RIGHT_CLICK
    commands:
    # Format: BRUT_HEX{RRGGBB:Text}
    - "SENDMESSAGE BRUT_HEX{FF5733:This text is orange!}"
    - "SENDMESSAGE BRUT_HEX{9B59B6:This is purple} and this is default"
```

### Multiple HEX Colors in One Message

```yaml
commands:
  - "SENDMESSAGE BRUT_HEX{FF0000:Red} BRUT_HEX{00FF00:Green} BRUT_HEX{0000FF:Blue}"
  - "ACTIONBAR BRUT_HEX{FFD700:Gold text here}"
  - "TITLE BRUT_HEX{FF1493:Pink Title} <+> SUBTITLE BRUT_HEX{00FFFF:Cyan Subtitle}"
```

## Complete Examples

### Example 1: HEX in Item Name/Lore

```yaml
name: '&#FF5733&lLegendary Sword'
material: DIAMOND_SWORD
lore:
- '&#9B59B6Forged in ancient fires'
- '&#FFD700+50% Damage'
- '&#00FF00Special Ability: Lightning Strike'
- ''
- '&#808080Rarity: &#FF1493Mythic'
```

### Example 2: BRUT_HEX in Commands

```yaml
name: '&#FF5733Magic Wand'
material: STICK

activators:
  activator1:
    activators:
    - PLAYER_RIGHT_CLICK
    commands:
    - "SENDMESSAGE BRUT_HEX{9B59B6:✦ Magic activated!}"
    - "ACTIONBAR BRUT_HEX{00FFFF:Mana: 100/100}"
    - "PARTICLE SPELL_WITCH 1 0.5 0.5"
```

### Example 3: Gradient Effect (Multiple HEX)

```yaml
name: '&#FF0000R&#FF7F00a&#FFFF00i&#00FF00n&#0000FFb&#8B00FFo&#FF00FFw'
# Creates a rainbow gradient effect across the word
```

### Example 4: Mixed Standard and HEX Colors

```yaml
name: '&l&#FFD700Golden &r&#FF5733Flame &r&7Sword'
lore:
- '&7This weapon combines:'
- '  &#FFD700▸ Golden power'
- '  &#FF5733▸ Flame energy'
- ''
- '&e&lRARE WEAPON'
```

## Combining Format Codes with HEX

You can use formatting codes with HEX colors:

**Format Codes:**
- `&l` - Bold
- `&o` - Italic
- `&n` - Underline
- `&m` - Strikethrough
- `&k` - Obfuscated
- `&r` - Reset

**Examples:**

```yaml
# Bold HEX text
name: '&l&#FF5733Bold Orange Text'

# Italic HEX text
name: '&o&#9B59B6Italic Purple Text'

# Bold + Italic
name: '&l&o&#FFD700Bold Italic Gold'

# HEX must come after format codes
name: '&l&#FF5733Text'  # ✅ Correct
name: '&#FF5733&lText'  # ⚠️ May not work correctly
```

## Troubleshooting

### Colors Show as Plain Text

If you see `&#FF5733Hello` instead of colored text:

1. **Check Minecraft version** - Must be 1.16+
2. **Verify server version** - Server must support HEX colors
3. **Check format** - Must be `&#` followed by 6 HEX digits
4. **For commands** - Use `BRUT_HEX{RRGGBB:Text}` format

### Colors Work in Chat But Not Items

This usually means you need `BRUT_HEX` for commands:

```yaml
# ❌ Wrong - for commands
- "SENDMESSAGE &#FF5733Hello"

# ✅ Correct - for commands
- "SENDMESSAGE BRUT_HEX{FF5733:Hello}"
```

For item names/lore, regular `&#` format is correct:

```yaml
# ✅ Correct - for item properties
name: '&#FF5733Item Name'
lore:
- '&#9B59B6Lore line'
```

### Colors Don't Match Expected

**Check your HEX code:**
1. Use a color picker tool to get exact HEX values
2. Verify you copied all 6 digits
3. Make sure no spaces in HEX code

**Useful color picker sites:**
- [HTML Color Codes](https://htmlcolorcodes.com/)
- [Color Hex](https://www.color-hex.com/)
- [Coolors](https://coolors.co/)

### Some Colors Work, Others Don't

1. **Verify HEX format** - All must use `&#RRGGBB`
2. **Check for typos** - Easy to mistype HEX codes
3. **Test minimal example** - Start simple and add complexity

## HEX Color Reference

### Common HEX Colors

| Color Name | HEX Code | Example |
|------------|----------|---------|
| Red | `&#FF0000` | `&#FF0000Red Text` |
| Orange | `&#FF5733` | `&#FF5733Orange Text` |
| Yellow | `&#FFFF00` | `&#FFFF00Yellow Text` |
| Lime | `&#00FF00` | `&#00FF00Lime Text` |
| Green | `&#008000` | `&#008000Green Text` |
| Cyan | `&#00FFFF` | `&#00FFFF Cyan Text` |
| Blue | `&#0000FF` | `&#0000FFBlue Text` |
| Purple | `&#9B59B6` | `&#9B59B6Purple Text` |
| Magenta | `&#FF00FF` | `&#FF00FFMagenta Text` |
| Pink | `&#FF1493` | `&#FF1493Pink Text` |
| Gold | `&#FFD700` | `&#FFD700Gold Text` |
| White | `&#FFFFFF` | `&#FFFFFFWhite Text` |
| Light Gray | `&#D3D3D3` | `&#D3D3D3Light Gray` |
| Gray | `&#808080` | `&#808080Gray Text` |
| Dark Gray | `&#404040` | `&#404040Dark Gray` |
| Black | `&#000000` | `&#000000Black Text` |

## Summary

**For Item Names and Lore:**
```yaml
name: '&#RRGGBBText'
lore:
- '&#RRGGBBLore line'
```

**For Commands (SENDMESSAGE, ACTIONBAR, etc.):**
```yaml
commands:
  - "SENDMESSAGE BRUT_HEX{RRGGBB:Text}"
```

**Requirements:**
- Minecraft 1.16+ (Java Edition)
- Correct format: `&#` + 6 HEX digits
- Use BRUT_HEX for commands

**Most Common Issues:**
1. Missing `#` symbol → Should be `&#FF5733`
2. Using `&#` in commands → Should use `BRUT_HEX{FF5733:Text}`
3. Wrong HEX length → Must be exactly 6 digits
4. Server version too old → Requires 1.16+
