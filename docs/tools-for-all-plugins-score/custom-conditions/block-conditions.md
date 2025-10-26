# Block Conditions

:::info
For conditions that require numerical values, you can assign 2 conditions.

Example: "I want to create a condition that only activates if the value is greater than 50 but less than 250"\
So what you would type in the config will be **`50 < CONDITION < 250`**
:::

:::info
If a condition fails to be met, **you can enable cancelEvent** so if a specific condition isn't completed, cancelEvent will run.  You can also customize the error message !

You can also run commands if the condition has failed to execute!

Example:
:::

```yaml
blockConditions:
     ifBlockAge: <2
     ifBlockAgeMsg: "héhéhé you can custom your message here"
     ifBlockAgeCancel: true
     ifBlockAgeCancelCmds:
     - say how sad
```

<details>

<summary>Example</summary>

```yaml
name: '&7MyPickaxe'
lore:
- '&7&oDefault desc'
material: DIAMOND_PICKAXE
headDBID: ''
glow: false
glowDrop: false
disableStack: false
keepItemOnDeath: false
give-first-join: false
give-slot: 0
usage: 0
usePerDay: -1
usageLimit: -1
disable-world: []
unbreakable: false
isSpecialProjectile: false
canBeUsedOnlyByTheOwner: false
storeItemInfos: false
activators:
  activator1:
    activator: PLAYER_ALL_CLICK
    displayName: Activator name
    usageModification: 0
    usePerDay: -1
    cancelEventIfMaxUsePerDay: false
    autoUpdateItem: false
    commands: []
    silenceOutput: false
    blockCommands:
    - BREAK
    detailedBlocks:
      - WHEAT
      - CARROTS
    cancelEventIfNotDetailedBlocks: false
    onlyAirClick: false
    onlyBlockClick: true
    cancelEventIfInvalidRequiredExecutableItems: false
    cancelEvent: false
    conditions:
      targetBlockConditions:
        ifPlantFullyGrown: true
        ifPlantFullyGrownMsg: '&cError the plant clicked must be fully grown !'

```

</details>

### ifContainerEmpty - Not

* Description: Check if the block contains items or not.
* Example:

```yaml
blockConditions:
      ifContainerEmpty: true
      ifContainerNotEmpty: true
```

### ifContainerContains

* Description: Check if the block contains material(s)
* Example:

```yaml
blockConditions:
      requiredItems:
        requiredItem0:
          material: STONE
          amount: 1
          notExecutableItem: false
```

### ifContainerContainsEI

* Description: Check if the block contains EI(s)
* Example:

```yaml
 blockConditions:
      requiredExecutableItems:
        requiredEI0:
          executableItem: Bergbauhammer
          amount: 1
```

### ifIsPowered - Not

* Description: Checks if the target block is (or must not be) powered by a redstone signal
* Example:

```yaml
blockConditions:
    ifIsPowered: false   
    ifIsPoweredMsg: ''
    
    ifMustBeNotPowered: true 
    ifMustBeNotPoweredMsg: ''
```

* Example Situations:
  * If the block you are clicking at is a lit redstone lamp, the activator will activate
* Required: NO (Default: false)

### ifMustBeNatural - ifMustBeNotNatural

* Description: Checks if the target block is a natural block (so not a placed block) **(CORE PROTECT MUST BE INSTALLED)**

:::danger
Don't use that in an activator very frenquetly used because it will require a lot of performances
:::

* Example:

```yaml
    blockConditions:
      ifMustBeNotNatural: true
      ifMustBeNotNaturalMsg: ''
      ifMustBeNotNaturalCancel: true

    blockConditions:
      ifMustBeNatural: true
      ifMustBeNaturalMsg: ''
      ifMustBeNaturalCancel: true
```

* Example Situations:
  * If the block you are clicking is/isn't natural, the activator will activate
* Required: NO (Default: false)

### ifPlayerMustBeOnTheBlock

* Description: Checks if the target block has a player on top of it
* Example:

```yaml
blockConditions:
    ifPlayerMustBeOnTheBlock: false   
    ifPlayerMustBeOnTheBlockMsg: ''
```

