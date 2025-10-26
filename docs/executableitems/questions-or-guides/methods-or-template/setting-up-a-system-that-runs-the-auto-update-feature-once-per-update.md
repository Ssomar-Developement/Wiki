---
description: >-
  This page teaches you how to setup a system where if you decided to push a new
  update, you can easily
---

# Setting Up a System that runs the auto update feature once per update

:::danger
Currently broken. Will be waiting for a fix on a specific issue
:::

Dependencies:

* Placeholder API
  * CheckItem Expansion
* NBT API Plugin

1\) Go to the nbt tags editor and add `STRING::displayversion::0`

:::info
The "0" part of thenbt will be explained later. But the explanation right now is to give the person trying to update the lore a "version" to make sure that all present copies of the said items that doesn't have the correct version will have the new version.
:::

2\) Create an activator of your choice.

* For this one, we will be using the LOOP activator
* Go to the detailed slots option (armor stand icon) and enable all slots.
* Go to the auto update features icon and enable auto update item
* Then go to the placeholder conditions icon and create a new placeholder condition
* The settings are:
  * type: PLAYER\_STRING
  * part1: `%checkitem_inslot:%slot%,nbtstrings:displayversion=0%`
  * comparator: EQUALS
  * part2: no

:::info
The explanation behind the placeholder in part1 is that it checks that copy of the item in a specific slot and checks if the nbt in it does not match with the latest version.
:::

3\) Save the item!

## Use of it in practice:

For example, you want to push a new version of the item. New name and new lore but you don't want to mess with the item copy too much so you will have to do the following:

1\) Edit the item config's name and lore

2\) Go to the nbt option editor and change the number 

* from `STRING::displayversion::0` to `STRING::displayversion::1`

Then it should update all of the copies.

IF you plan to push more updates to the item's version, it has to go higher. If you try to change it back to 0, the item copies with the nbt "version" set to 0 will not update.

