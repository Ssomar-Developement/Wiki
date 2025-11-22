# Custom drops

:::danger
THIS TUTORIAL IS FOR EXECUTABLEITEMS, THAT MEANS **THIS DROPS DOESN'T WORK GLOBALLY**, ONLY WORKS IF YOU HAVE A EXECUTABLEITEM IN YOUR INVENTORY.

\
IF WANT TO CREATE A GLOBAL CUSTOM DROP USE **EXECUTABLEVENTS**
:::

If you would like to create custom drops, we first need to know what type of drop. Both will be explained:

## Entity drops

Use the activator PLAYER\_KILL\_ENTITY or PLAYER\_KILL\_PLAYER and on commands you can either use:

* EI Commands to drop the items
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Vanilla commands to drop the items
  * A good example of this would be giving the HEAD of the PLAYER
    * execute at %player% run summon item %target\_x\_int% %target\_y\_int% %target\_z\_int%  \{Item:\{id:"player\_head",Count:1b,tag:\{SkullOwner:"%target%"\\}\}\}

:::info
Don't forget that if you want this command not work 100% you can give them chances ! Just check the wiki, that is already explained ^^
:::

## Block drops

Use the activator PLAYER\_BREAK\_BLOCK and on commands you can either use:

* EI Commands to drop the items
  * DROPEXECUTABLEITEM
  * DROPEXECUTABLEBLOCK
  * DROPITEM
* Vanilla commands to drop the items
  * Vanilla command to drop more than one item broken (this example gives 2 items more, you can randomize this using instead of "2" a RNG Placeholder)
    * execute at %player% run summon minecraft:item %block\_x\_int% %block\_y\_int% %block\_z\_int% \{Item:\{id:"minecraft:%block\_item\_material\_lower%",Count:2b\\}\}

:::info
Don't forget that if you want this command not work 100% you can give them chances ! Just check the wiki, that is already explained ^^
:::

