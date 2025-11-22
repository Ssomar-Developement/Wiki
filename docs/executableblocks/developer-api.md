# ⚙ Developer API

## Add the dependency

### Manual dependency

To use the API, you need download the ExecutableBlocks jar (given when you download ExecutableBlocks on Spigot)

[ExecutableBlocks Free](https://www.spigotmc.org/resources/custom-blocks-free-executable-blocks-1-14-1-18.93406)

### Maven dependency

```xml
<dependency>
    <groupId>com.ssomar.executableblocks</groupId>
    <artifactId>ExecutableBlocks</artifactId>
    <version>X.X.X</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/src/main/resources/ExecutableBlocks.jar</systemPath>
</dependency>
```

### Configure correctly your plugin.yml

```yaml
softdepend: [ExecutableBlocks, SCore]
```

## API Documentation

### ExecutableBlocksAPI class path

`com.ssomar.executableblocks.api.ExecutableBlocksAPI`

### Check if ExecutableItems is present and loaded on the server

You can check if the server has ExecutableItems installed and enabled by using

```java
public static boolean hasExecutableBlocks = false;
Plugin executableBlocks;
if(executableBlocks = Bukkit.getPluginManager().getPlugin("ExecutableBlocks") != null && executableBlocks.isEnabled()) {
    SCore.plugin.getServer().getLogger().info("["+NAME+"] ExecutableBlocks hooked !");
    hasExecutableBlocks = true;
}
```

### Methods

```java
public class ExecutableBlocksAPI {

     /**
     * Get the ExecutableBlocks Manager,
     * It allows you to get / retrieve the ExecutableBlocks Configurations
     **/
    public static ExecutableBlocksManager getExecutableBlocksManager() {
        return ExecutableBlocksManager.getInstance();
    }

    /**
     * Get the ExecutableBlocksPlaced Manager,
     * It allows you to get / retrieve the ExecutableBlocks Placed
     **/
    public static ExecutableBlocksPlacedManager getExecutableBlocksPlacedManager() {
        return ExecutableBlocksPlacedManager.getInstance();
    }

    /**
     * Get the ExecutableBlockObject
     * It allows you to get / retrieve the ExecutableBlocks Configurations under its item form
     **/
    public static ExecutableBlockObject getExecutableBlockObject(ItemStack itemStack) {
        return new ExecutableBlockObject(itemStack);
    }
}
```

_The static method to have access to the managers of the ExecutableBlocks and the ExecutableBlockPlaced._

### Examples

```java
/** Example you decide to support ExecutableBlocks in world generation plugin **/

public void placeExecutableBlock(String executableBlockId, Location location){
        Optional<ExecutableBlock> ebOpt = ExecutableBlocksAPI.getExecutableBlocksManager().getExecutableBlock(executableBlockId);
        ebOpt.ifPresent(executableBlock -> executableBlock.place(location, true, OverrideEBP.REMOVE_EXISTING_EBP, null, null, null));
}
```

### Questions ? Need another method ?

Join the discord
