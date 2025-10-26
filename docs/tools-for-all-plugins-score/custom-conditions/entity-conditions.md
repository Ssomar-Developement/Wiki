# Entity Conditions

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
entityConditions:
    ifAdult: true
    ifAdultMsg: "&cMy custom error message here"
    ifAdultCancel: true
    ifAdultCmds:
    - say no
```

<details>

<summary>Example</summary>

```yaml
name: '&bMySword'
lore: []
material: DIAMOND_SWORD
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
config_3_5: 'true'
activators:
  activator1:
    activator: PLAYER_CLICK_ON_ENTITY
    displayName: Activator name
    usageModification: 0
    usePerDay: -1
    cancelEventIfMaxUsePerDay: false
    autoUpdateItem: false
    commands: []
    silenceOutput: false
    entityCommands: []
    entity: []
    cancelEventIfInvalidRequiredExecutableItems: false
    detailedClick: RIGHT
    cancelEvent: false
    conditions:
      entityConditions:
        ifAdult: true
        ifAdultMsg: '&cThen entity must be in the adult form'

```

</details>

### ifAdult

* Description: Checks if the entity is in it's adult phase
* Example:

```yaml
entityConditions:
    ifAdult: false
    ifAdultMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the sheep is in it's adult phase, the activator will activate.
* Required: NO (Default: false)

### ifBaby

* Description: Checks if the entity is in it's baby phase
* Example:

```yaml
entityConditions:
    ifBaby: false
    ifBabyMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the cow is in it's baby phase, the activator will activate.
* Required: NO (Default: false)

### ifFrozen

* Description: Checks if the entity is frozen (works for 1.18 and upper versions)
* Example:

```yaml
entityConditions:
    ifFrozen: true
    ifFrozenMsg: '&ethe entity is frozen'
    ifFrozenCancel: false
```

### ifGlowing

* Description: Checks if the entity has the glowing effect
* Example:

```yaml
entityConditions:
    ifGlowing: false
    ifGlowingMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the entity is glowing, the activator will activate.
* Required: NO (Default: false)

### ifHasAI - ifNotHasAI

* Description: Checks if the entity has AI
* Example:

```yaml
entityConditions:
    ifHasAI : false
    ifHasAIMsg: '' #<- Here is where you will add the custom message.
```

### ifInvulnerable

* Description: Checks if the entity has the invulnerable attribute
* Example:

```yaml
entityConditions:
    ifInvulnerable: false
    ifInvulnerableMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the villager is invulnerable, the activator will activate.
* Required: NO (Default: false)

### ifNamed - ifNotNamed

* Description: Checks if the entity is named (for example when using a nametag in a mob)
* Example:

```yaml
entityConditions:
    ifNamed: true
    ifNamedMsg: '&4&l&o[ExecutableItems] &cThe entity must be named to active the activator: &6%activator% &cof this item!'
```

### ifOnFire

* Description: Checks if the entity is on fire
* Example:

```yaml
entityConditions:
    ifOnFire: false
    ifOnFireMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the villager is burning, the activator will activate
* Required: NO (Default: false)

### ifPowered

* Description: Checks if the entity is charged
* Example:

```yaml
entityConditions:
    ifPowered: false
    ifPoweredMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the creeper is charged, the activator will activate.
* Required: NO (Default: false)

### ifTamed - ifNotTamed

* Description: Checks if the entity is tamed
* Example:

```yaml
entityConditions:
    ifTamed: true
    ifTamedMsg: '&4&l&o[ExecutableItems] &cThe entity must be tamed to active the activator: &6%activator% &cof this item!'
```

### ifEntityHealth

* Description: Checks if the entity has the said health.
* Example:

```yaml
entityConditions:
    ifEntityHealth: <=15
    ifEntityHealthMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the value is `<66`, the activator will only activate if the entity's health is below 66
  * If the value is `<928`, the activator will only activate if the entity's health is 928 and below.
  * If the value is `==76`, the activator will only activate if the entity's health is 76.
  * If the value is `>123`, the activator will only activate if the entity's health is above 123.
  * If the value is `>=40000`, the activator will only activate if the entity's health is 40000 and above.
