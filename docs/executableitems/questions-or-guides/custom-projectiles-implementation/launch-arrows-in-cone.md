# Launch Arrows in Cone

This tutorial shows you how to create an item that launches multiple projectiles in a cone pattern, perfect for shotgun-style weapons or area attacks.

## Overview

We'll create a blaze powder that launches 5 arrows in a cone pattern when right-clicked. The arrows will spread at different angles to create a wide attack area.

## Step 1: Create the Projectile

The first step is creating the custom projectile using SCore:

```bash
/score projectiles-create cone
```

### Configure the Projectile

In the projectile editor, configure these settings:
- **Projectile Type**: ARROW
- **Invisible**: true (optional - makes arrow model invisible)
- **Silent**: true (optional - removes sound)
- **Particles**: Add particles in the particle editor to make arrows visible
- **Gravity**: Enable if you want realistic arrow physics

Once configured, **save the projectile** with the save button.

## Step 2: Create the Launcher Item

Create the ExecutableItem that will launch the projectiles:

```bash
/ei create cone_launcher
```

### Configure the Item

Set these basic properties:
- **Material**: BLAZE_POWDER (or any material you prefer)
- **Display Name**: Your choice (e.g., `&6Arrow Cone Launcher`)
- **Lore**: Add descriptive text about the cone attack

## Step 3: Add the Activator

### Create PLAYER_RIGHT_CLICK Activator

Since we want the cone to launch when right-clicking, add a `PLAYER_RIGHT_CLICK` activator.

### Add LAUNCH Commands

The key to creating a cone pattern is launching multiple projectiles at different angles. Add these commands to your activator:

```yaml
commands:
- "LAUNCH cone 20 0"
- "LAUNCH cone 10 0"
- "LAUNCH cone 0 0"
- "LAUNCH cone -10 0"
- "LAUNCH cone -20 0"
```

### How the Cone Works

The LAUNCH command format for angles is:
```
LAUNCH <projectile_id> <horizontal_angle> <vertical_angle>
```

In our example:
- `LAUNCH cone 20 0` - Projectile angled 20° to the right
- `LAUNCH cone 10 0` - Projectile angled 10° to the right
- `LAUNCH cone 0 0` - Projectile straight ahead
- `LAUNCH cone -10 0` - Projectile angled 10° to the left
- `LAUNCH cone -20 0` - Projectile angled 20° to the left

This creates a horizontal cone spreading 40° total (20° left to 20° right).

:::tip LAUNCH Command Documentation
For complete details on the LAUNCH command and all its parameters, see the [LAUNCH Command Documentation](/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch).
:::

## Step 4: Test Your Cone Launcher

1. **Save everything**:
   - Save the activator
   - Save the ExecutableItem
2. **Get the item**: `/ei give <your_name> cone_launcher`
3. **Test it**: Right-click while holding the item

You should see 5 projectiles launch in a cone pattern!

## Customization Ideas

### Adjust the Cone Width

Change the angle values to make a wider or narrower cone:

**Wider cone (60° spread)**:
```yaml
- "LAUNCH cone 30 0"
- "LAUNCH cone 15 0"
- "LAUNCH cone 0 0"
- "LAUNCH cone -15 0"
- "LAUNCH cone -30 0"
```

**Narrower cone (20° spread)**:
```yaml
- "LAUNCH cone 10 0"
- "LAUNCH cone 5 0"
- "LAUNCH cone 0 0"
- "LAUNCH cone -5 0"
- "LAUNCH cone -10 0"
```

### Add More Projectiles

Launch more arrows for denser coverage:

```yaml
- "LAUNCH cone 30 0"
- "LAUNCH cone 20 0"
- "LAUNCH cone 10 0"
- "LAUNCH cone 0 0"
- "LAUNCH cone -10 0"
- "LAUNCH cone -20 0"
- "LAUNCH cone -30 0"
```

### Add Vertical Spread

Create a 3D cone by adding vertical angles:

