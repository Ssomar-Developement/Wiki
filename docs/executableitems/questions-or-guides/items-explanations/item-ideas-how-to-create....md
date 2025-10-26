# Item ideas - How to create...?

## ¿What is this page?

* This page will be a explanation in general terms of common items ideas people ask how to do, so, if you want to create something.. and don't know how to do it, you should take a look here first, maybe your question is here, or, a similar method, that you can think of how to recreate it looking how the plugin works ^^

:::info
This page tells you how to do stuff, or gives you an idea, if don't know how a condition work, command work, placeholder work, etc, this is not the place to learn, you can explore the wiki to check their sections, here you will only get the idea, not a tutorial.
:::

### I would like an ability from my ExecutableItem not to work in a specific region

* Inside the activator that has your "ability", go to **playerConditions** and search for "**ifNotInRegion**" and use it as you want, with it you can **blacklist** regions.

### I would like an ability from my ExecutableItem only work in a specific region

* Inside the activator that has your "ability", go to **playerConditions** and search for "**ifInRegion**" and use it as you want, with it you can **whitelist** regions.

### I would like my item to have a confirmation before using the item

* Just use the custom EI condition inside the activator and enable "ifNeedPlayerConfirmation"

### Armor that burns the enemy who hits you

* Create an activator **PLAYER\_RECEIVE\_HIT\_BY\_PLAYER** and on **targetCommands** use the command BURN \<seconds>
* If want the same with entities just do the same but with **PLAYER\_RECEIVE\_HIT\_BY\_ENTITY**

:::info
Don't forget to set the correct **detailedSlots**
:::

### Item that only work on personal claim

* Inside the activator you want add the **playerCondition ifPlayerMustBeOnHisClaim**

### Item that only work on personal claim and not on unclaimed areas

* Create a placeholder condition inside the activator you want with this format
  * **PLAYER\_STRING**
  * **NOT EQUALS**
  * part1: %griefprevention\_currentclaim\_ownername%
  * part2: Unclaimed

### How to make an item that pull other players to you?

* Inside the activator you want, in commands, use the command AROUND combined with CUSTOMDASH1 using the player placeholders of position. So, once you right click, the CUSTOMDASH1 command will dash the people AROUND you to YOUR COORDS, basically pull people.

### How to create a treecapitator ?

* Activator **PLAYER\_BREAK\_BLOCK** and in **blockCommands** use the command **VEINBREAKER**

### I would like to disable the equipment of the player head

* Create an activator **PLAYER\_EQUIP\_THE\_EI** and enable **cancelEvent**

### Disable nametag on clicking

* Create an activator PLAYER\_CLICK\_ON\_ENTITY -> detailedClick right and enable cancel event

### I would like to create an armor that gives you more..

* If what you want is add **heart containers**, **speed**, **knockback resistance**, **armor**, etc on your armor, sword, pickaxe, whatever you want, you have to work with **attributes**.

### How to run a command once you click on a player

* Just use the activator PLAYER\_CLICK\_ON\_PLAYER and add on commands whatever you want

:::info
The same if you want to run the command when HIT but with PLAYER\_HIT\_PLAYER activator
:::

### Item that disables knockback

* The best way to achieve this is using attributes and KNOCKBACK RESISTANCE, but if you would like to work anywhere on your inventory, create an activator PLAYER\_RECEIVE\_HIT\_GLOBAL and teleport the player to itself, something like 
  * execute at %player% run tp %player% \~ \~ \~

### I would like an item that gives slowness to all people around m

* Use the command AROUND and give the effect with the placeholders of around. Check AROUND command in the wiki for more info.

### Disable-Block color dye to apply on signs and wolf collars

* For the SIGN:
  * Activator: PLAYER\_RIGHT\_CLICK
  * ONLY\_BLOCK
  * detailedBlocks: \<Here add the signs you want to block>
  * And enable cancel event
* For the Wolf collars:
  * Activator: PLAYER\_CLICK\_ON\_ENTITY
  * detailedClick: RIGHT
  * detailedEntities: WOLF
  * And enable cancel event

### Create a wolf that stays for "x" seconds and then disappears

If want to create like a pet wolf that longs "x" seconds add these commands:

```
commands:
- execute at %player% run summon wolf ~ ~ ~ {Owner: %player%,Tags:["%player%wolf"]}
- DELAY 10
- execute run kill @e[tag=%player%wolf]
just modify the delay depending the time you want the wolf to be alive
```

