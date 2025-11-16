### delay and delayTick

* Info: Features of the activator that changes the interval time where this activator triggers, it affects the behavior of the loop repetitions of the activator.
  * delay: Integer value that represents how many seconds will the loop be. This means, each \<delay> \[time] the loop will trigger again. e.g. (If the delay is 30 seconds then each 30 seconds the activator will trigger)
  * delayTick: Boolean value to set the delay time in ticks, otherwise it is in seconds. (20 ticks = 1 second)
* Example: 

```yaml
activators:
  activator1: # Activator ID, you can create as many activators on the activators list
    option: YOUR_LOOP_ACTIVATOR # replace that with the correct activator name
    delay: 30 # Value in seconds due delayInTick its false
    delayInTick: false
```
