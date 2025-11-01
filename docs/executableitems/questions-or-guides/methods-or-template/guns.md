# Guns

This guide teaches you how to create custom guns in Minecraft using ExecutableItems and SCore's projectile system.

## Video Tutorial

For a visual walkthrough, watch this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2qugSjy5kRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How Guns Work in ExecutableItems

Custom guns combine three systems:

1. **ExecutableItem** - The gun item players hold
2. **SCore Projectile** - The bullet/projectile fired
3. **Activators** - Triggers for shooting, reloading, effects

The basic flow:
1. Player right-clicks with gun
2. Activator detects the right-click
3. LAUNCH command fires a projectile
4. Projectile has hit detection and effects
5. Gun has ammo, cooldown, and sound effects

## Prerequisites

Before creating guns, you need:
- **ExecutableItems** plugin installed
- **SCore** plugin installed (for projectiles)
- Basic knowledge of [custom projectiles](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/creating-a-basic-projectile)

## Basic Gun Example

Here's a simple pistol to get started:

### Step 1: Create the Projectile (Bullet)

Use `/score projectiles-create bullet` and configure:

```yaml
# Projectile ID: bullet
type: SNOWBALL
invisible: true
silent: true
gravity: false
velocity: 3.0

particles:
  trail:
    particle: CRIT
    amount: 2
    offset: 0.1

onHitEntity:
- "DAMAGE 10 %entity_uuid%"
- "PARTICLE EXPLOSION_NORMAL 5 0.2 %x% %y% %z% %world%"

onHitBlock:
- "PARTICLE BLOCK_CRACK 10 0.3 %x% %y% %z% %world% STONE"
```

### Step 2: Create the Gun Item

Create the gun with `/ei create pistol`:

```yaml
material: GOLDEN_HORSE_ARMOR  # Looks like a gun with resource pack
name: '&6&lPistol'
lore:
- '&7A basic firearm'
- ''
- '&eDamage: &f10'
- '&eAmmo: &fUnlimited'

customModelData: 1  # For custom texture

activators:
  shoot:
    activators:
    - PLAYER_RIGHT_CLICK
    cooldown: 0.5  # Half second between shots (fire rate)
    commands:
    - "LAUNCH bullet 1.5 true false true"
    - "PLAYSOUND ENTITY_GENERIC_EXPLODE 0.5 2.0"
    - "PARTICLE SMOKE_NORMAL 5 0.1 %player_x% %add-y=1.5={player_y}% %player_z% %world%"
```

## Advanced Gun Examples

### 1. Shotgun (Multiple Projectiles)

Fires multiple pellets in a spread pattern:

```yaml
material: IRON_HORSE_ARMOR
name: '&8&lShotgun'
lore:
- '&7Fires a spread of pellets'
- ''
- '&eDamage: &f6 per pellet'
- '&ePellets: &f8'
- '&eSpread: &fWide'

customModelData: 2

activators:
  shoot_spread:
    activators:
    - PLAYER_RIGHT_CLICK
    cooldown: 2  # 2 seconds between shots
    commands:
    # Fire 8 projectiles in cone pattern
    - "LAUNCH shotgun_pellet 20 0"   # Right 20°
    - "LAUNCH shotgun_pellet 15 0"
    - "LAUNCH shotgun_pellet 10 0"
    - "LAUNCH shotgun_pellet 5 0"
    - "LAUNCH shotgun_pellet 0 0"    # Center
    - "LAUNCH shotgun_pellet -5 0"
    - "LAUNCH shotgun_pellet -10 0"
    - "LAUNCH shotgun_pellet -15 0"
    - "LAUNCH shotgun_pellet -20 0"  # Left 20°

    # Effects
    - "PLAYSOUND ENTITY_GENERIC_EXPLODE 1 0.8"
    - "PARTICLE EXPLOSION_NORMAL 10 0.3 %player_x% %add-y=1.5={player_y}% %player_z% %world%"
    - "POTION_EFFECT SLOW 1 0"  # Recoil effect
```

