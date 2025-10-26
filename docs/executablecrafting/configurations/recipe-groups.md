# Recipe groups

What if you would like a group of recipes to have the same conditions,  the same commands or the same checks ? well, instead of adding the same thing on each recipe you can just group them in this format

In this example I will add to all recipes that starts with "bloody"

```yaml
# The recipes list
recipesList:
- bloody_*
playerCommands:
  - SEND_MESSAGE You crafted a recipe from the bloody group, Good job !
config_update: true
#
blockConditions: {}
# The placeholders conditions
placeholdersConditions: {}
# The item checkers
itemCheckers:
  itemCheckerType: CUSTOM_CHECKS
  # Check the amount
  checkAmount: false
  # Check the display name
  checkDisplayName: false
  # Check the material
  checkMaterial: false
  # Check the custom model data
  checkCustomModelData: false
  # Check the lore
  checkLore: false
  # Check the durability
  checkDurability: false
  # Check the executable item ID
  checkExecutableItemID: false
  # Check the executable item usage
  checkExecutableItemUsage: false
  # Check the executable item variables
  checkExecutableItemVariables: false
# Add player conditions to determine
# when the 
playerConditions: {}

```