* Required: NO

### ifEntityInRegion - IfNotEntityInRegion

* Description: Checks if the entity is in a WorldGuard region.
* Example:

```yaml
entityConditions:
    ifEntityInRegion :
        - 'donjon_zone'
    ifEntityInRegionMsg: '' #<- Here is where you will add the custom message.
    
    
    ifNotEntityInRegion :
        - 'safe_zone'
    ifNotEntityInRegionMsg: '' #<- Here is where you will add the custom message.
```

### ifHasTag - Not

* Description: Checks if the entity has (not) specifics tags
  * Specifically the tag nbt from `/summon armor_stand ~ ~ ~ {Tags:["Pikamee"]}`
* Example:

```yaml
entityConditions:
    ifHasTag: 
    - Watame
    - Okayu
    ifHasTagMsg: '' #<- Here is where you will add the custom message.
    
    ifNotHasTag: 
    - myBlacklistTag
    ifNotHasTagMsg: '' #<- Here is where you will add the custom message.
```

* Required: NO

ifSheepColor:

* Description: Checks if the entity has the correct sheep color
* Example:

```yaml
entityConditions:
    ifSheepColor:
    - green
    - BLACK
    - yElloW
```

[https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/DyeColor.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/DyeColor.html)

### ifIsOnTheBlock - Not

* Description: Checks if the entity is (not) standing on a block.
* Example:

```yaml
entityConditions:
    ifIsOnTheBlock: 
    - STONE
    ifIsOnTheBlockMsg: '' #<- Here is where you will add the custom message.
    
    ifIsNotOnTheBlock: 
    - BEDROCK
    ifIsNotOnTheBlockMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the entity has stone under its feet, the activator will activate.
  * As long as the entity is not more than 1 block higher from the block the player is standing at, the activator will activate
* Required: NO (Default: false)

### ifName

* Description: Checks if the entity's name matches the listed names in the condition
* Example:

```yaml
entityConditions:
    ifName: 
    - Watame
    - Okayu
    ifNameMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the parrot is named, "John Cena", and the name "John Cena" is listed in the list of names in the ifName condition, the activator will activate.
* Required: NO

### ifNotEntityType

* Description: Checks if the entity type of the entity is not the same as the list of types listed in the condition.

[https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)

* Example:

```yaml
entityConditions:
    ifNotEntityType: 
    - ZOMBIE
    - SKELETON
    - HUSK
    ifNotEntityTypeMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the entity type of the entity you targeted is a cow and it's listed in the ifNotEntityType condition list, the activator will not activate.
* Required: NO

### ifFromSpawner - Not

* Description: Checks if the entity spawned from a spawner
* Example:

```
    entityConditions:
      ifFromSpawner: true
      ifFromSpawnerMsg: error
      ifFromSpawnerCancel: true
      ifNotFromSpawner: true
      ifHasTagMsg: ''
      ifNotFromSpawnerMsg: error2
      ifNotFromSpawnerCancel: true
```

### ifHasSaddle - Not

* Description: Checks if the entity is equipped with a saddle
* Example:

```
    entityConditions:
      ifHasSaddle: true
      ifNotHasSaddle: true
```

### ifIsOnTheBlock - Not

* Description: Checks if the entity is standing on the said block
* Example:

```
    entityConditions:
      ifIsOnTheBlock:
        blocks:
        - STONE
      ifIsNotOnTheBlock:
        material0:
          material: ACACIA_BUTTON
```

### ifNotEntityType

* Description: Checks if the target entity is not the said entity
* Example:

```
    entityConditions:
      ifNotEntityType:
      - ZOMBIE_HORSE
```
