# Variable conditions

This appears literally on almost every item, and it is repeated constantly, anyways, it will be here too, its very easy.

*   First, create a variable in the GUI

    * Select the name, the type and the default value

*   Then create an activator (the one that will require the condition)

    * go to placeholdersConditions and add one
      * On the PART1 use %var\_\<NAMEOFYOURVARIABLE>%
        * for example if my variable is called "myhouse" the variable is %var\_myhouse%
      * And on PART2 the condition you want.
      * Don't remember the type of comparator, if want EQUALS, or SUPERIOR, INFERIOR, etc
    * Then save the placeholder and that's it

:::info
This is also explained... but if your variable is a STRING use PLAYER\_STRING comparator, and for obvious reasons, you can't use SUPERIOR or INFERIOR, since a string can't be superior to something. And if you are using a INT variable use PLAYER\_NUMBER.
:::

