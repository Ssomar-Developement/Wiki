# List of the Activators

## Activators of ExecutableEvents

Here you have the list of activators available with their description and some examples. The activators allow you to execute custom actions,  it can have conditions, run commands, have cooldown, etc.

The activators that have "⭐" are available only on **premium** version and "🔹" for **free** versions.\
Premium version also have the free version activators.

Activator features are features that are exclusive to that activator.

##  Miscellaneous activators

### ⭐ BROADCAST\_MESSAGE

* Info: Triggered when a broadcast message is sent
* Specific placeholders:
  * %message%
  * %is\_async%

### 🔹CUSTOM\_TRIGGER

* Info: Activator that can be executed by running a command, or it can be scheduled. 
  * This activator is for all plugins, because of that its explained on [https://docs.ssomar.com/tools-for-all-plugins-score/custom-triggers](https://docs.ssomar.com/tools-for-all-plugins-score/custom-triggers)

### ⭐ HANGING\_PLACE

* Info: Triggered when a hanging entity like an item frame or painting is placed

### ⭐ HANGING\_BREAK

* Info: Triggered when a hanging entity is broken by natural causes or player

### ⭐ HANGING\_BREAK\_BY\_ENTITY

* Info: Triggered when a hanging entity is broken by another entity, like a player or mob

### ⭐ MAP\_INITIALIZE

* Info: Triggered when a map is initialized by the server

### 🔹LOOP\_SERVER

* Info: Activates in repeat one time each loop

### ⭐LIGHTNING\_STRIKE

* Info: Activates when a lightning strike is emitting in the world
* Specific [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#lightning_strike): 
  * %cause% : List of [causes](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/weather/LightningStrikeEvent.Cause.html)

### ⭐ PORTAL\_CREATE

* Info: Activates when a portal is created

### ⭐ PLUGIN\_DISABLE

* Info: Triggered when a plugin is disabled
* Specific placeholders:
  * %plugin\_name%

### ⭐ PLUGIN\_ENABLE

* Info: Triggered when a plugin is enabled
* Specific placeholders:
  * %plugin\_name%

### ⭐ RAID\_FINISH

* Info: Activates when a village raid finishes
* Specific placeholders: 
  * %badomen\_level%
  * %heroes% : (UUID LIST) Example  "123e4567-e89b-12d3-a456-426614174000,123e4567-e89b-12d3-a456-426614174001,123e4567-e89b-12d3-a456-426614174002"

### ⭐ RAID\_TRIGGER

* Info: Activates when a village raid starts
* Specific placeholders: 
  * %player% : who triggered the raid
  * %badomen\_level%

### ⭐ RAID\_WAVE

* Info: Activates when the next village raid starts
* Specific placeholders: 
  * %raiders% : (UUID LIST) Example  "123e4567-e89b-12d3-a456-426614174000,123e4567-e89b-12d3-a456-426614174001,123e4567-e89b-12d3-a456-426614174002"

### ⭐ CHUNK\_LOAD

* Info: Activates when a chunk is loaded
* Specific placeholders:
  * %world%
  * %coord\_x%
  * %coord\_z%
  * %is\_slime\_chunk%
  * %is\_loaded%
  * %is\_generated%
  * %is\_force\_loaded%
  * %is\_new\_chunk%

### ⭐ CHUNK\_UNLOAD

* Info: Activates when a chunk is unloaded
* Specific placeholders:
  * %world%
  * %coord\_x%
  * %coord\_z%
  * %is\_slime\_chunk%
  * %is\_loaded%
  * %is\_generated%
  * %is\_force\_loaded%
  * %is\_new\_chunk%

### ⭐WEATHER\_CHANGE

* Info: Activates when the weather change in a world
* [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#weather_change)

### ⭐ STRUCTURE\_GROW

* Info: Activates when a structure grows

### ⭐ THUNDER\_CHANGE

* Info:  Thunder state changing in a world
* Specific placeholders: 
  * %cause% : List of causes (COMMAND, NATURAL, SLEEP, PLUGIN, UNKNOWN)

### ⭐ VEHICLE\_CREATE

* Info: Activates when a player places/creates a vehicle

### ⭐ VEHICLE\_DAMAGE

* Info: Activates when an entity considered as a vehicle is damaged

### ⭐ VEHICLE\_DESTROY

* Info: Activates when an entity considered as a vehicle is destroyed

### ⭐ WEATHER\_CHANGE

* Info: Triggered when the weather change
* Specific placeholders: 
  * %cause% : List of causes (COMMAND, NATURAL, SLEEP, PLUGIN, UNKNOWN)

### ⭐ WORLD\_DAY

* Info: Activates when the world hits daytime

### ⭐ WORLD\_NIGHT

* Info: Activates when the world hits nighttime

### REMOTE\_SERVER\_COMMAND

* Activates when a command is received over RCON ([https://jd.papermc.io/paper/1.14.4/index.html?org/bukkit/event/server/RemoteServerCommandEvent.html](https://jd.papermc.io/paper/1.14.4/index.html?org/bukkit/event/server/RemoteServerCommandEvent.html))

### SERVICE\_REGISTER

* Activates when a service is registered ([https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceRegisterEvent.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceRegisterEvent.html))

### SERVICE\_UNREGISTER

* Activates when a service is unregistered ([https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceUnregisterEvent.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/server/ServiceUnregisterEvent.html))

## Player activators

### 🔹LOOP 

* Info: Activates in repeat per player 

### 🔹PLAYER\_ADVANCEMENT

* Info: Activates when a player achieves an advancement

### 🔹PLAYER\_ALL\_CLICK

* Info Activates when a player left-clicks or right-clicks the item. 

### 🔹PLAYER\_BED\_ENTER

* Info: Activates when a player right-clicks a bed. 

### 🔹PLAYER\_BED\_LEAVE

* Info: Activates when a player leaves the bed. 

### 🔹PLAYER\_BEFORE\_DEATH

* Info: Activates before a player's death. 

### 🔹PLAYER\_BLOCK\_BREAK

* Info: Activates when a player mines/breaks a block. 

### 🔹PLAYER\_BLOCK\_PLACE

* Info: Activates when a player places a block. 

### 🔹PLAYER\_BRUSH\_BLOCK

* Info: Activates when a player brushes a block 

### 🔹PLAYER\_BUCKET\_ENTITY

* Info: Activates when a player buckets an entity 

### 🔹PLAYER\_CHANGE\_WORLD

* Info: Activates when a player moves to a different world. 

### 🔹PLAYER\_CLICK\_ON\_ENTITY

* Info: Activates when a player click on an entity. 

### 🔹 PLAYER\_CLICK\_ON\_PLAYER 

* Info: Activates when a player click on a player. 

### 🔹PLAYER\_CONNECTION

* Info: Activates when a player log into the server. (Does not activate when you log out) 

### 🔹PLAYER\_CONSUME

* Info: Activates when a player successfully eat/consume the item. 

### 🔹PLAYER\_CUSTOM\_LAUNCH

* Info: Activates when a player launches a custom projectile. 

### 🔹PLAYER\_DEATH

* Info: Activates when a player dies. 

### 🔹PLAYER\_DISABLE\_FLY 

* Info: Activates when the player stops flying. 

### 🔹PLAYER\_DISABLE\_GLIDE

* Info: Activates when the player stops gliding. 

### 🔹PLAYER\_DISABLE\_SNEAK

* Info: Activates when a player stops from sneaking. 

### 🔹PLAYER\_DISABLE\_SPRINT

* Info: Activates when a player stops from sprinting 

### 🔹PLAYER\_DISCONNECTION

* Info: Activates when a player logs out from the server. 

### 🔹PLAYER\_DISMOUNT

* Info: Activates when a player steps out from riding an entity. 

### 🔹PLAYER\_DROP\_ITEM

* Info: Activates when a player drops an item. 

### 🔹PLAYER\_EDIT\_BOOK

* Info: Activates when a player made changes to the book and quill and pressed done or sign the book. 

### 🔹PLAYER\_EMPTY\_BUCKET

* Info: Activates when a player empties the bucket they have in their hand (Such as placing water from water bucket)

### 🔹PLAYER\_ENABLE\_FLY

* Info: Activates when a player starts and stops flying. 

### 🔹PLAYER\_ENABLE\_GLIDE

* Info: Activates when the player starts gliding. 

### 🔹PLAYER\_ENABLE\_SNEAK

* Info: Activates when a player starts sneaking. 

### 🔹PLAYER\_ENABLE\_SPRINT

* Info: Activates when a player starts sprinting. 

### 🔹PLAYER\_ENCHANT\_ITEM

* Info: Activates when a player add enchant to an item
* Specific [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#player_enchant_item): 
  * %enchants%
  * %level\_cost%

### 🔹PLAYER\_ENTER\_IN\_HIS\_LAND

* Info: Activates if you enter in your land or a land where you are trusted 

### 🔹PLAYER\_ENTER\_IN\_HIS\_PLOT

* Info: Activates if you enter a plot from the PlotSquared plugin.

### 🔹PLAYER\_ENTITY\_PLACE

* Info: Activates when the player places an entity (armor stands, boats, minecarts and end crystal) 

### 🔹PLAYER\_EQUIP\_ARMOR

* Info: Activates when the player equips an armor.

### 🔹PLAYER\_EXPERIENCE\_CHANGE

* Info: Activates when the player experience change naturally.
* Specific [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#player_experience_change): 
  * %experience%

### 🔹PLAYER\_FERTILIZE\_BLOCK

* Info: Activates if a player fertilizes blocks with bone meal. 

### 🔹PLAYER\_FILL\_BUCKET

* Info: Activates when a player attempts to pickup water or lava with a bucket.

### 🔹PLAYER\_FIRST\_CONNECTION

* Info: Activates when the player joins for first time on the server. 

### 🔹PLAYER\_FISH\_BLOCK

* Info: Activates when a player right-click the fishing rod when the fishing rod bobber is on a block. 

### 🔹PLAYER\_FISH\_ENTITY

* Info : Activates when a player right-click the fishing rod when the fishing rod bobber catches an entity. 

### 🔹PLAYER\_FISH\_FISH

* Info: Activates when a player right-click the fishing rod when the fishing rod bobber catches something. 

### 🔹PLAYER\_FISH\_NOTHING

* Info : Activates when a player fishes nothing. 

### 🔹PLAYER\_FISH\_PLAYER

* Info: Activates when a player right-click the fishing rod when the fishing rod bobber catches a player. 

### 🔹PLAYER\_FOOD\_CHANGE

* Info: Activates when the player food changes. 

### 🔹PLAYER\_HARVEST\_BLOCK

* Info: Activates when a player harvests a block 

### 🔹PLAYER\_HIDE\_ENTITY

* Info: [https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/PlayerHideEntityEvent.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/PlayerHideEntityEvent.html)

### 🔹PLAYER\_HIT\_ENTITY

* Info: Activates when a player hits an entity
* Specific placeholders:
  * %critical% : true or false (For Paper and Paper forks only)

### 🔹PLAYER\_HIT\_PLAYER

* Info: Activates when a player hits a player 

### 🔹PLAYER\_INVENTORY\_CLICK

* Info: Activates when the player click an inventory
* Specific [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#player_inventory_click): 
  * %is\_shift\_click%
  * %is\_mouse\_click%
  * %is\_left\_click%
  * %is\_right\_click%
  * %is\_keyboard\_click%
  * %is\_creative\_action%
  * %get\_action%
  * %before\_slot%
  * %after\_slot%
  * %inventory\_type%
  * %inventory\_title%

### 🔹PLAYER\_ITEM\_BREAK

* Info: Activates when a player breaks the item by making it loose all its durability. 

### 🔹PLAYER\_JUMP

* Info: Activates when a player jumps. 

### 🔹PLAYER\_KICK

* Info: Activates when a player gets kicked 

### 🔹PLAYER\_KILL\_ENTITY

* Info: Activates when a player kills an entity. 

### 🔹PLAYER\_KILL\_PLAYER

* Info: Activates when a player kills a player. 

### 🔹PLAYER\_LAUNCH\_PROJECTILE

* Info: Activates when a player launch a projectile 

### 🔹PLAYER\_LEAVE\_HIS\_LAND

* Info: Activates if you leave your land or a land where you are trusted 

### 🔹PLAYER\_LEAVE\_HIS\_PLOT

* Info: Activates if you leave a plot from the PlotSquared plugin. 

### 🔹PLAYER\_LEFT\_CLICK

* Info: Activates when a player left-clicks the item. 

### 🔹PLAYER\_LEVEL\_CHANGE

* Info: Activates when the player levels change
* Specific [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#player_level_change): 
  * %new\_level%
  * %old\_level%

### 🔹PLAYER\_MOUNT

* Info: Activates when a player mounts an entity. 

### 🔹PLAYER\_OPEN\_INVENTORY

* Info: Activates when a player opens their inventory 

### 🔹PLAYER\_PARTICIPATE\_KILL\_ENTITY

* Info: Activates when a player participates on killing an entity

### 🔹PLAYER\_PARTICIPATE\_KILL\_PLAYER

* Info: Activates when a player participates on killing a player

### 🔹PLAYER\_PICKUP\_ARROW

* Info: Activates when the player pick ups an arrow in the ground (the arrow entity)

### 🔹PLAYER\_PICKUP\_ITEM

* Info: Activates when the player pick ups an item 

### 🔹PLAYER\_PORTAL

* Info: Activates when a player enters to a portal 

### 🔹PLAYER\_PROJECTILE\_HIT\_BLOCK

* Info: Activates when the player projectile hits a block

### 🔹PLAYER\_PROJECTILE\_HIT\_ENTITY

* Info: Activates when the player projectile hits an entity 

### 🔹PLAYER\_PROJECTILE\_HIT\_PLAYER

* Info: Activates when the player projectile hits another player 

### 🔹PLAYER\_RECEIVE\_EFFECT

* Info: Activates when a player receives an effect
* [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#player_receive_effect)

### 🔹PLAYER\_RECEIVE\_HIT\_BY\_ENTITY

* Info: Activates when a player gets hit by anything from an entity. 

### 🔹PLAYER\_RECEIVE\_HIT\_BY\_PLAYER

* Info: Activates when a player gets hit by anything from a player. 

### 🔹PLAYER\_RECEIVE\_HIT\_GLOBAL

* Info: Activates when a player gets hit by anything. 

### 🔹PLAYER\_REGAIN\_HEALTH

* Info: Activates when a player regains health 

### 🔹PLAYER\_RESPAWN

* Info: Activates when a player re-spawns. 

### 🔹PLAYER\_RIGHT\_CLICK

* Info: Activates when a player right-clicks the item. 

### 🔹PLAYER\_RIPTIDE

* Info: Activates when a player riptides 

### 🔹PLAYER\_SEND\_MESSAGE

* Info: Activates when a player sends a message. 
* [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#player_write_command-or-player_send_message)

### 🔹PLAYER\_SHEAR\_ENTITY

* Info: Activates when a player shears an entity. 

### 🔹PLAYER\_SHOW\_ENTITY

* Info: [https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/PlayerShowEntityEvent.html](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/PlayerShowEntityEvent.html)

### 🔹PLAYER\_SPAWN\_CHANGE

* Info: Activates when a player change their spawn 

### 🔹PLAYER\_SWAP\_HAND

* Info: Activates when a player swap hands. 

### 🔹PLAYER\_TAKE\_LECTERN\_BOOK

* Info: Activates when a player takes a book from a lectern.

### 🔹PLAYER\_TARGETED\_BY\_AN\_ENTITY

* Info: Activates when an entity targets a player. 

### 🔹PLAYER\_TELEPORT

* Info: Activates when the player gets teleported
* Specific placeholders:
  * %teleport\_cause% : List of [causes](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/player/PlayerTeleportEvent.TeleportCause.html)

### 🔹PLAYER\_TRAMPLE\_CROP

* Info: Activates when a player tramples a crop. 

### 🔹PLAYER\_UNEQUIP\_ARMOR

* Info: Activates when the player unequips an armor. 

### 🔹PLAYER\_WALK

* Info: Activates when a player walks. 

### 🔹PLAYER\_WRITE\_COMMAND

* Info: Activates when a player enters commands.
* [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#player_write_command-or-player_send_message)

## Block activators

### ⭐BLOCK\_DRY

* Info: Activates when corals or farmlands got dried.

### ⭐CROP\_GROW

* Info: Activates when a crop grows.

### ⭐ITEMSADDER\_PLAYER\_BLOCK\_BREAK

* Info: Activates when the player breaks a block from ItemsAdder

### REDSTONE\_BLOCK\_ACTIVATION

* Info: Activates when a block has changed state due to redstone activation
* Specific placeholders:
  * %new\_state%
  * %old\_state%

## Entity activators

### ⭐CREEPER\_POWER\_CHANGE

* Info: Activates when the creeper is struck by lightning.
* Specific [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#creeper_power_change): 
  * %power\_cause%

### ⭐ENDERDRAGON\_CHANGE\_PHASE

* Info: Activates when the Ender Dragon change phase. 

### ⭐ENTITY\_BEFORE\_DEATH

* Info: Activates before the entity dies 

### ⭐ENTITY\_BREAK\_DOOR

* Info: Activates when an entity breaks a door (as zombie does) 

### ⭐ENTITY\_BREED

* Info: Activates when one entity breeds with another entity 

### ⭐ENTITY\_CHANGE\_BLOCK

* Info: Activates when an entity change a block state (as enderman when picking a block) 

### ⭐ENTITY\_COMBUST\_BY\_BLOCK

* Info: Activates when an entity enters on fire by a block 

### ⭐ENTITY\_COMBUST\_BY\_ENTITY

* Info: Activates when an entity enters on fire because of another entity 

### ⭐ENTITY\_DAMAGE\_BY\_BLOCK

* Info: Activates when an entity gets damaged by a block 

### ⭐ENTITY\_DAMAGE\_BY\_ENTITY

* Info: Activates when an entity gets damaged by entity 

### ⭐ENTITY\_DAMAGE\_BY\_PLAYER

* Info: Activates when an entity gets damaged by a player 

### ⭐ENTITY\_DEATH

* Info: Activates when an entity dies 

### ⭐ENTITY\_DROP\_ITEM

* Info: Activates when an entity drops an item 

### ⭐ENTITY\_ENTER\_BLOCK

* Info: Activates when an entity enters in a block (as bee enters into beehive) 

### ⭐ENTITY\_ENTER\_LOVE\_MODE

* Info: Activates when an entity enters into love mode 

### ⭐ENTITY\_EXPLODE

* Info: Activates when an entity explodes itself 

### ⭐ENTITY\_PARTICIPATE\_KILL\_ENTITY

* Info: Activates when an entity participates on killing an entity 

### ⭐ENTITY\_PARTICIPATE\_KILL\_PLAYER

* Info: Activates when an entity participates on killing a player 

### ⭐ENTITY\_PICKUP\_ITEM

* Info: Activates when an entity pickup an item 

### ⭐ENTITY\_PLACE\_EVENT

* Info: Activates when an entity places a block

### ⭐ENTITY\_PORTAL\_ENTER

* Info: Activates when an entity enters to a portal 

### ⭐ENTITY\_PORTAL\_EXIT

* Info: Activates when an entity leaves a portal 

### ⭐ENTITY\_PROJECTILE\_HIT\_BLOCK

* Info: Activates when the entity projectile hits a block 

### ⭐ENTITY\_PROJECTILE\_HIT\_ENTITY

* Info: Activates when the entity projectile hits another entity 

### ⭐ENTITY\_PROJECTILE\_HIT\_PLAYER

* Info: Activates when the entity projectile hits a player 

### ⭐ENTITY\_REGAIN\_HEALTH

* Info: Activates when an entity regains health 

### ⭐ENTITY\_RESURRECT

* Info: Activates when an entity resurrects 

### ⭐ENTITY\_SHOOT\_BOW

* Info: Activates when an entity shoots with a bow

### ⭐ENTITY\_SPAWN

* Info: Activates when an entity spawns 

:::warning
If the entity is just summoned, the activator will be triggered before the entity exists in the world so if you want to run custom commands on the entity add **DELAYTICK 1** before to delay the commands. Like that you are sure that the entity is really spawned.
:::

### ⭐ENTITY\_SPAWN\_TRIALSPAWNER

* Info; Activates when an entity is spawned from a trial spawner
* Specific [Placeholders](https://docs.ssomar.com/tools-for-all-plugins-score/placeholders#entity_spawn_trialspawner): 
  * %is\_ominous%

### ⭐ENTITY\_TAME\_BY\_ENTITY

* Info: Activates when an entity got tamed by an entity

### ⭐ENTITY\_TAME\_BY\_PLAYER

* Info: Activates when an entity got tamed by a player

### ⭐ENTITY\_TARGET\_ENTITY

* Info: Activates when an entity targets another entity 

### ⭐ENTITY\_TARGET\_PLAYER

* Info: Activates when an entity targets a player 

### ⭐ENTITY\_TELEPORT

* Info: Activates when an entity teleports itself 

### ⭐ENTITY\_TRANSFORM

* Info: Activates when an entity got transforme

