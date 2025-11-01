---
description: Hi ! Here is the tutorial to make a global cooldown on an activator ^^
---

# \[Outdated] Global Cooldown

:::info
The reason why it says "Outdated" is because since the version 5.0 of EI it can be done using easily the GUI.
:::

## Requirements

* Placeholder API
  * ParseOther Expansion
  * Luckperms Expansion
* Luckperms
* ExecutableItems (obviously 😁😁)

## Let's do it 😎

### Info of this method

* First, this method is to create a global cooldown, so.. if a player activate it, no one could activate it too until "x" "time", in simple words..
  * There is a button in a room and anyone can press it. If someone presses it, it will disappear and reappear after a period of time. When the button reappears, anyone can press the button again, and this will repeat and repeat.

#### Nutshell

* Basically, the item will check if a "specific player" has a temporary perm on or not.

### 1) Plan what player will have the permission

* The player we are going to use must be someone who logged into your server at least once time, or else, running the luckperms command won't work

### 2) Create the activator will have global cooldown

* It can be whatever you want, so create it as you like

### 3) Placeholder condition

* Go to the conditions editor

![](</img/image (253).png>)

* Select placeholders conditions

![](</img/image (246).png>)

* Create a new placeholder

![](</img/image (125).png>)

* Select the PLAYER\_STRING type

![](</img/image (166).png>)

And let's set the placeholder, first, read this:

* In the first part you have to create a placeholder like this:

> **%parseother\_\{name of the player we assigned in first part\}\_\{luckperms\_has\_permission\_cs.go\}%**

* What this will do is compare if the player we assigned has that permission
  * For the luckperms part, Its recommended to create a random permission that does nothing, to prevent giving yourself unnecessary problems about perms. For example, in this case we are setting the "cs.go" permission, that in **our** case doesn't make problems.
* And in the second part we will set

> **no**

* In this way, if the activator can be activated is because the "player" doesn't have the perms, so if its "no" it will match with the "no" of the second part and the activator will trigger. But, if someone has activated it, the "player" will have the permission, so when someone try to activate it, the placeholder will say "yes" (he has the permission) and will not match with the second part "no" so the activator will no activate.

### 4) Command section

* Now, with all the commands you use in your activator, you have to add one more, this one:

> lp user (name of the player selected) permission settemp (permission) true (duration) replace

* So, let's create an example, if you decided that
  * Player who will have the perms (first step of this tutorial)-> **`Special70`**
  * Permission we will use -> **`cs.go`**
  * Duration of global cooldown -> **`2d`**
* The command will look like this

> lp user Special70 permission settemp cs.go true 2d replace

:::info
And that's all !! If the guide wasn't clear, there is a mistake or you need help, the helper team can help you in the Discord of Ssomar plugins 😎😎
:::

