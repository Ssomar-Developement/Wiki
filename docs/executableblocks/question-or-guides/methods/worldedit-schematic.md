# Worldedit schematic

To make your EB run Worldedit commands take a look at the next format (that it should go on commands section.) and use it as reference :sunglasses:

```yaml
#PASTE A SCHEM WITH WE
worldedit:/world NAMEOFYOURWORLD
worldedit:/schem load NAMEOFYOURSCHEM
worldedit:/pos1 %block_x_int%,%block_y_int%,%block_z_int%
worldedit:/pos2 %block_x_int%,%block_y_int%,%block_z_int%
worldedit:/paste
```

:::info
Replace the placeholders for what you want.
:::

:::info
for the NAMEOFYOURWORLD field in the world command, the name of the world that's going to be placed there must be at all lowercase. Using %player\_world\_lower% is recommended if you want to get the world of where the user is at.
:::

:::info
If you're using FastAsyncWorldEdit, rewrite the `worldedit:` part to `fastasyncworldedit:`
:::

