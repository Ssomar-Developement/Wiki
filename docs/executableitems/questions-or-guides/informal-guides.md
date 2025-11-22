---
description: >-
  Page dedicated for quickly writing guides on how to do something. (Mostly me,
  Special70 being lazy to make a dedicated page)
---

# Informal Guides

## METHODS:

### Check conditions on randomly picked target


```
1) create a SCore projectile 
  - for this guide, we'll give it an id of "tracker"
  - give it a name for it to be used in placeholder conditions to make PLAYER_CUSTOM_LAUNCH not activate in unwanted manners. for this guide, we'll give it a display name of "tracker"
  - set gravity to false and enable invisibility (requires protocol lib plugin) and set velocity to 0
  
2) create the ei item
3) create any activator of your choice to run the ability
  - run "LOCATED_LAUNCH tracker 0 0 0 0 0 0"
4) create a PLAYER_CUSTOM_LAUNCH activator
  - create a placeholder condition
    - type: PLAYER_STRING
    - part1: %projectile_name%
    - comparator: EQUALS
    - part2: tracker
  - add the playerCommands: 
  
  [!] ITEM CONFIG FORM
  
  entityCommands:
  - execute at %player% run execute at @r[distance=..10,limit=1] run tp %projectile_uuid% ~ ~ ~
  - DELAYTICK 1
  - AROUND 1 CONDITIONS(%::player_name::%!=%player%&&%::worldguard_region_name::%!=spawn) execute at %around_target% as %player% run tp %player% ~ ~ ~

  observe the conditions written in the CONDITIONS() part. It contains criterias of
  - if the around target is not the user to prevent the user being selected just in case no player is detected in radius
  - if the target is not in the "spawn" region
```


### Run commands after sneaking for 5 seconds


```
1) Create a SCore variable
  - score variables-create sneakCount
    - set the FOR to PLAYER
    - set the TYPE to NUMBER
    - set the default value to -1
2) Create the ei item
3) Create a PLAYER_ENABLE_SNEAK activator
  - add the playerCommands:
  
  [!] ITEM CONFIG FORM
  playerCommands:
  - score variables set player sneakCount 0 %player%
  - WHILE %score_variables_sneakCount%<5 20 score variables modification player sneakCount 1 %player% <+> IF %score_variables_sneakCount%=5 say run-command-here
  
  replace "say run-command-here" with whatever you want to run
```


### Give players an item ONCE 

```
1) Create a SCore variable
  - score variables-create system-hasGivenPlayersEI-catalyst
    - set the FOR to PLAYER
    - set the TYPE to NUMBER
    - set the default value to 0
2) create the ei item
3) install ExecutableEvents plugin (free)
4) create an event file
5) use PLAYER_CONNECTION activator
  - create a placeholder condition
    - type: PLAYER_NUMBER
    - part1: %score_variables_system-hasGivenPlayersEI-catalyst%
    - comparator: EQUALS
    - part2: 0
6) add the ei give command in that activator
7) add "score variables set player system-hasGivenPlayersEI-catalyst 1 %player%"
```

### Make a loop activator run commands once it has executed x amount of times

```
For this guide, it will run commands after looping 30 times.
1) Download PlaceholderAPI plugin
  - /papi ecloud download Math
  - /papi reload
2) create the ei item
3) create a number item variable
  - variable name = timer
  - type = NUMBER
  - default = 0
4) create a LOOP activator
  - detailed slots : all slots enabled
  - add playerCommands:
    - Ex: "IF %var_timer%=30 minecraft:give %player% diamond 1"
  - edit variable modification option
    - create a new variable modification option
      - variable name = timer
      - type = SET
      - modification : '%math_IF((%var_timer%)<30, (%var_timer%)+1, 1)%'
```
