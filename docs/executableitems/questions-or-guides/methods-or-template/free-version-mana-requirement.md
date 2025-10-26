# \[Free version] Mana Requirement

:::info
If you are using premium, there is a easy way to do this using the GUI, so you could skips all this steps. If don't know what we are talking about ask in Discord.
:::

## ========================================

## REQUIREMENTS

* Plugin that uses Mana **(Aurelium Skills will be used as reference)**
* ExecutableItems
* PlaceholderAPI

### 1) Create the activator you want to create

* Let's use the right click activator for example

![](<../../../.gitbook/assets/image (65).png>)

### 2) Create a placeholder condition

* We will use the placeholder condition to check the required amount of mana

![](<../../../.gitbook/assets/image (420).png>)

![](<../../../.gitbook/assets/image (313).png>)

![](<../../../.gitbook/assets/image (114).png>)

### 3) Type the placeholder that will be used

* We will use the `PLAYER_NUMBER` type

![](<../../../.gitbook/assets/image (416).png>)

* In this case (**AureliumSkills**) we will use the placeholder `%aureliumskills_mana%` to check the amount of mana.

![](<../../../.gitbook/assets/image (265).png>)

* Then we will use the SUPERIOR\_OR\_EQUALS comparator to make it so it will run the activator if your mana has equal or more than the value written in the 2dn part.

![](<../../../.gitbook/assets/image (135).png>)

* In the 2nd part we will write the amount of mana needed for the item (In this example it will be 5 of mana)

![](<../../../.gitbook/assets/image (422).png>)

### 4) Add the commands

* We have the condition ready, now on commands we will need to remove that mana
  * The `mana remove %player% 5` command is important as it's task is to remove mana assuming you added a cost to the activation of the activator. If you just want it to make sure the player has the required amount of mana and not take away mana, there's no need to add this command.
  * Just add the commands you want to add after the `mana remove %player% 5` command

![](<../../../.gitbook/assets/image (232).png>)

* And ready !! Now you can add more commands in that section to complete your item ! :D

### 5) Save the item

* After all changes save your item and test it, it would run the commands only when you have the correct amount of mana.

## Item config

* This is how it should look (Made by **Special70**)

```yaml
name: '&e&lDefault name'
lore:
- ''
- '&bDefault Lore'
material: DIAMOND_SWORD
headDBID: ''
glow: false
disableStack: false
keepItemOnDeath: false
give-first-join: false
give-slot: 0
hideEnchantments: false
hideAttributes: false
usage: 1
hideUsage: false
usePerDay: -1
usageLimit: -1
disable-world: []
unbreakable: false
hideUnbreakable: false
hidePotionEffects: false
isSpecialProjectile: false
canBeUsedOnlyByTheOwner: false
storeItemInfos: false
durability: 1561
activators:
  activator1:
    activator: PLAYER_ALL_CLICK
    displayName: Activator name
    usageModification: 0
    usePerDay: -1
    cancelEventIfMaxUsePerDay: false
    cooldown: 0
    displayCooldownMessage: false
    commands:
    - mana remove %player% 5
    silenceOutput: false
    blockCommands: []
    detailedBlocks: []
    onlyAirClick: false
    onlyBlockClick: false
    cancelEventIfInvalidRequiredExecutableItems: false
    cancelEventIfInCooldown: false
    cancelEvent: false
    conditions:
      placeholdersConditions:
        plchC1:
          type: PLAYER_NUMBER
          part1: '%aureliumskills_mana%'
          comparator: SUPERIOR_OR_EQUALS
          part2: '10'
          messageIfNotValid: '&e'
          cancelEventIfNotValid: false
```

:::info
Type the error message at **`messageIfNotValid: '&e'`** to make the activator send a message if you do not have the required amount of mana
:::

