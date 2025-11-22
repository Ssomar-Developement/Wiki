# Random activators selector

:::warning
ONLY for one type of activator.

Example, you have 3 PLAYER\_ALL\_CLICK activator and you want to activate only one.
:::

* [x] So, first create your different activators ! (3 activator PLAYER\_ALL\_CLICK in my example)
* [x] Then go out the activators editor and return to the item editor.
* [x] Go in the **Variables part**.

![](https://camo.githubusercontent.com/7180706f8b50740d12abaa9cc3b582fcb85154c2dcc1c16c65269cbdaeed26e9/68747470733a2f2f692e696d6775722e636f6d2f4a677874736f712e706e67)

* [x] Create a new variable. name: **randActivator** and with default value: **0**

![](https://camo.githubusercontent.com/9c2355e1bbe1aeee76bec50f0bb209ed5ff165aba59a82a402216978b2ca9443/68747470733a2f2f692e696d6775722e636f6d2f736b32573369482e706e67)

* [x] Okay now that you have have configured your variable, you will need to initialize it. So you need to create a new activator with the same option that the activators created in the step 1. for my example its a PLAYER\_ALL\_CLICK activator.
* [x] In the part of this activator, go in the **Variables modification** part.

![](https://camo.githubusercontent.com/d9116f00f1fde942d98d90f7cd11a5539f56fdd4166b64f5561ecd44657058f9/68747470733a2f2f692e696d6775722e636f6d2f6645516a44655a2e706e67)

* [x] Create a new variable Modification
* [x] Select the variable previously created **randActivator**
* [x] Set to type of modification on SET
* [x] and in modification set the placeholder `%rand:1|X%`but replace X by the amount of the activators that you will created in the random list
* [x] for my example `%rand:1|3%`
* [x] Save
* [x] Okay so now, each time the activator will be activated, the variable **randActivator** will take a value between 1 and 3 (includes).

* [x] Now we will associate 1 = first activator, 2 = run second activator...
* [x] So no for each activators created in the step 1, go in their editor, click on the **conditions** button and **placeholders Conditions** button.

![](https://camo.githubusercontent.com/976052b58ff4a5d03bc96c1001d9d550aec2cccd7abbb2042fd7fb303cc7c498/68747470733a2f2f692e696d6775722e636f6d2f6b4674366d4d412e706e67)

![](https://camo.githubusercontent.com/01f2350ce5846c2704704f0a3be74a21231e8e470fb370f4d54dc5aa98a9277c/68747470733a2f2f692e696d6775722e636f6d2f31766c566739362e706e67)

* [x] Create a new placeholder cdt.
* [x] Type : `PLAYER_NUMBER`
* [x] First part: **%var\_randActivator**_**\_**_**int%**
* [x] Comparator: `EQUALS`
* [x] Second part: X (example with 3 activators, the first must have X replace by 1, the second X replace by 2 ....)
* [x] Don't touch to the others features, if you don't need it
* [x] Then save the condition
* [x] Repeat that obviously for all the other activator created in the step 1

:::danger
**LAST STEP: you will probably need to open the file (.yml) of your item. because the activator that initialize the variable must be runned first. so in the list of the activator it must be the first !**

\
**If its not the case, place it correctly in the first position, save, and reload EI.**
:::

:::tip
FINISH ! I hope you understand now a bit how it works,
:::
