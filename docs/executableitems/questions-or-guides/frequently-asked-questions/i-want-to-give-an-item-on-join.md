# Give Items on Player Join

There are two common scenarios for giving items when players join your server:

1. **First join only** - Give item once when player joins for the first time
2. **Every join** - Give item every time player joins the server

## Method 1: First Join Only (Recommended)

:::tip Recommended Method
Use ExecutableItems' built-in `giveFirstJoinFeatures` for giving items on first join. This is the most reliable and efficient method.
:::

### Setup: giveFirstJoinFeatures

This feature automatically gives your ExecutableItem to players when they join the server for the first time.

### Configuration

```yaml
name: '&6&lWelcome Sword'
material: DIAMOND_SWORD
lore:
- '&7Thanks for joining our server!'
- '&eEnjoy your starter weapon'

giveFirstJoinFeatures:
  # Enable first join item giving
  giveFirstJoin: true

  # Optional: Give to specific slot (0-35)
  # Leave unset to give to first available slot
  giveFirstJoinSlot: 0

  # Optional: Commands to run when item is given
  giveFirstJoinPlayerCommands:
  - "SENDMESSAGE &aYou received a starter sword!"
  - "PLAYSOUND ENTITY_PLAYER_LEVELUP 1.0 1.5"
```

### Complete Example

```yaml
name: '&6&lStarter Kit'
material: GOLDEN_APPLE
amount: 5
lore:
- '&7Welcome to the server!'
- '&eUse these wisely'

giveFirstJoinFeatures:
  giveFirstJoin: true
  giveFirstJoinSlot: 8  # Slot 9 in hotbar (last slot)

  giveFirstJoinPlayerCommands:
  - "SENDMESSAGE &6&l✦ &eWelcome to the server!"
  - "SENDMESSAGE &7You received a starter kit"
  - "PLAYSOUND UI_TOAST_CHALLENGE_COMPLETE 1.0 1.0"
  - "TITLE &6&lWelcome! <+> SUBTITLE &eCheck your hotbar"
```

### How It Works

1. **Player joins for first time**
2. **ExecutableItems checks** if player has joined before
3. **If first join**, item is given according to configuration
4. **Player data saved**, preventing item from being given again
5. **Optional commands execute** (messages, sounds, etc.)

### Important Notes

- ✅ **Persistent**: Player data is saved, so item only given once ever
- ✅ **Efficient**: No performance impact, handled by plugin internally
- ✅ **Reliable**: Works across server restarts
- ⚠️ **Cannot reset**: Once given, item won't be given again unless player data is deleted

## Method 2: Every Join (Use ExecutableEvents)

:::warning Not Recommended for ExecutableItems
ExecutableItems does **not** reliably handle giving items on every join. Use ExecutableEvents plugin instead.
:::

### Why ExecutableItems Doesn't Handle This Well

**Technical limitation:**
- ExecutableItems requires an existing item in player inventory to trigger activators
- On join, there may be no ExecutableItem in inventory
- `PLAYER_JOIN` activator won't trigger without the item present
- This creates a "chicken and egg" problem

**Unreliable workaround:**
You could create a "permanent item" that's always in player inventory, but:
- Players could accidentally drop or delete it
- Requires complex respawn logic
- Not practical for most servers
- Performance overhead

### Recommended Solution: ExecutableEvents

**ExecutableEvents** is designed specifically for server-wide events like player joins.

#### Install ExecutableEvents

