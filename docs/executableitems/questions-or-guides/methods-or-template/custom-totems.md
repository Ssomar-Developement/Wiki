# Custom Totems

This guide shows you how to create custom totems that work like vanilla Totems of Undying - preventing death and giving custom effects.

## Video Tutorial

For a visual walkthrough, watch this video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NqAscbnaLCM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How Custom Totems Work

Custom totems use ExecutableItems' **Death Prevention System** to:
1. Detect when a player would die
2. Cancel the death event
3. Remove the totem from inventory
4. Apply custom effects and commands
5. Display totem animation (optional)

## Basic Custom Totem

Here's a simple custom totem that prevents death and heals the player:

```yaml
material: TOTEM_OF_UNDYING
name: '&6Custom Totem of Undying'
lore:
- '&7Prevents death and restores health'
- '&eGrants brief invulnerability'

activators:
  prevent_death:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    commands:
    - "HEAL 100"
    - "POTION_EFFECT REGENERATION 5 1"
    - "POTION_EFFECT ABSORPTION 10 1"
    - "POTION_EFFECT FIRE_RESISTANCE 40 0"
    - "SENDMESSAGE &6You have been saved by the totem!"
```

## How It Works

### Key Configuration Elements

1. **Activator: PLAYER_DEATH**
   - Triggers when player health reaches 0
   - Runs before actual death occurs

2. **cancelEventIfNotInCooldown: true**
   - Cancels the death event
   - Player survives instead of dying
   - Only works if totem is not on cooldown

3. **usageModification: 1**
   - Reduces item durability/usage by 1
   - For totems, this consumes the item
   - If `usage: 1`, the totem is removed after use

4. **Commands**
   - Custom effects applied when totem activates
   - Heals player, grants buffs, sends message

## Advanced Custom Totem Examples

### 1. Totem of Fire Resistance

Perfect for the Nether:

```yaml
material: TOTEM_OF_UNDYING
name: '&c&lTotem of the Flame'
lore:
- '&7Prevents death in fiery situations'
- '&cGrants extended fire immunity'

customModelData: 1  # Optional: custom texture

activators:
  fire_protection:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    commands:
    - "HEAL 100"
    - "POTION_EFFECT FIRE_RESISTANCE 300 0"  # 5 minutes
    - "POTION_EFFECT REGENERATION 10 2"
    - "EXTINGUISH"  # Put out fire
    - "SENDMESSAGE &cThe Totem of Flame protects you!"
    - "PARTICLE FLAME 100 1 %player_x% %player_y% %player_z% %world%"
```

### 2. Totem of Teleportation

Teleports you to safety when dying:

```yaml
material: TOTEM_OF_UNDYING
name: '&d&lTotem of Escape'
lore:
- '&7Teleports you to spawn when dying'
- '&dNo death, just a quick exit!'

activators:
  emergency_teleport:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    commands:
    - "HEAL 100"
    - "POTION_EFFECT REGENERATION 5 2"
    - "SPAWN"  # Teleport to spawn
    - "SENDMESSAGE &d&lESCAPED! &7The totem saved you and brought you home."
    - "PARTICLE PORTAL 200 1 %player_x% %player_y% %player_z% %world%"
    - "PLAYSOUND ENTITY_ENDERMAN_TELEPORT 1 1"
```

### 3. Totem of Resurrection (Multi-Use)

A totem that works 3 times before breaking:

```yaml
material: TOTEM_OF_UNDYING
name: '&e&lTotem of Three Lives'
lore:
- '&7Can save you from death 3 times'
- '&eUses remaining: &6%usage%/3'

usage: 3  # Can be used 3 times
usageLimit: 3

activators:
  multiple_saves:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    commands:
    - "HEAL 100"
    - "POTION_EFFECT REGENERATION 8 2"
    - "POTION_EFFECT ABSORPTION 20 1"
    - "SENDMESSAGE &eTotem activated! &7(%usage% uses remaining)"
    - "PARTICLE TOTEM 100 1 %player_x% %player_y% %player_z% %world%"
```

### 4. Totem of Vengeance

Kills nearby enemies when you would die:

