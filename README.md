# 📚 Custom Commands

Here you have information related to all commands !&#x20;

{% content-ref url="tools-for-all-plugins-score/custom-commands/player-and-target-commands.md" %}
[player-and-target-commands.md](tools-for-all-plugins-score/custom-commands/player-and-target-commands.md)
{% endcontent-ref %}

{% content-ref url="tools-for-all-plugins-score/custom-commands/entity-commands.md" %}
[entity-commands.md](tools-for-all-plugins-score/custom-commands/entity-commands.md)
{% endcontent-ref %}

{% content-ref url="tools-for-all-plugins-score/custom-commands/block-commands.md" %}
[block-commands.md](tools-for-all-plugins-score/custom-commands/block-commands.md)
{% endcontent-ref %}

{% content-ref url="tools-for-all-plugins-score/custom-commands/utility-commands.md" %}
[utility-commands.md](tools-for-all-plugins-score/custom-commands/utility-commands.md)
{% endcontent-ref %}

## You can use all commands from the list above outside Ssomar Plugins !!

Score has more than 100 custom commands, that normalyl were able to only run inside your ExecutableItem/ExecutableBlock/ExecutableEvents, but using this feature we could run them outside Ssomar universe, let's take a look how this works.

Before starting, arguments with {} are obligatory to make the command work and \[] are optional. They are colored following the format of the wiki too.

### Player commands

* Info: Command that allows outside and inside Ssomar Plugins to run a custom command from SCore to a specific player.
  * When using this command, all the command line is parsed through PlaceholdersAPI so you add placeholders to it.
* Command: <mark style="color:blue;">**/score run-player-command player:{player} {command}**</mark>
  * player: Name of the player targeted
  * command: SCore player command that will be applied to {player}
* Examples:
  * /score run-player-command player:SsomarPluginsPlayer SENDMESSAGE \&eHello
  * /score run-player-command player:SsomarPluginsPlayer SENDMESSAGE \&eHello player:Ssomar +++ DELAY 10 +++ SWING\_MAIN\_HAND
  * /score run-player-command player:SsomarPluginsPlayer SENDMESSAGE \&eHello my name is %player% and my life is %player\_health%

### Block commands

* Info: Command that allows outside and inside Ssomar Plugins to run a custom command from SCore for a specific block.
* Command: <mark style="color:blue;">**/score run-block-command**</mark>**&#x20;**<mark style="color:orange;">**\[player:{player}]**</mark> <mark style="color:blue;">**block:{world},{x},{y},{z} {command}**</mark>
  * player: Player who is involved in this activator
    * Its optional due some commands need it, for example
      * MOB\_AROUND: Who will apply the damage? well, the command applies damage to mob around but the damage will be count dealt as the {player}, so it checks if the player can actually damage the mob, the damage and kills counts for him, etc.
      * VEIN\_BREAKER: Who broke the blocks ? well, the command breaks block in a vein shape but the blocks will be counted as broken by the {player}, so it checks if the player can actually break the block, the block broken counts for him, etc.
  * block
    * world: World where the block is
    * x: X coordinates of the block
    * y: Y coordinates of the block
    * z: Z coordinates of the block
  * command: Block command who will be run against the block and, if exists, by the player.
* Examples:
  * /score run-block-command block:world,-23,-61,27 BREAK
  * /score run-block-command player:SsomarPluginsPlayer block:world,-23,-61,27 MINEINCUBE 1 false

### Entity commands

* Info: Command that allows outside and inside Ssomar Plugins to run a custom command from SCore for a specific entity
* Command: /score run-entity-command entity:{entityUUID} {command}
  * entityUUID: UUID of the entity targeted
  * command: Entity command who will be run against the entity.
* Example:
  * /score run-entity-command entity:c4d5338b-6f8e-4b97-9f18-9dbc47f60131 JUMP 1
  * /score run-entity-command entity:%entity\_uuid% JUMP 1

## Command Issues

### Issues related to ' and " symbols

While writing commands like:

{% code overflow="wrap" %}
```
MOB_AROUND 10 true BLACKLIST(ARMOR_STAND) execute at %around_target_uuid% run summon armor_stand ~ ~3 ~ {NoGravity:1b,Silent:1b,Invulnerable:1b,Small:1b,Marker:1b,Invisible:0b,Tags:["mete0"],ArmorItems:[{},{},{},{id:"minecraft:magma_block",Count:1b,tag:{CustomModelData:10002}}]}
```
{% endcode %}

You might encounter console errors such as:

```
[07:41:08 INFO]: Expected '}'
...:minecraft:magma_block,Count:1b,tag:{CustomModelData:10002}}]}<--[HERE]
```

To fix it, change the `"` symbols to `'` &#x20;

### Issues related to custom commands not executing under varying circumstances

Try adding DELAYTICK 1 or DELAYTICK 2 or longer before executing the custom command. It may be due to how the nature of the used activators work.
