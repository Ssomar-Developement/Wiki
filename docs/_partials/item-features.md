import CustomTag from '@site/src/components/CustomTag';

### itemCommands

* Info: Item commands is a list commands that run for the item when the activator triggers.
  * This means if it has an SCore command, example: MODIFY_ITEM_DURABILITY modification:-50000, the item will have its durability reduced by 50000.
    * Custom [Item commands](/docs/tools-for-all-plugins-score/custom-commands/item-commands) available from SCore
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activators on the activator    
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    itemCommands:
    - MODIFY_ITEM_DURABILITY modification:-50
```


### detailedItems

* Info: For activators that involves an item you can select as condition the type of item(s) where this activator will trigger by using this feature.
  * You can select a Minecraft vanilla item like:
    * "STONE"
  * You can select a Minecraft vanilla item with NBT like:
    *  `DIRT{CUSTOMMODELDATA:5}`
  * You can blacklist items using ! like:
    * "!TORCH"
* Example:

```yaml
activators:
  activator3: # Activator ID, you can create as many activator on the activators list  
    option: YOUR_ACTIVATOR_WITH_AN_ITEM # replace that with the correct activator name
    detailedItems:
      items:
      - DIRT{CUSTOMMODELDATA:5}
      - !TORCH
      cancelEventIfNotValid: false
      messageIfNotValid: '&4&l[Error] &cthe item is not correct !'
```