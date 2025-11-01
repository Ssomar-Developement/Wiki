# Players Can't Use the Items

## Problem

Players without OP permissions try to use your ExecutableItems and receive this error message:

![Permission denied message](</img/image (109).png>)

**Error message:** "I'm sorry, but you do not have permission to perform this command."

## Why This Happens

ExecutableItems uses **Minecraft's permission system** to control who can use items. By default:

- ✅ **OP players** can use all ExecutableItems
- ❌ **Non-OP players** cannot use ExecutableItems without permissions
- ⚠️ **This is intentional** for server security and item control

## Solution: Grant Permissions

:::warning Permission Plugin Required
You **must** have a permission plugin installed to give non-OP players access to ExecutableItems.

**Cannot avoid:** There is no way around this requirement except giving all players OP (not recommended for security).
:::

### Step 1: Install a Permission Plugin

Choose and install one of these popular permission plugins:

#### Option 1: LuckPerms (Recommended)

- **Download**: [LuckPerms on SpigotMC](https://www.spigotmc.org/resources/luckperms.28140/)
- **Features**: Modern, actively maintained, web editor, groups
- **Difficulty**: ⭐⭐ Medium

#### Option 2: PermissionsEx (PEX)

- **Download**: [PermissionsEx on SpigotMC](https://www.spigotmc.org/resources/permissionsex.26785/)
- **Features**: Simple, straightforward
- **Difficulty**: ⭐ Easy

#### Option 3: GroupManager

- **Download**: [GroupManager on SpigotMC](https://www.spigotmc.org/resources/groupmanager.38875/)
- **Features**: Basic, lightweight
- **Difficulty**: ⭐ Easy

### Step 2: Grant ExecutableItems Permissions

Once you have a permission plugin installed, grant the appropriate permissions to your players or groups.

## ExecutableItems Permissions

### Use All Items

To allow players to use **all** ExecutableItems:

```
executableitems.use.*
```

**LuckPerms command:**
```bash
/lp group default permission set executableitems.use.* true
```

**PermissionsEx command:**
```bash
/pex group default add executableitems.use.*
```

### Use Specific Item

To allow use of only a **specific** ExecutableItem:

```
executableitems.use.<item_id>
```

**Example:** Allow use of an item called "magic_wand"
```bash
/lp user PlayerName permission set executableitems.use.magic_wand true
```

### Other Useful Permissions

| Permission | Description |
|------------|-------------|
| `executableitems.*` | All ExecutableItems permissions (not recommended) |
| `executableitems.use.*` | Use all ExecutableItems |
| `executableitems.use.<id>` | Use specific ExecutableItem by ID |
| `executableitems.give` | Use `/ei give` command |
| `executableitems.reload` | Use `/ei reload` command |
| `executableitems.edit` | Use `/ei edit` command |

## Complete Setup Example

### Using LuckPerms

**1. Install LuckPerms**
- Download and place in `plugins` folder
- Restart server

**2. Create groups (optional but recommended)**
```bash
# Create VIP group
/lp creategroup vip

# Set VIP group inheritance
/lp group vip parent add default
```

**3. Grant permissions**
```bash
# Allow all players to use all items
/lp group default permission set executableitems.use.* true

# Or allow only VIP group to use premium items
/lp group vip permission set executableitems.use.premium_sword true
/lp group vip permission set executableitems.use.premium_armor true
```

**4. Add player to group**
```bash
/lp user PlayerName parent add vip
```

### Using PermissionsEx

**1. Install PermissionsEx**
- Download and place in `plugins` folder
- Restart server

**2. Grant permissions**
```bash
# Allow all players to use all items
/pex group default add executableitems.use.*

# Or specific item
/pex user PlayerName add executableitems.use.magic_wand
```

## Verification

### Test Permissions

1. **Join as non-OP player** (or remove your OP: `/deop PlayerName`)
2. **Get an ExecutableItem**: `/ei give <item_name> 1`
3. **Try to use the item** (right-click, left-click, etc.)
4. **If it works** - Permissions are correct! ✅
5. **If error appears** - Check permission setup ❌

### Check Player Permissions

**LuckPerms:**
```bash
/lp user PlayerName permission info
```

**PermissionsEx:**
```bash
/pex user PlayerName
```

## Common Issues

### Still Getting Permission Error

**Check these:**
1. **Permission plugin installed** - Verify with `/plugins`
2. **Server restarted** - Restart after installing permission plugin
3. **Correct permission** - Must be `executableitems.use.*` or `executableitems.use.<id>`
4. **Spelling** - Item ID spelling must match exactly (case-sensitive)
5. **Permission applied to correct group** - Check which group player is in

### "I don't want to install a permission plugin"

**Unfortunately, this is required.** Your only alternatives are:

1. ⚠️ **Give all players OP** (not recommended - security risk)
   ```bash
   /op PlayerName
   ```
   This gives players full server control, not just item usage.

2. ✅ **Install a lightweight permission plugin** (recommended)
   - GroupManager is the simplest option
   - Only takes 5 minutes to set up
   - Gives you control over all plugin permissions

### Permission works but items don't

This is a different issue. If players can use items but features don't work:
- Check ExecutableItems configuration
- Verify item YAML is correct
- Check console for errors
- See troubleshooting documentation

## Related Documentation

- [Commands & Permissions](/docs/executableitems/commands-and-permissions) - Complete permissions reference
- [LuckPerms Documentation](https://luckperms.net/wiki/Home) - Detailed LuckPerms guide
- [Permission Nodes](/docs/executableitems/configurations/item-configuration/item-features#permissions) - Item-specific permissions

## Summary

**Problem:** Non-OP players can't use ExecutableItems

**Solution:**
1. ✅ Install a permission plugin (LuckPerms recommended)
2. ✅ Grant `executableitems.use.*` to default group
3. ✅ Or grant `executableitems.use.<item_id>` for specific items
4. ✅ Restart server and test

**Important:**
- ❌ Cannot use ExecutableItems without permission plugin (except OP)
- ✅ Permission plugins give fine control over who uses what
- ⚠️ Giving everyone OP is a security risk

**Quick setup (LuckPerms):**
```bash
/lp group default permission set executableitems.use.* true
```
