# World Conditions

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
worldConditions:
    ifWeather:
      - CLEAR
    ifWeatherMsg: '' #<- Here is where you will add the custom message.
    ifWeatherCancel: true
    ifWeatherCmds:
    - say not clear
```

<details>

<summary>Example</summary>

```yaml
name: '&7MyPickaxe'
lore:
- '&7&oDefault desc'
material: DIAMOND_PICKAXE
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
activators:
  activator1:
    activator: PLAYER_ALL_CLICK
    displayName: Activator name
    usageModification: 0
    usePerDay: -1
    cancelEventIfMaxUsePerDay: false
    autoUpdateItem: false
    commands: []
    silenceOutput: false
    blockCommands:
    - BREAK
    detailedBlocks: []
    cancelEventIfNotDetailedBlocks: false
    onlyAirClick: false
    onlyBlockClick: true
    cancelEventIfInvalidRequiredExecutableItems: false
    cancelEvent: false
    conditions:
      worldConditions:
        ifWeather:
        - RAIN
        ifWeatherMsg: "It's not raining !"

```

</details>

### ifWeather

* Description: Checks if the world has the said weather.
* Example:

```yaml
worldConditions:
    ifWeather:
      - CLEAR
    ifWeatherMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the world starts to rain and the ifWeather condition is set to RAIN, the activator will activate.
* Options: **RAIN, CLEAR or STORM**
* Required: NO (Default: false)

### ifWorldTime

* Description: Checks if the world is in the said time.
* Example:

```yaml
worldConditions:
    ifWorldTime: '>3000'
    ifWorldTimeMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the value is `<667`, the activator will only activate if the world's time is below 667
  * If the value is `<1988`, the activator will only activate if the world's time is 1988 and below.
  * If the value is `==465`, the activator will only activate if the world's time is 465.
  * If the value is `>3001`, the activator will only activate if the world's time is above 3001.
  * If the value is `>=18000`, the activator will only activate if the world's time is 18000 and above.
* Required: NO
* Even if you set the world time to 26000, the condition thinks it's 2000.
