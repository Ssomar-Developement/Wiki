# 🔘 Custom Triggers

Custom triggers are a powerful way to store and execute lists of commands either manually through commands or automatically via a scheduling system.

## Overview

**Custom Triggers** allow you to:
- ✅ Store reusable command sequences
- ✅ Execute commands manually with a simple trigger command
- ✅ Schedule automatic execution at specific times
- ✅ Pass arguments to customize behavior
- ✅ Organize complex command setups

## Quick Start

### Step 1: Create the Activator

1. Open your plugin's editor (`/ei`, `/eb`, or `/ee`)
2. Create a new activator
3. Select **CUSTOM_TRIGGER** as the option
4. Add your commands to the commands section

### Step 2: Execute the Trigger

Use the appropriate command for your plugin:

```bash
# ExecutableItems
/ei run-custom-trigger trigger:{activatorID}

# ExecutableBlocks
/eb run-custom-trigger trigger:{activatorID}

# ExecutableEvents
/ee run-custom-trigger trigger:{activatorID}
```

## Command Context by Plugin

Each plugin provides different contexts for command execution:

### 🗡️ ExecutableItems
- **Requirement:** Item must be in player's inventory
- **Available commands:** Player commands
- **Placeholders:** Player-based placeholders (`%player%`, etc.)

### 🧱 ExecutableBlocks
- **Requirement:** Block must be placed
- **Available commands:** Block commands, Owner commands (if enabled)
- **Placeholders:** Block and owner placeholders

### 🎯 ExecutableEvents
- **Requirement:** None (triggers globally)
- **Available commands:** Console commands only
- **Placeholders:** Limited (use arguments for player targeting)

## Trigger Types

### 1. Callable Triggers
Executed only via command:
```yaml
activators:
  my_trigger:
    option: CUSTOM_TRIGGER
    commands:
    - "say Hello World!"
```

### 2. Scheduled Triggers
Execute automatically at specific times:
```yaml
activators:
  scheduled_trigger:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::22:::00:::XX'  # Daily at 22:00
    commands:
    - "say It's 10 PM!"
```

## Command Syntax

### ExecutableItems
```bash
/ei run-custom-trigger trigger:{activatorID} [player:{name}] [slot:{slot}] [args...]
```

| Parameter | Description | Required |
|-----------|-------------|----------|
| `trigger` | Activator ID | ✅ Yes |
| `player` | Target player name | ❌ No (targets all if omitted) |
| `slot` | Inventory slot (-1 for mainhand) | ❌ No |
| `args...` | Additional arguments accessible via %arg0%, %arg1%, etc. | ❌ No |

**Examples:**
```bash
/ei run-custom-trigger trigger:daily_reward
/ei run-custom-trigger trigger:boost player:Steve slot:-1
/ei run-custom-trigger trigger:message player:Alex Hello World
```

### ExecutableBlocks
```bash
/eb run-custom-trigger trigger:{activatorID} [block:{location}] [args...]
```

| Parameter | Description | Required |
|-----------|-------------|----------|
| `trigger` | Activator ID | ✅ Yes |
| `block` | Block location (world,x,y,z) | ❌ No (targets all if omitted) |
| `args...` | Additional arguments | ❌ No |

**Examples:**
```bash
/eb run-custom-trigger trigger:harvest_all
/eb run-custom-trigger trigger:activate block:world,100,64,200
```

### ExecutableEvents
```bash
/ee run-custom-trigger trigger:{activatorID} [args...]
```

| Parameter | Description | Required |
|-----------|-------------|----------|
| `trigger` | Activator ID | ✅ Yes |
| `args...` | Additional arguments | ❌ No |

**Examples:**
```bash
/ee run-custom-trigger trigger:server_event
/ee run-custom-trigger trigger:player_reward Steve
```

## Schedule System

### Schedule Format

The schedule system uses two formats for timing:

#### Format 1: Date/Time Based
```
{YEAR}:::{MONTH}:::{DAY}:::{HOUR}:::{MIN}:::{SEC}
```
- Use `%%%%` for any year
- Use `%%` for any month/day/hour/minute
- Use `XX` for any second
- Use `[value1,value2]` for multiple values

#### Format 2: Week-Based
```
{YEAR}:!:{WEEK}:!:{DAYSTRING}:!:{HOUR}:!:{MIN}:!:{SEC}
```
- `DAYSTRING` can be: MONDAY, TUESDAY, etc.

