---
description: >-
  These options are utilized to accomplish specific things to create simple to
  complex items
---

import CustomTag from '@site/src/components/CustomTag';

# Activators features

All this features are inside the activator, as reminder the activators allow you to execute custom actions on your ExecutableItem, it can have conditions, run commands, have cooldown, etc.

Premium features are labeled with the tag:  <CustomTag type="premium" />

## General features of an activator

### Display name of the activator

* Info: String value of the display name of the activator, it doesn't have much use, its used for the developer to recognize one activator from another. It also appears on the default message "timeLeft" inside the locale.yml file.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&eThor activator'
```

### Usage modification of the activator <CustomTag type="premium" />

* Info: Very important feature, the value of the usage of the item will be modified by this integer value. That means, if this value is positive then usage will increase and if this value is negative then the usage will decrease.
* Example: (Increasing the value of the usage by 1 each time this activator is triggered)

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list
    usageModification: 1
```

### Variables modification

* Info: Its a list of variables modification to apply to the variables inside your item. Its useful for example, for increase the value of a variable, for overriding an old value of a variable to another value, etc.
  * `variableName`: Name of the variable the variableModification is targetting
  * `type`: Type of variableModification you are using
    * SET: Override the old value of the variable and sets the modification value.
    * ADD: Apply math to the current value of the variable using the modification value. It needs the variable to be type of NUMBER. If the modification value is positive then it will increase, if its negative then it will decrease.
    * LIST\_ADD: Applied to variable type LIST, it appens the modification value to the variable list.
    * LIST\_CLEAR: Applied to variable type LIST, it clears the variable list.
    * LIST\_REMOVE: Applied to variable type LIST, it removes the modification value from the variable list.
  * `modification`: Value of modification. Its applied to the variable using the types of modifications.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of targethp to 20
        variableName: targethp 
        type: SET
        modification: 20
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by increasing it on 1
        variableName: hit
        type: MODIFICATION
        modification: 1
      varUpdt1: # Variable modification ID, you can create as many variable modifications on the activator as you want 
        # This variable modification updates the value of hit by decreasing it on 1
        variableName: durability
        type: MODIFICATION
        modification: -1
```

* Be careful when using placeholders here ! There is no problem with that, just make sure the returning output is a NUMBER, otherwise you will need to use STRING features. For example, let's update a variableModification by another variable that we know it returns a NUMBER.

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the bullets to the value of the variable max bullets, as if I was reloading a gun
        variableName: currentBullets
        type: SET
        modification: '%var_maxbullets_int%'
```

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    variablesModification:
      varUpdt0: # Variable modification ID, you can create as many variable modifications on the activator as you want  
        # This variable modification updates the value of the current bullets by the variable bullets per shot, so its decreasing our bullets depending on the amount of bullets we are firing
        variableName: currentBullets
        type: MODIFICATION
        modification: '-%var_bulletspershot%'
```

### Detailed slots

* Info: List of integer values that represents slots of the inventory where the activator will be able to work. This means, if the event occurs in one slot that is not from here then the activator won't be triggered. [More Info about the slots values.](https://docs.ssomar.com/tools-for-all-plugins-score/general-questions-or-guides/utilities#slots)
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    detailedSlots:
  - -1 # Slot for mainhand, this is not a static slot but having it on mainhand
  - 40 # This is a static slot, it represents the offhand slot.
```

### Auto update item

