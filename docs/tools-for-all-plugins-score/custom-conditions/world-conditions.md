# World Conditions

## Condition settings
All conditions are formated the same, you have:
* `{theCondition}`
* `{theCondition}Msg`: The message to send if the condition is invalid
* `{theCondition}Cancel`: Whether or not the event should be cancelled if the condition is invalid
* `{theCondition}Cmds`: The command(s) to run if the condition is invalid
* Example:

```yaml
worldConditions:
    ifWeather:
      - CLEAR
    ifWeatherMsg: '' #<- Here is where you will add the custom message.
    ifWeatherCancel: true
    ifWeatherCmds:
    - say not clear
```

:::info
For numerical conditions, you can assign 2 conditions at the same time.
Example: 
"I want to create a condition that only activates if the value is greater than 50 but less than 250"
`{theCondition}: 50 < CONDITION < 250`
:::

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
