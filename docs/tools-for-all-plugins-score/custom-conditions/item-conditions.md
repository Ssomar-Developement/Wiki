# Item Conditions

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
itemConditions:
    ifDurability: '>600'
    ifDurabilityMsg: '' #<- Here is where you will add the custom message.
    ifDurabilityCancel: true
    ifDurabilityCmds:
    - say oh sympathy
```

### ifDurability

* Description: Checks if the ei has the said durability.
* Example:

```yaml
itemConditions:
    ifDurability: '>600'
    ifDurabilityMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the value is `<789`, the activator will only activate if the item's durability is below 789
  * If the value is `<=1000`, the activator will only activate if the item's durability is 1000 and below.
  * If the value is `==788`, the activator will only activate if the item's durability is 788.
  * If the value is `>989`, the activator will only activate if the item's durability is above 989.
  * If the value is `>=676`, the activator will only activate if the item's durability is 676 and above.
* Required: NO

### ifUsage

* Description: Checks if the item has the said usage remaining.
* Example:

```yaml
itemConditions:
    ifUsage: '>5565'
    ifUsageMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the value is `<456`, the activator will only activate if the item's usage remaining is below 456
  * If the value is `<=234`, the activator will only activate if the item's usage remaining is 234 and below.
  * If the value is `==16`, the activator will only activate if the item's usage remaining is 16.
  * If the value is `>6666`, the activator will only activate if the item's usage remaining is above 6666.
  * If the value is `>=78`, the activator will only activate if the item's usage remaining is 78 and above.
* Required: NO
* Also it supports to work in intervals

```yaml
      itemConditions:
        ifUsage: 4 < CONDITION <= 8
        ifUsageMsg: '&4&l&o[ExecutableItems] &cThis item must have the valid usage
          to active the activator: &6%activator% &cof this item!'
        ifUsageCancel: false
```

### ifUseCooldown

* Description: Checks if the EI has the specified use cooldown. (It's like the enderpearl cooldown) (This cooldown is not related to the activator cooldown, it's the vanilla use cooldown) 
  * This feature is only available for Minecraft 1.21.2 and +
  * The cooldown is specified in ticks (20 ticks = 1 second)
* Example:

```yaml
itemConditions:
    ifUseCooldown: '>600'
    ifUseCooldownMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the value is `<789`, the activator will only activate if the item's use cooldown is below 789 ticks
  * If the value is `<=1000`, the activator will only activate if the item's use cooldown is 1000 and below.
  * If the value is `==788`, the activator will only activate if the item's use cooldown  is 788.
  * If the value is `>989`, the activator will only activate if the item's use cooldown is above 989.
  * If the value is `>=676`, the activator will only activate if the item's use cooldown  is 676 and above.
* Required: NO

### ifHasEnchant

* Description: Checks if the item has the whitelisted enchantment.

[https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html)

* Example:

```yaml
itemConditions:
    ifHasEnchant: 
    - ARROW_FIRE:1
    ifHasEnchantMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the EI item has the Flame enchantment and you have the condition in the example part, the activator activates
* Required: NO

### ifHasNotEnchant

* Description: Checks if the item has the blacklisted enchantment.

[https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html)

* Example:

```yaml
itemConditions:
    ifHasNotEnchant: 
    - ARROW_POWER:6
    ifHasNotEnchantMsg: '' #<- Here is where you will add the custom message.
```

* Example Situations:
  * If the EI item has the Power VI enchantment and you have the condition in the example part, the activator does not activate
* Required: NO

### ifCrossbowMustBeCharged - Not

* Description: Checks if the item is a  (not) charged crossbow.
* Example:

```yaml
  itemConditions:
    ifCrossbowMustBeCharged: true
    ifCrossbowMustBeChargedMsg: '' #<- Here is where you will add the custom message.
    
    ifCrossbowMustNotBeCharged: true
    ifCrossbowMustNotBeChargedMsg: '' #<- Here is where you will add the custom 
```

* Example Situations:
  * If the EI item is a charged crossbow, the activator activates
* Required: NO
* More Info: You can edit the error message by adding this in the file: 