### 2. Sniper Rifle (Scoped)

Long-range precision weapon:

```yaml
material: DIAMOND_HORSE_ARMOR
name: '&b&lSniper Rifle'
lore:
- '&7High damage, slow fire rate'
- ''
- '&eDamage: &f30'
- '&eRange: &fVery Long'
- '&eScope: &fRight-click to zoom'

customModelData: 3

activators:
  # Shoot
  shoot:
    activators:
    - PLAYER_LEFT_CLICK
    cooldown: 3  # 3 seconds between shots
    commands:
    - "LAUNCH sniper_bullet 2.5 true false true"
    - "PLAYSOUND ENTITY_LIGHTNING_BOLT_THUNDER 0.8 1.5"
    - "POTION_EFFECT SLOW 2 2"  # Heavy recoil
    - "SENDMESSAGE &7*BANG*"

  # Scope (zoom)
  scope:
    activators:
    - PLAYER_RIGHT_CLICK
    cooldown: 0.1
    commands:
    - "POTION_EFFECT SLOWNESS 5 3"  # Simulate scoped movement
    - "SENDMESSAGE &7Scoped..."
```

### 3. Assault Rifle (Auto-Fire)

Rapid-fire weapon with ammo system:

```yaml
material: NETHERITE_HORSE_ARMOR
name: '&4&lAssault Rifle'
lore:
- '&7Rapid fire automatic weapon'
- ''
- '&eDamage: &f7 per shot'
- '&eAmmo: &f%var_ammo%&e/&f30'
- '&eReload: &fDrop item'

customModelData: 4

# Variables for ammo tracking
variables:
  var_ammo:
    type: NUMBER
    default: 30

activators:
  # Auto-fire (hold right-click)
  shoot:
    activators:
    - PLAYER_RIGHT_CLICK
    cooldown: 0.1  # 10 shots per second
    commands:
    # Check if has ammo
    - "IF %var_ammo% > 0 THEN LAUNCH rifle_bullet 2 true false true"
    - "IF %var_ammo% > 0 THEN PLAYSOUND ENTITY_GENERIC_EXPLODE 0.3 2.0"
    - "IF %var_ammo% > 0 THEN SET_VAR_NUMBER var_ammo %math_{%var_ammo%-1}%"
    - "IF %var_ammo% <= 0 THEN SENDMESSAGE &cOut of ammo! Drop the gun to reload."
    - "IF %var_ammo% <= 0 THEN PLAYSOUND BLOCK_DISPENSER_FAIL 1 1"

  # Reload system
  reload:
    activators:
    - PLAYER_DROP_ITEM
    cancelEventIfNotInCooldown: true
    cooldown: 3  # 3 second reload time
    commands:
    - "SENDMESSAGE &aReloading..."
    - "PLAYSOUND ITEM_ARMOR_EQUIP_CHAIN 1 0.8"
    - "WAIT 60"  # Wait 3 seconds (60 ticks)
    - "SET_VAR_NUMBER var_ammo 30"
    - "SENDMESSAGE &aReloaded! &7(30/30)"
    - "PLAYSOUND BLOCK_PISTON_EXTEND 1 1.2"
```

### 4. Rocket Launcher (Explosive)

Fires explosive projectiles:

```yaml
material: GOLDEN_HOE
name: '&c&lRocket Launcher'
lore:
- '&7Fires explosive rockets'
- ''
- '&eDamage: &f20 + explosion'
- '&eExplosion Radius: &f5 blocks'
- '&eAmmo: &fUnlimited'

customModelData: 5

activators:
  shoot_rocket:
    activators:
    - PLAYER_RIGHT_CLICK
    cooldown: 5  # 5 seconds between shots
    commands:
    - "LAUNCH explosive_rocket 1.2 true false true"
    - "PLAYSOUND ENTITY_FIREWORK_ROCKET_LAUNCH 1 0.8"
    - "PARTICLE EXPLOSION_LARGE 3 0.2 %player_x% %add-y=1.5={player_y}% %player_z% %world%"
    - "POTION_EFFECT SLOW 3 1"  # Heavy recoil
    - "SENDMESSAGE &c&lFIRE!"
```

