# Custom Actions / Damages per projectiles

:::tip
This tutorial requires the premium version of the plugin.
:::

## Custom damage per projectile in the same item

In this tutorial I will directly explain how to add custom damages/actions on two different projectiles launched by your ExecutableItem. But you can do exactly the same only for one Custom Projectile.

* [x] Create 2 [Score projectiles](/tools-for-all-plugins-score/custom-projectiles.md) or more or less

Examples


```yaml
type: DRAGON_FIREBALL
customName: RocketBullet
```


```yaml
type: ARROW
customName: SniperBullet
```


* [x] Then create your ExecutableItem
  * [x] Create two activators to LAUNCH your projectiles
  * [x] And create two others to run the custom damages/actions when the projectile hit something. In these activators you will need to verify the value of %projectile\_name% with a placeholder condition to run the good actions on the good projectile.

Example


```yaml
name: '&eMy projectiles launcher'
lore:
- '&b&oRight click launch sniper'
- '&b&oLeft click launch rocket'
material: STICK
activators:
  activator_launch_sniper:
    name: '&eActivator'
    option: PLAYER_RIGHT_CLICK
    typeTarget: NO_TYPE_TARGET
    detailedSlots:
    - -1
    playerCommands:
    - LAUNCH projectile:SNIPERBULLET
    
  activator_launch_rocket:
    name: '&eActivator'
    option: PLAYER_LEFT_CLICK
    typeTarget: NO_TYPE_TARGET
    detailedSlots:
    - -1
    playerCommands:
    - LAUNCH projectile:ROCKETBULLET
    
  activator_for_sniper:
    name: '&eActivator'
    option: PROJECTILE_HIT_PLAYER
    detailedSlots:
    - -1
    playerCommands:
    - DAMAGE 1000 # The Sniper bullet will inflict 1000 damages
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%projectile_name%'
        part2: SniperBullet
        
  activator_for_rocket:
    name: '&eActivator'
    option: PROJECTILE_HIT_PLAYER
    detailedSlots:
    - -1
    playerCommands:
    # The rocket projectile will inflict 10 damages to all players
    # around the player hit in radius of 5 blocks 
    # and it will display particles near all these place
    - AROUND distance:5 DAMAGE 10 <+> PARTICLE FIREWORKS_SPARK 10 0.1 0.5
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_STRING
        comparator: EQUALS
        part1: '%projectile_name%'
        part2: RocketBullet
```


:::info
Instead of only adding DAMAGE command you could add lot of things more, use AROUND command, or summon a lightning bolt, or use BURN command, give the target an effect, etc
:::

:::info
You can also use the activators PROJECTILE\_HIT\_BLOCK or PROJECTILE\_HIT\_ENTITY
:::

