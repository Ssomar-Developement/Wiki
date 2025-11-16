### detailedDamageCauses

* Info: Feature for activators that involves damage, here you can select as condition the type of damage that is either received or dealt depending on the activator you are using.
* Example:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_DAMAGES # replace that with the correct activator name
    detailedDamageCauses:
    - ENTITY_EXPLOSION
```