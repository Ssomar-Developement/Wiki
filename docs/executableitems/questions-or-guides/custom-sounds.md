# Custom sounds

:::info
This method add new sounds with replacing any sound.
:::

This is related to texture packs, but in difference to "Custom textures" this can be applied by all players, let's do it !

First let's create our new folder where we will store our sounds

*   As we saw in the previous tutorials, our first look into our texture pack should look like this:

    ```
    TEXTUREPACK
        - assets
        - pack.mcmeta
        - pack.png
    ```
*   Inside assets, we have the folder "minecraft", let's add our own folder, I will call it "customsounds", it should look like this

    ```
    TEXTURE PACK
        - assets
            - minecraft
            - customsounds
        - pack.mcmeta
        - pack.png
    ```
*   And let's add our json where we will manage our sounds

    ```
    TEXTURE PACK
        - assets
            - minecraft
            - customsounds
                - sounds.json
        - pack.mcmeta
        - pack.png
    ```
*   And inside our sounds.json we will add a format like this

    ```
    {
      "thisisthenameofmysoundnumberone": {
        "subtitle": "hello",
        "sounds": [
          "customsounds:| "
        ]
      },
      "thisisthenameofmysoundnumbertwo": {
        "sounds": [
          "customsounds:| "
        ]
      }
    }
    ```
* "customsounds:\| " means it will go on customsounds/sounds/\| 
* So, it would like this:
  *   ```
      TEXTURE PACK
      ```

      ```
          - assets
      ```

      ```
              - minecraft
      ```

      ```
              - customsounds
      ```

      ```
                  - sounds.json
                  - sounds
                              - | .ogg
                              - | .ogg
      ```

      ```
          - pack.mcmeta
      ```

      ```
          - pack.png
      ```

And that's it, put on your texture pack and you will be able to play the sound running:

