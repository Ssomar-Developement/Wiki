---
description: >-
  These options are utilized to accomplish specific things to create simple to
  complex items
---

# Activators features

All this features are inside the activator, as reminder the activators allow you to execute custom actions on your ExecutableItem, it can have conditions, run commands, have cooldown, etc.

Starred features ⭐ are for premium version.

## General features of an activator

### Display name of the activator

* Info: String value of the display name of the activator, it doesn't have much use, its used for the developer to recognize one activator from another. It also appears on the default message "timeLeft" inside the locale.yml file.
* Example: 

```yaml
activators:**
  activator0: # Activator ID, you can create as many activator on the activators list
    name: '&#x26;eThor activator'
```

### Variables modification

* Info: Its a list of variables modification to apply to the variables inside your item. Its useful for example, for increase the value of a variable, for overriding an old value of a variable to another value, etc.
  * variableName: Name of the variable the variableModification is targetting
  * type: Type of variableModification you are using
    * SET: Override the old value of the variable and sets the modification value.
    * ADD: Apply math to the current value of the variable using the modification value. It needs the variable to be type of NUMBER. If the modification value is positive then it will increase, if its negative then it will decrease.
    * LIST\_ADD: Applied to variable type LIST, it appens the modification value to the variable list.
    * LIST\_CLEAR: Applied to variable type LIST, it clears the variable list.
    * LIST\_REMOVE: Applied to variable type LIST, it removes the modification value from the variable list.
  * modification: Value of modification. Its applied to the variable using the types of modifications.
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

### cancelEvent

* Info: Boolean value that represents if the event related to the activator is going to be cancelled or not.
  * This can be hard to understand, I think its one of the things that most people don't understand but to explain it you must know that each ACTIVATOR is related to a Minecraft event, following the idea this event occur and then the ACTIVATOR is triggered. if we enabling cancelEvent which is a feature from the activator, that means the event occur, then at almost the same time the activator gets triggered and it cancels the event, so the activator keeps running all its enabled features but the event didn't happen, cancelling it. For example:
    * If the activator is PLAYER\_HIT\_PLAYER and we enable cancelEvent then the player won't be able to hit the player due all hits are cancelled/ignored.
    * If the activator is PLAYER\_BLOCK\_BREAK and we enable cancelEvent then the player won't  be able to break blocks due the event is cancelled/ignored. 
* Example: 

```yaml
activators:**
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    cancelEvent: true
```

### worldConditions

