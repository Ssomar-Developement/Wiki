---
description: >-
  This guide will help you setup an event file that gives your players an ei
  item once upon join whether they're new or players who have at least joined
  your server once
---

# Give new/old players an item once

## DEPENDENCIES

### - PlaceholderAPI

### - Changeoutput Expansion (PAPI)

## STEPS

### 1)  Create a new SCore variable

<img src="https://imgur.com/bYntJcQ.png" alt="" />

This will be used to check if the player has received the item or not. We will be using this variable name for this tutorial only. It can be a different name but it must not have a "\_" symbol and again, we will be using "playerjoin" as our variable name in this tutorial.

### 2) Set the type to NUMBER

<img src="https://imgur.com/tII3EG9.png" alt="" />

### 3) Set the for to PLAYER

<img src="https://imgur.com/t0PSw9r.png" alt="" />

### 4) Save and exit

<img src="https://imgur.com/voJmX0l.png" alt="" />

<img src="https://imgur.com/4b31QAK.png" alt="" />

### 5) Create an event 

<img src="https://imgur.com/Savd98y.png" alt="" />

Again, the name of the EE can be anything but we will be using "event-playerjoin" in this tutorial

### 6) Go to activators and create a new activator

<img src="https://imgur.com/k7KIc1p.png" alt="" />

<img src="https://imgur.com/bpa15oz.png" alt="" />

### 7) Create a PLAYER\_CONNECTION activator

<img src="https://imgur.com/uPAiRuC.png" alt="" />

We will be using PLAYER\_CONNECTION not PLAYER\_FIRST\_CONNECTION to deal with players who have joined your server already

### 8) Go to placeholder conditions and create a new placeholder condition

<img src="https://imgur.com/XJzpWRa.png" alt="" />

<img src="https://imgur.com/EuiR0do.png" alt="" />

### 9) Setup the following values

<img src="https://imgur.com/5uxc95h.png" alt="" />

<img src="https://imgur.com/NdmkSKl.png" alt="" />

This checks if the score variable's value is 1. IF it's 1, it will return "yes", otherwise it will return "no"

<img src="https://imgur.com/buPiWZ0.png" alt="" />

<img src="https://imgur.com/kzEu69k.png" alt="" />

### 10) Save

<img src="https://imgur.com/tCUG3zT.png" alt="" />

<img src="https://imgur.com/1HZeoqW.png" alt="" />

### 11) Add the commands

<img src="https://imgur.com/U38k6vh.png" alt="" />

<img src="https://imgur.com/6YsYiw8.png" alt="" />

<img src="https://imgur.com/CfzRFj8.png" alt="" />

### 12) Save and Exit

<img src="https://imgur.com/QY1JCtA.png" alt="" />

Now you're done!

Config:

```yaml
editorIcon: LEVER
name: '&eDefault name'
disabledWorlds: []
activators:
  activator0:
    name: '&eActivator'
    option: PLAYER_CONNECTION
    cancelEvent: false
    silenceOutput: false
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
    requiredItems: {}
    requiredExecutableItems: {}
    worldConditions: {}
    playerConditions: {}
    commands:
    - score variables set player playerjoin 1 %player%
    - ei give %player% kickback 1
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%changeoutput_=_input:{score_variables_playerjoin}_matcher:1_ifmatch:yes_else:no%'
        part2: 'no'
        cancelEventIfNotValid: false
        messageIfNotValid: ''
        messageIfNotValidForTarget: ''

```
