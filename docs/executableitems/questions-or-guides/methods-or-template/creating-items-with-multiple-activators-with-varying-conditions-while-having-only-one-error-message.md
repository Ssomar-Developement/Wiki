---
description: >-
  This page will help you create an item where you can set up lots of activators
  with multiple conditions or requirements and when used, only one sends
  commands and etc while having one error message
---

# Creating Items with multiple activators with varying conditions while having only one error message

So one time, you want to create an item that would only activate if you have at least a diamond or an executable item in your inventory right? But you want to make a proper error message if you don't have the diamond or the executable item in your inventory. If so, this is the guide for you! 

This guide should be of help in terms of expanding your competency in understanding how activators and variables work in a more deeper level.

**Scroll down to the very bottom to copypaste the config of the item.**

![](https://media.giphy.com/media/2VOFCuwez3xKRT3LGm/giphy.gif)

## Steps:

### 1) Create an ExecutableItem

![Don't skip this step :)](https://imgur.com/0seK7Oy.png)

### 2) Create a variable

![Click this icon](https://imgur.com/xp084fo.png)

![](https://imgur.com/CkwS1WW.png)

![For this guide, we will be naming our variable as "x"](https://imgur.com/lYZz56B.png)

![](https://imgur.com/PmzEF8i.png)

![This isn't necessary but you can type 0 if you want.](https://imgur.com/zMHjlHb.png)

### 3) Save the variable and return to the main activator editor

![](https://imgur.com/QlbFleQ.png)

![](https://imgur.com/LHze4Hg.png)

### 4) Create an activator

![](https://imgur.com/EN0xynk.png)

![](https://imgur.com/8Z6d2Ph.png)

### 5) Select what kind of activator do you want

![](https://imgur.com/hiGNioI.png)

In this guide, I will be using this activator. 

:::danger
In this method, all activators created during this method tutorial has to be the same for it to properly function.
:::

### 6) Set the variable update at the first activator

Only this first activator will have the variable update in this whole method. What this does is that when you trigger the left click activator, it will set the variable to 1. This value will be used later.

![](https://imgur.com/pc6XdsB.png)

![](https://imgur.com/cMhl3fk.png)

![](https://imgur.com/QuY7xXK.png)

The name of the variable we created is called "x" so we need to type "x" in here.

![](https://imgur.com/pVMqvMJ.png)

![](https://imgur.com/h2W83oZ.png)

![](https://imgur.com/43MnSST.png)

![](https://imgur.com/tztBfqK.png)

![](https://imgur.com/DYXeHnP.png)

### 7) Create the main activators

The activators here are the ones that will run the commands and various things you want to try. Required Items, Required Money, Required ExecutableItems, Sneaking Conditions, etc. If you want to create more than one of those, start again from this step.

In this guide, I will follow the example I made. This item will search for a diamond or an executable item. But since orders matter, I will put diamonds as the priority.

![](https://imgur.com/G3ThQRF.png)

![](https://imgur.com/4Jh8kOh.png)

![](https://imgur.com/2dxKmrV.png)

![I won't be posting the steps for setting up the required items as you have to learn it how to do it yourself. Explore the plugin more if you haven't.](https://imgur.com/vCUgctg.png)

### Add the placeholder condition

![](https://imgur.com/lWUVLeT.png)

![](https://imgur.com/g7xGSCl.png)

We need to create a placeholder condition for each of the activators that will run commands and such for us. The first main activator won't need it so you can kind of skip this part but I will still write this part for the second and more activators

![](https://imgur.com/WyilzZS.png)

![](https://imgur.com/H7ZF0aZ.png)

We need to type the placeholder of the variable so we could check for it's values to see if changes are made

![](https://imgur.com/1IJK0Jc.png)

![](https://imgur.com/7sd84Lg.png)

The value of 1 represents that no activator before it has yet to trigger. 

![](https://imgur.com/8Mxj3bM.png)

### Add the variable update

![](https://imgur.com/pc6XdsB.png)

![](https://imgur.com/cMhl3fk.png)

![](https://imgur.com/QuY7xXK.png)

![](https://imgur.com/pVMqvMJ.png)

![](https://imgur.com/NB5aIU8.png)

With this set to 0, for example, activator1, activator2, and activator3 is present. activator0 will set the variable to 1 every time you do a left click and if activator1 manages to trigger, activator2 and activator3 will no longer trigger.

![](https://imgur.com/43MnSST.png)

![](https://imgur.com/tztBfqK.png)

![](https://imgur.com/DYXeHnP.png)

### 8) Create the activator that will return the error message

This activator will trigger if any of the previous activators that are supposed to set the variable to 0 once triggered.

![](https://imgur.com/G3ThQRF.png)

![](https://imgur.com/4Jh8kOh.png)

### Add the placeholder condition

![](https://imgur.com/lWUVLeT.png)

![](https://imgur.com/g7xGSCl.png)

We need to create a placeholder condition for each of the activators that will run commands and such for us. The first main activator won't need it so you can kind of skip this part but I will still write this part for the second and more activators

![](https://imgur.com/WyilzZS.png)

![](https://imgur.com/H7ZF0aZ.png)

We need to type the placeholder of the variable so we could check for it's values to see if changes are made

![](https://imgur.com/1IJK0Jc.png)

![](https://imgur.com/7sd84Lg.png)

The value of 1 represents that no activator before it has yet to trigger. 

![](https://imgur.com/8Mxj3bM.png)

### Add the SENDMESSAGE command for the error message

Because none of the main activators managed to run, the last activator will run instead, sending the message that you failed to meet the requirements/conditions to at least trigger one of the activators.

![](https://imgur.com/5xBTeQw.png)

### Save the item

Save the item then you could try it out!

![](https://imgur.com/7UchWuA.png)

Config:

```yaml
name: '&eDefault name'
lore:
- '&b&oDefault lore'
material: NETHERITE_SWORD
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: false
storeItemInfo: false
unbreakable: false
usage: 1
usageLimit: -1
restrictions: {}
variables:
  var0:
    variableName: x
    type: STRING
    default: '0'
activators:
  activator0:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems: {}
    requiredExecutableItems: {}
    detailedSlots:
    - -1
    playerCommands: []
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions: {}
    variablesModification:
      varUpdt0:
        variableName: x
        type: SET
        modification: '1'
  activator1:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems:
      requiredItem0:
        material: DIAMOND
        amount: 1
        notExecutableItem: true
      errorMessage: ''
    requiredExecutableItems: {}
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE TEST MESSAGE 1
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
    variablesModification:
      varUpdt0:
        variableName: x
        type: SET
        modification: '0'
  activator2:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems: {}
    requiredExecutableItems:
      requiredEI0:
        executableItem: buff
        amount: 1
      errorMessage: ''
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE TEST MESSAGE 2
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
    variablesModification:
      varUpdt0:
        variableName: x
        type: SET
        modification: '0'
  activator3:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: false
    silenceOutput: false
    autoUpdateItem: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems: {}
    requiredExecutableItems: {}
    detailedSlots:
    - -1
    playerCommands:
    - SENDMESSAGE Â§cYou don't have the required items.
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
    variablesModification: {}
attributes: {}
```
