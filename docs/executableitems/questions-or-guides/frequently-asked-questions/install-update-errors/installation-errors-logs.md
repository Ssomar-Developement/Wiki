# Installation errors \[logs]

If you want to install ExecutableItems, you have to first check the next page

If you already did it, and still don't work, just check the logs, most of the item you can see what the error is reading at them, here, are common logs errors to know what you did wrong.

### NBTAPI

To make this plugin work on certain versions explained on Version compatibility, you need NBTAPI.

```yaml
[14:34:43] [Server thread/INFO]: ================ SCore ================[m
[14:34:44] [Server thread/INFO]: [ExecutableItems] Enabling ExecutableItems v5.9.11
[14:34:44] [Server thread/INFO]: ================ ExecutableItems ================[m
[14:34:44] [Server thread/INFO]: ExecutableItems PlaceholderAPI hooked ![m
[14:34:44] [Server thread/ERROR]: [ExecutableItems] To make EI work in 1.8 / 1.12 / 1.13 you need to have the plugin NBTAPI ! ( https://www.spigotmc.org/resources/nbt-api.7939/ ) 
[14:34:44] [Server thread/INFO]: ================ ExecutableItems ================[m
[14:34:44] [Server thread/INFO]: [ExecutableItems] Disabling ExecutableItems v5.9.11
```

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

### java.lang.NoClassDefFoundError: com/comphenix/protocol/ProtocolLibrary

