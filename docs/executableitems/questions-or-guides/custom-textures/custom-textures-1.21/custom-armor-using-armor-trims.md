# Custom armor (using armor trims)

Hey ! If you have a server on 1.20 with trims, and don't mind changing them to get new custom armors, this is your place !

But.. if you don't want to lose your armor trims AND still want to add custom armors, this is not your place... you should take a look at google/youtube about optifine retexturing ^^

Anyways, for the people who wants it, let's start !

:::warning
THIS METHOD NEEDS TO REMOVE A CURRENT TRIM TO ADD YOUR CUSTOM ARMOR

EACH TRIM YOU REMOVE, ONE CUSTOM ARMOR MORE YOU HAVE
:::

## Video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cfef11fQlhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Create the texture

We have to create the texture for our new armor, we can do this here or using another programs up to you.

\{% embed url="https://minecraft.novaskin.me/resourcepacks#default/assets/minecraft/textures/models/armor" %\}

What you have to create is the custom armor using diamond files, so in this case, this will be the ones used

We can download them clicking on Save, then download, and right click the image to save it

Having something like this

Well, now we have our armor textures, perfect ! Now let's create the texture pack

## Creating the texture pack

I am asumming you already know how texture pack works so I will just make how the path of the stuff should it be

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁trims
                    - 📁models
                        - 📁armor
                            - <Here we will place our images>

```

But.. what the name of the images will be ? ,well, for this part we have to select what trim we are going to replace, you have many trims such as "raiser", "host", "eye", etc, in this case I will change the "coast" one.

So the name of my files would be

"coast": the texture that has the helmet, chestplate and boots

"coast\_leggings": texture that has the leggings

Having something like this

```
📁ExecutableItemsTexturePack
    - 📃pack.mcmeta
    - 📁assets 
        - 📁minecraft
            - 📁textures
                - 📁trims
                    - 📁models
                        - 📁armor
                            - 📷coast.png
                            - 📷coast_leggings.png
```

Finally, lets go into our minecraft and test with the coast trim

## Let's test !

It seems working !

And.. it works 

Perfect ! Now you can do the same with another trims, until you change all the available trims O.O

### Texture pack

\{% file src="../../../..//static/img/texture.zip" %\}
