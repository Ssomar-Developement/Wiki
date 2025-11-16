### detailedEffects

* Info: Feature for activators that involves effects, here you can select as condition the type of effect involved to trigger the activator.
* Example:

```yaml
activators:
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_EFFECT # replace that with the correct activator name
    detailedEffects:
      effects:
      - SPEED
      cancelEventIfNotValid: true
      messageIfNotValid: '&cYou cant use the activator since you dont meet the effect
        condition'
```