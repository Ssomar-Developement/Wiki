# How to Change Particle Vanilla Command Color

## Quick Answer

To change particle colors in vanilla Minecraft commands, use the **DUST particle** with RGB color values.

**Format:**
```
/particle dust <red> <green> <blue> <size> <x> <y> <z>
```

## Using DUST Particle for Custom Colors

The DUST particle type allows you to specify any RGB color for particles.

### Basic Syntax

```yaml
commands:
  - "execute at %player% run particle dust <R> <G> <B> <size> ~ ~ ~ <count> <spread_x> <spread_y> <spread_z> <speed>"
```

**Parameters:**
- `<R>` - Red value (0.0 to 1.0)
- `<G>` - Green value (0.0 to 1.0)
- `<B>` - Blue value (0.0 to 1.0)
- `<size>` - Particle size (0.01 to 4.0)
- `~` - Coordinates (relative to player)
- `<count>` - Number of particles
- `<spread>` - Spread in each direction
- `<speed>` - Particle motion speed

## Color Examples

### Red Particles

```yaml
activators:
  activator1:
    activators:
    - PLAYER_RIGHT_CLICK
    commands:
    # Bright red particles
    - "execute at %player% run particle dust 1.0 0.0 0.0 1.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"
```

**Result:** Bright red particles at player's position

### Blue Particles

```yaml
commands:
  # Cyan/aqua blue
  - "execute at %player% run particle dust 0.0 0.8 1.0 1.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"
```

### Purple Particles

```yaml
commands:
  # Magenta/purple
  - "execute at %player% run particle dust 0.8 0.0 1.0 1.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"
```

### Green Particles

```yaml
commands:
  # Bright green
  - "execute at %player% run particle dust 0.0 1.0 0.0 1.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"
```

### Gold/Orange Particles

```yaml
commands:
  # Gold color
  - "execute at %player% run particle dust 1.0 0.8 0.0 1.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"
```

### White Particles

```yaml
commands:
  # Pure white
  - "execute at %player% run particle dust 1.0 1.0 1.0 1.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"
```

## Complete ExecutableItem Example

```yaml
name: '&#9B59B6&lMagic Wand'
material: STICK
lore:
- '&7Right click for purple particles'
- '&7Left click for red particles'

activators:
  purple_particles:
    activators:
    - PLAYER_RIGHT_CLICK
    commands:
    # Purple particles in circle
    - "execute at %player% run particle dust 0.8 0.0 1.0 2.0 ~ ~1 ~ 20 1.0 0.5 1.0 0"
    - "PLAYSOUND BLOCK_ENCHANTMENT_TABLE_USE 1.0 1.5"

  red_particles:
    activators:
    - PLAYER_LEFT_CLICK
    commands:
    # Red particles with larger spread
    - "execute at %player% run particle dust 1.0 0.0 0.0 1.5 ~ ~1 ~ 30 1.5 1.5 1.5 0.1"
    - "PLAYSOUND ENTITY_BLAZE_SHOOT 1.0 0.8"
```

## RGB Color Reference

### Common RGB Values (0.0 to 1.0 scale)

| Color | R | G | B | Preview Command |
|-------|---|---|---|-----------------|
| Red | 1.0 | 0.0 | 0.0 | `dust 1.0 0.0 0.0` |
| Orange | 1.0 | 0.5 | 0.0 | `dust 1.0 0.5 0.0` |
| Yellow | 1.0 | 1.0 | 0.0 | `dust 1.0 1.0 0.0` |
| Lime | 0.5 | 1.0 | 0.0 | `dust 0.5 1.0 0.0` |
| Green | 0.0 | 1.0 | 0.0 | `dust 0.0 1.0 0.0` |
| Cyan | 0.0 | 1.0 | 1.0 | `dust 0.0 1.0 1.0` |
| Blue | 0.0 | 0.0 | 1.0 | `dust 0.0 0.0 1.0` |
| Purple | 0.5 | 0.0 | 1.0 | `dust 0.5 0.0 1.0` |
| Magenta | 1.0 | 0.0 | 1.0 | `dust 1.0 0.0 1.0` |
| Pink | 1.0 | 0.4 | 0.7 | `dust 1.0 0.4 0.7` |
| White | 1.0 | 1.0 | 1.0 | `dust 1.0 1.0 1.0` |
| Gray | 0.5 | 0.5 | 0.5 | `dust 0.5 0.5 0.5` |
| Black | 0.0 | 0.0 | 0.0 | `dust 0.0 0.0 0.0` |

