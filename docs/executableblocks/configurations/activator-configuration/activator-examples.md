# Activator Examples

```yaml
activators:
  activator1:
    activator: PLAYER_WALK_ON
    displayName: Activator name
    commands:
    - REMOVEBLOCK
    ownerCommands: []
    silenceOutput: true
    playerCommands:
    - SENDCENTEREDMESSAGE §4§lUhhhh §c:(
    - execute at %player% run summon tnt %block_x_int% %block_y_int% %block_z_int%
    - JUMP 1.5
    cancelEventIfInvalidRequiredExecutableItems: false
    cancelEvent: false
    globalPlayerCooldown: 0
    displayGlobalPlayerCooldownMsg: true
    globalPlayerCooldownMsg: '&e'
    inTickGlobalPlayerCooldown: false
    cancelEventIfInGlobalPlayerCooldown: false
    perPlayerCooldown: 1
    displayPerPlayerCooldownMsg: false
    perPlayerCooldownMsg: '&e'
    inTickPerPlayerCooldown: false
    cancelEventIfInPerPlayerCooldown: false
config_1_2: 'true'
```
