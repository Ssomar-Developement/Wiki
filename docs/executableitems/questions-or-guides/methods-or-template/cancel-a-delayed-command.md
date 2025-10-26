# Cancel a delayed command

If you have an activator with commands like this:

```yaml
- SENDMESSAGE 'THE SKILL WILL TRIGGER, DON'T MOVE'
- DELAY 10
#All your ability here, fium fium, explosions, damage, etc
- PUUUM
- FIUUUUM
- PAAAAM
```

You would like if the player MOVES the commands delayed (DELAY 10) won't triggered, but, that doesn't work like that, if the activator has activated, the commands can't be canceled, so, you have to figure out different ways to avoid this.

### In case of DON'T MOVE

We will explain the idea, just develop it depending on the purposes you have.

```yaml
Create a variable called TIMER #this will replace the DELAY 10 command

#Let's create the activator that will cast the skill
Activator: RIGHT CLICK ACTIVATOR 
placeholderCondition: timer = 0 (you have to do this using placeholders %var_timer% 
                                 and PLAYER_NUMBER)
variableModification: (SET) TIMER -> 10
commands: SENDMESSAGE 'ABILITY CASTED, DON'T MOVE'

#Now, the activator that will reduce the timer by 1 each second, simulating DELAY 10
Activator: LOOP ACTIVATOR
placeholderCondition: timer > 0
variableModification: (MODIFICATION) TIMER -> -1
Commands: SENDMESSAGE Seconds left %var_timer_int%

#Now, the activator that will CANCEL THE ABILITY (in this case we want to cancel it
#when the player MOVES, so the activator is PLAYER_WALK
Activator: PLAYER_WALK ACTIVATOR
placeholderCondition: timer > 0
variableModification: (SET) TIMER -> 0
commands: SENDMESSAGE ABILITY CANCELED

#Now, if the player DIDN'T MOVE, the EPIC ABILITY WILL BE EXECUTED, here we will add
#all that stuff
Activator: LOOP ACTIVATOR
placeholderCondition: timer = 1
variableModification: (SET) TIMER = 0
commands:
- FIUM FIUM 
- PUUUM
- effect give %player% regeneration 10 10
- PARTICLEES
```

That's it, we hope you understood, if have any question feel free to ask in the Discord 🥳

