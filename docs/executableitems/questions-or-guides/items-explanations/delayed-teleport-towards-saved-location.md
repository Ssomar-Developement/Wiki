---
description: >-
  This should give you basic understanding on how to utilize variables for good
  combinations
---

# Delayed Teleport Towards Saved Location

## Tutorial:

Ok for starters, we will create an item that once right clicked, it will teleport as back to that very location.

### 1) Create an ei item

![](https://imgur.com/DqSxIbx.png)

This is important as usual. Because how would you make the item without the item itself?

### 2) Go to the variables editor

![](https://imgur.com/iRfOaWY.png)

### 3) Create a new variable

![](https://imgur.com/yknAsG7.png)

### 4) Set up the variable

![](https://imgur.com/SPY6bT7.png)

For this part, we will set the variable name's to "x" to make things simple

### 5) Set the variable type to STRING

![](https://imgur.com/naNmaen.png)

### 6) Don't mind too much about the value

![](https://imgur.com/rhTVie0.png)

We will be dealing with the value later.

### 7) Save the variable. Do not forget or else you might have to go back to the top

![](https://imgur.com/EgYwbAq.png)

### 8) Go back to the main item editor by pressing the back button

![](https://imgur.com/c0PZVjl.png)

![](https://imgur.com/IOxGLSP.png)

### 9) Go to the activator editor

![](https://imgur.com/dcsImOz.png)

### 10) Create a new activator

![](https://imgur.com/Liulvko.png)

### 11) Create a PLAYER\_RIGHT\_CLICK\_ACTIVATOR

![](https://imgur.com/U5QgSwz.png)

### 12) Go to the variables editor of the activator

![](https://imgur.com/qjuzvez.png)

Ok so here's the explanation. First, we will create a variable update which will save our coordinates. Further explanation ahead.

### 13) Click this icon 

![](https://imgur.com/Wjym249.png)

### 14) Click this icon to go to the chat editor and type the name of the variable we created at step 4)

![](https://imgur.com/OPy88ld.png)

You see, the default value for this is "var" and we are editing a variable under the name of "x". Back then in pre 5.0, we get to just click the icon to scroll through the list of variables under this item but now, we have to manually type it.

### 15) Set the type to "SET"

![](https://imgur.com/OoUQPPK.png)

### 16) Type "%x% %y% %z%" in this icon

![](https://imgur.com/Ux6L15l.png)

In the string update option, the placeholders in it is parsed before it gets displayed or used somewhere else.

### 17) Press the save button

![](https://imgur.com/vSAlHjj.png)

### 18) Go back to the activator editor and save

![](https://imgur.com/Fa3QsOX.png)

### 19) Create a 2nd activator

![](https://imgur.com/Liulvko.png)

### 20) Create another activator with the same kind

![](https://imgur.com/U5QgSwz.png)

You might be curious, why the heck did we create another right click activator? Because the first activator's task is to save our coordinates via variable update. 

You might say, "Can't we just do everything in one activator?" Nope. Commands run first then the variables. Try doing it in one activator and it will not produce the wanted results. 

### 21) Go to the commands editor

![](https://imgur.com/B2NzuHH.png)

### 22) Add the following commands in the chat editor

![](https://imgur.com/BhJhESg.png)

Ok. Here's the explanation. \
`DELAY 30` will delay the command for 30 seconds. When it comes to variables, the activator order matters A LOT. Reversing the order of the 2 activators will break the item. 

As said in the placeholders page, placeholders from the plugin will be parsed immediately meaning that any changes that are bound to happen will not affect the values. With the variable update in step 16, %var\_x% will transform into the xyz coordinates of where you used the item so after 30 seconds, you will be teleported back to the exact location properly (unless you changed worlds but that's not the goal here.)

After typing the commands, of course press the exit button.

### 23) Save the item and try it out

![](https://imgur.com/Ib09XI6.png)

Save the item and try it out!