## Converting HEX to RGB

If you have a HEX color code (like `#FF5733`), convert it to RGB values between 0.0 and 1.0:

1. **Get HEX values:**
   - `#FF5733` → R=FF, G=57, B=33

2. **Convert to decimal:**
   - R = 255, G = 87, B = 51

3. **Divide by 255:**
   - R = 255/255 = 1.0
   - G = 87/255 = 0.34
   - B = 51/255 = 0.20

4. **Use in command:**
   ```yaml
   - "execute at %player% run particle dust 1.0 0.34 0.20 1.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"
   ```

**Online converters:**
- [RapidTables RGB Calculator](https://www.rapidtables.com/convert/color/hex-to-rgb.html)
- Just divide each value by 255

## Particle Size Guidelines

The `size` parameter controls how large each particle appears:

- `0.5` - Very small, subtle particles
- `1.0` - Standard size (good for most uses)
- `1.5` - Medium-large, visible particles
- `2.0` - Large particles (good for effects)
- `3.0` - Very large particles
- `4.0` - Maximum size

**Example with different sizes:**
```yaml
# Small red particles
- "execute at %player% run particle dust 1.0 0.0 0.0 0.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"

# Large red particles
- "execute at %player% run particle dust 1.0 0.0 0.0 3.0 ~ ~1 ~ 10 0.5 0.5 0.5 0"
```

## Troubleshooting

### Particles Not Showing

1. **Check RGB values** - Must be between 0.0 and 1.0
2. **Verify particle count** - Set count to at least 1
3. **Check coordinates** - Make sure `~ ~ ~` or valid coordinates
4. **Particle settings** - Players can disable particles in video settings

### Wrong Colors

- **RGB scale**: Remember Minecraft uses 0.0-1.0, not 0-255
- **Check decimal points**: `1.0` not just `1`
- **Verify values**: Make sure R, G, B are in correct order

### Particles Too Small/Large

- Adjust the size parameter (4th value after RGB)
- Range: 0.01 to 4.0
- Recommended: 1.0 to 2.0 for visibility

## Advanced: Particle Trails

Create particle trails following the player:

```yaml
activators:
  particle_trail:
    activators:
    - PLAYER_WALK
    - PLAYER_RUN
    - PLAYER_SPRINT
    commands:
    # Rainbow trail effect
    - "execute at %player% run particle dust 1.0 0.0 0.0 1.0 ~ ~0.1 ~ 1 0.1 0.1 0.1 0"
    cooldown:
      value: 0.5
```

## Related Documentation

For more advanced particle effects and additional information:

{% embed url="https://docs.ssomar.com/tools-for-all-plugins/general-questions-or-guides/utilities#dust-particle-cmd" %}

## Summary

**To change vanilla particle colors:**
1. Use `dust` particle type
2. Specify RGB values (0.0 to 1.0)
3. Set size (recommended: 1.0 to 2.0)

**Quick command format:**
```
execute at %player% run particle dust <R> <G> <B> <size> ~ ~1 ~ <count> 0.5 0.5 0.5 0
```

**Example:**
```yaml
# Purple particles
- "execute at %player% run particle dust 0.8 0.0 1.0 1.5 ~ ~1 ~ 10 0.5 0.5 0.5 0"
```
