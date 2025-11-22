### typeTarget

* Info: Feature that restricts the activator so it will only get activated/triggered when the event occurred with certain type of clicking
  * typeTarget
    * ONLY\_AIR: Restricts the activator so it will only get activated/triggered when the event occurred when clicking only in the air, it means if you clicked on a block the activator won't get triggered. Don't get confuse ! You may think, what happens if I click on a player ? which will not be a block so its on the "air" well.. that even is outside the instance of PLAYER\_(CLICK) type activators, that event is instance of PLAYER\_CLICK\_ON\_PLAYER so the activator won't trigger too, it must be instance of PLAYER\_(CLICK).
    * ONLY\_BLOCK: Restricts the activator so it will only get activated/triggered when the event occurred with clicking only in a block. This means if you clicked on the air the activator won't get triggered.
      * This feature makes the activator a block instance activator so it will have blockCommands.
    * NO\_TYPE\_TARGET: Doesn't restrict the activator on the type of click, both type will be accepted, air clicks and block clicks.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: NO_TYPE_TARGET
    playerCommands: []
```

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    typeTarget: ONLY_BLOCK
    playerCommands: []
    blockCommands: [] # Added because of typeTarget: ONLY_BLOCK which enables the instance of the activator to block instance
```