**Rocket Projectile Configuration:**
```yaml
# Projectile ID: explosive_rocket
type: FIREBALL
gravity: true
velocity: 1.2

particles:
  trail:
    particle: FLAME
    amount: 10
    offset: 0.3

onHitEntity:
- "DAMAGE 20 %entity_uuid%"
- "EXPLOSION 3 true true %x% %y% %z% %world%"
- "PARTICLE EXPLOSION_HUGE 1 0 %x% %y% %z% %world%"
- "PLAYSOUND ENTITY_GENERIC_EXPLODE 2 0.8"

onHitBlock:
- "EXPLOSION 3 true true %x% %y% %z% %world%"
- "PARTICLE EXPLOSION_HUGE 1 0 %x% %y% %z% %world%"
- "PLAYSOUND ENTITY_GENERIC_EXPLODE 2 0.8"
```

### 5. Ray Gun (Sci-Fi)

Instant hit laser weapon:

```yaml
material: DIAMOND_HOE
name: '&d&lRay Gun'
lore:
- '&7Advanced energy weapon'
- ''
- '&eDamage: &f15'
- '&eType: &fInstant Hit Laser'
- '&eEnergy: &fUnlimited'

customModelData: 6

activators:
  shoot_laser:
    activators:
    - PLAYER_RIGHT_CLICK
    cooldown: 1  # 1 second between shots
    commands:
    # Raycast for instant hit
    - "RAYTRACE ENTITY 50 SET"  # 50 block range, hit first entity
    - "IF %raytrace_entity_hit% != null THEN DAMAGE 15 %raytrace_entity_uuid%"
    - "IF %raytrace_entity_hit% != null THEN PARTICLE END_ROD 20 0 %raytrace_entity_x% %raytrace_entity_y% %raytrace_entity_z% %world%"

    # Laser beam visual
    - "DRAWLINE particle{particle=END_ROD} particle{amount=3} particle{offset=0.1} %player_x% %add-y=1.5={player_y}% %player_z% %raytrace_x% %raytrace_y% %raytrace_z% 0.3 %world%"

    # Effects
    - "PLAYSOUND BLOCK_BEACON_ACTIVATE 1 2"
    - "PLAYSOUND ENTITY_LIGHTNING_BOLT_IMPACT 0.5 2"
    - "PARTICLE ELECTRIC_SPARK 10 0.2 %player_x% %add-y=1.5={player_y}% %player_z% %world%"
```

## Gun Features Breakdown

### Fire Rate (Cooldown)

Controls how fast the gun can shoot:

```yaml
cooldown: 0.1  # Machine gun (10 shots/sec)
cooldown: 0.5  # Pistol (2 shots/sec)
cooldown: 2    # Shotgun (1 shot every 2 sec)
cooldown: 5    # Rocket launcher (1 shot every 5 sec)
```

### Recoil Effects

Simulate gun recoil with effects:

```yaml
commands:
# Visual recoil
- "POTION_EFFECT SLOW 1 0"

# Heavy recoil
- "POTION_EFFECT SLOW 2 2"
- "POTION_EFFECT JUMP_BOOST 1 -10"  # Negative jump = knockdown

# Camera shake (using damage)
- "DAMAGE 0.5"  # Small damage for camera shake
```

### Muzzle Flash

Add visual effects at the gun barrel:

```yaml
commands:
- "PARTICLE SMOKE_NORMAL 5 0.1 %player_x% %add-y=1.5={player_y}% %player_z% %world%"
- "PARTICLE FLAME 3 0.05 %player_x% %add-y=1.5={player_y}% %player_z% %world%"
- "PARTICLE EXPLOSION_NORMAL 1 0 %player_x% %add-y=1.5={player_y}% %player_z% %world%"
```

### Gun Sounds

