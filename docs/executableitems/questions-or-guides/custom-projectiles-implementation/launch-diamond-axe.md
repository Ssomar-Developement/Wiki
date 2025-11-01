# Launch Diamond Axe

This tutorial covers the basics of creating a throwable diamond axe using ExecutableItems and SCore's Custom Projectiles system. This guide focuses specifically on the launching mechanic. For advanced features like Thor-style lightning, piercing enemies, or making the axe return to you, you'll need to build upon this foundation using additional commands and activators.

## Overview

To create a throwable diamond axe, you'll need:
1. A **Custom Projectile** (SCore) - handles the visual and physics
2. An **ExecutableItem** (EI) - triggers the projectile launch

## Step 1: Create the Projectile

First, create a custom projectile using SCore:

```bash
/score projectiles-create axe
```

### Configure the Projectile

When configuring your projectile:

- **Projectile Type**: Choose `SNOWBALL` (most commonly used for item projectiles)
- **Visual Item**: Set to `DIAMOND_AXE`

:::info Why Snowball?
Only certain projectile types support custom visual items. Snowball is the most reliable choice for displaying custom items while maintaining good physics behavior.
:::

## Step 2: Create the ExecutableItem

Create a new ExecutableItem to serve as the throwable axe:

```bash
/ei create diamondaxe
```

Configure the basic properties:
- **Material**: `DIAMOND_AXE`
- **Display Name**: Your choice (e.g., `&6Throwable Axe`)
- **Lore**: Add descriptive text about the throwing ability

### Configure the Activator

Add a `PLAYER_RIGHT_CLICK` activator to trigger the throw:

```yaml
activators:
  throw_axe:
    activators:
    - PLAYER_RIGHT_CLICK

    commands:
    - "LAUNCH axe 1.5 true true true"
```

### LAUNCH Command Explained

The `LAUNCH` command syntax:
```
LAUNCH <projectile_id> <speed> <gravity> <bounce> <remove_on_hit>
```

- `axe` - The projectile ID you created
- `1.5` - Launch speed (adjust for distance)
- `true` - Enable gravity
- `true` - Enable bounce off blocks
- `true` - Remove projectile on entity hit

:::tip
For detailed LAUNCH command options, see [LAUNCH Command Documentation](/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
:::

## Step 3: Test Your Axe

1. Save both the projectile (`/score projectiles-save`) and item (`/ei save`)
2. Get the item: `/ei give <your_name> diamondaxe`
3. Right-click to throw the axe

## Premium Enhancement Examples

With the Premium version, you can add advanced features:

### Add Particle Trail

```yaml
commands:
- "LAUNCH axe 1.5 true true true"
- "PARTICLE FLAME 50 0.1 %projectile_x% %projectile_y% %projectile_z% %world%"
```

### Add Sound Effects

```yaml
commands:
- "LAUNCH axe 1.5 true true true"
- "PLAYSOUND ENTITY_PLAYER_ATTACK_SWEEP 1 1"
```

### Make Axe Disappear on Throw

```yaml
activators:
  throw_axe:
    activators:
    - PLAYER_RIGHT_CLICK

    commands:
    - "LAUNCH axe 1.5 true true true"
    - "REMOVESLOT %slot%"  # Removes axe from inventory
```

### Add Lightning Effect (Thor Style)

```yaml
# In your PROJECTILE configuration (not the item):
activators:
  on_hit_entity:
    activators:
    - PROJECTILE_HIT_ENTITY

    commands:
    - "STRIKE_LIGHTNING %projectile_x% %projectile_y% %projectile_z% %world%"
    - "DAMAGE 10 %victim%"
```

## Advanced Ideas

Here are some concepts you can explore by combining various commands:

- **Axe Return**: Use `TELEPORT_ITEM` after a delay to bring the axe back to you
- **Piercing**: Configure the projectile to not remove on entity hit and add multi-target damage
- **Block Embedding**: Use `SETBLOCK` commands when the projectile hits a block
- **Cooldown**: Add `useCooldown` feature to prevent spam throwing
- **Durability Cost**: Use `DAMAGE_ITEM` to make the axe lose durability when thrown

## Troubleshooting

### Axe Doesn't Launch

- Verify the projectile ID matches exactly: `/score projectiles-list`
- Check that the projectile is saved: `/score projectiles-save`
- Ensure LAUNCH command syntax is correct

### Visual Item Not Showing

- Only snowball, egg, and ender pearl projectiles support visual items reliably
- Make sure "Visual Item" is set in the projectile configuration

### Axe Launches Sideways

- Adjust the gravity parameter in LAUNCH command
- Try different projectile types (ARROW for straighter trajectory)

## Related Documentation

- [Custom Projectiles System](/docs/tools-for-all-plugins-score/custom-projectiles)
- [LAUNCH Command](/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
- [PLAYER_RIGHT_CLICK Activator](/docs/executableitems/configurations/activator-configuration/list-of-the-activators#player_right_click)
- [Projectile Activators](/docs/tools-for-all-plugins-score/custom-projectiles#projectile-activators)

## Example Files

For complete working examples, check the default items:
- Premium_Thor_Axe (if available in default pack)
- Any projectile-based weapons in `/ei show`