This happens when you have an outdated version of ProtocolLib, you need to download the last version [here ](https://ci.dmulloy2.net/job/ProtocolLib/lastSuccessfulBuild/)and should work fine.

```log
[16:00:04] [Server thread/ERROR]: Error occurred while enabling SCore v3.9.70 (Is it up to date?)
java.lang.NoClassDefFoundError: com/comphenix/protocol/ProtocolLibrary
	at com.ssomar.score.SCore.loadDependency(SCore.java:318) ~[SCore-3.9.70.jar:?]
	at com.ssomar.score.SCore.onEnable(SCore.java:217) ~[SCore-3.9.70.jar:?]
	at org.bukkit.plugin.java.JavaPlugin.setEnabled(JavaPlugin.java:279) ~[paper-api-1.19.4-R0.1-SNAPSHOT.jar:?]
	at io.papermc.paper.plugin.manager.PaperPluginInstanceManager.enablePlugin(PaperPluginInstanceManager.java:192) ~[paper-1.19.4.jar:git-Paper-512]
	at io.papermc.paper.plugin.manager.PaperPluginManagerImpl.enablePlugin(PaperPluginManagerImpl.java:104) ~[paper-1.19.4.jar:git-Paper-512]
	at org.bukkit.plugin.SimplePluginManager.enablePlugin(SimplePluginManager.java:507) ~[paper-api-1.19.4-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.craftbukkit.v1_19_R3.CraftServer.enablePlugin(CraftServer.java:555) ~[paper-1.19.4.jar:git-Paper-512]
	at org.bukkit.craftbukkit.v1_19_R3.CraftServer.enablePlugins(CraftServer.java:466) ~[paper-1.19.4.jar:git-Paper-512]
	at net.minecraft.server.MinecraftServer.loadWorld0(MinecraftServer.java:638) ~[paper-1.19.4.jar:git-Paper-512]
	at net.minecraft.server.MinecraftServer.loadLevel(MinecraftServer.java:437) ~[paper-1.19.4.jar:git-Paper-512]
	at net.minecraft.server.dedicated.DedicatedServer.initServer(DedicatedServer.java:308) ~[paper-1.19.4.jar:git-Paper-512]
	at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1104) ~[paper-1.19.4.jar:git-Paper-512]
	at net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:320) ~[paper-1.19.4.jar:git-Paper-512]
	at java.lang.Thread.run(Thread.java:1623) ~[?:?]
Caused by: java.lang.ClassNotFoundException: com.comphenix.protocol.ProtocolLibrary
	at org.bukkit.plugin.java.PluginClassLoader.loadClass0(PluginClassLoader.java:183) ~[paper-api-1.19.4-R0.1-SNAPSHOT.jar:?]
	at org.bukkit.plugin.java.PluginClassLoader.loadClass(PluginClassLoader.java:150) ~[paper-api-1.19.4-R0.1-SNAPSHOT.jar:?]
	at java.lang.ClassLoader.loadClass(ClassLoader.java:521) ~[?:?]
	... 14 more
[16:00:04] [Server thread/INFO]: [SCore] Disabling SCore v3.9.70
```

## Could not load plugin in folder plugins (ZipFile Error)

This happens when:

* The zip was downloaded incorrectly somehow
* The jar files faced issues during upload

```log
[16.07 12:35:39] [Server] [Server thread/ERROR]: Could not load 'plugins/ExecutableItems_Prem-5.9.99.jar' in folder 'plugins'
[16.07 12:35:39] [Server] org.bukkit.plugin.InvalidDescriptionExceptionInvalid plugin.yml
[16.07 12:35:39] [Server]     at org.bukkit.plugin.java.JavaPluginLoader.getPluginDescription(JavaPluginLoader.java:178) ~[spigot-api-1.20.1-R0.1-SNAPSHOT.jar:?]
[16.07 12:35:39] [Server]     at org.bukkit.plugin.SimplePluginManager.loadPlugins(SimplePluginManager.java:144) ~[spigot-api-1.20.1-R0.1-SNAPSHOT.jar:?]
[16.07 12:35:39] [Server]     at org.bukkit.craftbukkit.v1_20_R1.CraftServer.loadPlugins(CraftServer.java:433) ~[spigot-1.20.1-R0.1-SNAPSHOT.jar:3831-Spigot-0ca4eb6-a94277a]
[16.07 12:35:39] [Server]     at net.minecraft.server.dedicated.DedicatedServer.e(DedicatedServer.java:219) ~[spigot-1.20.1-R0.1-SNAPSHOT.jar:3831-Spigot-0ca4eb6-a94277a]
[16.07 12:35:39] [Server]     at net.minecraft.server.MinecraftServer.w(MinecraftServer.java:973) ~[spigot-1.20.1-R0.1-SNAPSHOT.jar:3831-Spigot-0ca4eb6-a94277a]
[16.07 12:35:39] [Server]     at net.minecraft.server.MinecraftServer.lambda$0(MinecraftServer.java:304) ~[spigot-1.20.1-R0.1-SNAPSHOT.jar:3831-Spigot-0ca4eb6-a94277a]
[16.07 12:35:39] [Server]     at java.lang.Thread.run(Thread.java:833) ~[?:?]
[16.07 12:35:39] [Server] Caused byjava.util.zip.ZipException: zip file is empty
[16.07 12:35:39] [Server]     at java.util.zip.ZipFile$Source.zerror(ZipFile.java:1598) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.zip.ZipFile$Source.findEND(ZipFile.java:1382) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.zip.ZipFile$Source.initCEN(ZipFile.java:1477) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.zip.ZipFile$Source.<init>(ZipFile.java:1315) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.zip.ZipFile$Source.get(ZipFile.java:1277) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.zip.ZipFile$CleanableResource.<init>(ZipFile.java:709) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.zip.ZipFile.<init>(ZipFile.java:243) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.zip.ZipFile.<init>(ZipFile.java:172) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.jar.JarFile.<init>(JarFile.java:347) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.jar.JarFile.<init>(JarFile.java:318) ~[?:?]
[16.07 12:35:39] [Server]     at java.util.jar.JarFile.<init>(JarFile.java:284) ~[?:?]
[16.07 12:35:39] [Server]     at org.bukkit.plugin.java.JavaPluginLoader.getPluginDescription(JavaPluginLoader.java:166) ~[spigot-api-1.20.1-R0.1-SNAPSHOT.jar:?]
[16.07 12:35:39] [Server]     ... more
[16.07 12:35:39] [Server] [Server thread/ERROR]: Could not load 'plugins/SCore-3.9.99.jar' in folder 'plugins'
[16.07 12:35:39] [Server] org.bukkit.plugin.InvalidDescriptionExceptionInvalid plugin.yml
```

One of the things can be done is

* Reinstall the files
* Instead of uploading the jar files through the host's website, upload it through FTP such as FileZilla or WinSCP.
