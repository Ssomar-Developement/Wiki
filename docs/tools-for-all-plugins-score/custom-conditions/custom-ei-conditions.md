---
description: >-
  Conditions that are related to other plugins such as Lands, IridiumSkyblock,
  PlotSquared and more.
---

# Custom EI Conditions

## Condition settings
All conditions are formated the same, you have:
* `{theCondition}`
* `{theCondition}Msg`: The message to send if the condition is invalid
* `{theCondition}Cancel`: Whether or not the event should be cancelled if the condition is invalid
* `{theCondition}Cmds`: The command(s) to run if the condition is invalid
* Example:

```yaml
 customConditions:
    ifOwnerOfTheEI: true
    ifOwnerOfTheEIMsg: '&cMy custom error message here'
    ifOwnerOfTheEICancel: true
    ifOwnerOfTheEICmds:
    - say i am looking for someone else
```

:::info
For numerical conditions, you can assign 2 conditions at the same time.
Example: 
"I want to create a condition that only activates if the value is greater than 50 but less than 250"
`{theCondition}: 50 < CONDITION < 250`
:::


### ifNeedPlayerConfirmation:

* Description: Asks the player to confirm if he/she is going to activate that activator once.
* Example:

```yaml
  customConditions:
    ifNeedPlayerConfirmation: true
```

* Example Situations:
  * If the player left-clicks the item, the message will pop up notifying you if you really want to trigger the activator, if you click again, the activator will run
* Required: NO (Default: false)
* More Info: You can edit the message by editing it on the locale: `confirmMessage: 'Click again to confirm' or in ingame.`

### ifOwnerOfTheEI - Not

* Description: Checks if the player (not) owns the executable item (Owners are selected by the first player who obtained the item)
* Example:

```yaml
  customConditions:
    ifOwnerOfTheEI: true
    ifOwnerOfTheEIMsg: '' #<- Here is where you will add the custom message.
    
    ifNotOwnerOfTheEI: false
    ifNotOwnerOfTheEIMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the player obtained it first and attempts to use it, it will work.
* Required: NO (Default: false)