* Example Situations:
  * If the block you are clicking has a player on top of it, the activator activates
* Required: NO (Default: false)

### ifNoPlayerMustBeOnTheBlock

* Description: Checks if the target block has no player on top of it
* Example:

```yaml
blockConditions:
    ifNoPlayerMustBeOnTheBlock: false   
    ifNoPlayerMustBeOnTheBlockMsg: ''
```

* Example Situations:
  * If the block you are clicking has a player on top of it, the activator doesn't activate
* Required: NO (Default: false)

### ifPlantFullyGrown - ifPlantNotFullyGrown

* Description: Checks if the target block is a fully grown plant.
* Example:

```yaml
blockConditions:
    ifPlantFullyGrown: true    
    ifPlantFullyGrownMsg: ''
##################################################
blockConditions:
    ifPlantNotFullyGrown: true    
    ifPlantNotFullyGrownMsg: ''
```

* Example Situations:
  * If the wheat crop is fully grown, the activator will activate.
* Required: NO (Default: false)

### ifBlockAge

* Description: Checks the target block age (crops)
* Example:

```yaml
blockConditions:
        ifBlockAge: <2
        ifBlockAgeMsg: "héhéhé you can custom your message here"
```

### ifBlockLocationX - Y -Z 

* Description: Checks the target block location X / Y / Z
* Example:

```yaml
  blockConditions:
    ifBlockLocationX: 500 < CONDITION < 1500
    ifBlockLocationXMsg: "héhéhé you can custom your message here"
   
    ifBlockLocationY: 50 < CONDITION < 150
    ifBlockLocationYMsg: "héhéhé you can custom your message here"
        
    ifBlockLocationZ: 500 < CONDITION < 1500
    ifBlockLocationZMsg: "héhéhé you can custom your message here"
```

### ifUsage

* It checks the usage of the clicked ****ExecutableBlock****, if the usage is valid, the activator will work, otherwise an error message is displayed.
* Example:

```yaml
  blockConditions:
    ifUsage: 4< #it also supports intervals like  4 < CONDITION <= 8
    ifUsageMsg: "&cError the executableBlock clicked must have more than 3 usages but less than 10"
```

* Required: NO

### ifContainerContainsSellableItem

* Description: Checks if the clicked container has items that can be sold
* Example:

```yaml
  blockConditions:
    ifContainerContainsSellableItem: true
    ifContainerContainsSellableItemMsg: "&cError the executableBlock clicked must have more than 3 usages but less than 10"
```

### Block Around Conditions

* Description: Checks the blocks around the clicked block:
* Example:

```yaml
blockConditions:**
      blockAroundCdts:
        blockAround0:
          southValue: 0
          northValue: 0
          westValue: 0
          eastValue: 0
          aboveValue: 1
          underValue: 0
          errorMsg: '&#x26;c&#x26;oA block is not placed correctly !'
          blockTypeMustBe:
          - STONE
**          - COBBLESTONE**
          - ANDESITE
          - ITEMSADDER:turquoise_block
          - EXECUTABLEBLOCKS:CUSTOMDIRT
          - !DIRT
          - ALL_ORES
```

```yaml
blockConditions:**
      requiredItems: \{\}
      requiredExecutableItems: \{\}
      blockAroundCdts:
        blockAround0:
          southValue: 0
          northValue: 0
          westValue: 0
          eastValue: 0
          aboveValue: 0
          underValue: 1
          errorMsg: ''
          blockTypeMustBe:
          - stone
          placeholdersConditions:
            plchCdt0:
              type: PLAYER_STRING
              comparator: EQUALS
              part1: '%var_x%'
              part2: '10'
              cancelEventIfNotValid: false
              messageIfNotValid: ''
              messageIfNotValidForTarget: ''
              stopCheckingOtherConditionsIfNotValid: true
              placeholderConditionCmds:
              - say not run
```

Q: What exactly is going on in placeholder conditions?\
A: The placeholder %var\_x% is being parsed according to the block in that position. Meaning, you can use this method to assign a specific number to insane amount of unique EBs without writing each id that may change overtime in blockTypeMustBe
