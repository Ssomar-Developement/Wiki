### detailedCommands

* Info: Feature for activators that involves commands, here you can select as condition the command the activator should run with.
* Example:

```yaml
activators:  
  activator1: # Activator ID, you can create as many activator on the activators list    
    option: YOUR_ACTIVATOR_WITH_COMMAND # replace that with the correct activator name
    detailedCommands:
    - customHealCommand
    commands:
    - SEND_MESSAGE &dYou have been healed !
    - REGAIN HEALTH 10
```