Different sounds for different gun types:

```yaml
# Pistol/Small arms
- "PLAYSOUND ENTITY_GENERIC_EXPLODE 0.5 2.0"

# Shotgun
- "PLAYSOUND ENTITY_GENERIC_EXPLODE 1 0.8"
- "PLAYSOUND ENTITY_FIREWORK_ROCKET_BLAST 0.5 0.5"

# Sniper/Heavy
- "PLAYSOUND ENTITY_LIGHTNING_BOLT_THUNDER 0.8 1.5"

# Sci-fi/Energy
- "PLAYSOUND BLOCK_BEACON_ACTIVATE 1 2"
- "PLAYSOUND ENTITY_LIGHTNING_BOLT_IMPACT 0.5 2"

# Empty/Click
- "PLAYSOUND BLOCK_DISPENSER_FAIL 1 1"
```

## Ammo Systems

### Method 1: Variable-Based Ammo

Uses ExecutableItems variables:

```yaml
variables:
  var_ammo:
    type: NUMBER
    default: 30  # Max ammo

activators:
  shoot:
    commands:
    # Check and consume ammo
    - "IF %var_ammo% > 0 THEN LAUNCH bullet 2 true false true"
    - "IF %var_ammo% > 0 THEN SET_VAR_NUMBER var_ammo %math_{%var_ammo%-1}%"
    - "IF %var_ammo% <= 0 THEN SENDMESSAGE &cOut of ammo!"

  reload:
    commands:
    - "SET_VAR_NUMBER var_ammo 30"
    - "SENDMESSAGE &aReloaded!"
```

### Method 2: Durability-Based Ammo

Uses item durability as ammo counter:

```yaml
usage: 30  # 30 shots before breaking

activators:
  shoot:
    usageModification: 1  # Consumes 1 durability per shot
    commands:
    - "LAUNCH bullet 2 true false true"
    - "IF %usage% <= 0 THEN SENDMESSAGE &cGun broke! Find more ammo."
```

### Method 3: Item Consumption

Requires actual items as ammo:

```yaml
activators:
  shoot:
    playerConditions:
    - "PLAYER_HAS_ITEM material:IRON_NUGGET amount:1"  # Needs bullets
    commands:
    - "REMOVEITEM IRON_NUGGET 1"  # Consume 1 bullet
    - "LAUNCH bullet 2 true false true"
```

## Reloading Systems

### Quick Reload (Drop Item)

```yaml
activators:
  reload:
    activators:
    - PLAYER_DROP_ITEM
    cancelEventIfNotInCooldown: true  # Prevents item dropping
    cooldown: 3  # 3 second reload time
    commands:
    - "SENDMESSAGE &aReloading..."
    - "WAIT 60"  # 3 seconds
    - "SET_VAR_NUMBER var_ammo 30"
    - "SENDMESSAGE &aReloaded!"
    - "PLAYSOUND BLOCK_PISTON_EXTEND 1 1.2"
```

### Swap Hands Reload

```yaml
activators:
  reload:
    activators:
    - PLAYER_SWAP_HAND
    cancelEventIfNotInCooldown: true
    cooldown: 2
    commands:
    - "SENDMESSAGE &eReloading..."
    - "WAIT 40"
    - "SET_VAR_NUMBER var_ammo %var_maxammo%"
    - "SENDMESSAGE &aReloaded!"
```

### Sneak Reload

```yaml
activators:
  reload:
    activators:
    - PLAYER_SNEAK
    playerConditions:
    - "%var_ammo% < 30"  # Only if not full
    cooldown: 2
    commands:
    - "WAIT 40"
    - "SET_VAR_NUMBER var_ammo 30"
    - "SENDMESSAGE &aReloaded to &f30 &abull ets!"
```

## Projectile Types

### Standard Bullet

```yaml
type: SNOWBALL
invisible: true
gravity: false
velocity: 3.0

onHitEntity:
- "DAMAGE 10 %entity_uuid%"
```

### Tracer Rounds (Visible)