### Armor that disable lava-fire damage

* Create an activator PLAYER\_RECEIVE\_HIT\_GLOBAL and in detailedDamage add LAVA, FIRE\_TICK and FIRE, then enable cancelEvent in that activator.
*   Make sure you select the correct detailedSlot of the armor piece you are using

    If want to disable the fire animation, the most close you can get is creating a loop activator with REMOVEBURN command.

### Armor that allows breathing in water

* Create a LOOP activator, select the correct detailedSlot and give the player the effect of water\_breathing.

### Disable-block leather dyed armor to get washed at cauldron

* Just create an activator RIGHT\_CLICK then typeTarget: ONLY\_BLOCK\_CLICK, detailedBlocks: CAULDRON and enable cancel event.

### Item that opens a GUI

* GUI plugins normally have a place to add a player, for example, the command would be /opengui \<player>, so inside your item you have to add /opengui %player%
  * if the command is different just change that, for example /enchanttable %player%
* If your plugin doesn't have this, instead of adding a place for player, use SUDOOP, for example:
  * SUDOOP opengui
  * SUDOOP enchanttable

### Stop trident from being thrown

* Add an activator PLAYER\_LAUNCH\_PROJECTILE and cancelEvent on true

### I would like to disable fall damage for my armor

* Use the activator PLAYER\_RECEIVE\_HIT\_GLOBAL and specify on detailedDamage FALL, then enable cancel event

### Disable picking up water with bottle

* PLAYER\_RIGHT\_CLICK and enable cancel event

### Check if a player is fishing a player

* Use the activator PROJECTILE\_HIT\_PLAYER, PLAYER\_FISH\_PLAYER, a LOOP activator and a variable. (Also some activators to prevent bugs)
  * Once the ROD hits the player, PROJECTILE\_HIT\_PLAYER will run, so set your variable to "%target%"
  * The loop activator will only work if the variable is different than "NO", and you can use the variable to target the fished player.
  * And if the player FISH the target, set the variable to "NO", so now it resets and stop working
  * Now the activators to prevent bugs are PLAYER\_DROP\_THE\_EI and PLAYER\_DESELECT\_THE\_EI, reset the variable on these OR cancel the event.

### Summon lightning on cursor

* First create an activator PLAYER\_ALL\_CLICK or PLAYER\_RIGHT\_CLICK or PLAYER\_LEFT\_CLICK
* Then in commands use the custom command [SPAWNENTITYONCURSOR](https://docs.ssomar.com/tools-for-all-plugins/custom-commands/player-and-target-commands#spawnentityoncursor) [LIGHTNING](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html#LIGHTNING) 1
  * By default it doesn't do damage so in addition you can add the custom command DAMAGE {number}

### How to increase the max life "x" each time the activator gets triggered

* To increase your max life you need PlaceholderAPI and Player expansion, and the command you will use is:
  * execute run attribute %player% minecraft:generic.max\_health base set %player\_max\_health%+2

### How to regain health per hit

* On an activator related to hit such as PLAYER\_HIT\_PLAYER and PLAYER\_HIT\_ENTITY use REGAIN\_HEALTH command on playerCommands, check that command on Commands section for more info.
* If want to regain the same damage you made use the EI Placeholder **%last\_damage**_**\_**_**dealt%**

### Bow that explode when the projectile hits the block

* Create an activator PROJECTILE\_HIT\_BLOCK on your item, and on commands you can use
  * EXPLODE blockCommand
  * execute at %player% run summon tnt %block\_x\_int% %block\_y\_int% %block\_z\_int%
    * After that line you'll need a execute run kill %projectile\_uuid%
  * or the same before but summoning a creeper

### I would like to disable the charge ot the bow or crossbow

* This is not possible using ExecutableItems yet, the only thing EI can do is prevent the bow or the crossbow to shot the projectile, but charge it? nop.

### How to create an armor that disables the freezing of the player (1.18)

* You can run the command FREEZE on loop, just like this:

```
    commands:
    - 'LOOP START: 20'
    - GLACIAL_FREEZE 1
    - DELAYTICK 1
    - LOOP END
```

### I want to only make the activator work if the player has certain value on a scoreboard

Just use the Scoreboard expansion of PlaceholderAPI, then use their placeholders in the placeholderCondition section inside your activator ^^

