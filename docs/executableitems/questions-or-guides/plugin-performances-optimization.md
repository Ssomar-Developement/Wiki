# Plugin performances optimization

:::info
Hey you think SCore or ExecutableItems make your server run slower ? We will help you to improve the performance of our plugins.
:::

### Target the problems with Spark

First run a spark profiler to target the problem.

1. If you haven't the plugin **spark** please download it : [SPARK LINK](https://www.spigotmc.org/resources/spark.57242/)
2. Now you have spark, wait that you reach your amount of average players
3. Then run **/spark profiler**
4. Wait 1 min or more
5. run **/spark profiler --stop**
6. Open the report :smile:

If you see that SCore appears in the plugins that consume a lot of performances and you see that is related to **LoopManager** "SCore::Task: com.ssomar.score.events.loop.LoopManager$1 (interval:5)" You can follow the little tutorial bellow:

### Remove default items

First step if you don't need the default items, disable them. How ? Go in your server files -> in the folder plugins -> in the folder of ExecutableItems -> open the file config.yml and turn **disableTestItems: false** to true so **disableTestItems: true** then restart your server.

### Increase the delay of your loop activators

Second step if your problems persist and you still have the LoopManager in your report, it's probably because you use one or multiples items with a loop activator that has a too small delay. Too show which items use a loop and with which delay, I created a custom command to make your life simple. In your console or in-game type /score inspect-loop All LOOPS under 1 second are not adviced so I advice you to increase the delay of your loops. If you have an unessecary item with a loop, move or delete the config and reload.

### Contact us

Third step **ONLY** if you don't have a LOOP under 15 ticks on your server, you can open a post on the [discord ](https://discord.com/invite/TRmSwJaYNv)in the support channel. Please in your post include:

* The link of your Spark report and we will help you to improve the performance of OUR plugins.
* The copy of the results of the command /score inspect-loop results (with [pastebin](https://pastebin.com/))
* The copy of the results of the command /ei checkevents (with [pastebin](https://pastebin.com/))