### Common Schedule Examples

```yaml
scheduleFeatures:
  when:
  # Every minute
  - '%%%%:::%%:::%%:::%%:::%%:::XX'

  # Every day at 22:00
  - '%%%%:::%%:::%%:::22:::00:::XX'

  # Every Monday at 14:00
  - '%%%%:!:%%:!:MONDAY:!:14:!:00:!:XX'

  # December 24-26 at 16:00
  - '%%%%:::12:::[24,25,26]:::16:::00:::XX'

  # At 10, 14, and 18 hours daily
  - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
```

## Practical Examples

### Example 1: Daily Rewards Item

```yaml
name: '&eDaily Reward Token'
material: GOLD_INGOT
activators:
  daily_reward:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '%%%%:::%%:::%%:::[10,14,18]:::00:::XX'
    commands:
    - "money give %player% 500"
    - "SEND_MESSAGE &aYou received your daily reward!"
```

### Example 2: Server Event Trigger

```yaml
# In ExecutableEvents
activators:
  new_year_celebration:
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
      - '2025:::01:::01:::00:::00:::00'
    consoleCommands:
    - "broadcast &6&lHAPPY NEW YEAR 2025!"
    - "ei giveall firework_item 10"
```

### Example 3: Block Harvest System

```yaml
# In ExecutableBlocks
activators:
  harvest_crops:
    option: CUSTOM_TRIGGER
    commands:
    - "DROPEXECUTABLEITEM wheat_item 5"
    - "score run-player-command player:%owner% SEND_MESSAGE &aHarvest complete!"
```

### Example 4: Player Commands from Events

Since ExecutableEvents don't have a player context, use arguments:

```yaml
# ExecutableEvent
activators:
  player_boost:
    option: CUSTOM_TRIGGER
    consoleCommands:
    - "score run-player-command player:%arg0% EFFECT SPEED 2 60"
```

Execute with: `/ee run-custom-trigger trigger:player_boost Steve`

## Best Practices

### ✅ DO
- Use unique activator IDs to avoid conflicts
- Test triggers manually before scheduling
- Use arguments for flexible, reusable triggers
- Organize complex command sequences into triggers

### ❌ DON'T
- Use duplicate activator IDs (they'll all trigger simultaneously)
- Forget to check plugin contexts (player/block/console commands)
- Overcomplicate simple setups that don't need triggers

## Troubleshooting

### Trigger Not Executing
- ✅ Verify the activator ID matches exactly
- ✅ Check if the item/block/event exists and is properly configured
- ✅ Ensure proper permissions for command execution

### Schedule Not Working
- ✅ Check schedule format syntax
- ✅ Verify server time matches expected schedule
- ✅ Ensure startDate/endDate range includes current time

### Commands Not Running
- ✅ Verify command context (player/block/console)
- ✅ Check placeholder availability in the context
- ✅ Test commands manually first

## Advanced Tips

### Chaining Triggers
Create complex sequences by having triggers call other triggers:

```yaml
trigger_1:
  option: CUSTOM_TRIGGER
  commands:
  - "ei run-custom-trigger trigger:trigger_2"
  - "ei run-custom-trigger trigger:trigger_3"
```

### Conditional Execution
Use placeholders and conditions to control execution:

```yaml
conditional_trigger:
  option: CUSTOM_TRIGGER
  placeholdersConditions:
    condition1:
      type: PLAYER_NUMBER
      comparator: SUPERIOR_OR_EQUALS
      number: 10
  commands:
  - "say There are 10+ players online!"
```

### Global Events
Combine ExecutableEvents triggers with other plugin triggers for server-wide events:

```yaml
# Step 1: EE trigger broadcasts and activates items/blocks
server_event:
  option: CUSTOM_TRIGGER
  consoleCommands:
  - "broadcast &cSERVER EVENT STARTING!"
  - "ei run-custom-trigger trigger:event_items"
  - "eb run-custom-trigger trigger:event_blocks"
```

## Related Documentation

- [Activator Configuration](/docs/tools-for-all-plugins-score/activators)
- [Command System](/docs/tools-for-all-plugins-score/commands)
- [Schedule Features](/docs/tools-for-all-plugins-score/schedules)
- [Placeholders](/docs/tools-for-all-plugins-score/placeholders)