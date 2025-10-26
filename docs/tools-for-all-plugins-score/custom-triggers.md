# 🔘 Custom triggers

## Custom triggers !

Custom trigger is a way to store a list of commands and then either run those commands with a simple command or by a schedule system.

### How to create custom triggers ?

* Custom trigger is a type of activator, so go to the plugin you want (available in ExecutableItems, ExecutableBlocks and ExecutableEvents) and create the activator and select as option: CUSTOM\_TRIGGER.
* Then add on "commands section" the commands you want, but be careful ! Let's explain what happens on each plugin
  * ExecutableItems: To make the items work with this plugin it needs as requirement the player to have the item in the inventory, nice ! a "player" so.. we can run playerCommands against the player such as
    * SEND\_MESSAGE \&eHello player with name %player%!
      * We can run a player command against the player
      * We can even parse placeholders against the player
  * ExecutableBlocks: To make the blocks work with this plugin it needs as requiremente the block to be placed, so there is no involved a player, that means:
    * We can run blockCommands, since there is a block involved
    * We **could** (depend if you enable the owner feature) run ownerCommands, who targets the owner of the block. 
  * ExecutableEvents: To make the events work with this plugin there is no needed for requirement, that means by just existing it will work, this means
    * There is no player, no block, no owner, nothing involved, so we cant run neither playerCommands nor blockCommands nor entityCommands, etc.
    * Now ! There is a tip to target this, all custom commands supports adding more than one argument, this means we could store the value of the player who run the command and then run an score run-player-command to achieve this. Its explained here \<IF FORGOT PLS  PING VAYK>
* Well, let's continue, since you have already created the activator and the commands, now you can differentiate the CUSTOM\_TRIGGER into 2 types:
  * Callables: Custom triggers activators which are only callable by the command
    * /\<plugin> custom-trigger \<features>
  * Callables and Scheduleds: Custom triggers activators which are callable by commands but also they are scheduled, that means they work in specific certain times. For example:
    * An activator that runs each day at 22:00 hrs.
    * An activator that runs each sunday.
    * An activator that will run the next \<date>.

- [ ] (Optional) Edit the schedule features

```json
# Here are the Schedule formats**
**scheduleFeatures:
**    startDate: '1700-01-01 00:00:00' // Begin of the schedule
    endDate: '3000-01-01 00:00:00' // End of the schedule
    when:
    // Formats
    // Format 1 : \{YEAR\}:::\{MONTH\}:::\{DAY\}:::\{HOUR\}:::\{MIN\}:::\{SEC\}
    // Format 2 : \{YEAR\}:!:\{WEEK\}:!:\{DAYSTRING\}:!:\{HOUR\}:!:\{MIN\}:!:\{SEC\}
    // Examples :
    - '%%%%:::%%:::%%:::%%:::%%:::XX' // It runs every minute
    - '%%%%:::12:::[24,25,26]:::16:::XX:::XX' // It runs only the 24,25,26 December at 16 hours
    - '2024:::XX:::XX:::XX:::XX:::XX:::XX' // It runs the 1 January 2024 at 00:00:00
    - '%%%%:!:%%:!:MONDAY:!:14:!:XX:!:XX' // It runs every Monday at 14 hours
    - '%%%%:!:42:!:XX:!:[10,14,18]:!:XX:!:XX  // It runs at 10,14,18 hours everyday during the week 42
```

If you want to trigger your custom trigger using a command it's very easy !

:::info
The trigger ID is equals to the activator ID, you can customize your activator ID by manually editing your config file.
:::

:::warning
**Be sure your activator id is unique**, if they are all named activator0 they will be triggered at the same time when one will be triggered.
:::

### How to run custom triggers manually ?

In this category you will learn how to run the custom triggers we have already created !

* Keep in note that values with \{\} are obligatory for the command to work, and \[] are optional.
* For better understanding we also marked as blue = obligatory and orange = optional

Before knowing how to make them work, let's talk a bit of how they work.

* We have created a custom trigger activator with a certain activatorID
* The commands are basically a "searcher" if they find an ExecutableItem with the specified activatorID which is a custom trigger then it will run the activator.
* What is the idea of doing this ? you would think, why I would refer to a custom trigger inside my ExecutableItem from my ExecutableItem, since I could have write just the commands on my activator instead of calling a custom trigger? 
  * Well, the idea is to organize, its useful for complex setup, let's say you repeat 5 command always on 4 activators on your same ExecutableItem then it may (not necessary) be a good idea to pack those 5 commands into 1 activator and just run the custom trigger.