```yaml
- "LAUNCH cone 20 10"   # Right + Up
- "LAUNCH cone 10 5"    # Slight right + up
- "LAUNCH cone 0 0"     # Center
- "LAUNCH cone -10 5"   # Slight left + up
- "LAUNCH cone -20 10"  # Left + Up
- "LAUNCH cone 20 -10"  # Right + Down
- "LAUNCH cone -20 -10" # Left + Down
```

### Add Sound Effect

```yaml
commands:
- "PLAYSOUND ENTITY_ARROW_SHOOT 1 1"
- "LAUNCH cone 20 0"
- "LAUNCH cone 10 0"
- "LAUNCH cone 0 0"
- "LAUNCH cone -10 0"
- "LAUNCH cone -20 0"
```

### Add Cooldown

Prevent spam by adding a cooldown:

```yaml
activators:
  cone_launcher:
    activators:
    - PLAYER_RIGHT_CLICK

    cooldown: 3

    commands:
    - "LAUNCH cone 20 0"
    - "LAUNCH cone 10 0"
    - "LAUNCH cone 0 0"
    - "LAUNCH cone -10 0"
    - "LAUNCH cone -20 0"
```

## Premium Features

With ExecutableItems Premium, you can add advanced effects:

### Fire Trail on Impact

Make projectiles set blocks/entities on fire:

```yaml
# In the projectile configuration (not the item)
activators:
  on_hit_block:
    activators:
    - PROJECTILE_HIT_BLOCK

    commands:
    - "SETBLOCK FIRE %block_x% %block_y_int_+1% %block_z% %block_world%"

  on_hit_entity:
    activators:
    - PROJECTILE_HIT_ENTITY

    commands:
    - "BURN 100 %victim%"
    - "PARTICLE FLAME 20 0.3 %victim_x% %victim_y% %victim_z% %world%"
```

### Explosive Arrows

Add explosion effects on impact:

```yaml
# In projectile activator
commands:
- "EXPLOSION 2 %projectile_x% %projectile_y% %projectile_z% %world% false false"
- "PARTICLE EXPLOSION_HUGE 1 0 %projectile_x% %projectile_y% %projectile_z% %world%"
```

### Trail Particles

Add a particle trail while projectiles fly:

Configure in the projectile's particle editor or use a LOOP activator with projectile placeholders.

## Troubleshooting

### Arrows Don't Spread

- ✅ Check angle values in LAUNCH commands are different
- ✅ Verify you're using the correct syntax: `LAUNCH <id> <h_angle> <v_angle>`
- ✅ Make sure all 5 LAUNCH commands are present

### Some Arrows Don't Launch

- ✅ Verify projectile ID matches: `/score projectiles-list`
- ✅ Check projectile is saved: `/score projectiles-save`
- ✅ Look for typos in projectile ID

### Cone Points Wrong Direction

- ✅ Ensure you're looking in the desired direction when right-clicking
- ✅ Check the projectile doesn't have weird default rotation settings

## Complete Example

Here's a full working configuration:

```yaml
material: BLAZE_POWDER
displayName: '&6&lArrow Cone Launcher'
lore:
- '&7Right-click to launch 5 arrows'
- '&7in a cone pattern'
- '&e40° spread angle'

activators:
  cone_attack:
    activators:
    - PLAYER_RIGHT_CLICK

    cooldown: 2

    commands:
    - "PLAYSOUND ENTITY_ARROW_SHOOT 1.5 1"
    - "LAUNCH cone 20 0"
    - "LAUNCH cone 10 0"
    - "LAUNCH cone 0 0"
    - "LAUNCH cone -10 0"
    - "LAUNCH cone -20 0"
    - "SENDMESSAGE &eArrow cone launched!"
```

## Related Documentation

- [Custom Projectiles System](/docs/tools-for-all-plugins-score/custom-projectiles)
- [LAUNCH Command](/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
- [PLAYER_RIGHT_CLICK Activator](/docs/executableitems/configurations/activator-configuration/list-of-the-activators#player_right_click)
- [Creating Basic Projectiles](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/creating-a-basic-projectile)

## Need Help?

If you have questions or want to share your cone launcher creations, join the [ExecutableItems Discord](https://discord.gg/TcDxb2B) and ask in the support channel!
