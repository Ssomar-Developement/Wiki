# Crafting Recipe Examples

## Examples


```yaml
recipeType: CRAFTING
playerConditions: {}
blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands:
- say &e%player% crafted a &bshuriken
itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: true
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false
result: minecraft:stone{"minecraft:custom_data":{PublicBukkitValues:{"executableitems:ei-id":"testtt","score:usage":1}},"minecraft:custom_name":'{"extra":["shuriken"],"text":""}',"minecraft:item_model":"elypack:shuriken","minecraft:lore":['{"extra":[{"bold":false,"color":"aqua","italic":true,"obfuscated":false,"strikethrough":false,"text":"Default
  lore","underlined":false}],"text":""}']}
input1: minecraft:iron_ingot
input3: minecraft:iron_ingot
input4: minecraft:iron_ingot
input5: minecraft:iron_block
input6: minecraft:iron_ingot
input7: minecraft:iron_ingot
input9: minecraft:iron_ingot
typeOfCraftingTableRecipe: MATCH_SHAPE
config_update: true

```


```yaml
recipeType: CRAFTING
playerConditions: {}
blockConditions:
  requiredItems: {}
  requiredExecutableItems: {}
placeholdersConditions: {}
playerCommands: []
itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  checkAmount: true
  checkDisplayName: false
  checkMaterial: true
  checkCustomModelData: false
  checkLore: false
  checkDurability: false
  checkExecutableItemID: false
  checkExecutableItemUsage: false
  checkExecutableItemVariables: false
result: minecraft:bamboo_door
input5: minecraft:crimson_door
input6: minecraft:bamboo_planks
typeOfCraftingTableRecipe: SHAPELESS
config_update: true
```