The same idea can be extrapolated to other contexts such as using it in ExecutableItems, ExecutableBlocks and ExecutableEvents. 

#### Running custom triggers for ExecutableItems

* Command: ****/ei run-custom-trigger trigger:\{activatorID\}**** ****\[player:\{playerName\}] \[slot:\{slot\}] \[additionalArguments]****
  * activatorID: The ID of the activator you created as custom trigger.
  * playerName: The playername of the user
    * If there is no player specified such as `/ei run-custom-trigger trigger:{activatorId}` then it will try to execute the custom trigger for all the players that have an ExecutableItem with the specified activator ID of custom trigger.
    * If there is a player specified then it will try to execute the custom trigger only for that player and will run if he has an ExecutableItem with the specified activator ID of custom trigger.
  * slot: The slot where this custom trigger should run
    * If there is no slot present then the search is on all inventory
    * If there is a slot specified then the search is only on that slot
      * You can use -1 to target the mainhand slot.
  * additionalArguments: List of words that you can add to your command that you can get later by using %arg0%, %arg1%, ... placeholders.
* Examples:
  * /ei run-custom-trigger trigger:activator0
  * /ei run-custom-trigger trigger:activator0 player:SsomarPluginsPlayer
  * /ei run-custom-trigger trigger:activator0 player:SsomarPluginsPlayer slot:-1
  * /ei run-custom-trigger trigger:activator0 player:SsomarPluginsPlayer slot:-1 how are you
    * %arg0% = how
    * %arg1% = are

#### Running custom triggers for ExecutableBlocks

* Command: ****/eb run-custom-trigger trigger:my\_activator\_trigger:\{activatorID\}**** ****\[block:\{location\}] \[additionalArguments]****
  * activatorID: The ID of the activator you created as custom trigger.
  * location: Location of the ExecutableBlock
    * If no location is provided then it will try to run for all ExecutableBlocks placed, and it will run for the ones who has the custom trigger activator with the ID selected.
    * If a location is provided it will do the same idea but only at that location.
  * additionalArguments: List of words that you can add to your command that you can get later by using %arg0%, %arg1%, ... placeholders.
* Examples:
  * /eb run-custom-trigger trigger:MyEpicTrigger
  * /eb run-custom-trigger trigger:MyEpicTrigger SsomarPlugins
    * %arg0% = SsomarPlugins
  * /eb run-custom-trigger trigger:MyEpicTrigger block:world,50,65,125

#### Running custom triggers for ExecutableEvents

* Info: This trigger is quite different, because on EI we have as condition the player and slot, on EB the location, but on ExecutableEvents we don't have conditions, that means, if you call for this trigger, if it exists it will always run.
* Command: ****/ee run-custom-trigger trigger:\{activatorID\}****** ******\[additionalArguments]****
  * activatorID: The ID of the activator you created as custom trigger.
  * additionalArguments: List of words that you can add to your command that you can get later by using %arg0%, %arg1%, ... placeholders.
* Examples:
  * /ee run-custom-trigger trigger:MyEpicTrigger
  * /ee run-custom-trigger trigger:MyEpicTrigger SsomarPlugins
    * %arg0% = SsomarPlugins

