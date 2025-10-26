# Only usable on mainhand

if want to create an item that can only be used on mainhand and if its not on mainhand the item is dropped to the ground this is your place and actually, is very simple

* Create an activator LOOP
* Add a condition of ifHasNotExecutableItems
  * The executableitem must be the EI you created (the same one you are editing)
  * Slot: mainhand
* Add on commands FORCEDROP %slot%

That's it !! Save save and save.. if have any question feel free to ask on discord, good time !

