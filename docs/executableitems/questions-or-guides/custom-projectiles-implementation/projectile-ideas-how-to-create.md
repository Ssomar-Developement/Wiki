# Projectile Ideas - How to Create...?

## What is this page?

This page provides quick solutions to common projectile questions and implementation ideas. If you're trying to create a specific projectile effect and don't know how, check here first!

:::info
This is a **quick reference guide** for projectile implementations. For detailed tutorials on creating projectiles, see:
- [Creating a Basic Projectile](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/creating-a-basic-projectile)
- [Launch Arrows in Cone](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/launch-arrows-in-cone)
- [SCore Custom Projectiles](/docs/tools-for-all-plugins-score/custom-projectiles)
:::

## Projectile Lifecycle

### How to remove the projectile after hitting an entity?

Add activators `PROJECTILE_HIT_PLAYER` and `PROJECTILE_HIT_ENTITY` with command:

```yaml
commands:
- "minecraft:kill %projectile_uuid%"
```

**Alternative:** Use `REMOVE_PROJECTILE` command (SCore):
```yaml
commands:
- "REMOVE_PROJECTILE %projectile_uuid%"
```

### How to make projectile disappear after hitting a block?

Add activator `PROJECTILE_HIT_BLOCK`:

```yaml
activators:
  remove_on_block:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    - "minecraft:kill %projectile_uuid%"
```

### How to make projectile last only X seconds?

Use `DELAY` or `WAIT` command:

```yaml
activators:
  on_launch:
    activators:
    - PLAYER_LAUNCH_PROJECTILE
    commands:
    - "DELAY 100 minecraft:kill %projectile_uuid%"  # Remove after 5 seconds (100 ticks)
```

### How to make projectile bounce off entities?

Set in projectile configuration:
```yaml
onHitEntity:
- "VELOCITY %projectile_uuid% multiply:-1 y:0"  # Reverse direction
```

## Projectile Behavior

### How to create homing/tracking projectile?

Use `PROJECTILE_TRACK_ENTITY` in SCore projectile configuration:

```yaml
tracking:
  enabled: true
  range: 50
  speed: 0.2
```

**Or** use repeating commands to steer:
```yaml
activators:
  track_target:
    activators:
    - LOOP  # Requires loop activator
    cooldown: 0.1
    commands:
    - "PROJECTILE_VELOCITY %projectile_uuid% target:%nearestPlayer% speed:0.3"
```

### How to make projectile go through blocks?

In SCore projectile config:
```yaml
throughBlocks: true
```

**Or** detect block hit and teleport through:
```yaml
activators:
  phase_through:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    - "TELEPORT %add-x=1={block_x}% %block_y% %block_z% PROJECTILE %projectile_uuid%"
```

### How to make projectile pierce entities?

In SCore projectile config:
```yaml
piercing: 3  # Hits 3 entities before stopping
```

### How to make projectile explode mid-air?

Use timed explosion:
```yaml
activators:
  timed_explosion:
    activators:
    - PLAYER_LAUNCH_PROJECTILE
    commands:
    - "DELAY 60 EXPLOSION 3 true true %projectile_x% %projectile_y% %projectile_z% %world%"
    - "DELAY 60 minecraft:kill %projectile_uuid%"
```

### How to make projectile split into multiple projectiles?

```yaml
activators:
  split_on_hit:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    # Launch 8 projectiles in all directions
    - "LAUNCH fragment_projectile 20 0 PROJECTILE %projectile_uuid%"
    - "LAUNCH fragment_projectile -20 0 PROJECTILE %projectile_uuid%"
    - "LAUNCH fragment_projectile 0 20 PROJECTILE %projectile_uuid%"
    - "LAUNCH fragment_projectile 0 -20 PROJECTILE %projectile_uuid%"
    # ... more directions
    - "minecraft:kill %projectile_uuid%"
```

## Projectile Effects

### How to make projectile leave trail of particles?

In SCore projectile config:
```yaml
particles:
  trail:
    particle: FLAME
    amount: 5
    offset: 0.2
    speed: 0
```

### How to make projectile leave trail of blocks?

```yaml
activators:
  leave_trail:
    activators:
    - PROJECTILE_MOVE  # Triggers continuously
    cooldown: 0.2
    commands:
    - "SETBLOCK FIRE %round-down={projectile_x}% %round-down={projectile_y}% %round-down={projectile_z}% %world%"
```

### How to make projectile play sounds while flying?

```yaml
activators:
  flying_sound:
    activators:
    - PROJECTILE_MOVE
    cooldown: 0.5
    commands:
    - "PLAYSOUND ENTITY_FIREWORK_ROCKET_BLAST 0.5 1.5 %projectile_x% %projectile_y% %projectile_z% %world%"
```

### How to make projectile create particles when it hits?

```yaml
activators:
  impact_particles:
    activators:
    - PROJECTILE_HIT_ENTITY
    - PROJECTILE_HIT_BLOCK
    commands:
    - "PARTICLE EXPLOSION_LARGE 10 0.5 %projectile_x% %projectile_y% %projectile_z% %world%"
```

## Projectile Damage & Effects