* Info: You can use this conditions in all type of activators
* [World conditions](../../../tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: You can use this conditions in all type of activators
* [PlaceholdersConditions](../../../tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

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

## ⭐Required features

This section is for setting up features related to required things in order to be able to trigger the activator. This means that if the event happens, the activator will only run if the player matches this required setup. The items will be consumed in the process.

* If you would like the items not to get consumed then not use "required" feature but use conditions which are just conditions and doesn't consume.

### ⭐requiredExecutableItems

* Info: This feature allows the activator to have as requirement an ExecutableItem(s). If the player meets this requirement the requirement will be consumed and the activator will run.
  * cancelEventIfError: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * errorMessage: String message that will be sent to the player if the player doesn't meet the requirement.
  * executableItem: ExecutableItem ID that is needed as requiremennt
  * amount: Integer of amount of items that are needed as requirement.
  * usageConditions: Optional string condition in format of `(==, !=, >, <, >=, <=){number}` to the usage condition of the ExecutableItem.
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

### ⭐requiredItems

* Info: This feature allows the activator to have as requirement vanilla item(s). If the player meets this requirement the requirement will be consumed and the activator will run.
  * cancelEventIfError: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * errorMessage: String message that will be sent to the player if the player doesn't meet the requirement.
  * material: Vanilla MATERIAL that is needed as requirement.
  * amount: Integer of amount of items that are needed as requirement.
  * notExecutableItem: Boolean value to make the requirement able to be a ExecutableItem or not.
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

### ⭐requiredMoney 

* Info: This feature needs the plugin called "Vault". This feature allows the activator to have as requirement money from Vault. If the player meets this requirement the requirement will be consumed and the activator will run.
  * cancelEventIfError: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * errorMessage: String message that will be sent to the player if the player doesn't meet the requirement.
  * requiredMoney: Float value that represents the amount of money needed as requirement.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredMoney:
      requiredMoney: 1200.0
      cancelEventIfError: true
      errorMessage: '&c You dont meet the requirement'
```

### ⭐requiredLevel

* Info: This feature allows the activator to have as requirement vanilla experience levels. If the player meets this requirement the requirement will be consumed and the activator will run. Don't confuse experience levels with experience, more info here [https://minecraft.fandom.com/wiki/Experience](https://minecraft.fandom.com/wiki/Experience)
  * cancelEventIfError: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * errorMessage: String message that will be sent to the player if the player doesn't meet the requirement.
  * requiredLevel: Integer value that represents the amount of Minecraft vanilla experience level(s) needed as requirement.
* Example:

```yaml
 activators:  
  activator1: # Activator ID, you can create as many activators on the activator
     requiredLevel:
      requiredLevel: 50
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### ⭐requiredExperience

* Info: This feature allows the activator to have as requirement minecraft vanilla experiencei. If the player meets this requirement the requirement will be consumed and the activator will run. Don't confuse experience with experience levels, they are different things, more info at [https://minecraft.fandom.com/wiki/Experience](https://minecraft.fandom.com/wiki/Experience)
  * cancelEventIfError: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * errorMessage: String message that will be sent to the player if the player doesn't meet the requirement.
  * requiredExperience: Integer value that represents the amount of experience needed as requirement.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator
    requiredExperience:
      requiredExperience: 20
      errorMessage: '&c You dont meet the requirement'
      cancelEventIfError: true
```

### ⭐RequiredMana

* Info: This feature allows the activator to have as requirement mana from **AureliumSkills**, **MMOCore** and **AuraSkills**. If the player meets this requirement the requirement will be consumed and the activator will run.
  * cancelEventIfError: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * errorMessage: String message that will be sent to the player if the player doesn't meet the requirement.
  * requiredMana: Integer value that represents the amount of mana needed as requirement.
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

### ⭐RequiredMagic (EcoSkills)

* Info: This feature allows the activator to have as requirement magic from **EcoSkills**. If the player meets this requirement the requirement will be consumed and the activator will run.
  * cancelEventIfError: Boolean value that represents if the event will be cancelled if the player doesn't have the requirement.
    * This means, for example, let's say there is an event of PLAYER\_HIT\_ENTITY, and it occurs but the player doesn't have the requirements in order to trigger the activator, if this feature is enabled the event of PLAYER\_HIT\_ENTITY will be cancelled so the player even though its clicking/hit the entity, the entity is not getting damage because in reality the event is not occurring due its being cancelled.
  * errorMessage: String message that will be sent to the player if the player doesn't meet the requirement.
  * magicID: The ID of the magic in EcoSkills.
  * amount: Amount of magic of the magicID needed as requirement.

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

To make the features more understandable on which activators they work, we created categories :

* \[P\_*] : It means that the main actor of the event/activator is a player
* \[E\_*] : It means that the main actor of the event/activator is an entity
* \[B\_*] : It means that the main actor of the event/activator is a block
* \[*\_TP] : It means that the second actor of the event/activator is a player (we will call it target player)
* \[*\_TE] : It means that the second actor of the event/activator is an entity (we will call it target entity)
* \[*\_TB] : It means that the second actor of the event/activator is a block (we will call it target block)
* \[S\_A\_L] : Specific activator list: Other custom features specific to some activators

### \[P\_*] commands

It's available in all activators that contains a player as the principal actor of the event.

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

### \[P\_*] playerConditions

It's available in all activators that contains a player as the principal actor of the event.

* Info: Feature for activators that involves a player, here you can setup conditions for the player involved.
* [Player conditions](../../../tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_RIGHT_CLICK
    playerConditions:
      ifSneaking: true
```

### \[P\_*] Player placeholders

When the main actor of the event is a player then you can use in your activator config (commands, conditions, other..) [the player placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#player-placeholders)

### \[B\_*] blockCommands

It's available in all activators that contains a block as the principal actor of the event.

* Info: List of commands that are normally run against the block when the activator triggers.
  * This means, the activator must have involved with a block, for example PLAYER\_HIT\_PLAYER is an activator, but it doesn't involve a block, so blockCommands are not available here. With the activator PLAYER\_BLOCK\_BREAK there is a block involved so blockCommands are available here.
  * Another example PLAYER\_RIGHT\_CLICK has an activatorFeature called typeTarget, by default its ONLY\_AIR so blockCommands are not available due the activator is not involved with a block, but, typeTarget can be changed to ONLY\_BLOCK and then the activator will have as available features blockCommands.
  * You can check the list of blockCommands here -> [https://docs.ssomar.com/tools-for-all-plugins-score/custom-commands/block-commands](https://docs.ssomar.com/tools-for-all-plugins-score/custom-commands/block-commands)
* Example:

```yaml
activators:  **
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: BLOCK_DRY
    blockCommands:
    - EXPLODE
```

### \[B\_*] detailedBlocks

* It's available in all activators that contains a block as the principal actor of the event.
* Info: Feature for activators that involves a block, here you can select as condition the type of block(s) where this activator will trigger by using this feature.
  * You can select blocks from Minecraft Vanilla like:
    * "STONE"
  * ⭐You can select blocks from Minecraft Vanilla with NBT (info: [https://minecraft.fandom.com/wiki/Block\_states](https://minecraft.fandom.com/wiki/Block_states)) like: 
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
    option: CROP_GROW
    detailedBlocks:
      blocks:
      - CARROTS
      cancelEventIfNotValid: false
```

### \[B\_*] blockConditions

* It's available in all activators that contains a block as the principal actor of the event.
* Info: Feature for activators that involves a block, here you can setup conditions for the block involved.
* [Block conditions](../../../tools-for-all-plugins-score/custom-conditions/block-conditions.md)

### \[B\_*] Block placeholders

When the main actor of the event is a block then you can use in your activator config (commands, conditions, other..) [the block placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#block-placeholders)

### \[E\_*] entityCommands

It's available in all activators that contains an entity (not player) as the principal actor of the event.

* Info: Player commands is a list commands that are normally run against the player when the activator triggers.
  * This means if it has an SCore command, example: DAMAGE 5,  the damage will be applied to the user of the ExecutableItem.
    * Custom [entity commands](../../../tools-for-all-plugins-score/custom-commands/entity-commands.md) available from SCore
  * You can also run commands from other plugins or vanilla commands. These commands will be executed by the console.
    * minecraft:say Hey
    * money give %player% 500
* Example:

```yaml
activators:  **
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_TARGET_PLAYER
    entityCommands:
    - DAMAGE 10
    - BURN 5
```

### \[E\_*] detailedEntities

* It's available in all activators that contains an entity (not player) as the principal actor of the event.
* Info:  For activators that involves an entity you can select as condition the type of entity(es) where this activator will trigger by using this feature.
  * You can select a vanilla Minecraft entity (info: [https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) like:
    * "ZOMBIE"
  * ⭐\[Requires NBTAPI Plugin] You can select a vanilla Minecraft mob with NBT (info: [https://minecraft.fandom.com/wiki/Tutorials/Command\_NBT\_tags#Entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) like:
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

### \[E\_*] entityConditions

It's available in all activators that contains an entity (not player) as the principal actor of the event.

* Info: Feature for activators that involves a entity, here you can setup conditions for the entity involved.
* [Entity conditions](../../../tools-for-all-plugins-score/custom-conditions/entity-conditions.md)

### \[E\_*] Entity placeholders

When the main actor of the event is an entity then you can use in your activator config (commands, conditions, other..) [the entity placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#entity-placeholders)

### \[P\_*, E\_*] Player cooldown

* Info: Cooldown options its the cooldown applied to the player/entity who triggered this activator for this activator.
* If the activator is PLAYER\_RIGHT\_CLICK, it has some commands \[] and the cooldown is 30 seconds, if the player triggers this activator he will need to wait 30 seconds in order to make it trigger again. This doesn't prevent other player from running it between those 30 seconds as long as that player is not on cooldown too. This is a feature per player
  * cooldown: Integer value that represents the amount of time the cooldown will last for this activator.
  * isCooldownInTicks: Boolean value that sets the cooldown time to be in ticks (20 ticks = 1 second)
  * cooldownMsg: String value to be displayed when the player try to trigger the activator when its on cooldown
  * displayCooldownMessage: Boolean value to allow or prevent the message of cooldownMsg displayed if the player try to trigger the activator while he is on cooldown.
    * Placeholders that can be used:
      * %time% -> the entire cooldown in seconds
      * %time\_H% -> the hours part of the cooldown
      * %time\_M% -> the minutes part of the cooldown
      * %time\_S% -> the seconds part of the cooldown 
  * cancelEventIfInCooldown: Boolean value that cancels the event of the activator if the player is on cooldown. This means, if the activator is PLAYER\_HIT\_ENTITY, while he is on cooldown all the player event's of PLAYER\_HIT\_ENTITY will be cancelled and so they will be ignored, disabling the ability of the player to attack entities (reminder: that activator targets all entities except players)
  * pauseWhenOffline: Boolean value that pauses the cooldown if the player is offline. To better understanding, if its false, the cooldown time doesn't stop so he can leave the server, wait the cooldown and join again and he will be able to trigger the activator again. But if this feature is enabled and he left the server while on cooldown, when he joins again he will have the same remaining cooldown time that he had when he left.
  * pausePlaceholdersConditions: Its similar to pauseWhenOffline but it only pauses depending on certain placeholdersConditions. Example of usages would be pausing the cooldown if the player is VIP rank. So VIP rank has access to that feature.
  * enableVisualCooldown: Enables a visual cooldown for the item.
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

### \[P\_*, E\_*] Global cooldown

* Info: Its the same idea as cooldown but instead of being the cooldown applied to the player its a global cooldown that is applied to all players/entities. That means, if someone triggers the activator and it has 30 seconds of global cooldown, then no one will be able to use it after those 30 seconds  has gone. It has the same features as cooldown.
  * cooldown: Integer value that represents the amount of time the cooldown will last for this activator.
  * isCooldownInTicks: Boolean value that sets the cooldown time to be in ticks (20 ticks = 1 second)
  * cooldownMsg: String value to be displayed when a player try to trigger this activator when its on cooldown
  * displayCooldownMessage: Boolean value to allow or prevent the message of cooldownMsg displayed if the player try to trigger the activator while he is on cooldown.
    * Placeholders that can be used:
      * %time% -> the entire cooldown in seconds
      * %time\_H% -> the hours part of the cooldown
      * %time\_M% -> the minutes part of the cooldown
      * %time\_S% -> the seconds part of the cooldown 
  * cancelEventIfInCooldown: Boolean value that cancels the event of the activator if the player is on cooldown. This means, if the activator is PLAYER\_HIT\_ENTITY, while he is on cooldown all the player event's of PLAYER\_HIT\_ENTITY will be cancelled and so they will be ignored, disabling the ability of the player to attack entities (reminder: that activator targets all entities except players)
  * enableVisualCooldown: Enables a visual cooldown for the item.
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

### \[*\_TP] targetPlayerCommands

It's available in all activators that contains a player targeted as the second actor of the event.

* Info: Target commands is a list commands that are normally run against the target when the activator triggers.
  * This means if it has an SCore command of DAMAGE 5,  the damage will be applied to the target/enemy involved in the activator.
    * List of the [Target player commands](../../../tools-for-all-plugins-score/custom-commands/player-and-target-commands.md) available from SCore
  * You can also run commands from other plugins or vanilla commands. These commands will be executed by the console.
    * minecraft:say Hey
    * money give %target% 500
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetPlayerCommands:
    - SEND_MESSAGE &eHey %target% you have been hit by %player%
    - effect give %target% slowness 5 5 true
    - SEND_MESSAGE &7Your feets are heavier than before, eh ?
```

### \[*\_TP] targetPlayerConditions

It's available in all activators that contains a player targeted as the second actor of the event.

* Info: Feature for activators that involves a player target, here you can setup conditions for the player target involved.
* [Target player conditions](../../../tools-for-all-plugins-score/custom-conditions/player-and-target-conditions.md)
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_PLAYER
    targetPlayerConditions:
      ifSneaking: true
```

### \[*\_TP] Target player placeholders

When the second actor of the event is a player then you can use in your activator config (commands, conditions, other..) [the target player placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#target-player-placeholders)

### \[*\_TE] targetEntityCommands

It's available in all activators that contains an entity targeted as the second actor of the event.

* Info: Target commands is a list commands that are normally run against the target when the activator triggers.
  * This means if it has an SCore command of DAMAGE 5,  the damage will be applied to the target/enemy involved in the activator.
    * List of the [Target entity commands](../../../tools-for-all-plugins-score/custom-commands/entity-commands.md) available from SCore
  * You can also run commands from other plugins or vanilla commands. These commands will be executed by the console.
    * minecraft:say Hey
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_ENTITY
    targetEntityCommands:
    - effect give %target_uuid% slowness 5 5 true
```

### \[*\_TE] targetEntityConditions

It's available in all activators that contains an entity targeted as the second actor of the event.

* Info: Feature for activators that involves a player target, here you can setup conditions for the entity target involved.
* [Target entity conditions](../../../tools-for-all-plugins-score/custom-conditions/entity-conditions.md)
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: PLAYER_HIT_ENTITY
    targetEntityConditions:
      ifName: 
      - Watame
      - Okayu
      ifNameMsg: ''
```

### \[*\_TE] detailedTargetEntities

It's available in all activators that contains an entity targeted as the second actor of the event.

* Info:  For activators that involves a target entity you can select as condition the type of entity(es) where this activator will trigger by using this feature.
  * You can select a vanilla Minecraft entity (info: [https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html)) like:
    * "ZOMBIE"
  * ⭐\[Requires NBTAPI Plugin] You can select a vanilla Minecraft mob with NBT (info: [https://minecraft.fandom.com/wiki/Tutorials/Command\_NBT\_tags#Entities](https://minecraft.fandom.com/wiki/Tutorials/Command_NBT_tags#Entities)) like:
    *  `ZOMBIE{isBaby:1}`
    * `ZOMBIE{CustomName:"*"}`
  * You can select a MythicMob mob like:
    * "MM-\<ID>"
  * You can blacklist a mob by usinig ! like
    * !SKELETON

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_PARTICIPATE_KILL_ENTITY
    detailedTargetEntities:
    - MM-Giant
    - MM-MyMob
    - '!SKELETON'
    - ZOMBIE{CustomName:"*"}
    - ZOMBIE{IsBaby:1}
```

### \[*\_TE] Target entity placeholders

When the second actor of the event is a player then you can use in your activator config (commands, conditions, other..) [the target entity placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#target-entity-placeholders)

### \[*\_TB] targetBlockCommands

It's available in all activators that contains a block as the second actor of the event.

* Info: List of commands that are normally run against the block when the activator triggers.
  * Another example PLAYER\_RIGHT\_CLICK has an activatorFeature called typeTarget, by default its ONLY\_AIR so targetBlockCommands are not available due the activator is not involved with a block, but, typeTarget can be changed to ONLY\_BLOCK and then the activator will have as available features targetBlockCommands
    * List of [block commands](https://docs.ssomar.com/tools-for-all-plugins-score/custom-commands/block-commands) you can use
* Example:

```yaml
activators:  **
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: ENTITY_CHANGE_BLOCK
    targetBlockCommands:
    - EXPLODE
```

### \[*\_TB] detailedTargetBlocks

It's available in all activators that contains a block as the second actor of the event.

* Info: Feature for activators that involves a target block, here you can select as condition the type of block(s) where this activator will trigger by using this feature.
  * You can select blocks from Minecraft Vanilla like:
    * "STONE"
  * ⭐You can select blocks from Minecraft Vanilla with NBT (info: [https://minecraft.fandom.com/wiki/Block\_states](https://minecraft.fandom.com/wiki/Block_states)) like: 
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
    option: ENTITY_COMBUST_BY_BLOCK
    detailedTargetBlocks:
    - CAMPFIRE
```

### \[*\_TB] targetBlockConditions

It's available in all activators that contains a block as the second actor of the event.

* Info: Feature for activators that involves a target block, here you can setup conditions for the target block involved.
* [Block conditions](../../../tools-for-all-plugins-score/custom-conditions/block-conditions.md)
* Example:

```yaml
activators:  
  activator0: # Activator ID, you can create as many activator on the activators list    
    option: ENTITY_COMBUST_BY_BLOCK
    targetBlockConditions:
      ifMustBeNatural: true
```

### \[*\_TB] detailedTargetBlocks

It's available in all activators that contains a block as the second actor of the event.

* Info: Feature for activators that involves a target block, here you can select as condition the type of block(s) where this activator will trigger by using this feature.
  * You can select blocks from Minecraft Vanilla like:
    * "STONE"
  * ⭐You can select blocks from Minecraft Vanilla with NBT (info: [https://minecraft.fandom.com/wiki/Block\_states](https://minecraft.fandom.com/wiki/Block_states)) like: 
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
    option: ENTITY_CHANGE_BLOCK
    detailedTargetBlocks:
    - DIRT
```

### \[*\_TB] Target block placeholders

When the second actor of the event is a player then you can use in your activator config (commands, conditions, other..) [the target block placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#target-block-placeholders)

### \[S\_A\_L] detailedItems

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

### \[S\_A\_L] detailedDamageCauses

* Type of activator category: Specific Activator List
  * ⭐PLAYER\_BLOCK\_HIT\_OF\_ENTITY
  * ⭐PLAYER\_BLOCK\_HIT\_OF\_PLAYER
  * ⭐PLAYER\_RECEIVE\_HIT\_BY\_ENTITY
  * ⭐PLAYER\_RECEIVE\_HIT\_BY\_PLAYER
  * ⭐PLAYER\_RECEIVE\_HIT\_GLOBAL
  * 🔹PLAYER\_DEATH
  * 🔹PLAYER\_HIT\_PLAYER
* Info: Feature for activators that involves damage, here you can select as condition the type of damage that is either received or dealt depending on the activator you are using.
* Example:

```yaml
activators:  **
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_DEATH
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```

### \[S\_A\_L] detailedEffects

* Type of activator category: Specific Activator List
  * ⭐PLAYER\_RECEIVE\_EFFECT
* Info: Feature for activators that involves effects, here you can select as condition the type of effect involved to trigger the activator.
* Example:

```yaml
activators:  **
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: PLAYER_RECEIVE_EFFECT
    detailedEffects:
      effects:
      - SPEED
      cancelEventIfNotValid: true
      messageIfNotValid: '&#x26;cYou cant use the activator since you dont meet the effect
        condition'
```

### \[S\_A\_L] detailedCommands

* Type of activator category: Specific Activator List
  * ⭐PLAYER\_WRITE\_COMMAND
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

### \[S\_A\_L] desactiveDrops

* Type of activator category: Specific Activator List
  * ⭐PLAYER\_KILL\_ENTITY
  * ⭐PLAYER\_BLOCK\_BREAK
  * ⭐PLAYER\_KILL\_PLAYER
  * ⭐PLAYER\_FISH\_FISH
* Info: Boolean value that allows or prevents the vanilla loot to be dropped when breaking blocks or killing mobs. Since its vanilla drops, custom drops from custom mobs e.g. (MythicMobs) will not get affected by this.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: PLAYER_BLOCK_BREAK
    desactiveDrops: true
```

### \[S\_A\_L] typeTarget

* Type of activator category: Specific Activator List
  * 🔹PLAYER\_ALL\_CLICK
  * 🔹PLAYER\_RIGHT\_CLICK
  * 🔹PLAYER\_LEFT\_CLICK
* Info: Feature that restricts the activator so it will only get activated/triggered when the event occurred with certain type of clicking
  * typeTarget
    * ONLY\_AIR: Restricts the activator so it will only get activated/triggered when the event occurred when clicking only in the air, it means if you clicked on a block the activator won't get triggered. Don't get confuse ! You may think, what happens if I click on a player ? which will not be a block so its on the "air" well.. that even is outside the instance of PLAYER\_(CLICK) type activators, that event is instance of PLAYER\_CLICK\_ON\_PLAYER so the activator won't trigger too, it must be instance of PLAYER\_(CLICK).
    * ONLY\_BLOCK: Restricts the activator so it will only get activated/triggered when the event occurred with clicking only in a block. This means if you clicked on the air the activator won't get triggered.
      * This feature makes the activator a block instance activator so it will have blockCommands.
    * NO\_TYPE\_TARGET: Doesn't restrict the activator on the type of click, both type will be accepted, air clicks and block clicks.
* Example: 

```yaml
activators:**
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

### \[S\_A\_L] detailedClick

* Type of activator category: Specific Activator List
  * ⭐PLAYER\_CLICK\_ON\_ENTITY
  * 🔹PLAYER\_CLICK\_ON\_PLAYER
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

### \[S\_A\_L] mustBeAProjectileLaunchWithTheSameEI

* Type of activator category: Specific Activator List
  * ⭐PROJECTILE\_ENTER\_IN\_LIQUID
  * ⭐PROJECTILE\_HIT\_BLOCK
  * ⭐PROJECTILE\_HIT\_ENTITY
  * 🔹PROJECTILE\_HIT\_PLAYER
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

### \[S\_A\_L] delay and delayTick

* Type of activator category: Specific Activator List
  * ⭐LOOP
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
