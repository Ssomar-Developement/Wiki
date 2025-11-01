# 3D Models

First of all, this page needs PRE-KNOWLEDGE related to how to create a texture pack, basic stuff won't be explained here. You can read them in the previous tutorials related to texture pack.

Here you will learn how to create the 3d model, and using the methods already explained, merge it with your current texture pack.

## This tutorial is based on this video

<iframe width="560" height="315" src="https://www.youtube.com/embed/4DiwHcW48Qg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Application

To create the model you have many ways because there are many applications, the one that we are going to use today and I suggest you to use it is Blockbench -> [https://www.blockbench.net](https://www.blockbench.net)\
\
You can either use the webpage online or download the app, anyways, take a look at it and check their controls.

### Let's create the MODEL

* First, go to FILE -> NEW -> JAVA Block/Item

* Then, this gui will be displayed where the important things are:
  * **File Name**: Basically the project name, it can be whatever you want
  * The other options aren't necessary unless you already have some experience in this app, so, it won't be explained for now. You can read about them in their wiki though.

* Once the project is created, you have your work area, and the materials to work with are CUBES.
* To add a cube press on 1 and to add a folder press on 2.

* Once a block is added you can move it, resize it or rotate it, each action with specific tools in the toolbar on the top

* And, you can add as many cubes as you want, move them wherever you want rotate it as you want (actually not, the limit is rotation from numbers related to 22.5, but anyways, that part is done automatically by the app 10/10) and resize it until the max (that is 3*3*3 blocks)
* With that options, create lot of cubes until you get your final shape of the item you want. In this case mine finished is this one:

### Let's create the TEXTURE

Once the MODEL is done, it looks empty, with no texture, so let's create one

* First you have to select EVERY cube on your project

* Then go to the left side and click the button that says "Create texture"

* This GUI will be displayed where the important things are:
  * Name: Name of the texture, it MUST BE LOWERCASE
  * Pixel density: In few words, how detailed the texture will be, imagine like minecraft is 16x16 pixels, and real life is 4096x4096 pixels, real life looks lot of times more detailed than minecraft. (doesn't mean better)
  * And the rest of things just leave it as default or as it shows in the photo, they aren't necessary for now, but, the same as before, if want to know about it just read their wiki.

* Now the texture is created, so let's go the PAINT zone on Blockbench

* A new GUI will be displayed, and the same as EDIT zone, you have tools

* And the colors palette

* This is your part, where you get picasso vibes and start painting epic things.
* Once you are done, instead of looking empty like at the first, it will have color and will look as you want.

### Let's create the DISPLAY

Display is basically the way that it will look inside the game, here you edit lot of ways such as:

1. 3D view Right Hand
2. 3D view Left Hand
3. First person view Right Hand
4. First person view Left Hand
5. Item Frame
6. Head
7. Dropped item
8. Inventory

* To access there just go to the DISPLAY ZONE of Blockbench

*   And just make your edits, the controls are the same as the one from edit

    * Move
    * Scale
    * Rotate

### Let's get the files necessary to merge them into our texture pack

Now we have the model, texture and display ready, the only thing left is get the files to merge them into our texture pack

#### Item file.json

Export the model going FILE -> EXPORT -> Export Block/Item Model

Then the APP will ask you where to save it, do it in a safe place, we are going to use it.

#### PNG Texture .png

To save the texture just go to the left side and click on the symbol marked in the image.

Then the APP will ask you where to save it, do it in a safe place, we are going to use it.

### Let's merge the files into our texture pack

#### CustomModelData

The JSON will be selected from the custom model data line, since my Blockbench model was called Sword.json I will change it to 1.json (just changed the name), in the line of custom model data the path will be the folder path and the name will be 1 (since I changed it to that).

Example of the complete diamond_sword.json file with custom model data:

```json
{
  "parent": "minecraft:item/handheld",
  "textures": {
    "layer0": "minecraft:item/diamond_sword"
  },
  "overrides": [
    {
      "predicate": {
        "custom_model_data": 1
      },
      "model": "item/diamond_sword/1"
    }
  ]
}
```

In this example:
- `custom_model_data: 1` - The custom model data value you'll set in ExecutableItems
- `model: "item/diamond_sword/1"` - Path to your custom 3D model JSON (the file you exported from Blockbench and renamed to 1.json)

#### JSON file texture path

* You have to make sure the JSON downloaded from Blockbench once it is added into your texturepack it is using the correct path of texture, so open it, check the layer0, delete the old path and add the new one.

Then save everything and test, everything should work fine !!

:::info
If have any question, something doesn't work as intended or have a suggestion don't mind asking it in the support channel ^^ See you ! 🥳🥳🥳
:::

