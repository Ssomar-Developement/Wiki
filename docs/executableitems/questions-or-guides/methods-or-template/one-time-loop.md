# One Time Loop

There are many things that can be done using this, if you are on need of it, this is the correct place to know how it works.

In this case we are going to make an item that will add a value on scoreboard if in hand and will remove it when deselect it

A first idea would be working with SELECT\_THE\_EI and DESELECT\_THE\_EI but it has problems related to what we want to do, because the player can move the item instead of deselecting it.

## Let's create the item + method

* First let's create the item with /ei create \<id>
* Set the material, name, and everything
* Now, let's take a look at the method, it will consist on 2 loop activators, one in mainhand and the another one in all slots except mainhand, and, variables, that will disable the loop once it works one time + a PLAYER\_DROP\_THE\_EI to also reduce the scoreboard value when the player drops the item, so it would look like this:

```yaml
First, we will create a variable
Variable -> "scoreboard" - String

#First loop that will add the value to the player
Activator 1: LOOP 
Slot: MAINHAND
Commands: scoreboard players add %player% <scoreboardname> <value>
#Now the placeholder condition that will make this loop to work ONLY 1 time
Condition: PlaceholderCondition "%var_scoreboard" EQUALS "no"
variable update: "scoreboard" SET "yes"

#second loop that will remove the value to the player
Activator 2: LOOP
Slot: EVERYSLOT EXCEPT MAINHAND
Commands: scoreboard players remove %player% <scoreboardname> <value>
#Now the placeholder condition that will make this loop to work ONLY 1 time
Condition: 
- PlaceholderCondition "%var_scoreboard" EQUALS "yes"
- IfNotHasExecutableItem -> the EI itself + mainhand
variable update: "scoreboard" SET "no"

#activator that will remove the value to the player if he drops it
Activator 3: PLAYER_DROP_THE_EI
Commands: scoreboard players remove %player% <scoreboardname> <value>
#Now the placeholder condition that will make this loop to work ONLY 1 time
Condition: PlaceholderCondition "%var_scoreboard" EQUALS "yes"
variable update: "scoreboard" SET "no"
```

With this explanation should be enough, anyways, if you don't understand, we will make everything step by step

## Long explanation

### Create the variable

<div align="center">

</div>

* Variable name: scoreboard
* Type: STRING
* String value: "no"

![](</img/image (59).png>)

![](</img/image (385).png>)

![](</img/image (386).png>)

* Then save and let's go to the next step

### First Activator

* detailedSlots only mainhand

* Variable update

![](</img/image (328).png>)

![](</img/image (162).png>)

![](</img/image (184).png>)

* And this will only work if the variable is "no", so let's create a placeholder condition

![](</img/image (149).png>)

![](</img/image (68).png>)

![](</img/image (287).png>)

![](</img/image (387).png>)

* And the last thing the command to add a scoreboard value to the player, in this case I will only add a command "say ADDED" as a debug command.

### Second activator

Its the same idea, so this will be faster than the previous one.

![](</img/image (140).png>)

* Working on every slot except mainhand

![](</img/image (167).png>)

* Variable update

![](</img/image (230).png>)

![](</img/image (63).png>)

![](</img/image (279).png>)

* Placeholder condition:

![](</img/image (410).png>)

![](</img/image (372).png>)

![](</img/image (360).png>)

![](</img/image (415).png>)

* The second placeholder, that is a playerCondition (and the condition is on the 2nd page)

![](</img/image (138).png>)

![](</img/image (317).png>)

* In this case the name of my item is asd

![](</img/image (337).png>)

![](</img/image (187).png>)

![](</img/image (383).png>)

![](</img/image (295).png>)

* Then save and delete the error message, it is annoying

![](</img/image (398).png>)

* And the command

![](</img/image (286).png>)

### Drop activator

* Add another activator

![](</img/image (74).png>)

* Placeholder condition to make it only work if the value is already added

![](</img/image (207).png>)

![](</img/image (192).png>)

![](</img/image (130).png>)

![](</img/image (305).png>)

* The command

![](</img/image (197).png>)

* And the variable update

![](</img/image (89).png>)

![](</img/image (325).png>)

![](</img/image (428).png>)

And that's it, save everything and test

## Testing the item

