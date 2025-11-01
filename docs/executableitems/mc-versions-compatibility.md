# 🔦 MC Versions Compatibility

### For the versions 1.14 and higher

:::tip
Best versions to run the plugin !
:::

Most part of the features are available, to be sure check the wiki.

### For the versions 1.13 and less

:::danger
**NOT AVAILABLE**
:::

Custom textures not available

Activator PLAYER\_FIS&#x48;_\__&#x4E;OTHING _not available_

Custom commands not available:

* LAUNCH _(only the rotation x and y are not available)_

Custom projectiles have less features

### For the versions 1.12 and less 

:::info
**PLUGIN REQUIRED**
:::

It requires the plugin NBTAPI

\{% embed url="https://www.spigotmc.org/resources/nbt-api.7939" %\}

#### Color of dyes

* You have to select the material INK\_SACK and then edit the durability to edit the color

:::danger
**NOT AVAILABLE**
:::

Edition of the Attributes in game, but you can add them ! check:

:::info
**Attributes** are now available in 1.12 ! 

Generate your item with attributes on a website like that **https://mapmaking.fr/give1.12/** then give you the item to you, take it in your hand and do **/ei create** it will import them automatically
:::

Custom Heads

Custom commands:

* LOCATED\_LAUNCH
* FARMINCUBE
* FERTILIZEINCUBE
* MODIFYDURABILITY

### For the versions 1.11 , 1.10 , 1.9, 1.8

:::warning
**All features haven't been tested in this version !**
:::

:::danger
**NOT AVAILABLE**
:::

Many default items, since their material is not in the 1.8.

Custom commands:

* STUN\_ENABLE
* STUN\_DISABLE
* CANCELPICKUP
* PARTICLE
* ACTIONBAR
* GLACIAL\_FREEZE
* OPEN\_ENDERCHEST
* SELL\_CONTENT

WorldGuard not supported

Custom projectiles can't emit particles

Glow drop and glow drop color

Multi-usage for fuels

```
> These settings for potions are not available
potionColor: 56575 
potionType: strength
potionExtended: true
potionUpgraded: true

> But potions effects is still customisable
potionEffects:
  1:
    potionEffectType: POISON
    duration: 10
    amplifier: 1
    isAmbient: true
    hasParticles: true
  2:
    potionEffectType: SPEED
    duration: 20
    amplifier: 2
    isAmbient: false
    hasParticles: false
```

Disable drops for activator like PLAYER\_KIL&#x4C;_\__&#x45;NTITY

Restrictions:

* CANCEL\_SWAPHAND (There is no OFFHAND)

Custom conditions:

* IfNamed

Activators:

* PROJECTILE\_HI&#x54;_\__&#x42;LOCK (Potential problems)
* PROJECTILE\_HI&#x54;_\__&#x45;NTITY (Potential problems)
* PROJECTILE\_HI&#x54;_\__&#x50;LAYER (Potential problems)
* PROJECTILE\_ENTER\_IN\_LIQUID

Features of custom projectile

* Gravity
* Glow
* Silent
* visualFire
