# OneTime action

Let's say we have an activator RIGHT CLICK, and you would like your item to do ONE THING at first time using it and then another thing, this is your place

For example: An item that the FIRST TIME right clicking will do "X" and then the next times "Y"

* First create a variable
  * Type: STRING
  * name: status
  * Value: NONACTIVATED
* Now create 2 activators
  * RIGHT CLICK activator
    * commands: SAY this is the first time using this item
    * placeholdersCondition: 
      * variable status 
      * EQUALS 
      * NONACTIVATED
    * variableModification:
      * status -> SET -> ACTIVATED
  * RIGHT CLICK activator
    * command: SAY this is NOT the first time using this item
    * placeholdersCondition: 
      * variable status 
      * EQUALS
      * ACTIVATED
