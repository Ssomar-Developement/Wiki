---
description: >-
  Special mention to Orange#0513 for the idea to revamp the method ever since
  variables were implemented
---

# On / Off Switch

## Requirements+

* ExecutableItems **Premium**

## NOTE: CREATE 2 ACTIVATORS FIRST.

## First activator

### Create a variable

* A variable needs to be created so we can have an identifier if the switch is on/off

![You click on this icon to open the variables editor](https://imgur.com/nrkKIxb.png)

![You basically just create a variable](https://imgur.com/JUbywre.png)

![For the id, there's nothing really specific. for this guide, we will label our variable as "x"](https://imgur.com/ua4VmPu.png)

![It doesn't really matter if it's a number or string](https://imgur.com/nut1h4h.png)

![For this tutorial we will use the value of 0](https://imgur.com/Bj4CpF7.png)

### Create your item, and add an activator

* In this case it will be a PLAYER\_ALL\_CLICK

![](<../../..//static/img/image (94).png>)

### Commands

* Type what commands you want to type

### Variables Modification

![First click this icon in the activator editor](https://imgur.com/LVCMrRl.png)

![Create a variable modification](https://imgur.com/r50hLwy.png)

![Select the variable that we created earlier](https://imgur.com/sksRDkO.png)

![Set the type of modification to SET](https://imgur.com/BBWjzw8.png)

![We will be setting the value other than 0 so the same activator can't run for the 2nd time](https://imgur.com/Av856uf.png)

### Placeholder Condition

* This is needed to control what activator is going to run 

![First we go to conditions](<../../..//static/img/image (419).png>)

![Then to placeholder conditions](<../../..//static/img/image (303).png>)

![Of course, we have to create a placeholder condition](<../../..//static/img/image (429).png>)

![PLAYER\_STRING is an option too](https://imgur.com/NXUYpmm.png)

![We will use the placeholder for the variable we created. Use %var\_x\_int% if you still used PLAYER\_STRING](https://imgur.com/0qDthRo.png)

![We will use this comparator](https://imgur.com/UrVtgM8.png)

![We will use 0 value as the "off" option](https://imgur.com/CUoRRfg.png)

### Add the other item cooldown to the item itself

* For example, the id of the ei item is `onoff-demo`. You would then have to go to this icon then follow the pictures.

![](https://imgur.com/mmHsaP4.png)

![](https://imgur.com/AnnDswf.png)

![](https://imgur.com/Q6VJClp.png)

For example, the id of the on/off switch is "faker", so select "faker".

![](https://imgur.com/X1DTqww.png)

Ever since 5.0 dropped, activator ids start from "activator0" instead of "activator1". Anyway, you would want to select the second activator as activators run from top to bottom. 

:::info
This option is important because if there's no cooldown, it will ram through the the 2nd activator that's supposed to turn off the activator
:::

![Set the cooldown to 1 or 2. You decide](https://imgur.com/zv8iOie.png)

![](https://imgur.com/IZxLfQ9.png)

This is suggested to be set to true if you want the item to be spammable. One tick is enough to prevent the ramming mentioned above.

![](https://imgur.com/GB5OuD0.png)

## Second activator

* We will use again **`PLAYER_ALL_CLICK`**

![](<../../..//static/img/image (165).png>)

###

### Commands

* Type what commands you want to type

### Variables Modification

![First click this icon in the activator editor](https://imgur.com/LVCMrRl.png)

![Create a variable modificationng](https://imgur.com/r50hLwy.png)

![Select the variable that we created earlier](https://imgur.com/sksRDkO.png)

![Set the type of modification to SET](https://imgur.com/BBWjzw8.png)

![We will be setting the value other than 1 so the same activator can't run for the 2nd time](https://imgur.com/0KzktPE.png)

### Placeholder Condition

* This is needed to control what activator is going to run 

![First we go to conditions](<../../..//static/img/image (419).png>)

![Then to placeholder conditions](<../../..//static/img/image (303).png>)

![Of course, we have to create a placeholder condition](<../../..//static/img/image (429).png>)

![PLAYER\_STRING is an option too](https://imgur.com/NXUYpmm.png)

![We will use the placeholder for the variable we created. Use %var\_x\_int% if you still used PLAYER\_STRING](https://imgur.com/0qDthRo.png)

![We will use this comparator](https://imgur.com/UrVtgM8.png)

![We will use 1 value as the "on" option](https://imgur.com/bJKV5hy.png)

### Add the other item cooldown to the item itself

* For example, the id of the ei item is `onoff-demo`. You would then have to go to this icon then follow the pictures.

![](https://imgur.com/mmHsaP4.png)

![](https://imgur.com/AnnDswf.png)

![](https://imgur.com/Q6VJClp.png)

For example, the id of the on/off switch is "faker", so select "faker".

![](https://imgur.com/tFly1dt.png)

Ever since 5.0 dropped, activator ids start from "activator0" instead of "activator1". Anyway, you would want to select the second activator as activators run from top to bottom. 

:::info
This option is important because if there's no cooldown, it will ram through the the 2nd activator that's supposed to turn off the activator
:::

![Set the cooldown to 1 or 2. You decide](https://imgur.com/zv8iOie.png)

![](https://imgur.com/IZxLfQ9.png)

This is suggested to be set to true if you want the item to be spammable. One tick is enough to prevent the ramming mentioned above.

![](https://imgur.com/GB5OuD0.png)

##

### Save the EI Item

* It should look like this (We added on commands to say ON (activator1) and OFF (activator2) to show you how it is working :p

## Item config

```yaml
name: '&e&lOn/Off Demo'
lore: []
material: LEVER
glow: true
usage: 1
usageLimit: -1
hiders:
  hideEnchantments: false
  hideUnbreakable: false
  hideAttributes: false
  hidePotionEffects: false
  hideUsage: true
  hideDye: false
enchantments: {}
restrictions:
  cancel-item-place: false
variables:
  x:
    variableName: x
    type: NUMBER
    default: 0.0
attributes: {}
activators:
  activator0:
    name: '&eToggle-On'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator1
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    commands:
    - SENDMESSAGE Toggled On
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '0.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 1.0
  activator1:
    name: '&eToggle-Off'
    option: PLAYER_ALL_CLICK
    typeTarget: NO_TYPE_TARGET
    usageModification: 0
    cancelEvent: true
    silenceOutput: false
    autoUpdateItem: false
    otherEICooldowns:
      cd0:
        executableItem: onoff-demo
        activators:
        - activator0
        cooldown: 1
        isCooldownInTicks: true
    requiredItems:
      errorMessage: ''
    requiredExecutableItems:
      errorMessage: ''
    detailedSlots:
    - -1
    commands:
    - SENDMESSAGE Toggled Off
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchC1:
        type: PLAYER_NUMBER
        comparator: EQUALS
        part1: '%var_x%'
        part2: '1.0'
        cancelEventIfNotValid: true
        messageIfNotValid: '&e'
    variablesModification:
      varModif0:
        variableName: x
        type: SET
        modification: 0.0

```

## Last comment

If you have any question or you think the guide wasn't clear enough, feel free to ask in Discord.\
We will help you ! 😁😁
