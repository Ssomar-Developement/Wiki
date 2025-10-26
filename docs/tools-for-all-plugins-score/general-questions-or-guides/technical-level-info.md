---
description: >-
  Only useful for people who pay attention on the tiniest
  info/function/mechanics about how plugins such as ExecutableItems,
  ExecutableBlocks work
---

# Technical-Level Info

## Activator Execution Properties

* Commands run first before variable update, causing items that spawn particles in one place to be impossible in the free version
* In some cases, activators run faster than commands so even if you used the action counter method and used SCore variables instead of item variables, it won't work.

## How does YML Format Work Exactly

In this picture, here is an example of a broken item config.

Why? Because YML heavily relies on indention when grouping attributes unlike JSON which relies on brackets.

To analyze how it normally works, I will give you simple examples

a, c, b belong in the same "group" because they belong in the same line spacing

You can see that line 4 starts with 2 more spaces than line 3. Which means that the next following lines, line 5 and line 6, belong to the "group" which is line 4

I can add more things below line 6 and they will still be a part of "x"

How do I know which belongs to a group? VSCode would tell you where it is. 

As you can see, since line 8 9 10 has 2 more spacing than "mococo", those 3 lines now belong to "mococo"

For proof, I closed it and it placed line 8 9 10 inside it. but why not line 11?

Line 11 had 2 less spaces than line 10, meaning that the members of line 7 starts from line 8 and ends at line 10

Going back to a random ei item:

based on spacing, anything inside of the red line is part of activator1

"activator2" had less spacing than the child elements of "activator1" which allows the plugin to know that "ok, activator1 properties stop at variablesModification: \{\}" and now we start reading the properties of "activator2"

but then, "activator3" had an unusual spacing count. instead of the "per 2 spaces" part, that one had 1 spaces, making the plugin confused, causing the plugin to make a duplicate of the item config in the items folder. how to fix?

just check the spacing of the previous activators.

if you need more example where a TON of activators are involved, visit ssomar.com for some item configs.

Some may ask, "this follows the spacing rule. but why does it not work?"

In ei's activator format, stuff such as "activator0:" "activator1:" must belong to the group of "activators:"

But for this picture, "activator3" technically belongs to "config\_update:"

but for the plugin, it's not supposed to be that way! Which means, you have to move "activator3" to be at the same group as "activators:".
