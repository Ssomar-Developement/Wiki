# Installation errors \[logs]

If you want to install MyFurniture, you have to first check the next page

If you already did it, and still don't work, just check the logs, most of the item you can see what the error is reading at them, here, are common logs errors to know what you did wrong.

### NoClassDefFoundError | ClassNotFoundException

In this case you have different versions on EI | EB | EE -> Score

* For example have ExecutableItems version 1.0.1 and Score 1.0.0

Example (THIS CAN BE DIFFERENT FOR ALL OF YOU, THE IDEA IS TO SEE THE TYPE OF ERROR)

```log
java.lang.NoClassDefFoundError: com/ssomar/score/api/executableitems/events/RemoveItemInPlayerInventoryEvent
        at com.ssomar.executableitems.ExecutableItems.onEnable(ExecutableItems.java:59) ~[ExecutableItems_Prem-5.9.53.jar:?]
        at org.bukkit.plugin.java.JavaPlugin.setEnabled(JavaPlugin.java:264) ~[purpur-api-1.19.2-R0.1-SNAPSHOT.jar:?]
        at org.bukkit.plugin.java.JavaPluginLoader.enablePlugin(JavaPluginLoader.java:371) ~[purpur-api-1.19.2-R0.1-SNAPSHOT.jar:?]
        at org.bukkit.plugin.SimplePluginManager.enablePlugin(SimplePluginManager.java:548) ~[purpur-api-1.19.2-R0.1-SNAPSHOT.jar:?]
        at org.bukkit.craftbukkit.v1_19_R1.CraftServer.enablePlugin(CraftServer.java:611) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at org.bukkit.craftbukkit.v1_19_R1.CraftServer.enablePlugins(CraftServer.java:525) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.loadWorld0(MinecraftServer.java:641) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.loadLevel(MinecraftServer.java:427) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.dedicated.DedicatedServer.initServer(DedicatedServer.java:343) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1116) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:310) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at java.lang.Thread.run(Thread.java:833) ~[?:?]
Caused by: java.lang.ClassNotFoundException: com.ssomar.score.api.executableitems.events.RemoveItemInPlayerInventoryEvent
        at org.bukkit.plugin.java.PluginClassLoader.loadClass0(PluginClassLoader.java:179) ~[purpur-api-1.19.2-R0.1-SNAPSHOT.jar:?]
        at org.bukkit.plugin.java.PluginClassLoader.loadClass(PluginClassLoader.java:126) ~[purpur-api-1.19.2-R0.1-SNAPSHOT.jar:?]
        at java.lang.ClassLoader.loadClass(ClassLoader.java:520) ~[?:?]
        ... 12 more
```

Another example having:

* ExecutableItems 1.0.1
* Score 1.0.1
* ExecutableBlocks 1.0.0

```log
[14:48:04 WARN]: [SCore] Task #21 for SCore v3.9.56 generated an exception
java.lang.NoClassDefFoundError: com/ssomar/executableblocks/executableblocks/activators/ActivatorEBFeature
        at com.ssomar.score.events.loop.LoopManager$1.run(LoopManager.java:143) ~[SCore-3.9.56.jar:?]
        at org.bukkit.craftbukkit.v1_19_R1.scheduler.CraftTask.run(CraftTask.java:101) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at org.bukkit.craftbukkit.v1_19_R1.scheduler.CraftScheduler.mainThreadHeartbeat(CraftScheduler.java:483) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.tickChildren(MinecraftServer.java:1500) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.dedicated.DedicatedServer.tickChildren(DedicatedServer.java:486) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.tickServer(MinecraftServer.java:1424) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1194) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:310) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at java.lang.Thread.run(Thread.java:833) ~[?:?]
Caused by: java.lang.ClassNotFoundException: com.ssomar.executableblocks.executableblocks.activators.ActivatorEBFeature
        ... 9 more
```

## Unknown/missing dependency plugins

This happens when you miss Score plugin

```log
[14:50:36 ERROR]: Could not load 'plugins\ExecutableItems_Prem-5.9.56.jar' in folder 'plugins'
org.bukkit.plugin.UnknownDependencyException: Unknown/missing dependency plugins: [SCore]. Please download and install these plugins to run 'ExecutableItems'.
        at org.bukkit.plugin.SimplePluginManager.loadPlugins(SimplePluginManager.java:293) ~[purpur-api-1.19.2-R0.1-SNAPSHOT.jar:?]
        at org.bukkit.craftbukkit.v1_19_R1.CraftServer.loadPlugins(CraftServer.java:468) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.dedicated.DedicatedServer.initServer(DedicatedServer.java:314) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1116) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:310) ~[purpur-1.19.2.jar:git-Purpur-1858]
        at java.lang.Thread.run(Thread.java:833) ~[?:?]
```

