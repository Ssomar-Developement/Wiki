# Entity health condition

I will explain this later, for now I'll leave the file, it requires math placeholder

```
name: '&eDefault name'
lore:
- '&b&oDefault lore'
material: STICK
glow: false
disableStack: false
keepItemOnDeath: false
canBeUsedOnlyByTheOwner: true
storeItemInfo: false
unbreakable: false
usage: 0
usageLimit: -1
restrictions: {}
variables: {}
activators:
  activator0:
    name: '&eActivator'
    option: PLAYER_HIT_ENTITY
    usageModification: 0
    cancelEvent: false
    noActivatorRunIfTheEventIsCancelled: false
    silenceOutput: false
    autoUpdateItem: false
    updateName: true
    updateLore: true
    updateDurability: false
    updateAttributes: false
    updateEnchants: false
    updateCustomModelData: false
    cooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    globalCooldownOptions:
      cooldown: 0
      isCooldownInTicks: false
      cooldownMsg: '&cYou are in cooldown ! &7(&e%time_H%&6H &e%time_M%&6M &e%time_S%&6S&7)'
      displayCooldownMessage: true
      cancelEventIfInCooldown: false
    otherEICooldowns: {}
    requiredItems: {}
    requiredExecutableItems: {}
    detailedSlots:
    - -1
    commands:
    - say LESS THAN 50
    playerConditions: {}
    worldConditions: {}
    itemConditions: {}
    customConditions: {}
    placeholdersConditions:
      plchCdt0:
        type: PLAYER_NUMBER
        comparator: SUPERIOR
        part1: '%math_1_%entity_max_health%*0.5%'
        part2: '%entity_health%'
        cancelEventIfNotValid: false
        messageIfNotValid: '&CNOT LESS 50% -> &f%entity_health%'
        messageIfNotValidForTarget: ''
    detailedEntities: []
    entityCommands: []
    entityConditions: {}
    variablesModification: {}
attributes: {}

```
