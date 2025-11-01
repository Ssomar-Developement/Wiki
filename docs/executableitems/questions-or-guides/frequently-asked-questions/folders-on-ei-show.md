# Folders on /ei show

<iframe width="560" height="315" src="https://www.youtube.com/embed/h-gkzHYPUmg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Folder management

* The folder management can only be done from the server files, it **can't be done inside game**. It is useful to manage your items in different folders and organize them.

### Create a folder

* If you would like to create folder you have to go to plugins/ExecutableItems/items/\<here> and create a folder with the name you want
* After that, just type /ei reload to reload the plugin inside Minecraft.

:::tip Custom Folder Icons
You can add a custom material icon to your folder using this format:

**Format:** `FolderName[icon-MATERIAL_NAME]`

**Example:** `Weapons[icon-DIAMOND_SWORD]`

This will display a diamond sword icon next to "Weapons" in the `/ei show` menu.
:::

:::warning Special Characters on Some Hosts
**Issue:** Some server hosts (like Minehut) may not allow special characters like brackets `[]` in folder names through their web file manager.

**Solution:** Use SFTP (File Transfer Protocol) instead of the web file manager to create folders with special characters.

**How to use SFTP:**
- [Minehut SFTP Guide](https://support.minehut.com/hc/en-us/articles/27126955782291-How-do-I-use-SFTP-on-my-server)
- Most hosts support SFTP through clients like FileZilla or WinSCP
- SFTP gives direct file system access, bypassing web interface limitations

**OS Compatibility Note:**
- **Windows:** May have issues with certain special characters (`<>:"|?*`)
- **Linux/macOS:** More permissive with special characters
- Brackets `[]` work on most systems if SFTP is used

Credits: @stxrblxzer
:::

### Move items to a folder

* To move items inside a folder you have to create them with /ei create
* Now that we have an item ready, to move it just go to plugins/ExecutableItems/items/\<here> and take and drop an **item yml file inside the folder**
* After that, just type /ei reload to reload the plugin inside Minecraft