1. Download from [SpigotMC](https://www.spigotmc.org/resources/executableevents.84198/)
2. Place in `plugins` folder
3. Restart server

#### Configure Join Event

Create an event in `plugins/ExecutableEvents/events/`:

**Example: `join_starter_kit.yml`**

```yaml
name: 'Join Starter Kit'
event: PLAYER_JOIN

# Optional: Only give if player doesn't have item
conditions:
  conditions:
  - '%checkItem action:name equals:&6&lStarter Kit% == false'

player_commands:
# Give the ExecutableItem
- "ei give {player} STARTER_KIT 1"

# Or give multiple items
- "ei give {player} STARTER_SWORD 1"
- "ei give {player} STARTER_ARMOR_HELMET 1"
- "ei give {player} STARTER_FOOD 16"

# Send welcome message
- "SENDMESSAGE &aWelcome back! Here's your daily kit."
- "PLAYSOUND ENTITY_PLAYER_LEVELUP 1.0 1.5"
```

#### Example: Daily Kit (Once Per Day)

```yaml
name: 'Daily Kit'
event: PLAYER_JOIN

conditions:
  conditions:
  # Check if player has received kit today using variable
  - '%var_daily_kit_<player_uuid>% < %server_time%'

player_commands:
# Give items
- "ei give {player} DAILY_REWARD 1"

# Set variable to tomorrow's timestamp
- "SETVAR VAR:daily_kit_<player_uuid> VALUE:%add_server_time_86400%"

# Notify player
- "SENDMESSAGE &6&l✦ &eDaily kit received!"
```

## Alternative Methods

### Option 3: Skript

If you use Skript plugin:

```applescript
on join:
    # First join only
    if player has played before is false:
        execute console command "/ei give %player% STARTER_KIT 1"
        send "&aWelcome! You received a starter kit" to player

    # Every join
    else:
        execute console command "/ei give %player% DAILY_REWARD 1"
        send "&6Daily reward received!" to player
```

### Option 4: CommandHelper

If you use CommandHelper:

```
bind(player_join, null, null, @event,
    # First join
    if(!phas_played(@event['player'])) {
        run('/ei give ' . @event['player'] . ' STARTER_KIT 1')
        tmsg(@event['player'], color('&aWelcome!'))
    } else {
        # Every join
        run('/ei give ' . @event['player'] . ' DAILY_REWARD 1')
    }
)
```

### Option 5: Denizen

If you use Denizen:

```yaml
join_event:
  type: world
  events:
    on player joins:
    # First join
    - if !<player.has_played_before>:
      - execute as_server "ei give <player.name> STARTER_KIT 1"
      - narrate "<&a>Welcome to the server!"
    # Every join
    - else:
      - execute as_server "ei give <player.name> DAILY_REWARD 1"
```

## Comparison Table

| Method | First Join | Every Join | Reliability | Setup Difficulty |
|--------|-----------|-----------|-------------|------------------|
| **giveFirstJoinFeatures** | ✅ Perfect | ❌ No | ⭐⭐⭐⭐⭐ | ⭐ Easy |
| **ExecutableEvents** | ✅ Yes | ✅ Perfect | ⭐⭐⭐⭐⭐ | ⭐⭐ Medium |
| **Skript** | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐ | ⭐⭐ Medium |
| **CommandHelper** | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐ | ⭐⭐⭐ Advanced |
| **Denizen** | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐ | ⭐⭐⭐ Advanced |

## Common Issues

### Item Not Given on First Join

**Check these:**
1. **Verify feature is enabled**: `giveFirstJoin: true`
2. **Check player data**: Delete `plugins/ExecutableItems/playerData/<uuid>.yml` to reset
3. **Inventory full**: Set `giveFirstJoinSlot` or ensure player has empty slot
4. **Plugin conflicts**: Some plugins block item giving on join
5. **Reload server**: Restart after changing configuration

### Item Given Multiple Times

**This shouldn't happen with giveFirstJoinFeatures.**

If it does:
1. Check for duplicate ExecutableItems with same feature enabled
2. Verify only one item has `giveFirstJoin: true`
3. Check if using multiple methods (e.g., both EI feature AND ExecutableEvents)

### Want to Reset for Player

To allow a player to receive the first join item again:

1. **Stop server** (or use `/ei save` if careful)
2. Navigate to `plugins/ExecutableItems/playerData/`
3. Delete the player's UUID file: `<player-uuid>.yml`
4. **Restart server** or use `/ei reload`

**Find player UUID:**
- Use `/ei playerinfo <player_name>` if available
- Or check https://mcuuid.net/

## Summary

**For first join items:**
- ✅ Use `giveFirstJoinFeatures` in your ExecutableItem config
- Most reliable and easiest method
- Built-in, no extra plugins needed

**For every join items:**
- ✅ Use **ExecutableEvents** plugin
- Designed for this purpose
- More flexible and reliable than workarounds

**Why not use ExecutableItems for every join:**
- ❌ Requires item already in inventory to trigger
- ❌ "Chicken and egg" problem
- ❌ Unreliable workarounds required
- ✅ Use ExecutableEvents instead

## Related Documentation

- [giveFirstJoinFeatures Configuration](/docs/executableitems/configurations/item-configuration/item-features#custom-give-first-join-features)
- [ExecutableEvents Plugin](https://www.spigotmc.org/resources/executableevents.84198/)
- [ExecutableEvents Documentation](https://docs.ssomar.com/executableevents/)