```yaml
material: TOTEM_OF_UNDYING
name: '&4&lTotem of Vengeance'
lore:
- '&7Takes your attackers down with you'
- '&4...or saves you in the process'

activators:
  vengeful_protection:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    commands:
    - "HEAL 100"
    - "POTION_EFFECT REGENERATION 5 2"
    - "DAMAGE 15 {radius=10} %player_x% %player_y% %player_z% %world%"
    - "SENDMESSAGE &4Your enemies feel your wrath!"
    - "PARTICLE EXPLOSION_LARGE 20 2 %player_x% %player_y% %player_z% %world%"
    - "PLAYSOUND ENTITY_GENERIC_EXPLODE 1 0.8"
```

### 5. Totem with Custom Animation

Using vanilla totem animation:

```yaml
material: TOTEM_OF_UNDYING
name: '&a&lTotem of Life'
lore:
- '&7Prevents death with style'

activators:
  animated_save:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    commands:
    # Show vanilla totem animation
    - "AROUND 1 SENDMESSAGE &a%player% was saved by a totem!"
    - "HEAL 100"
    - "POTION_EFFECT REGENERATION 5 2"
    - "POTION_EFFECT ABSORPTION 5 1"
    # Vanilla totem particles happen automatically
    - "PARTICLE TOTEM 100 1 %player_x% %player_y% %player_z% %world%"
```

## Important Configuration Notes

### Usage and Consumption

For **single-use totems** (like vanilla):
```yaml
usage: 1  # Totem breaks after 1 use
usageModification: 1  # Consumes 1 usage when activated
```

For **multi-use totems**:
```yaml
usage: 5  # Totem has 5 uses
usageModification: 1  # Consumes 1 per activation
```

For **infinite totems**:
```yaml
usage: 0  # Never breaks
usageModification: 0  # Doesn't consume usage
```

### cancelEventIfNotInCooldown

This is **CRITICAL** for totems to work:

```yaml
cancelEventIfNotInCooldown: true
```

