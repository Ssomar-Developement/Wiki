# ⌨️ Commands & Permissions

## Permissions

#### Give all permissions of EE

* Permission: `ee.*`

#### Give all commands permissions of EE

* Permission: `ee.cmds`

## Commands

#### Create a new ExecutableEvent

* Command: ****/ee create \{id\}****
* Permission: `ee.cmd.create`

#### Open the editor / menu

* Command: ****/ee editor**** or ****/ee show****
* Permission: `ee.cmd.editor` or `ee.cmd.show`

#### Reload the plugin

* Command: ****/ee reload****
* Permission: `ee.cmd.reload`

**Reload a folder**

* Command: ****/ee reload folder:Name\_Of\_My\_Folder****
* Permission: `ee.cmd.reload`

#### Delete an ExecutableEvent

* Command: ****/ee delete \{id\}****
* Permission: `ee.cmd.delete`

#### Enables an EE event or a folder of events

* Command: ****/ee enable \{event\}****
* Permission: `ee.cmd.enable`

#### Disables an EE event or a folder of events

* Command: ****/ee disable \{event\}****
* Permission: `ee.cmd.disable`

#### Clear all cooldowns and delayed commands of EE

* Command: ****/ee clear****** ******\[playerName]****
* Permission: `ee.cmd.clear`

:::info
It supports entities too just use the entity UUID instead of player name
:::

#### Enable / Disable actionbar of EE

* Command: ****/ee actionbar****** ******\{on or off\}****
* Permission: `ee.cmd.actionbar`

### Custom trigger

Commands:

* /ee run-custom-trigger trigger:\{activatorId\} // It will execute the activator(s) with the specified ID.
