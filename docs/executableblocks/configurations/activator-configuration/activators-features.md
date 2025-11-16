---
description: >-
  These options are utilized to accomplish specific things to create simple to
  complex items
---
import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';

# Activators features

All this features are inside the activator, as reminder the activators allow you to execute custom actions on your ExecutableItem, it can have conditions, run commands, have cooldown, etc.

## General features

<GeneralActivatorsFeatures />

## Commands

### Commands

* More information: --------------
* Example:

```yaml
commands:
- "COMMAND1"
- "COMMAND2"
- "DELAY 3"
- "minecraft:setblock %block_x_int% %block_y_int%+1 %block_z_int% stone replace"
```

* Required: NO

### ownerCommands

* More informations: -------------------
* Example:

```yaml
ownerCommands:
- "SENDMESSAGE Trigger"
- "COMMAND2"
```

* Required: NO

### playerCommands

* More informations: -------------------
* Example:

```yaml
playerCommands:
- "DAMAGE 2"
- "effect give %player% speed 10 1"
```

* Required: NO

:::info
**ONLY FOR THE ACTIVATORS THAT ARE ACTIVATED BY AN ACTION OF A PLAYER**
:::

### silenceOutput

* Description: This makes it so any commands done by EB will not relay anything on the console panel.
* Options: true or false
* Example: 

```yaml
silenceOutput: true
```

* Required: NO (Default: false)

:::info
This command will hide only the outputs of the vanilla commands of Minecraft, like /effect

/give, ...
:::

## CancelEvent

### cancelEvent

* Description: This attribute prevents vanilla events from happening on the eb block.
* Options: true or false
* Example: 

```yaml
cancelEvent: false
```

* Required: NO (Default: false)

:::info
For example, for the activator PLAYER\_EAT\_ON if you set cancelEvent: false if the player is standing on the EB and eat, that event will not happen.
:::

### cancelEventIfInvalidRequiredLevel

* Description: This attribute prevents vanilla events from happening on the EB block if you don't have the required experience levels.
* Options: true or false
* Example: 

```yaml
cancelEventIfInvalidRequiredLevel: false
```

* Required: NO (Default: false)
* **NOTE: YOU NEED TO HAVE A REQUIRED LEVEL ATTRIBUTE FIRST IN ORDER TO USE THIS ATTRIBUTE.**

### cancelEventIfInvalidRequiredMoney

* Description: This attribute prevents vanilla events from happening on the EB block if you don't have the required money.
* Options: true or false
* Example: 

```yaml
cancelEventIfInvalidRequiredMoney: false
```

* Required: NO (Default: false)
* **NOTE: YOU NEED TO HAVE A REQUIRED MONEY ATTRIBUTE FIRST IN ORDER TO USE THIS ATTRIBUTE.**

### cancelEventIfInvalidRequiredItems

* Description: This attribute prevents vanilla events from happening on the EB block if you don't have the required items.
* Options: true or false
* Example: 

```yaml
cancelEventIfInvalidRequiredItems: false
```

* Required: NO (Default: false)
* **NOTE: YOU NEED TO HAVE A REQUIRED ITEMS ATTRIBUTE FIRST IN ORDER TO USE THIS ATTRIBUTE.**

### cancelEventIfInvalidRequiredExecutableItems

* Description: This attribute prevents vanilla events from happening on the EB block if you don't have the required executable items.
* Options: true or false
* Example: 

```yaml
cancelEventIfInvalidRequiredExecutableItems: false
```

* Required: NO (Default: false)
* **NOTE: YOU NEED TO HAVE A REQUIRED EXECUTABLE ITEM ATTRIBUTE FIRST IN ORDER TO USE THIS ATTRIBUTE.**
