---
description: >-
  This page will instruct you on how to create an item that shoots a particle
  projectile when right-clicking it.
---

# [Complex] Moving Particle Projectile

1\) Create an EI Item

2\) Create 6 variables:

* x, y, z, world, yaw, pitch, uuid

:::info
The purpose of the uuid variable is to make it so it's spammable just in case you plan to make a moving projectile that stops when it comes in contact with something.
:::

* Set the type of the variables except the "world" variable into INTEGER
* Set the type of the "world" variable to STRING

3\) Go to the activator editor

4\) Create the first PLAYER\_RIGHT\_CLICK activator

* Go to the variable update option
* add an option for all 6 variables
* set their modification type to SET
* Update value of the following variables would be
  * x : %x%
  * y : %y%
  * z : %z%
  * world : %world%
  * yaw : %player\_yaw%
  * pitch : %player\_pitch%
  * uuid : %rand:1|1000000%

5\) Create the second PLAYER\_RIGHT\_CLICK activator

6\) Add the commands

## 1) Simple Moving Particle that damages things that comes in contact with

* Go to [https://docs.ssomar.com/tools-for-all-plugins/general-questions-or-guides/math-formulas#player-direction-offset-formula](https://docs.ssomar.com/tools-for-all-plugins/general-questions-or-guides/math-formulas#player-direction-offset-formula) to get a copy of the math formula for reference
* Decide the range and the thickness of the line
  * For example, you want the projectile to travel 20 blocks while spawning 4 particles per block. It would be 20x4 = 80 so the first command in the second PLAYER\_RIGHT\_CLICK will be `LOOP START: 80`
* Then utilize the math formula
  * After copypasting the formula, it will initially look like this, `~%math_2*SIN({player_yaw}*-1)*COS({player_pitch}*-1)% ~%math_2*SIN({player_pitch}*-1)% ~%math_2*COS({player_yaw}*-1)*COS({player_pitch}*-1)%`
  * For this portion of the guide, we will be using fireworks to produce the particle line.
    * `execute at %player% run particle firework ~ ~ ~ 0 0 0 0 1`
  * The "2" part of the math formula above represents the distance from the main location. We will combine it with the \~ symbols so the user's coordinates will add up along with the math formula. We will be replacing the yaw pitch placeholders with the variables, yaw & pitch.
    * Why are we using item variables? To make sure that when we look or face elsewhere, the particle would still fly at the correct direction.
  * After all of that, retype the command:
    * `execute at %player% run particle firework ~%math_(%for1%)*SIN(%var_yaw%*-1)*COS(%var_pitch%*-1)% ~%math_(%for1%)*SIN(%var_pitch%*-1)% ~%math_(%for1%)*COS(%var_yaw%*-1)*COS(%var_pitch%*-1)% 0 0 0 0 1`

### Adding Extra Effects:

Now, you want to add effects to your moving projectile. How do we do this?

#### Potion Effects

* Use the command:
* `execute at %player% positioned ~%math_(%for1%)*SIN(%var_yaw%*-1)*COS(%var_pitch%*-1)% ~%math_((%for1%)*SIN(%var_pitch%*-1))+1.6% ~%math_(%for1%)*COS(%var_yaw%*-1)*COS(%var_pitch%*-1)% run effect give @e[name=!%player%,distance=..2] slowness 2 2 true`

#### Damage (Rapid)

* Use the command:
* `score run-block-command block:%world%,%math_(%x%)+((%for1%)*SIN(%var_yaw%*-1)*COS(%var_pitch%*-1))%,%math_1.6+(%y%)+((%for1%)*SIN(%var_pitch%*-1))%,%math_(%z%)+((%for1%)*COS(%var_yaw%*-1)*COS(%var_pitch%*-1))% player:%player% MOB_AROUND 1 DAMAGE 2`

* Then afterwards, compute what DELAYTICK value you have to use.
  * Earlier, we decided to spawn 4 particles per block. So, the formula will be (20/4) and the quotient will be 5. Which means, we will use `DELAYTICK 5`
* Then, we will end the LOOP command with a `LOOP END` command

End Product (item config version)

```yaml
    commands:
    - 'LOOP START: 80'
    - execute at %player% run particle firework ~%math_(%for1%)*SIN(%var_yaw%*-1)*COS(%var_pitch%*-1)% ~%math_(%for1%)*SIN(%var_pitch%*-1)% ~%math_(%for1%)*COS(%var_yaw%*-1)*COS(%var_pitch%*-1)% 0 0 0 0 1
    - score run-block-command block:%world%,%math_(%x%)+((%for1%)*SIN(%var_yaw%*-1)*COS(%var_pitch%*-1))%,%math_1.6+(%y%)+((%for1%)*SIN(%var_pitch%*-1))%,%math_(%z%)+((%for1%)*COS(%var_yaw%*-1)*COS(%var_pitch%*-1))% player:%player% MOB_AROUND 1 DAMAGE 2
    - DELAYTICK 5
    - LOOP END
```
