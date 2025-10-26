# EI |WorldEdit -> SET COMMAND

This is not an easy item, so you may require a little of knowledge how the plugin works to achieve this. This is a guide, "where to search this" "what this means" won't be answered here, BUT we'll leave everything for you to understand or to go to read what "x" means.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cGAg5iZCtw8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::info
**REQUIRES**

**PLACEHOLDERAPI**

**CHECKITEM EXPANSION**

**STRING EXPANSION**

**MATH EXPANSION**

**PLAYER EXPANSION**\
\
**PREVIOUS KNOWLEDGE ABOUT EI.**
:::

## Variables

Well, let's start, first, world edit works marking 2 blocks, we have to do the same from EI, to do this we will store the coordinate of the blocks in variables. 

* x1
* y1
* z1
* x2
* y2
* z2

And, since the idea is to use this item as survival, the SET command will only work if the player has enough of "material" to achieve the SET command. This means, we need to take how many blocks there are on the selection and how many blocks the player has, to achieve this you can avoid using variables, but I will use them. You can change the method if you want, there are many ways to achieve the same.

* amountofsetcommand
* amountofmaterial

## Activators

We have 8 variables, let's create the activators

### ACTIVATOR RIGHT CLICK

```
detailedClick -> ONLY_BLOCK
cancelEvent: true
```

This will set the variables (1) to the block selected

* x1 -> %block\_x\_int%
* y1 ->%block\_y\_int%
* z1 -> %block\_z\_int%

Now we are storing one block, let's do the same for the another one but with another activator

### ACTIVATOR LEFT CLICK

```
detailedClick -> ONLY_BLOCK
cancelEvent: true
```

This will set the variables (2) to the block selected doing the same as before but with x2,y2 and z2.

Well ! We have the blocks saved, now the "complex" part, because what we have done is very simple.

#### How to get the amount of blocks needed to run the set command and the amount of material the player has

* First, the easy one, to get the amount of material we can use [**checkitem expansion**](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#checkitem). From there we can take the amount of material the player has **in their hand**
  * %checkitem\_amount\_mat:MMMMMMMMMMMH%
  *   MMMMMMMMMMMH is the material, to get the material on the HAND we will use [player expansion](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#player).

      * `%checkitem\_amount\_mat:{player\_item\_in\_hand}%`

* Well, one ready, now let's get the amount of materials the player needs to run the SET command. Let's think the player selects a cube, for better understanding I will draw (not the best, just to understand it better)
*

    
* As you can see, the selections are
  * FIRST: 0,0,0
  * SECOND: 1,2,2
* To take the amount of blocks would be decreasing each position by the another one, it would look like this
  * 1-0 = 1
  * 2-0 = 2
  * 2-0 = 2
* This will mean the shape has 1*2*2 blocks = 4, but it doesn't have 4, it has 18, what happened here ?
  * Well, as we can see in the first substraction, 1-0 = 1, but it doesn't have 1 of x, the shape has 2 on x, this means there is one "+1" missing, let's check the anothers. 2-0 = 2, but on y we have 3, so another +1 is missing, and the same for z, so we have to add +1 to each substraction, something like
    * (1-0)+1
    * (2-0)+1
    * (2-0)+1
  * This will give us that the shape has 2,3,3 , that would mean 2*3*3 = 18, perfect ! it now returns the correct amount of blocks, BUT, we have a problem, what if the player doesn't select as FIRST 0,0,0 but 1,2,2 , we would have
    * FIRST 1,2,2
    * SECOND 0,0,0
  * This means, when taking the value of blocks needed:
    * (0-1)+1
    * (0-2)+1
    * (0-2)+1
  * This return us 0,-1,-1 that doesn't make sense, a shape can't have negative values as size, so, to make BOTH ways to return the same, we need the absolute value of the substraction, it would look like
    * ABS(0-1)+1 
    * ABS(0-2)+1
    * ABS(0-2)+1
  * Having as result (1+1),(2+1),(2+1) => 2,3,3 => 2*3*3 = 18, nice ! we got this, now instead of using the coordinates as 0,0,0 and 1,2,2 we will use the variable coordinates we stored before, and multiply them using [Math expansion](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math)

```
%math_0_((ABS(%var_x1%-%var_x2%)+1)*(ABS(%var_y1%-%var_y2%)+1)*(ABS(%var_z1%-%var_z2%)+1))%
```

Now we have the 2 values needed, we have to add them into a variablemodification, so let's create an activator, this will be the one of HOW THE PLAYER WILL TRIGGER THE SET, in this case, RIGHT CLICK+SHIFT

### ACTIVATOR RIGHT CLICK

```
condition ifShifting -> true
```

Here add all variable modifications to **amountofmaterial** and **amountofsetcommand**

Now, let's build what we want, the SET command

As a summarize, the 2 first activators are for storing the coordinates of the block, the 3rd to get the values of howmanyblocksdowehave and howmanyblocksdoweneedtorunthesetcommand

### ACTIVATOR RIGHT CLICK

```
condition ifShifting -> true
```

This activator must be same as the 3rd

* Now, here we will have the commands, we will use the vanilla fill command
  * execute at %player% run fill x1 y1 z1 x2 y2 z2 material
    * x1 y2 z1 will be replace with %var\_x1% %var\_y1% and %var\_z1% and the same idea with x2,y2 and z2
    * and material, we will get the material on the hand of the player -> %player\_item\_in\_hand%
      * BUT, WE HAVE A PROBLEM that placeholder returns the material in UPPERCASES, so we need it to cast on lowercase using [String expansion](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#string) -> %string\_lowercase\_\{player\_item\_in\_hand\}%
*   And let's clear the material of the player 

    * execute run clear %player% %string\_lowercase\_\{player\_item\_in\_hand\}% %var\_amountofsetcommand\_int% (amount to clear)

* We are ready, BUT, this command can be run always, we have to make the condition that
  * MATERIALWEHAVE > MATERIALWENEED
    * Just use the variables we have already stored, called as "amountofmaterial" and "amountofsetcommand" to do this comparison on a placeholderCondition, PLAYER\_NUMBER.

And we are ready !!!

## Final words

* To make the activator only work with certain materials, set the 4th activator a condition of ifPlayerHasItem -> detailedSlots: mainhand -> and select all your materials, this will work as a WHITELIST
* If want to restrict the player to don't create shapes that have blocks more than "x" just add a placeholderCondition on the 4th activator
* If you are experienced enough, this item is 4/10 level, this means, you can replicate //walls , //replace , //replacenear and more commands from WorldEdit to be used as players on survival.

Hope you understood everything, if have any question feel free to ask, BUT, be careful, again, if you have 0 experience, this may be confusing and we will lead you to a basic tutorial, step by step young padawan 