- **true**: Cancels death if totem is available (not on cooldown)
- **false**: Death happens even with totem (don't use this)

Without this set to `true`, the player will die anyway.

### Cooldown System

Prevent totem spam with cooldowns:

```yaml
activators:
  prevent_death:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    cooldown: 300  # 5 minute cooldown (in seconds)
    usageModification: 1
    commands:
    - "HEAL 100"
```

If player dies again within cooldown, totem won't activate.

## Totem Location Requirements

### Where Totems Must Be

By default, totems work when in:
- **Main hand**
- **Off-hand** (like vanilla)
- **Inventory** (any slot)

### Restrict to Specific Slot

To make totem only work in off-hand (like vanilla):

```yaml
activators:
  prevent_death:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    playerConditions:
    - PLAYER_IS_HOLDING OFFHAND slot  # Only works in off-hand
    commands:
    - "HEAL 100"
```

## Troubleshooting

### Totem Doesn't Prevent Death

1. **Check cancelEventIfNotInCooldown**:
```yaml
cancelEventIfNotInCooldown: true  # Must be true!
```

2. **Verify activator**: Must be `PLAYER_DEATH`
```yaml
activators:
- PLAYER_DEATH  # Correct
```

3. **Check usage**: Totem might be consumed/broken
```yaml
usage: 1  # Needs at least 1 use remaining
```

4. **Cooldown active**: Check if totem is on cooldown
```yaml
cooldown: 0  # Remove cooldown for testing
```

### Totem Consumed But Death Still Happens

- **Missing cancelEventIfNotInCooldown**: Add `cancelEventIfNotInCooldown: true`
- **Other plugin interference**: Check for death-related plugins (e.g., hardcore mode plugins)
- **Commands fail**: Some commands might error, check console

### Totem Works Multiple Times Without Breaking

- **usage set to 0**: Change to `usage: 1` for single-use
- **usageModification is 0**: Should be `usageModification: 1`

### Totem Animation Doesn't Show

The vanilla totem animation is client-side and automatic when TOTEM_OF_UNDYING is used. For custom animations:

```yaml
commands:
- "PARTICLE TOTEM 100 1 %player_x% %player_y% %player_z% %world%"
- "PLAYSOUND ITEM_TOTEM_USE 1 1"
```

## Advanced: Conditional Totems

### Only Works in Specific World

```yaml
activators:
  prevent_death:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    worldConditions:
    - "%world% == world_nether"  # Only works in Nether
    commands:
    - "HEAL 100"
    - "SENDMESSAGE &cNether Totem activated!"
```

### Only Works Against Specific Damage

```yaml
activators:
  fire_totem:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    playerConditions:
    - "%lastDamageCause% == FIRE || %lastDamageCause% == LAVA"
    commands:
    - "HEAL 100"
    - "POTION_EFFECT FIRE_RESISTANCE 60 0"
    - "SENDMESSAGE &cFire Totem saved you from burning!"
```

### Requires Permission to Use

```yaml
activators:
  prevent_death:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    usageModification: 1
    playerConditions:
    - "permission: totems.use"  # Requires permission
    commands:
    - "HEAL 100"
    - "SENDMESSAGE &aYour VIP totem saved you!"
```

## Complete Example: Ultimate Totem

Here's a fully-featured custom totem:

```yaml
material: TOTEM_OF_UNDYING
name: '&6&l&nUltimate Totem of Undying'
lore:
- '&7The most powerful totem'
- ''
- '&eEffects on activation:'
- '&a+ Full health restoration'
- '&a+ Regeneration II (10s)'
- '&a+ Absorption II (10s)'
- '&a+ Fire Resistance (1min)'
- '&a+ Damage nearby enemies'
- ''
- '&7Uses remaining: &e%usage%&7/&e3'

usage: 3  # Can save you 3 times
customModelData: 100  # Custom texture

enchantments:
  PROTECTION: 4  # Extra protection while holding

activators:
  ultimate_save:
    activators:
    - PLAYER_DEATH
    cancelEventIfNotInCooldown: true
    cooldown: 60  # 1 minute cooldown between uses
    usageModification: 1
    commands:
    # Healing
    - "HEAL 100"

    # Buff effects
    - "POTION_EFFECT REGENERATION 10 2"
    - "POTION_EFFECT ABSORPTION 10 2"
    - "POTION_EFFECT FIRE_RESISTANCE 60 0"
    - "POTION_EFFECT RESISTANCE 5 1"

    # Damage nearby enemies
    - "DAMAGE 10 {radius=8} %player_x% %player_y% %player_z% %world%"

    # Visual and audio effects
    - "PARTICLE TOTEM 200 2 %player_x% %player_y% %player_z% %world%"
    - "PARTICLE EXPLOSION_LARGE 10 1 %player_x% %player_y% %player_z% %world%"
    - "PLAYSOUND ITEM_TOTEM_USE 1 1"
    - "PLAYSOUND ENTITY_PLAYER_LEVELUP 1 1.5"

    # Messages
    - "SENDMESSAGE &6&l⚡ TOTEM ACTIVATED! &r&7(%usage% uses remaining)"
    - "AROUND 20 SENDMESSAGE &e%player% &7was saved by an Ultimate Totem!"
```

## Related Documentation

- [PLAYER_DEATH Activator](/docs/executableitems/configurations/activator-configuration/list-of-the-activators#player_death) - Death detection
- [Cancel Event](/docs/executableitems/configurations/activator-configuration/activator-config-options#cancelevent) - Event cancellation mechanics
- [Usage System](/docs/executableitems/configurations/item-configuration/item-features#usage) - Item consumption
- [Cooldowns](/docs/executableitems/configurations/activator-configuration/activator-config-options#cooldown) - Prevent spam
- [Conditions](/docs/executableitems/configurations/activator-configuration/conditions) - Advanced activation rules

## Summary

Custom totems in ExecutableItems use the `PLAYER_DEATH` activator with `cancelEventIfNotInCooldown: true` to prevent death. You can customize:

- **Effects**: Any potions, healing, or buffs
- **Actions**: Teleportation, damage to enemies, special effects
- **Uses**: Single-use, multi-use, or infinite
- **Conditions**: World-specific, damage-type-specific, permission-based
- **Visuals**: Custom particles and sounds

The key is using `cancelEventIfNotInCooldown: true` to cancel the death event and `usageModification: 1` to consume the totem.
