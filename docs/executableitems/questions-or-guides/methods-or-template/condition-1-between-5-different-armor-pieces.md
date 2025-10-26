# Condition 1 between 5 different armor pieces

Let's say, we have 5 helmets, they are explained right here:

* "1"
  * lore: "Fire helmet"
* "2"
  * lore: "Ice helmet"
* "3"
  * lore: "Dirt helmet"
* "4"
  * lore: "Lava helmet"
* "5"
  * lore: "Stone helmet"

And you would like to create an activator that triggers if you have any of these armor (like the condition of OR), you'd need the **CheckItem expansion of PlaceholderAPI** and take a look at this placeholderCondition:

```yaml
  placeholdersConditions:
      plchCdt0:
        type: PLAYER_PLAYER
        comparator: IS_CONTAINED_IN
        part1: '%checkitem_inslot:39,lorecontains:“Fire helmet”%<OR>%checkitem_inslot:39,lorecontains:“Ice helmet”%<OR>%checkitem_inslot:39,lorecontains:“Dirt helmet”%<OR>%checkitem_inslot:39,lorecontains:“Lava helmet”%<OR>%checkitem_inslot:39,lorecontains:“Stone helmet”%'
        part2: 'yes'
        cancelEventIfNotValid: false
        messageIfNotValid: 'You dont have any of the armor pieces needed to make this work'
        messageIfNotValidForTarget: ''
```

:::info
This is a way to use it, but you can do the same with different weapons, or different armor pieces, this is just an idea, use it as you want.
:::

