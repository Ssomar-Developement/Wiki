---
description: Requires Protocol Lib
hidden: true
---

# ⛏️   Blocks Hardnesses

With Score you can edit the hardness of a block, related to global hardness or by specific vanilla items, or by specific EI(S) and only work on specific EB(s).

Commands:

* /score hardnesses
  * It opens the GUI of hardnesses
* /score hardnesses-create \<id>
  * You can create a new hardnesses file
* /score hardnesses-delete \<id>
  * You can delete a file

### Examples:

* With STICK a player will take 3 seconds to break the OBSIDIAN.
* With DIAMOND\_PICKAXE a player will take 10 seconds to break the SAND. 
* With "thisismytorch" (a custom EI) a player will take 10 seconds to break the SAND, A CUSTOM EB, or DIRT.

In the detailed blocks feature where you specify the block you can choose : 

* A vanilla material like DIRT
* An ExecutableBlock with EXECUTABLEBLOCKS:MyEBID
* A Block form ItemsAdder  with ITEMSADDER:MyBlock

In the detailed items features where you specify the item to break the block you can choose : 

* A vanilla material like STICK
* An ExecutableItem with EXECUTABLEITEMS:MyEIID
* An item from ItemsAdder with ITEMSADDER:MyItem