### How to make projectile deal custom damage?

```yaml
activators:
  custom_damage:
    activators:
    - PROJECTILE_HIT_ENTITY
    commands:
    - "DAMAGE 20 %victim%"  # 20 damage (10 hearts)
```

### How to make projectile apply potion effects?

```yaml
activators:
  poison_on_hit:
    activators:
    - PROJECTILE_HIT_PLAYER
    commands:
    - "POTION_EFFECT POISON 100 1 %victim%"  # Poison II for 5 seconds
```

### How to make projectile heal instead of damage?

```yaml
activators:
  healing_projectile:
    activators:
    - PROJECTILE_HIT_PLAYER
    commands:
    - "HEAL 10 %victim%"  # Heal 5 hearts
    - "POTION_EFFECT REGENERATION 40 1 %victim%"
```

### How to make projectile set target on fire?

```yaml
activators:
  fire_on_hit:
    activators:
    - PROJECTILE_HIT_ENTITY
    commands:
    - "BURN 100 %victim%"  # 5 seconds of fire
```

### How to make projectile knockback entities?

```yaml
activators:
  knockback_hit:
    activators:
    - PROJECTILE_HIT_ENTITY
    commands:
    - "VELOCITY %victim% set:2 direction:FROM_PROJECTILE"  # Strong knockback away
```

## Advanced Projectile Ideas

### How to create lightning projectile?

```yaml
activators:
  lightning_strike:
    activators:
    - PROJECTILE_HIT_BLOCK
    - PROJECTILE_HIT_ENTITY
    commands:
    - "LIGHTNING %projectile_x% %projectile_y% %projectile_z% %world%"
    - "minecraft:kill %projectile_uuid%"
```

### How to create freezing projectile?

```yaml
activators:
  freeze_target:
    activators:
    - PROJECTILE_HIT_PLAYER
    commands:
    - "POTION_EFFECT SLOWNESS 100 4 %victim%"  # Extreme slowness
    - "POTION_EFFECT MINING_FATIGUE 100 2 %victim%"
    - "PARTICLE SNOW_SHOVEL 50 1 %victim_x% %victim_y% %victim_z% %world%"
    - "PLAYSOUND BLOCK_GLASS_BREAK 1 0.5"
```

### How to create teleportation projectile?

```yaml
activators:
  teleport_to_impact:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    - "TELEPORT %projectile_x% %add-y=1={projectile_y}% %projectile_z% PLAYER %launcher%"
    - "PARTICLE PORTAL 100 1 %projectile_x% %projectile_y% %projectile_z% %world%"
    - "PLAYSOUND ENTITY_ENDERMAN_TELEPORT 1 1"
```

### How to create grappling hook projectile?

```yaml
activators:
  grapple_pull:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    - "VELOCITY %launcher% velocity:3 direction:TO_PROJECTILE"  # Pull player to projectile
    - "DELAY 5 minecraft:kill %projectile_uuid%"
```

### How to create web-shooting projectile?

```yaml
activators:
  web_trap:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    - "SETBLOCK COBWEB %block_x% %add-y=1={block_y}% %block_z% %world%"
    - "SETBLOCK COBWEB %block_x% %add-y=2={block_y}% %block_z% %world%"
    - "DELAY 100 SETBLOCK AIR %block_x% %add-y=1={block_y}% %block_z% %world%"  # Remove after 5s
    - "DELAY 100 SETBLOCK AIR %block_x% %add-y=2={block_y}% %block_z% %world%"
```

### How to create area denial projectile?

```yaml
activators:
  poison_cloud:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    # Repeating area effect
    - "LOOP 10 20 AROUND distance:5 POTION_EFFECT POISON 20 1"  # 10 times, every second
    - "LOOP 10 20 PARTICLE SPELL_WITCH 30 2 %projectile_x% %projectile_y% %projectile_z% %world%"
```

### How to create cluster bomb projectile?

```yaml
activators:
  cluster_bomb:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    # Launch mini explosives in all directions
    - "DELAY 10 LAUNCH mini_bomb 45 0 PROJECTILE %projectile_uuid%"
    - "DELAY 10 LAUNCH mini_bomb 90 0 PROJECTILE %projectile_uuid%"
    - "DELAY 10 LAUNCH mini_bomb 135 0 PROJECTILE %projectile_uuid%"
    - "DELAY 10 LAUNCH mini_bomb 180 0 PROJECTILE %projectile_uuid%"
    - "DELAY 10 LAUNCH mini_bomb 225 0 PROJECTILE %projectile_uuid%"
    - "DELAY 10 LAUNCH mini_bomb 270 0 PROJECTILE %projectile_uuid%"
    - "DELAY 10 LAUNCH mini_bomb 315 0 PROJECTILE %projectile_uuid%"
    - "DELAY 10 LAUNCH mini_bomb 360 0 PROJECTILE %projectile_uuid%"
    - "minecraft:kill %projectile_uuid%"
```

## Projectile Types

### How to make invisible projectile?

In SCore projectile config:
```yaml
type: SNOWBALL
invisible: true
```

### How to make large projectile?