* Info: This feature of the activator makes that the item is updated in one of the features of the list. Be careful ! This may not be necessary depending on what you want. There are things that are updated automatically, for example, commands on the activator, conditions, cooldown, etc are updated automatically without this feature. 
* This feature targets most the visual aspects of the item, so if you created once a ExecutableItem with id:ex\_sword with a display name of "\&dExcalibur" and you distributed this item to all players and now you would like all the ExecutableItems "ex\_sword" to have the new display name of "\&eEpic Sword" then you would need to enable this feature on one of the activators of the item. Enabling the feature (autoUpdateItem) + the feature of update name (updateName).
* To make sure its correctly explained, this feature will override the current value depending on the options you enabled with the current option of the config file, and its only used for visual features. Its not necessary for common changes that don't involve the options of this feature.
  * `autoUpdateItem`: Boolean value that represents if this feature is enabled or not for the activator.
  * `updateName`: Boolean value to update the display name of the ExecutableItem. If its true, it will override the current display name of the item with the current/updated item name set on the config file of the ExecutableItem.
  * `updateLore`: Boolean value to update the lore of the ExecutableItem. If its true, it will override the current lore of the item with the current/updated lore set on the config file of the ExecutableItem.
  * `updateDurability`: Boolean value to update the current durability of the ExecutableItem. If its true, it will override the current durability of the item with the current/updated durability set on the config file of the ExecutableItem.
  * `updateAttributes`: Boolean value to update all the attributes of the ExecutableItem. If its true, it will override the current attributes of the item with the current/updated attributes set on the config file of the ExecutableItem.
  * `updateEnchants`: Boolean value to update the enchantments of the ExecutableItem. If its true, it will override the current enchantments of the item with the current/updated enchantments set on the config file of the ExecutableItem.
  * `updateCustomModelData`: Boolean value to update the custom model data value of the ExecutableItem. If its true, it will override the current custom model data of the item with the current/updated customModelData value set on the config file of the ExecutableItem.
  * `updateArmorSettings`: Boolean value to update the armor settings of the ExecutableItem. If its true, it will override the current armor settings of the item with the current/updated armor settings set on the config file of the ExecutableItem. e.g. (Armor color)
  * `updateMaterial`: Boolean value to update the material of the ExecutableItem. If its true, it will override the current material of the item with the current/updated material set on the config file of the ExecutableItem.
  * `updateHiders`: Boolean value to update the hider configuration of the ExecutableItem. If its true, it will override the current hiders configuration with the current/updated hiders setup on the config file of the ExecutableItem.
  * `updateEquippable`: Boolean value to update the hider configuration of the ExecutableItem. If its true, it will override the current equippable component of the item with the current/updated equippable setup on the config file of the ExecutableItem.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    autoUpdateItem: false
    updateName: false
    updateLore: false
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    updateArmorSettings: false
    updateMaterial: false
    updateHiders: false
    updateEquippable: false
```

### cancelEvent

* Info: Boolean value that represents if the event related to the activator is going to be cancelled or not.
  * This can be hard to understand, I think its one of the things that most people don't understand but to explain it you must know that each ACTIVATOR is related to a Minecraft event, following the idea this event occur and then the ACTIVATOR is triggered. if we enabling cancelEvent which is a feature from the activator, that means the event occur, then at almost the same time the activator gets triggered and it cancels the event, so the activator keeps running all its enabled features but the event didn't happen, cancelling it. For example:
    * If the activator is PLAYER\_HIT\_PLAYER and we enable cancelEvent then the player won't be able to hit the player due all hits are cancelled/ignored.
    * If the activator is PLAYER\_BLOCK\_BREAK and we enable cancelEvent then the player won't  be able to break blocks due the event is cancelled/ignored. 
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### commands

Commands are a list of commands that are run from the console when the activator if it meet all conditions and requirements.  You can use vanilla commands here, SCore commands and another plugin commands.

* All the command lines of this command list are placeholder parsed first with placeholders from Ssomar Plugins and then its parsed through PAPI. 
  * Its recommended to check [Placeholders list](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders) to see what placeholders can you run on each activator.

It's available in all activators type since all activators have a player involved.

* Info: Player commands is a list commands that are normally run against the player when the activator triggers.
  * This means if it has an SCore command, example: DAMAGE 5,  the damage will be applied to the user of the ExecutableItem.
    * Custom [player commands](../../../tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) available from SCore
  * You can also run commands from other plugins or vanilla commands. These commands will be executed by the console.
    * `minecraft:say Hey`
    * `money give %player% 500`
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    commands:
    - SEND_MESSAGE &eHey ! I am a message and the player who triggered this activator
      can see it ^^
    - effect give %player% regeneration 5 5 true
    - SEND_MESSAGE &dYou received regeneration :P
```

### playerConditions

