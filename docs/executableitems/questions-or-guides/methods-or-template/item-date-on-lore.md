# Item date on lore

Hey ! If you would like your item to have on the lore the date received here is the correct place !!

* First of all you need PlaceholderAPI and Localtime expansion
  * [Placeholders#localtime](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#localtime)
* Then the basic placeholder would be 
  * %localtime\_time%
* If would like to change the format check the docs of LocalTime format

* Then, once you got the format you want (or just use the basic one) add it on the lore of your item
* And that's it ! Now you have the item on the lore of the item

### HEY ! THE DATE UPDATES AND ISN'T THE SAME AS THE RECEIVED ITEM DATE

* Hey hey ! Chill ! If you want the received date, that would be a date that **won't change** just use the same thing we just did but with variables, so:
  * Create a variable type STRING, the id you want, in this case "thisismydate"
  * Then set the value of "thisismydate" to %localtime\_time%
  * And add the value of the variable on the lore as %var\_thisismydate%
  * And that's it, now you have the same we did on the top of the page but this time the date **won't change**