Use projectile types like:
- `FIREBALL` - Large fireball
- `DRAGON_FIREBALL` - Even larger
- `WITHER_SKULL` - Wither head

Or use `FALLING_BLOCK` for custom size:
```yaml
type: FALLING_BLOCK
blockType: STONE
```

### How to make fast projectile?

```yaml
velocity: 5.0  # Very fast (default ~1.0)
gravity: false  # No drop
```

### How to make slow projectile?

```yaml
velocity: 0.3  # Very slow
gravity: true  # Falls slowly
```

### How to make projectile affected by gravity?

```yaml
gravity: true
```

## Projectile Spawning

### How to launch multiple projectiles at once?

```yaml
commands:
- "LAUNCH projectile1 0 0"
- "LAUNCH projectile2 10 0"
- "LAUNCH projectile3 -10 0"
- "LAUNCH projectile4 0 10"
- "LAUNCH projectile5 0 -10"
```

### How to launch projectiles in circle pattern?

```yaml
commands:
- "LAUNCH circle_projectile 0 0"
- "LAUNCH circle_projectile 45 0"
- "LAUNCH circle_projectile 90 0"
- "LAUNCH circle_projectile 135 0"
- "LAUNCH circle_projectile 180 0"
- "LAUNCH circle_projectile 225 0"
- "LAUNCH circle_projectile 270 0"
- "LAUNCH circle_projectile 315 0"
```

### How to launch projectile upward?

```yaml
commands:
- "LAUNCH up_projectile 0 90"  # 90° up
```

### How to launch projectile from custom location?

```yaml
commands:
- "EXECUTE_LOCATION loc{x=10,y=70,z=10} LAUNCH projectile 0 0"
```

## Special Projectile Mechanics

### How to make projectile damage only specific mobs?

```yaml
activators:
  zombie_killer:
    activators:
    - PROJECTILE_HIT_ENTITY
    entityTypeConditions:
    - ZOMBIE
    - ZOMBIE_VILLAGER
    - HUSK
    commands:
    - "DAMAGE 50 %victim%"
```

### How to make projectile pass through players but hit blocks?

In SCore config:
```yaml
throughEntities: true
throughBlocks: false
```

### How to make projectile create temporary platforms?

```yaml
activators:
  ice_platform:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    # Create 3x3 ice platform
    - "SETBLOCK PACKED_ICE %block_x% %block_y% %block_z% %world%"
    - "SETBLOCK PACKED_ICE %add-x=1={block_x}% %block_y% %block_z% %world%"
    - "SETBLOCK PACKED_ICE %add-x=-1={block_x}% %block_y% %block_z% %world%"
    - "SETBLOCK PACKED_ICE %block_x% %block_y% %add-z=1={block_z}% %world%"
    - "SETBLOCK PACKED_ICE %block_x% %block_y% %add-z=-1={block_z}% %world%"
    # Remove after 5 seconds
    - "DELAY 100 SETBLOCK AIR %block_x% %block_y% %block_z% %world%"
    # ... (repeat for all blocks)
```

### How to make projectile summon entities?

```yaml
activators:
  summon_on_impact:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    - "SUMMON ZOMBIE 1 %projectile_x% %projectile_y% %projectile_z% %world%"
```

### How to make projectile create structures?

```yaml
activators:
  build_wall:
    activators:
    - PROJECTILE_HIT_BLOCK
    commands:
    # Build 5-block tall wall
    - "SETBLOCK STONE %block_x% %block_y% %block_z% %world%"
    - "SETBLOCK STONE %block_x% %add-y=1={block_y}% %block_z% %world%"
    - "SETBLOCK STONE %block_x% %add-y=2={block_y}% %block_z% %world%"
    - "SETBLOCK STONE %block_x% %add-y=3={block_y}% %block_z% %world%"
    - "SETBLOCK STONE %block_x% %add-y=4={block_y}% %block_z% %world%"
```

## Related Documentation

- [Creating a Basic Projectile](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/creating-a-basic-projectile)
- [Launch Arrows in Cone](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/launch-arrows-in-cone)
- [Custom Actions/Damages Per Projectile](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/custom-actions-damages-per-projectiles)
- [SCore Custom Projectiles](/docs/tools-for-all-plugins-score/custom-projectiles)
- [LAUNCH Command](/docs/tools-for-all-plugins/custom-commands/player-and-target-commands#launch)
- [Projectile Activators](/docs/executableitems/configurations/activator-configuration/list-of-the-activators#projectile-activators)

## Summary

This page covers **30+ projectile implementation ideas** including:

- **Lifecycle**: Remove, bounce, timed, disappear
- **Behavior**: Homing, phase through, pierce, split, explode
- **Effects**: Particles, sounds, trails, blocks
- **Damage**: Custom damage, healing, fire, knockback, potion effects
- **Advanced**: Lightning, freeze, teleport, grapple, web, area denial, cluster
- **Types**: Invisible, large, fast, slow, gravity
- **Spawning**: Multiple, circle pattern, upward, custom location
- **Special**: Mob-specific, pass-through, platforms, summons, structures

For detailed implementation tutorials, see the related documentation links above!