```yaml
type: ARROW
invisible: false
gravity: false
velocity: 3.0

particles:
  trail:
    particle: REDSTONE
    amount: 5
    color: "255,100,0"  # Orange tracer
```

### Explosive Bullets

```yaml
type: SNOWBALL
invisible: true
gravity: false
velocity: 2.5

onHitEntity:
- "DAMAGE 8 %entity_uuid%"
- "EXPLOSION 1 false true %x% %y% %z% %world%"

onHitBlock:
- "EXPLOSION 1 false true %x% %y% %z% %world%"
```

### Piercing Bullets

```yaml
type: ARROW
invisible: true
gravity: false
velocity: 3.5
piercing: 3  # Hits 3 entities

onHitEntity:
- "DAMAGE 6 %entity_uuid%"
- "PARTICLE CRIT 10 0.2 %x% %y% %z% %world%"
```

## Troubleshooting

### Projectile Doesn't Fire

1. **Check SCore is installed**: `/score` command should work
2. **Verify projectile exists**: `/score projectiles-list`
3. **Check LAUNCH command syntax**:
```yaml
# Correct
- "LAUNCH bullet 2 true false true"
# Wrong
- "LAUNCH bullet"  # Missing parameters
```

4. **Verify projectile ID matches**: Case-sensitive!

### Gun Fires But No Damage

1. **Check projectile onHitEntity**:
```yaml
onHitEntity:
- "DAMAGE 10 %entity_uuid%"  # Correct
# Not: %entity% or %victim%
```

2. **Test projectile separately**: `/score projectiles-launch bullet`

3. **Check projectile visibility**: Set `invisible: false` for testing

### Fire Rate Issues

**Too fast/spam:**
```yaml
cooldown: 0.5  # Add or increase cooldown
```

**Too slow:**
```yaml
cooldown: 0.1  # Reduce cooldown (min ~0.05)
```

### Ammo Not Decreasing

1. **Check variable name** matches:
```yaml
variables:
  var_ammo: ...  # Must match in commands

commands:
- "SET_VAR_NUMBER var_ammo ..."  # Exact match!
```

2. **Verify IF condition**:
```yaml
- "IF %var_ammo% > 0 THEN ..."  # Check condition works
```

### Reload Not Working

1. **Check activator** triggers:
```yaml
activators:
- PLAYER_DROP_ITEM  # Test by dropping
```

2. **Add cancelEventIfNotInCooldown**:
```yaml
cancelEventIfNotInCooldown: true  # Prevents item drop
```

3. **Test without cooldown**:
```yaml
cooldown: 0  # Disable for testing
```

## Advanced: Weapon Attachments

### Silencer Attachment

```yaml
variables:
  var_silencer:
    type: BOOLEAN
    default: false

activators:
  toggle_silencer:
    activators:
    - PLAYER_SNEAK_RIGHT_CLICK
    commands:
    - "IF %var_silencer% == false THEN SET_VAR_BOOLEAN var_silencer true"
    - "IF %var_silencer% == false THEN SENDMESSAGE &aAttached silencer"
    - "IF %var_silencer% == true THEN SET_VAR_BOOLEAN var_silencer false"
    - "IF %var_silencer% == true THEN SENDMESSAGE &cRemoved silencer"

  shoot:
    commands:
    # Silenced shot
    - "IF %var_silencer% == true THEN PLAYSOUND BLOCK_WOOL_BREAK 0.3 0.5"
    # Normal shot
    - "IF %var_silencer% == false THEN PLAYSOUND ENTITY_GENERIC_EXPLODE 1 2"
```

### Scope Zoom

```yaml
activators:
  scope_toggle:
    activators:
    - PLAYER_SNEAK
    commands:
    - "POTION_EFFECT SLOWNESS 999999 3"  # Scoped slowness
    - "SENDMESSAGE &7Looking through scope..."

  scope_untoggle:
    activators:
    - PLAYER_UNSNEAK
    commands:
    - "REMOVE_POTION_EFFECT SLOWNESS"
    - "SENDMESSAGE &7Lowered scope"
```

