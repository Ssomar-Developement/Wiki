# Bag of items

\{% embed url="https://youtu.be/kzwHkY-xbzA" %\}

If you would like to store items like having a bag of cobblestone, or bag of different stuff, this is your place

:::info
This needs PlaceholderAPI and its extension of CheckItem, it can be done without it but its better with it, that's why this tutorial uses it.
:::

## Tutorial

In this case the bag will store COBBLESTONE and ANDESITE (2 items for you to see how to manage with more than one item). First we will create the one with COBBLESTONE and then, after finishing that one, the one with ANDESITE.

*   Create the EI with /ei create \<id>

    * ![](<../../../.gitbook/assets/image (343).png>)

* Set the material, name, lore, etc
  * ![](<../../../.gitbook/assets/image (396).png>)

:::info
In this case I already know that the "stuff" stored will be stored in a variable, that's why I wrote it instantly as variable in the lore.
:::

* Now let's create the variables (I will create both instantly, the cobblestone and andesite)
  * ![](<../../../.gitbook/assets/image (144).png>)
    * ![](<../../../.gitbook/assets/image (369).png>)
    * ![](<../../../.gitbook/assets/image (414).png>)

### ACTIVATOR OF STORING COBBLESTONE

*   Now let's create the activator that will store the cobblestone, in this case RIGHT CLICK activator

    * ![](<../../../.gitbook/assets/image (407).png>)

    * Let's add the modification of the variable
      * ![](<../../../.gitbook/assets/image (269).png>)
      * ![](<../../../.gitbook/assets/image (238).png>)
      * ![](<../../../.gitbook/assets/image (280).png>)
    * Let's add the placeholder condition so this only works if the player has at least 1 cobblestone
      * ![](<../../../.gitbook/assets/image (214).png>)
    *   And now the commands (the first one to display how many cobblestone he stored and the second to remove the cobblestones.)

        * ![](<../../../.gitbook/assets/image (259).png>)

*   And that's it, now our bucket pickups the cobblestone perfectly, but we need a way to take out the cobblestone, there are many ways to achieve this:

    * Make an activator that pickups cobblestone x1
    * Make an activator that pickups cobblestone x16
    * Make an activator that pickups cobblestone x64
    * Make an activator that gives as many cobblestone as you hold shift
    * Make an activator that drops ALL cobblestone stored inside the bucket
    * etc

* I will make the one that pickups x32 cobblestone, the another ones follow the same method, its the same idea.

### ACTIVATOR OF TAKING COBBLESTONE

*   Activator LEFT CLICK

    * ![](<../../../.gitbook/assets/image (402).png>)

*   Condition the player has at least 32 cobblestone stored in the variable

    * ![](<../../../.gitbook/assets/image (211).png>)

*   Let's modify the variable

    * ![](<../../../.gitbook/assets/image (95).png>)

*   And let's give the player the cobblestone

    * ![](<../../../.gitbook/assets/image (324).png>)

* Now everything is done, we just need to test it.

And its working perfectly !! Now let's do the same with andesite :P

And all goooood !!!, if have any question feel free to ask, there are many ways to complex this, such as creating a selector inside the lore of the item to select what to store, or how much to take, this is the **most basic bag** you can create ^^