* Info: You can use this conditions in all type of activators
* [Player conditions](/docs/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### worldConditions

* Info: You can use this conditions in all type of activators
* [World conditions](/docs/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: You can use this conditions in all type of activators
* [PlaceholdersConditions](/docs/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

### itemConditions

* Info: You can use this conditions in all type of activators
* [Item conditions](/docs/tools-for-all-plugins-score/custom-conditions/item-conditions.md)

## Cooldown

### Player cooldown

* Info: Cooldown options its the cooldown applied to the player who triggered this activator for this activator.
* If the activator is PLAYER\_RIGHT\_CLICK, it has some commands \[] and the cooldown is 30 seconds, if the player triggers this activator he will need to wait 30 seconds in order to make it trigger again. This doesn't prevent other player from running it between those 30 seconds as long as that player is not on cooldown too. This is a feature per player
  * `cooldown`: Integer value that represents the amount of time the cooldown will last for this activator.
  * `isCooldownInTicks`: Boolean value that sets the cooldown time to be in ticks (20 ticks = 1 second)
  * `cooldownMsg`: String value to be displayed when the player try to trigger the activator when its on cooldown
  * `displayCooldownMessage`: Boolean value to allow or prevent the message of cooldownMsg displayed if the player try to trigger the activator while he is on cooldown.
    * Placeholders that can be used:
      * %time% -> the entire cooldown in seconds
      * %time\_H% -> the hours part of the cooldown
      * %time\_M% -> the minutes part of the cooldown
      * %time\_S% -> the seconds part of the cooldown 
  * `cancelEventIfInCooldown`: Boolean value that cancels the event of the activator if the player is on cooldown. This means, if the activator is PLAYER\_HIT\_ENTITY, while he is on cooldown all the player event's of PLAYER\_HIT\_ENTITY will be cancelled and so they will be ignored, disabling the ability of the player to attack entities (reminder: that activator targets all entities except players)
  * `pauseWhenOffline`: Boolean value that pauses the cooldown if the player is offline. To better understanding, if its false, the cooldown time doesn't stop so he can leave the server, wait the cooldown and join again and he will be able to trigger the activator again. But if this feature is enabled and he left the server while on cooldown, when he joins again he will have the same remaining cooldown time that he had when he left.
  * `pausePlaceholdersConditions`: Its similar to pauseWhenOffline but it only pauses depending on certain placeholdersConditions. Example of usages would be pausing the cooldown if the player is VIP rank. So VIP rank has access to that feature.
  * `enableVisualCooldown`: Enables a visual cooldown for the item.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    cooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
```

### Global cooldown

* Info: Its the same idea as cooldown but instead of being the cooldown applied to the player its a global cooldown that is applied to all players. That means, if someone triggers the activator and it has 30 seconds of global cooldown, then no one will be able to use it after those 30 seconds  has gone. It has the same features as cooldown.
  * `cooldown`: Integer value that represents the amount of time the cooldown will last for this activator.
  * `isCooldownInTicks`: Boolean value that sets the cooldown time to be in ticks (20 ticks = 1 second)
  * `cooldownMsg`: String value to be displayed when a player try to trigger this activator when its on cooldown
  * `displayCooldownMessage`: Boolean value to allow or prevent the message of cooldownMsg displayed if the player try to trigger the activator while he is on cooldown.
    * Placeholders that can be used:
      * %time% -> the entire cooldown in seconds
      * %time\_H% -> the hours part of the cooldown
      * %time\_M% -> the minutes part of the cooldown
      * %time\_S% -> the seconds part of the cooldown 
  * `cancelEventIfInCooldown`: Boolean value that cancels the event of the activator if the player is on cooldown. This means, if the activator is PLAYER\_HIT\_ENTITY, while he is on cooldown all the player event's of PLAYER\_HIT\_ENTITY will be cancelled and so they will be ignored, disabling the ability of the player to attack entities (reminder: that activator targets all entities except players)
  * `enableVisualCooldown`: Enables a visual cooldown for the item.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    globalCooldownFeatures:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
```

### otherEICooldowns

* Info: This feature allows to apply player cooldown to specific ExecutableItems and optional specific activators. 
  * `executableItem`: ID of the ExecutableItem you want to apply cooldown to.
  * `activators`: List of strings which are the ID of the activators you want to affect for the ExecutableItem specified with cooldown. If none are selected then the cooldown will be applied to all activators of the ExecutableItem specified.
  * `cooldown`: Integer value that will be the amount of time of cooldown will be applied.
  * `isCooldownInTicks`: Boolean value that represents if the cooldown value will be on seconds or ticks. (20 ticks = 1 second)
* Tips:
  * You can specify the ExecutableItem who run this feature itself. For example if you want from one activator to apply cooldown to another activator in the same item.
  * Another idea can be applying cooldown to all damage related items if you use one of them.
  * Another example would be using this feature to allow the player to choose one of different ExecutableItems, when they choose one and triggers it, then they can't use neither the chosen one because its on cooldown nor the another ones because they are on cooldown too.
* Example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    otherEICooldowns:
      cd1: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns list
        executableItem: test 
        activators: 
        - activator0 
        cooldown: 20 
        isCooldownInTicks: false
      cd0: # otherEICooldown ID, you can create as many otherEICooldown on the otherEICooldowns
        executableItem: swordSharpness
        activators: [] 
        cooldown: 10
        isCooldownInTicks: false
```

### silenceOutput

* Info: Boolean value that makes all commands run from commands features such as (playerCommands, blockCommands, entityCommands and targetCommands) will not have an output on the **console**.
  * For example, using the minecraft vanilla command effect give \[...] normally has an output on the console with this format: "Applied effect strength to \<playerName>", well, to disable this output you can enable this feature
    *

        
* Example: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activator    
    commands:
    - effect give %player% strength 5 5
    silenceOutput: true
```

* Its important to understand that this feature is made to disable vanilla commands output, if you use another plugin command and it has a console output, its not our side who should fix it, the other plugin should provide you a way to hide those messages. Anyways, because we are gentle you have a way to customize messages from being hidden so you can have the default messages silenced by silenceOutput + custom messages you would like to add. This process is handled by Score config file more information here and how to do it here [https://docs.ssomar.com/tools-for-all-plugins-score/score/general-config](https://docs.ssomar.com/tools-for-all-plugins-score/score/general-config) .

## Required features <CustomTag type="premium" />

This section is for setting up features related to required things in order to be able to trigger the activator. This means that if the event happens, the activator will only run if the player matches this required setup. The items will be consumed in the process.

* If you would like the items not to get consumed then not use "required" feature but use conditions which are just conditions and doesn't consume.

### requiredExecutableItems <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement an ExecutableItem(s). If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `executableItem`: ExecutableItem ID that is needed as requiremennt
  * `amount`: Integer of amount of items that are needed as requirement.
  * `usageConditions`: Optional string condition in format of `(==, !=, >, <, >=, <=){number}` to the usage condition of the ExecutableItem.
    * This means, if the condition is >=5 then the requirement is that the Executableitem chosen must be on the player inventory as its a requirement but also needs to have usage over or equal a value of 5.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExecutableItems:
      requiredEI0: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: moon
        amount: 1
        usageConditions: '>=5'
      requiredEI1: # requiredEI ID, you can create as many requiredEI on the requiredExecutableItems
        executableItem: sun
        amount: 1
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredItems <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement vanilla item(s). If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `material`: Vanilla MATERIAL that is needed as requirement.
  * `amount`: Integer of amount of items that are needed as requirement.
  * `notExecutableItem`: Boolean value to make the requirement able to be a ExecutableItem or not.
    * This means, if the requirement is STONE, and this feature is not enabled, then the requirement will meet with vanilla STONE(s) and ExecutableItem(s) with material of STONE and so will be consumed. If you don't want this to happen then enable this feature.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredItems:
      requiredItem0: # requiredItem ID, you can create as many requiredItem on the requiredItems
        material: STONE
        amount: 1
        notExecutableItem: true
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredMoney <CustomTag type="premium" />

* Info: This feature needs the plugin called "Vault". This feature allows the activator to have as requirement money from Vault. If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `requiredMoney`: Float value that represents the amount of money needed as requirement.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### requiredLevel <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement vanilla experience levels. If the player meets this requirement the requirement will be consumed and the activator will run. Don't confuse experience levels with experience, more info here [https://minecraft.fandom.com/wiki/Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `requiredLevel`: Integer value that represents the amount of Minecraft vanilla experience level(s) needed as requirement.
* Example:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### requiredExperience <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement minecraft vanilla experiencei. If the player meets this requirement the requirement will be consumed and the activator will run. Don't confuse experience with experience levels, they are different things, more info at [https://minecraft.fandom.com/wiki/Experience](https://minecraft.fandom.com/wiki/Experience)
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `requiredExperience`: Integer value that represents the amount of experience needed as requirement.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### RequiredMana <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement mana from [**AureliumSkills**](https://www.spigotmc.org/resources/auraskills.81069/), [**MMOCore**](https://www.spigotmc.org/resources/%E2%AD%90-mmocore-%E2%AD%90-classes-skills-levels-skill-trees-professions-mana-waypoints.70575/) and [**AuraSkills**](https://www.spigotmc.org/resources/auraskills.81069/). If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `requiredMana`: Integer value that represents the amount of mana needed as requirement.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMana:
      requiredMana: 10
      errorMessage: '&c You dont meet the requirement'
```

:::info
Compatible with AureliumSkills, MMOCore and AuraSkills
:::

### RequiredMagic (EcoSkills) <CustomTag type="premium" />

* Info: This feature allows the activator to have as requirement magic from [**EcoSkills**](https://www.spigotmc.org/resources/ecoskills-%E2%AD%95-addictive-mmorpg-skills-%E2%9C%85-create-skills-stats-effects-mana-%E2%9C%A8-plug-play.95541/). If the player meets this requirement the requirement will be consumed and the activator will run.
  * `cancelEventIfError`: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * `errorMessage`: String message that will be sent to the player if the player doesn't meet the requirement.
  * `magicID`: The ID of the magic in EcoSkills.
  * `amount`: Amount of magic of the magicID needed as requirement.

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMagics:
      requiredMagic_0: # requiredMagic ID, you can create as many requiredMagic on the requiredMagics
        magicID: mana
        amount: 70
      errorMessage: '&c You dont meet the requirement'
```

## Features exclusive depending on type of activator

To make the features more understandable on where activators do they work, we will create 5 types of categories to group activators, so if one of the features say one of this categories then you'll know the feature works for all the activators on that category.  

* <CustomTag type="player_none" />: This type of activators are exclusive to the player who triggered the activator of the ExecutableItem and don't involve anything else. Abbreviaton \[P\_N]
* <CustomTag type="player_block" />: This type of activators are involved with the player who triggered the activator of the ExecutableItem and the block involved in the activator. Abbreviaton \[P\_B]
  * PLAYER\_ALL\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_PLACE <CustomTag type="premium" compact />
  * PLAYER\_BRUSH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FERTILIZE\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_FISH\_BLOCK <CustomTag type="premium" compact />
  * PLAYER\_HARVEST\_BLOCK
  * PLAYER\_LEFT\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PLAYER\_RIGHT\_CLICK (with feature typeTarget: ONLY\_BLOCK)
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="player_entity" />: This type of activators are involved with the player who triggered the activator of the ExecutableItem and an entity involved in the activator. Abbreviaton \[P\_E]
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BUCKET\_ENTITY
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CUSTOM\_LAUNCH (The entity is the projectile that is being launched) <CustomTag type="premium" compact />
  * PLAYER\_DISMOUNT <CustomTag type="premium" compact />
  * PLAYER\_FISH\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_SHEAR\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_TARGETED\_BY\_AN\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="player_target" />: This type of activators are involved with the player who triggered the activator of the ExecutableItem and another player called "target" which is considered as target/enemy. Abbreviation \[P\_T]
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_BREAK\_SHIELD\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
  * PLAYER\_FISH\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_HIT\_PLAYER
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_SHIELD\_BREAK\_BY\_PLAYER <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
  * Etc, more information on [Activators info](list-of-the-activators)
* <CustomTag type="specific_activators" /> If there is a feature that contains different activators across the categories then its better for understanding creating a new temporal list, which will be mentioned on the feature. Abbreviation \[S\_A\_L]  

### \[P\_B] blockCommands <CustomTag type="player_block" />

Commands are a list of commands that are run from the console when the activator if it meet all conditions and requirements.  You can use vanilla commands here, SCore commands and another plugin commands.

* All the command lines of this command list are placeholder parsed first with placeholders from Ssomar Plugins and then its parsed through PAPI. 
  * Its recommended to check [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders) to see what placeholders can you run on each activator.
* There are three type of entity targets on commands
  * Player: Its the player/user who triggered the activator on the ExecutableItem
  * Target: Its the player targeted/enemy involved in an activator.
  * Entity: Its the entity/mob/enemy involved in an activator.
* Type of activator category: PLAYER\_BLOCK
* Info: List of commands that are normally run against the block when the activator triggers.
  * This means, the activator must have involved with a block, for example PLAYER\_HIT\_PLAYER is an activator, but it doesn't involve a block, so blockCommands are not available here. With the activator PLAYER\_BLOCK\_BREAK there is a block involved so blockCommands are available here.
  * Another example PLAYER\_RIGHT\_CLICK has an activatorFeature called typeTarget, by default its ONLY\_AIR so blockCommands are not available due the activator is not involved with a block, but, typeTarget can be changed to ONLY\_BLOCK and then the activator will have as available features blockCommands, more info here -> \<IF I FORGOT PLS PING VAYK>
  * You can check the list of blockCommands here -> [Block commands](/docs/tools-for-all-plugins-score/custom-commands/block-commands)
* Example:

```yaml
activators: 
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    blockCommands:
    - EXPLODE
```

* Its important to understand that having blockCommands doesn't mean don't having player commands, on the activator PLAYER\_BLOCK\_BREAK there is two target involved, the player and the block, so we can have for example:

```yaml
activators:
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    commands:
    - SEND_MESSAGE &6You have broken a block, it will explode in 5 seconds !
    blockCommands:
    - DELAY 5
    - EXPLODE
```

### \[P\_B] detailedBlocks <CustomTag type="player_block" />

* Type of activator category: PLAYER\_BLOCK
* Info: Feature for activators that involves a block, here you can select as condition the type of block(s) where this activator will trigger by using this feature.
  * You can select blocks from Minecraft Vanilla like:
    * "STONE"
  * <CustomTag type="premium" /> <CustomTag type="version" version="1.13" /> You can select blocks from Minecraft Vanilla with NBT (info: [Block\_states](https://minecraft.fandom.com/wiki/Block_states)) like: 
    * `FURNACE{lit:true}`
  * You can select blocks from ItemsAdder like:
    * "ITEMSADDER:\<id>"
  * You can select blocks from ExecutableBlocks like:
    * "EXECUTABLEBLOCKS:\<id>"
  * You can blacklist certain blocks adding ! at the beginning like:
    * "!DIRT"
  * You can add Block Tags like: 
    * "#MINECRAFT:MINEABLE/PICKAXE"
  * You can add group of blocks like
    * "ALL\_ORES"

<details>

<summary>List of group of blocks</summary>

```
    ALL_CHESTS,
    ALL_FURNACES,
    ALL_PLANKS,
    ALL_LOGS,
    ALL_STRIPPED_LOGS,
    ALL_STRIPPED_WOODS,
    ALL_WOODS,
    ALL_ORES,
    ALL_WOOLS,
    ALL_SLABS,
    ALL_STAIRS,
    ALL_FENCES,
    ALL_SAPLINGS,
    ALL_CROPS,
    ALL_DOORS,
    ALL_TRAPDOORS,
    ALL_BEDS,
    ALL_TERRACOTTA,
    ALL_NORMAL_TERRACOTTA,
    ALL_GLAZED_TERRACOTTA,
    ALL_CONCRETE,
    ALL_CONCRETE_POWDERS,
    ALL_GLASS,
    ALL_STAINED_GLASS,
    ALL_SHULKER_BOXES,
    ALL_LEAVES,
    ALL_CARPETS;
```

</details>

* Example:

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_BLOCK_BREAK
    detailedBlocks:
      blocks:
      - STONE
      - COBBLESTONE
      - ANDESITE
      - FURNACE{lit:true} #(🎇 **BLOCK STATE FEATURE IS PREMIUM EXCLUSIVE ONLY AND FOR 1.13+** 🎇)
      - ITEMSADDER:turquoise_block
      - EXECUTABLEBLOCKS:CUSTOMDIRT
      - !DIRT
      - ALL_ORES
      - '#MINECRAFT:MINEABLE/PICKAXE'
      cancelEventIfNotValid: false
```

### \[P\_B] blockConditions <CustomTag type="player_block" />

* Type of activator category: PLAYER\_BLOCK
* Info: Feature for activators that involves a block, here you can setup conditions for the block involved.
* [Block conditions](/docs/tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### \[P\_E] entityCommands <CustomTag type="player_entity" />

Commands are a list of commands that are run from the console when the activator if it meet all conditions and requirements.  You can use vanilla commands here, SCore commands and another plugin commands.

* All the command lines of this command list are placeholder parsed first with placeholders from Ssomar Plugins and then its parsed through PAPI. 
  * Its recommended to check [Placeholders](/docs/tools-for-all-plugins-score/placeholders) to see what placeholders can you run on each activator.
* There are three type of entity targets on commands
  * Player: Its the player/user who triggered the activator on the ExecutableItem
  * Target: Its the player targeted/enemy involved in an activator.
  * Entity: Its the entity/mob/enemy involved in an activator.
* Type of activator category: PLAYER\_ENTITY
* Info: List of commands that are normally run agaisnt the entity when the activator triggers.
  * By entity it means entity/mob/enemy involved in an activator.
  * We know the player is considered as entity, but the entity involved in activators is only the mob/enemy involved in the event.
  * You can check the list of entity commands here [Entity commands](/docs/tools-for-all-plugins-score/custom-commands/entity-commands)
* Example:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_HIT_ENTITY
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

* Its important to understand that having entityCommands doesn't mean don't having player commands, on the activator PLAYER\_HIT\_ENTITY there is two target involved, the player and the entity, so we can have for example: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_HIT_ENTITY
    commands:
    - SEND_MESSAGE &#x26;cThe power of the fire will rise in 5 seconds on the entity
    entityCommands:
    - DELAY 5
    - DAMAGE 10
    - BURN 2
```

### \[P\_E] detailedEntities <CustomTag type="player_entity" />

* Type of activator category: PLAYER\_ENTITY
* Info:  For activators that involves an entity you can select as condition the type of entity(es) where this activator will trigger by using this feature.
  * You can select a vanilla Minecraft entity (info: [EntityType list](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) like:
    * "ZOMBIE"
  * <CustomTag type="premium" /> It requires [NBTAPI Plugin](https://modrinth.com/plugin/nbtapi) You can select a vanilla Minecraft mob with NBT (info: [NBT Tags of entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) like:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * You can select a MythicMob mob like:
    * "MM-\<ID>"
  * You can blacklist a mob by usinig ! like
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_HIT_ENTITY
    detailedEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### \[P\_E] entityConditions <CustomTag type="player_entity" />

* Type of activator category: PLAYER\_ENTITY
* Info: Feature for activators that involves a entity, here you can setup conditions for the entity involved.
* [Entity conditions](/docs/tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### \[P\_T] targetCommands <CustomTag type="player_entity" />

Commands are a list of commands that are run from the console when the activator if it meet all conditions and requirements.  You can use vanilla commands here, SCore commands and another plugin commands.

* All the command lines of this command list are placeholder parsed first with placeholders from Ssomar Plugins and then its parsed through PAPI. 
  * Its recommended to check [Placeholders](/docs/tools-for-all-plugins-score/placeholders) to see what placeholders can you run on each activator.
* There are three type of entity targets on commands
  * Player: Its the player/user who triggered the activator on the ExecutableItem
  * Target: Its the player targeted/enemy involved in an activator.
  * Entity: Its the entity/mob/enemy involved in an activator.
* Type of activator category: PLAYER\_TARGET
* Info: Target commands is a list commands that are normally run against the target when the activator triggers.
  * This means if it has an SCore command of DAMAGE 5, if its on targetCommands then the damage will be applied to the target/enemy involved in the activator.
  * Its "normally run against the player" because this works for SCore commands, remember you can use another plugin commands or vanilla commands, so if you add "effect give %player% strength 5 5" even though its on targetCommands, the parse of placeholders will apply the cooldown to %player%. If you would like to apply this command to target then use %target%. More information on [Placeholders](/docs/tools-for-all-plugins-score/placeholders)
  * You can check the list of targetCommands here -> [Player & Target commands](/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands)
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

* Its important to understand that having targetCommands doesn't mean don't having player commands, on the activator PLAYER\_HIT\_PLAYER there is two target involved, the player and the target, so we can have for example: 

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    commands:
    - SEND_MESSAGE &eYou have hit %target%, he cant pick up items in 5 seconds
    targetCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%, in 5 seconds you can't pick up items
    - CANCEL_PICKUP time:100
```

### \[P\_T] targetConditions  <CustomTag type="player_target" />

* Type of activator category: PLAYER\_TARGET
* Info: Feature for activators that involves a player target, here you can setup conditions for the player target involved.
* [Target conditions](/docs/tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)

### \[S\_A\_L] detailedItems <CustomTag type="specific_activators" />

* Type of activator category: Specific activator list
  * 🔹PLAYER\_DROP\_ITEM
  * 🔹PLAYER\_CONSUME
* Info: For activators that involves an item you can select as condition the type of item(s) where this activator will trigger by using this feature.
  * You can select a Minecraft vanilla item like:
    * "STONE"
  * You can select a Minecraft vanilla item with NBT like:
    *  `DIRT{CUSTOMMODELDATA:5}`
  * You can blacklist items using ! like:
    * "!TORCH"
* Example:

```yaml
activators:
  activator3: # Activator ID, you can create as many activator on the activators list  
    option: PLAYER_DROP_ITEM
    detailedItems:
      items:
      - DIRT{CUSTOMMODELDATA:5}
      - !TORCH
      cancelEventIfNotValid: false
      messageIfNotValid: '&4&l[Error] &cthe item is not correct !'
```

### \[S\_A\_L] detailedDamageCauses <CustomTag type="specific_activators" />

* Type of activator category: Specific Activator List
  * PLAYER\_BLOCK\_HIT\_OF\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_HIT\_OF\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_BY\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_RECEIVE\_HIT\_GLOBAL <CustomTag type="premium" compact />
  * PLAYER\_DEATH
  * PLAYER\_HIT\_PLAYER
* Info: Feature for activators that involves damage, here you can select as condition the type of damage that is either received or dealt depending on the activator you are using.
* Example:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_DEATH
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```

### \[S\_A\_L] detailedEffects <CustomTag type="specific_activators" />

* Type of activator category: Specific Activator List
  * PLAYER\_RECEIVE\_EFFECT <CustomTag type="premium" compact />
* Info: Feature for activators that involves effects, here you can select as condition the type of effect involved to trigger the activator.
* Example:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_RECEIVE_EFFECT
    detailedEffects:
      effects:
      - SPEED
      cancelEventIfNotValid: true
      messageIfNotValid: '&#x26;cYou cant use the activator since you dont meet the effect
        condition'
```

### \[S\_A\_L] detailedCommands <CustomTag type="specific_activators" />

* Type of activator category: Specific Activator List
  * PLAYER\_WRITE\_COMMAND <CustomTag type="premium" compact />
* Info: Feature for activators that involves commands, here you can select as condition the command the activator should run with.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_WRITE_COMMAND
    detailedCommands:
    - customHealCommand
    commands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```

### \[S\_A\_L] desactiveDrops <CustomTag type="specific_activators" />

* Type of activator category: Specific Activator List
  * PLAYER\_KILL\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_BLOCK\_BREAK <CustomTag type="premium" compact />
  * PLAYER\_KILL\_PLAYER <CustomTag type="premium" compact />
  * PLAYER\_FISH\_FISH <CustomTag type="premium" compact />
* Info: Boolean value that allows or prevents the vanilla loot to be dropped when breaking blocks or killing mobs. Since its vanilla drops, custom drops from custom mobs e.g. (MythicMobs) will not get affected by this.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
```

### \[S\_A\_L] typeTarget <CustomTag type="specific_activators" />

* Type of activator category: Specific Activator List
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK
* Info: Feature that restricts the activator so it will only get activated/triggered when the event occurred with certain type of clicking
  * typeTarget
    * ONLY\_AIR: Restricts the activator so it will only get activated/triggered when the event occurred when clicking only in the air, it means if you clicked on a block the activator won't get triggered. Don't get confuse ! You may think, what happens if I click on a player ? which will not be a block so its on the "air" well.. that even is outside the instance of PLAYER\_(CLICK) type activators, that event is instance of PLAYER\_CLICK\_ON\_PLAYER so the activator won't trigger too, it must be instance of PLAYER\_(CLICK).
    * ONLY\_BLOCK: Restricts the activator so it will only get activated/triggered when the event occurred with clicking only in a block. This means if you clicked on the air the activator won't get triggered.
      * This feature makes the activator a block instance activator so it will have blockCommands.
    * NO\_TYPE\_TARGET: Doesn't restrict the activator on the type of click, both type will be accepted, air clicks and block clicks.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    commands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_ALL_CLICK
    typeTarget: ONLY_BLOCK
    commands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```

### \[S\_A\_L] detailedClick <CustomTag type="specific_activators" />

* Type of activator category: Specific Activator List
  * PLAYER\_CLICK\_ON\_ENTITY <CustomTag type="premium" compact />
  * PLAYER\_CLICK\_ON\_PLAYER
* Info: Feature that restricts the activator triggers only if the correct click is involved in the event.
  * detailedClick
    * RIGHT: Restricts the activator only work when the even occurred with the right click
    * LEFT: Restricts the activator only work when the even occurred with the left click
    * RIGHTORLEFT: Doesn't restrict the type of click for this activator, it will allow right and left click.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_CLICK_ON_ENTITY
    detailedClick: LEFT
```

### \[S\_A\_L] mustBeAProjectileLaunchWithTheSameEI <CustomTag type="specific_activators" />

* Type of activator category: Specific Activator List
  * PROJECTILE\_ENTER\_IN\_LIQUID <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_BLOCK <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_ENTITY <CustomTag type="premium" compact />
  * PROJECTILE\_HIT\_PLAYER
* Info: Feature for the activator that are related to projectile, it affects if the activator should run with projectiles not launched by the same EI.
  * Example, there is an activator PROJECTILE\_HIT\_ENTITY, detailedSlots: \[all slots] and on commands: \["say hi"]
    * If the feature is enabled, then it will only work if this ExecutableItem has another activator that has LAUNCH command, so, the projectile will be launched from the EI and then the condition will met
    * If the feature is disabled, all projectiles, such as: vanilla bow, vanilla snowball, projectiles from others ExecutableItems, and projectile for the ExecutableItem itself will run the activator.
  * Example:

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: PROJECTILE_HIT_ENTITY
    mustBeAProjectileLaunchWithTheSameEI: true
```

### \[S\_A\_L] delay and delayTick <CustomTag type="specific_activators" />

* Type of activator category: Specific Activator List
  * LOOP <CustomTag type="premium" compact />
* Info: Features of the activator that changes the interval time where this activator triggers, it affects the behavior of the loop repetitions of the activator.
  * delay: Integer value that represents how many seconds will the loop be. This means, each \<delay> \[time] the loop will trigger again. e.g. (If the delay is 30 seconds then each 30 seconds the activator will trigger)
  * delayTick: Boolean value to set the delay time in ticks, otherwise it is in seconds. (20 ticks = 1 second)
* Example: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: LOOP
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