## Complete Example: Modern Rifle

Here's a fully-featured assault rifle:

```yaml
material: NETHERITE_HOE
name: '&8&lM4A1 Carbine'
lore:
- '&7Modern assault rifle'
- ''
- '&eStats:'
- '&7├ Damage: &f8'
- '&7├ Fire Rate: &f600 RPM'
- '&7├ Magazine: &f%var_ammo%&7/&f30'
- '&7└ Range: &f50 blocks'
- ''
- '&7Right-click: &fShoot'
- '&7Drop: &fReload'

customModelData: 100

variables:
  var_ammo:
    type: NUMBER
    default: 30
  var_max_ammo:
    type: NUMBER
    default: 30

activators:
  # Shoot
  shoot:
    activators:
    - PLAYER_RIGHT_CLICK
    cooldown: 0.1  # 600 RPM
    commands:
    # Fire if has ammo
    - "IF %var_ammo% > 0 THEN LAUNCH rifle_bullet 2.5 true false true"
    - "IF %var_ammo% > 0 THEN PLAYSOUND ENTITY_GENERIC_EXPLODE 0.4 1.8"
    - "IF %var_ammo% > 0 THEN PARTICLE SMOKE_NORMAL 3 0.1 %player_x% %add-y=1.6={player_y}% %player_z% %world%"
    - "IF %var_ammo% > 0 THEN SET_VAR_NUMBER var_ammo %math_{%var_ammo%-1}%"

    # Empty mag click
    - "IF %var_ammo% <= 0 THEN PLAYSOUND BLOCK_DISPENSER_FAIL 0.8 1.5"
    - "IF %var_ammo% <= 0 THEN SENDMESSAGE &c&lEMPTY! &7Press Q to reload"

  # Reload
  reload:
    activators:
    - PLAYER_DROP_ITEM
    cancelEventIfNotInCooldown: true
    cooldown: 2.5  # 2.5 second reload
    commands:
    - "SENDMESSAGE &7Reloading..."
    - "PLAYSOUND ITEM_ARMOR_EQUIP_IRON 1 0.8"
    - "WAIT 30"  # 1.5 seconds
    - "PLAYSOUND BLOCK_IRON_DOOR_CLOSE 0.8 1.5"
    - "WAIT 20"  # 1 second
    - "SET_VAR_NUMBER var_ammo %var_max_ammo%"
    - "PLAYSOUND BLOCK_PISTON_EXTEND 1 1.5"
    - "SENDMESSAGE &a&lRELOADED! &7(&f30&7/&f30&7)"
```

## Related Documentation

- [Creating Custom Projectiles](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/creating-a-basic-projectile)
- [LAUNCH Command](/docs/tools-for-all-plugins/custom-commands/player-and-target-commands#launch)
- [Variables System](/docs/executableitems/configurations/item-configuration/item-features#variables)
- [RAYTRACE Command](/docs/tools-for-all-plugins/custom-commands/player-and-target-commands#raytrace)
- [Activators List](/docs/executableitems/configurations/activator-configuration/list-of-the-activators)

## Summary

Creating guns in ExecutableItems involves:

1. **Create projectile** in SCore (`/score projectiles-create`)
2. **Configure gun item** with ExecutableItems
3. **Add shoot activator** (RIGHT_CLICK) with LAUNCH command
4. **Add reload system** (optional but recommended)
5. **Implement ammo tracking** (variables, durability, or items)
6. **Add visual/sound effects** for immersion
7. **Test and balance** fire rate, damage, reload time

Key commands:
- `LAUNCH <projectile_id> <velocity> <keep_velocity> <update_direction> <inherit_velocity>`
- `PLAYSOUND` for gun sounds
- `PARTICLE` for muzzle flash
- `SET_VAR_NUMBER` for ammo tracking

The combination of fast cooldowns, projectiles, and effects creates realistic gun mechanics in Minecraft!
