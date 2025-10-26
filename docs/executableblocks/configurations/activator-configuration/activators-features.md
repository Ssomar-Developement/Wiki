---
description: >-
  These options are utilized to accomplish specific things to create simple to
  complex items
---

# Activators features

## General features

### displayName

* Example:

```yaml
displayName: "&6Walking on me"
```

* Description: It appears on the default `timeLeft:` message in the locale and on the default condition message.
* Required: NO, (Default "an activator")

### usageModification

* Example:

```yaml
usageModification: -1
```

* Description: Increase or Decrease the current amount of usage of the item.
* Required: NO, (Default -1)

### requiredLevel

* Example

```yaml
requiredLevel: 1
requiredLevelMsg: '&e'  #<- Here is where you can add the custom message.
```

* Description: This attribute checks if the player has the required amount of Experience Levels or more in order to activate. If the player has the right amount of Experience Levels or more, this activator will take away the required amount of Experience Levels.
  * Example:
    * `If you have 216 Levels and the amount is 'requiredLevel: 99', the attribute will take away 99 levels from your 216 levels leaving 117 levels left in you and the activator will run.`
    * `If you have 60 levels and the amount is 'requiredLevel: 400', the attribute will reject the player and the activator will not run.`
* Required: NO, (Default: No level is required)
* More Info: You can edit the message in locale or directly by adding this in the file: `requiredLevelMsg: "&4&lError you need...."`
* If you don't want any messages to appear, add this in the file: `requiredLevelMsg: '&e'`

### requiredMoney

* Example:

```yaml
requiredMoney: 500
requiredMoneyMsg: '&e'  #<- Here is where you can add the custom message.
```

* Description: This attribute checks if you have the required amount of money or more in order to activate. If the player has enough money, the value under requiredMoney will take away that amount from your current money.
  * Example:
    * `If you have 150k money and the amount is 'requiredMoney: 100000', the attribute will take away 100k from your 150k leaving 50k money left in you and the activator will run.`
    * `If you have 70k money and the amount is 'requiredMoney: 200000', the attribute will reject the player and the activator will not run.`
* Required: NO, (Default: No money is required)
* More Info: You can edit the message in locale or directly by adding this in the file: `requiredMoneyMsg: "&4&lError you need...."`
* If you don't want any messages to appear, add this in the file: `requiredMoneyMsg: '&e'`

### requiredItems

* Example:

```yaml
requiredItems: 
  - DIAMOND:5
  - EMERALD:3
requiredItemsMsg: '&e'  #<- Here is where you can add the custom message.
```

* Description: This attribute searches for the required vanilla items in the player's inventory in order to activate. (The required items are consumed after activating the activator)
* Required: NO, (Default: No item is required)
* More info: You can edit the message in locale or directly by adding this in the file: `requiredItemsMsg: "&4&lError you need...."`
* If you don't want any messages to appear, add this in the file: `requiredItemsMsg: '&e'`

### requiredExecutableItems

* Example:

```yaml
requiredExecutableItems: 
  requiredEI1:
   id: EXECUTABLEITEMS_ID_HERE
   amount: 3
   consume: true/false
   validUsages: #OPTIONAL DELETE THIS OPTION IF YOU DONT WANT A VERIFICATION OF USAGE
   - 1
   - 3
   - 4
requiredExecutableItemsMsg: '&e'  #<- Here is where you will add the custom message.
```

* Description: This attribute searches for the required executable items in the player's inventory in order to activate.
* Required: NO, (Default: No EI is required)
* More Info: You can edit the message in locale or directly by adding this in the file: 

```yaml
requiredExecutableItemsMsg: "&4&lError you need...."
```

* If you don't want any messages to appear, add this in the file: 

```yaml
requiredExecutableItemsMsg: '&e'
```

### RequiredMana

* Description: Checks if the player has the required amount of mana or more in order to activate.
  * If this condition match, the mana will be consumed, if you don't want this to happen use a condition placeholder.

```yaml
    requiredMana:
      requiredMana: 10
```

### RequiredMagic (EcoSkills)

* Description: Checks if the player has the required amount of magic or more in order to activate.

```yaml
   requiredMagics:
      requiredMagic_0:
        magicID: mana
        amount: 70
```

## Cooldown

### Global player cooldown

* Example:

```yaml
globalPlayerCooldown: 60
```

* Description: Cooldown for activating an activator will be global.

### Per player cooldown

* Example:

```yaml
perPlayerCooldown: 60
```

* Description: Cooldown for activating an activator will be per player.

### In tick cooldown

* Example:

```yaml
inTickGlobalPlayerCooldown: false
inTickPerPlayerCooldown: true
```

* Description: Cooldown will be in ticks instead of seconds.

:::info
20 ticks = 1 second
:::

### Display message

* Example:

```yaml
globalPlayerCooldownMsg: '&ehey'
perPlayerCooldownMsg: '&eyup'
```

* Description: This will be the message that will be displayed when trying to activate an activator in cooldown.

### Cancel event

* Example:

```yaml
cancelEventIfInGlobalPlayerCooldown: false
cancelEventIfInPerPlayerCooldown: false
```

* Description: This will cancel event (activator) while being in cooldown.

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
