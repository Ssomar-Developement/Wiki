# MINEINCUBE command whitelist or blacklist blocks

* First, the MINEINCUBE command will be in ACTIVATOR1
* To whitelist and/or blacklist blocks you have to:
  * To whitelist blocks, you have to create an activator PLAYER\_BREAK\_BLOCK (ACTIVATOR2), go to detailedBlocks and add all your whitelist blocks + cancelEventIfNotBlock.
  * To blacklist blocks, you have to create an activator PLAYER\_BREAK\_BLOCK (ACTIVATOR2 - ACTIVATOR3), go to detailedBlocks and add all your blacklist blocks, then exit that gui and inside the activator enable cancelEvent.
