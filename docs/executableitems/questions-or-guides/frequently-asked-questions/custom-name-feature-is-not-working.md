# Custom name feature is not working

If you enabled 

```
dropOptions:
  displayNameDrop: true
```

and the displayNameDrop is **not** showing as this

It may be because one of your plugins.

### WildStacker

Right now we know that Wildstacker causes problems with this feature. To fix that in their case you have to blacklist the item on their config

```
  # Material list: https://bg-software.com/materials/
  # Make sure you follow the "TYPE" and "TYPE:DATA" formats.
  # If you wish to disable blacklisted items, use "blacklist: []"
  blacklist: 
```

