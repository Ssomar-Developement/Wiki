# Custom Name Feature Not Working

## Problem

When you enable the `displayNameDrop` feature in your ExecutableItem configuration:

```yaml
dropOptions:
  displayNameDrop: true
```

The custom item name should appear when the item is dropped on the ground. However, sometimes this feature doesn't work as expected.

**Expected behavior:** Item displays custom name when dropped

**Actual behavior:** Item shows as regular vanilla item name

## Common Causes

### Plugin Conflicts

The most common cause is interference from other plugins that modify item behavior, particularly item stacking and optimization plugins.

## Solutions

### Solution 1: WildStacker Plugin Conflict

**WildStacker** is known to cause issues with the `displayNameDrop` feature.

#### Fix: Blacklist Your ExecutableItem

1. Open `plugins/WildStacker/config.yml`

2. Find the `blacklist` section:

```yaml
  # Material list: https://bg-software.com/materials/
  # Make sure you follow the "TYPE" and "TYPE:DATA" formats.
  # If you wish to disable blacklisted items, use "blacklist: []"
  blacklist:
  - YOUR_ITEM_MATERIAL
```

3. Add your ExecutableItem's material to the blacklist

**Example:**

```yaml
blacklist:
  - DIAMOND_SWORD
  - NETHERITE_CHESTPLATE
  - GOLDEN_APPLE
```

4. **Restart your server** (reload may not work for WildStacker config changes)

5. Test the `displayNameDrop` feature

### Solution 2: Other Stacking Plugins

If you're using other item stacking or optimization plugins, try the same approach:

**Common plugins that may conflict:**
- **WildStacker** (solution above)
- **StackMob**
- **ItemsAdder** (if using custom item features)
- **Oraxen** (if using custom item features)
- **MergedMobs**

**Fix for each:**
1. Check their configuration for item blacklist/whitelist options
2. Add your ExecutableItem materials to the blacklist
3. Restart server

### Solution 3: Verify Configuration

Make sure your ExecutableItem configuration is correct:

```yaml
name: '&6&lCustom Item'
material: DIAMOND_SWORD

dropOptions:
  displayNameDrop: true  # Must be exactly 'true', not 'yes' or '1'
```

**Common configuration mistakes:**
- Using `yes` instead of `true`
- Indentation errors (YAML is space-sensitive)
- Missing `dropOptions:` parent key

### Solution 4: Check ExecutableItems Version

Older versions of ExecutableItems may have bugs with this feature.

1. Check your version: `/ei version`
2. Download latest version from SpigotMC
3. Replace plugin JAR
4. Restart server

### Solution 5: Disable All Optimization Plugins (Testing)

To identify the conflicting plugin:

1. **Backup your server**
2. Temporarily disable stacking/optimization plugins one by one
3. Restart after each disable
4. Test `displayNameDrop` feature
5. When it works, you've found the conflicting plugin
6. Re-enable plugins and apply blacklist fix

## Testing the Feature

### How to Test

1. Get your ExecutableItem:
```bash
/ei give <item_name> 1
```

2. Drop the item on the ground (Q key)

3. Look at the dropped item entity

**Success:** Item shows custom name (e.g., "&6&lCustom Item")

**Failure:** Item shows vanilla name (e.g., "Diamond Sword")

### Debug Checklist

- [ ] `displayNameDrop: true` is set in item config
- [ ] Item has a custom `name:` defined
- [ ] Server restarted after config change (not just `/ei reload`)
- [ ] No stacking plugins interfering
- [ ] ExecutableItems version is up to date
- [ ] Item material blacklisted in conflicting plugins

## Complete Example Configuration

```yaml
name: '&6&lLegendary Sword'
material: DIAMOND_SWORD
lore:
- '&7A sword of legends'
- '&eDrops with custom name!'

dropOptions:
  displayNameDrop: true  # Shows custom name when dropped

  # Optional: Prevent item despawning
  # This requires Premium ExecutableItems
  # preventDespawn: true

  # Optional: Custom drop sound
  # dropSound:
  #   sound: ENTITY_ITEM_PICKUP
  #   volume: 1.0
  #   pitch: 1.5
```

## Still Not Working?

### Additional Troubleshooting

1. **Check console for errors:**
   - Look for ExecutableItems errors on server startup
   - Check for errors when dropping items

2. **Verify item is actually an ExecutableItem:**
   ```bash
   # Get fresh copy
   /ei give <item_name> 1
   ```
   Don't test with vanilla items

3. **Try minimal configuration:**
   ```yaml
   name: '&cTest'
   material: STICK
   dropOptions:
     displayNameDrop: true
   ```
   If this works, your main config has issues

4. **Check for ProtocolLib issues:**
   - Some older ProtocolLib versions conflict
   - Update to latest ProtocolLib

### Getting Help

If none of these solutions work:

1. **Gather information:**
   - ExecutableItems version (`/ei version`)
   - Minecraft version
   - List of installed plugins (`/plugins`)
   - Your item's YAML configuration

2. **Join Ssomar Discord:**
   - Post in #support channel
   - Include all information above
   - Describe what you've already tried

3. **Check for known bugs:**
   - Visit ExecutableItems SpigotMC page
   - Check recent reviews/comments
   - Look for similar issues

## Summary

**Quick Fix:**
1. Check if you're using WildStacker or similar stacking plugin
2. Blacklist your ExecutableItem material in that plugin's config
3. **Restart server** (reload is not enough)
4. Test the feature

**Most common cause:** WildStacker plugin interference

**Most common mistake:** Forgetting to restart server after config changes

