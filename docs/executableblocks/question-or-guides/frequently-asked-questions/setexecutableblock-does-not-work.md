---
description: Page about how to possibly solve this issue
---

# SETEXECUTABLEBLOCK does not work

If SETEXECUTABLEBLOCK block command fails to run, it may be because of the following reasons:

## The world's name contained improper character or spaces

If the world's name has spaces, it's going to be an issue because usually when using custom commands that require arguments, each argument is separated with a space and if the world's name has a space, it only reads the first portion of the name

For example, if the world's name is "New World (9)", and you used %block\_world% for the world argument, the plugin tries to input the name of the world but due to how the command is made, it only manages to read "New" which may cause issues.

To fix this, rename the world to something like New\_World\_9 . Make sure the name of your worlds don't contain spaces

## When using PLAYER\_BREAK and SETEXECUTABLEBLOCK together, the EB doesn't transform properly

You have to add DELAYTICK 2 before the SETEXECUTABLEBLOCK command due to technical reasons

```
    blockCommands:
    - DELAYTICK 2
    - SETEXECUTABLEBLOCK sampleblock %block_x% %block_y% %block_z% %block_world% true
```
