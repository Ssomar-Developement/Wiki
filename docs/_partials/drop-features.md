### desactiveDrops

* Info: Boolean value that allows or prevents the vanilla loot to be dropped when breaking blocks or killing mobs. Since its vanilla drops, custom drops from custom mobs e.g. (MythicMobs) will not get affected by this.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_DROP # replace that with the correct activator name
    desactiveDrops: true
```