* Pro tip: How can we run player commands here ? since the event is not linked to a player ?. Well, you can use this feature [https://docs.ssomar.com/#player-commands](https://docs.ssomar.com/#player-commands) + %arg0% tip. For example
  * Let's say there is an event me as admin I will run, then I would do
    * /ee run-custom-trigger trigger:TriggerOfEvent
  * to make this trigger have player commands we could add the name of yourself there, for example
    * /ee run-custom-trigger trigger:TriggerOfEvent Vayk\_
  * Now on the commands inside our event we could use
    * /score run-player-command player:%arg0% \{command\}
  * For example
    * Command ran: /ee run-custom-trigger trigger:activator0 Vayk\_
    * Output: All players jump
    * Code:

```yaml
activators:
  activator0:
    name: '&eActivator'
    option: CUSTOM_TRIGGER
    cancelEvent: false
    silenceOutput: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      pauseWhenOffline: false
      pausePlaceholdersConditions: {}
      enableVisualCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
      enableVisualCooldown: false
    requiredItems: {}
    requiredExecutableItems: {}
    requiredMagics: {}
    worldConditions: {}
    placeholdersConditions: {}
    consoleCommands:
    - score run-player-command player:%arg0% ALL_PLAYERS JUMP 1
```

* Its important to know that the name of %arg0% which in this case is Vayk\_ is just dummy, it doesn't make anything more than a dummy value to be able to use score run-player-commands to then be able to use player commands.
  * Keep in mind that if you usage a normal SCore Player command it will target %arg0% that's why I used ALL\_PLAYERS before adding the command.

### How to run custom triggers scheduled ?

We have already explained the basics of how to create a custom trigger, but it may be not very clear how schedule works or how to run them, that's why, since we already know the content, let's check a couple of examples

#### \[ExecutableEvents] Schedule activator with message for your next Event, for example for the new year

```
enabled: true
editorIcon: LEVER
name: '&eDefault name'
disabledWorlds: []
activators:
  my_happy_new_year_trigger:
    name: '&eActivator'
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      when:
       - '2026:::XX:::XX:::XX:::XX:::XX:::XX' // It runs the 1 January 2025 at 00:00:00
    consoleCommands:
    - say &eHappy new year Everyone !
    - ei giveall new_year_gift 10
```

* This activator will run automatically at 1 January 2026 at 00:00:00 and it will run the consoleCommands, so we will start the year with good messages and 10 gifts ^^

#### \[ExecutableItem] Scheduled activator, such as rewards for having the ExecutableItem in their inentory

* "In their inventory" statement is on the title because remember an ExecutableItem only work if its inside a player inventory !
* With that said let's create an activator inside our item that runs the commands at 10h, 14h and 18h each day, and we give him for having the item some money in game with the command money.

```
name: '&eMy epic stick'
lore:
- '&b&oBe connected at 10h , 14h and 18h'
- '&b&oand hold this stick to gain &6500$'
material: STICK
activators:
  my_money_give_trigger:
    name: '&eActivator'
    option: CUSTOM_TRIGGER
    scheduleFeatures:
      startDate: '1700-01-01 00:00:00'
      endDate: '3000-01-01 00:00:00'
      when:
      - '''%%%%:!:%%:!:XX:!:[10,14,18]:!:XX:!:XX'
    detailedSlots:
    - -1
    commands:
    - money give %player% 500
    playerConditions: {}
```

* Be careful ! The detailedSlots of this activator is -1, so it will trigger on the hours scheduled but if the player doesn't have it on mainhand it will fail due to conditions, so the player won't receive money. You can adjust the features depending on what you want.

#### \[ExecutableBlock] Custom trigger as reward

* Here you will see a basic example of an ExecutableBlock with a CUSTOM\_TRIGGER activator, which when it runs it will drop some rewards at the block location.

```
creationType: BASIC_CREATION
name: '&eMy epic block'
lore:
- '&b&oDefault lore'
material: STONE
dropType: IN_THE_INVENTORY
activators:
  my_drop_ei_trigger:
    name: '&eActivator'
    option: CUSTOM_TRIGGER
    commands:
    - score run-player-command player:%owner% SEND_MESSAGE &7&oCheck your epic block, there is a &ebig reward
      &7for you !
    - DROPEXECUTABLEITEM the_reward_ei 8
```

* The idea would be, for example after an event, killing a boss, something epic run the commands:
  * \[command to display a message to the server about the event]
  * `/eb run-custom-trigger trigger:my_drop_ei_trigger` then what would happen is o make all the EB placed drop 100 ExecutableItems
* But how could we do this ? where ? Well ! let's use what we learn, let's create an ExecutableEvent custom trigger:

```yaml
activators:
  activator0: # ID OF THE ACTIVATOR OF CUSTOM_TRIGGER
    name: '&eActivator'
    option: CUSTOM_TRIGGER
    cancelEvent: false
    silenceOutput: false
    requiredItems: {}
    requiredExecutableItems: {}
    requiredMagics: {}
    worldConditions: {}
    placeholdersConditions: {}
    consoleCommands:
    - say &eCheck your bases mate, there are some rewards !
    - eb run-custom-trigger trigger:my_drop_ei_trigger
```

* So basically now we just need to do `/ee run-custom-trigger trigger:activator0` and thats it, it would send the broadcast message and all EB will run the custom trigger activator (if they have it, I am asumming they have it) which will send a message to the owner about a reward and it will drop the reward, very cool !
* What each player would look, would be like this:
  * ```yaml
    - Check your bases mate, there are some rewards ! # Message sent by EE CUSTOM_TRIGGER
    - &7&oCheck your epic block, there is a &ebig reward&7for you ! # Message sent by EB CUSTOM_TRIGGER
    ```
