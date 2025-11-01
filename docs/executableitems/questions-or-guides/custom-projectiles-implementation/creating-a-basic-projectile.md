# Creating a basic projectile

### Create the EI Item.

* Every projectile from Score is launched by an ExecutableItem item, so you need that first
* /ei create \<id>

* Edit everything you want, as the material, item name, lore, etc.

* Now, let's create the way we are going to launch the projectile, in this case I want it to be when right clicking, that means, Activator: PLAYER\_RIGHT\_CLICK

* Now, let's save the activator and item for a while, because we need to launch the projectile we want

:::info
The order explained here isn't the best, you can do it in the order you want, it is just done in a way you can understand how everything works step by step
:::

### Create the projectile

* Remember, we have the EI Item ready, it is just waiting for our projectile, to create it use the command /score projectiles-create

* You can select there the type of projectile, edit the particles, edit a lot of features, just do it as you want, edit everything you want, until your projectile is done, in this case I did:
  * Projectile: SNOWBALL
  * Invisible: true
  * Silent: true
  * Gravity: false
  * Added some particles in the particle editor inside the gui.
* Once the projectile is done, save it, and let's go back into our EI Item.

### Link the projectile created into our EI Item

Let's go back to the activator PLAYER_RIGHT_CLICK of our item, and in commands we are going to use the LAUNCH command.

#### LAUNCH Command Format

```
LAUNCH <projectile_id> [speed] [gravity] [bounce] [removeOnHit]
```

**Parameters:**
- `projectile_id` - The ID of the projectile you created (required)
- `speed` - Launch speed multiplier (optional, default: 1.0)
- `gravity` - Enable gravity (optional, true/false)
- `bounce` - Enable bouncing off blocks (optional, true/false)
- `removeOnHit` - Remove projectile when it hits entity (optional, true/false)

#### Example Command

In this case, the ID is the id of the projectile. I set it to "ThisIsTheIdOfMyProjectile" so the command would be:

```yaml
commands:
- "LAUNCH ThisIsTheIdOfMyProjectile"
```

Or with additional parameters for more control:

```yaml
commands:
- "LAUNCH ThisIsTheIdOfMyProjectile 1.5 true false true"
```

This would launch the projectile at 1.5x speed, with gravity enabled, no bouncing, and remove on entity hit.

:::tip
For more details on the LAUNCH command and all its parameters, see the [LAUNCH Command Documentation](/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch).
:::

### Test Your Projectile

Once you've added the LAUNCH command:

1. Press **FINISH** to save the command
2. **Save the activator** in the activator editor
3. **Save the item** with `/ei save` or through the GUI
4. **Get the item** with `/ei give <your_name> <item_id>`
5. **Test it** by right-clicking!

If everything is configured correctly, your projectile should launch when you right-click with the item.

## Complete Example Configuration

Here's a complete YAML example of a basic projectile launcher:

```yaml
material: STICK
displayName: '&6Basic Projectile Launcher'
lore:
- '&7Right-click to launch a projectile'
- '&7Example for beginners'

activators:
  launch_projectile:
    activators:
    - PLAYER_RIGHT_CLICK

    commands:
    - "LAUNCH ThisIsTheIdOfMyProjectile 1.0 false false true"
    - "SENDMESSAGE &aProjectile launched!"
```

## Troubleshooting

### Projectile Doesn't Launch

- ✅ Verify the projectile ID matches exactly: `/score projectiles-list`
- ✅ Check the projectile is saved: `/score projectiles-save`
- ✅ Ensure the LAUNCH command syntax is correct
- ✅ Verify the activator is set to PLAYER_RIGHT_CLICK
- ✅ Make sure you saved both the activator and the item

### Projectile Launches in Wrong Direction

- Check the `speed` parameter - try different values
- Verify you're holding the item when right-clicking
- Make sure you're not looking straight up or down (can cause issues)

### Projectile Disappears Immediately

- Set `gravity: false` if you want it to travel straight
- Increase the `speed` parameter
- Check projectile lifespan settings in `/score projectiles-edit`

## Related Documentation

- [Custom Projectiles System](/docs/tools-for-all-plugins-score/custom-projectiles)
- [LAUNCH Command](/docs/tools-for-all-plugins-score/custom-commands/player-and-target-commands#launch)
- [PLAYER_RIGHT_CLICK Activator](/docs/executableitems/configurations/activator-configuration/list-of-the-activators#player_right_click)
- [Advanced Projectile Examples](/docs/executableitems/questions-or-guides/custom-projectiles-implementation/launch-diamond-axe)

