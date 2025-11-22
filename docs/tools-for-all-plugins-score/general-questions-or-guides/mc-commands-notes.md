---
description: >-
  Mostly used as a place to visit just in case we forget how a command is
  written in a specific way
---

# MC Commands notes

## Command that drops the target's head in 1.21.4+


```yaml
execute at %player% run summon item %target_x% %target_y% %target_z% {Item:{id:"minecraft:player_head",count:1,components:{"minecraft:profile":{id:%target_uuid_array%}}}}
```

