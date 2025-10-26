# General items

:::warning
**This tutorial DOESNT WORK for ARMOR RETEXTURING.** In case you want it, use optifine retexturing (that isn't explained here, search on google/youtube)
:::

:::danger
****FILES IN YOUR TEXTURE PACK MUST BE AT ALL LOWERCASE OR THERE WILL BE ISSUES SUCH AS TEXTURES NOT LOADING****
:::

:::info
Since some people have asked, we suggest you to use ****Notepad++**** to edit the files, ****NONE OF THE FILES ARE .txt****, EVERY FILE HAS THEIR OWN TYPE OF FILE, so use a program that allows you to save your texts as specific file type.

If you don't know how to save specific file types, you can see how its done in the video tutorial.
:::

This page will guide you how to add new textures to the game (without modifying the actual ones) from the start making the item, the texture pack, linking everything, until your EI Item has the texture inside the game, so let's begin ! 😎

First of all tell you that all this tutorial is based on the next video:

\{% embed url="https://youtu.be/y-t1YMslFLM" %\}

Here you can learn more deeply about the texture pack, how it works, and if you didn't get at all this tutorial, check the video, its made to understand everything. 🥳😈

### Setting up the item

* Well, first of all let's create the item we want to have the custom texture, use:
  * `/ei create <id>`
* I'll set up just some visual things, such as the name and the lore.

![](<../../../../.gitbook/assets/image (412).png>)

### Let's create the textures

* Ok, so the item is ready (you could add activators, mechanics, whatever you want to that item, in this case it will be simple, the main part is the textures.)
* Now the textures.. they don't appear from nothing, you have to do them.. how? You'll need a photo editor, such as: Photoshop, Paint 3D, Paint.net, Paint, etc. The download part is from your side, so use the one you want, in this case, this will be made using Paint.net
  * The image needs to be:
    * 16x16 pixels (or any power of 2, like 16x16 - 32x32 - 64x64 - etc)
    * PNG

Once you have it, we are ready to create the texture pack

![Texture of the pickaxe (I couldn't zoom more 😫)](<../../../../.gitbook/assets/image (116).png>)

### Now the Texture Pack

* Well, let's part from the beggining, create a folder, let's call it "ExecutableItemsTexturePack"

```
📁ExecutableItemsTexturePack
```

* Then add another folder inside it called "assets"

```
📁ExecutableItemsTexturePack
    - 📁assets
```

* Besides that folder we also need to add a custom text here, it will be called "pack.mcmeta" (it need to be MCMETA type) and will have the next code:

```yaml
{
  "pack": {
    "pack_format": 8,
    "description": "§eExecutableItems texture pack"
  }
}
```

:::info
The pack\_format means the version of the Minecraft it will have, 8 means 1.18, 7 means 1.17, 6 -> 1.16, and so on. \
\
More info -> [https://minecraft.fandom.com/wiki/Pack\_format](https://minecraft.fandom.com/wiki/Pack_format)
:::

So checking what we have, should be this:

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta ✅
    - 📁assets 
```

* To don't tell EVERY folder that you have to create I'll leave the format right here, create all the folders.

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁item
                    - 📁custom_textures
            - 📁models
                - 📁item
```

* So, in the folder of 📁custo&#x6D;_\__&#x74;extures we will save all the custom textures that we have, in this case, the pickaxe photo we made before. (the file will be -> "pickaxeimage.png")

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁item
                    - 📁custom_textures
                        - 📷pickaxeimage.png
            - 📁models
                - 📁item
```

* Now, inside the models/item we have to create one folder and one file.yml for each item, in this case, I will edit the diamond\_pickaxe, so I will create them

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁item
                    - 📁custom_textures
                        - 📷pickaxeimage.png
            - 📁models
                - 📁item
                    - 📁diamond_pickaxe
                    - 📃diamond_pickaxe.json
```

* The name of "diamond\_pickaxe" is because of that is the nbttag inside the minecraft

![minecraft:diamond\_pickaxe](<../../../../.gitbook/assets/image (185).png>)

:::info
The name of the json is the ID ON MINECRAFT

It is ****NOT**** the name of the item\
It is ****NOT**** the name of the texture\
It is ****NOT**** the name of your minecraft player

It is the ID OF THE ITEM INSIDE MINECRAFT. 

You can see the ID enabling Advanced Item Tooltips (press f3+h)
:::

* Inside diamond\_pickaxe.json we will add this code:

```json
{
	"parent": "minecraft:item/generated",
	"textures": {
		"layer0": "minecraft:item/diamond_pickaxe"
	},
  
	"overrides": [
		{"predicate": {"custom_model_data":1}, "model": "item/diamond_pickaxe/1"}
    ]
}
```

:::info
**JUST IN CASE the item doesn't look good in your hand when holding (holding it in a weird way), change instead of "generated" -> "handheld"**
:::

* If you want to do it with another item, just change the file name, then the layer0, and the predicate.
* And if you want to add more than one custom model data, just add a "," and add another line, for example:

```yaml
{"predicate": {"custom_model_data":1}, "model": "item/diamond_pickaxe/1"},
{"predicate": {"custom_model_data":2}, "model": "item/diamond_pickaxe/2"}
```

Where it says "model" : "item/diamond\_pickaxe/2" its calling the folder created before "📁diamond\_pickaxe", inside it we will add as many \<number>.json as custom model data we set in the file above. In this case I am just setting one custom model data so it will have 1 file called "1.json", if they were two custom model data they will be two files called "1.json" and "2.json"

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁item
                    - 📁custom_textures
                        - 📷pickaxeimage.png
            - 📁models
                - 📁item
                    - 📁diamond_pickaxe
                        - 📃1.json
                    - 📃diamond_pickaxe.json ✅
```

* Inside this 1.json we will add this:

```json
{
	"parent": "item/handheld",
	"textures": {
	  "layer0": "item/custom_textures/pickaxeimage"
	}
}
```

Where the "layer0" part is the folder where is the customTexture, in this case, assets/minecraft/textures/**item/custom\_textures/\<nameoftexture>** (In this case pickaxeimage, remember)

:::info
**PLEASE DOUBLE CHECK THE PATH OF YOUR TEXTURE, MOST OF THE ERRORS ARE BECAUSE PEOPLE SET THE layer0 IN A PATH THAT DOESN'T EXIST, CHECK LITERALLY THE TEXT ABOVE TO KNOW HOW THE PATH WORKS,** ********THIS GOES IN THE TEXTURE FOLDER INSIDE ASSETS******.**
:::

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁item
                    - 📁custom_textures
                        - 📷pickaxeimage.png
            - 📁models
                - 📁item
                    - 📁diamond_pickaxe
                        - 📃1.json ✅
                    - 📃diamond_pickaxe.json ✅
```

And that would be all, now grab the pack.mcmeta and the assets folder and create a .zip using **Winrar**

:::info
If you can't use winrar (as mac users) just create a new folder and drag everything there, that folder will be your ".zip file", then add it to .minecraft/resourcepacks/\<here> and you will be able to use it for local testing. (for server purposes like uploading it, you'd need to check the tutorial about uploading texture pack)
:::

![](<../../../../.gitbook/assets/image (244).png>)

![Remember to change it to .ZIP](<../../../../.gitbook/assets/image (158).png>)

* And now let's put it into minecraft (go to resourcepacks and leave it there)

### Linking the EI with textures

* Now it is supposed that it is working, so, we are going to edit our item

![](<../../../../.gitbook/assets/image (163).png>)

* And in the customModelData config we are going to set it to "1" (In the files we set it to 1)

![](<../../../../.gitbook/assets/image (61).png>)

* And kaboom !! 💥💥, now the item will have the texture we set before

![](<../../../../.gitbook/assets/image (364).png>)

![](<../../../../.gitbook/assets/image (392).png>)

And that would be all !! If have any question or feel this tutorial needs to explain something better, just tell us in the Discord of EI !! ^^

I hope you understood everything, nice day ! 😀😀

\==========================================

Since a lot of people don't follow the steps correctly, here is the file for you to check if you everything right

\{% file src="../../../../.gitbook/assets/ExecutableItemsTexturePackExample.zip" %\}
