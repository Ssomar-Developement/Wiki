# Custom durability

* This tutorial will show you how to make custom durability armor/weapon/etc

### Creating the item

* First of all let's create the item typing `/ei create <id>` (example1 in this case)

![](<../../../../.gitbook/assets/image (218).png>)

* For this example the item will be a diamond\_chestplate so let's change the material into it 🧐

![](<../../../../.gitbook/assets/image (227).png>)

### Setting the durability

* To set the durability we will use the **usage** of the item, so the amount of usage will be the durability of the item, in this case the chestplate will have 5000 durability.

![](<../../../../.gitbook/assets/image (366).png>)

:::info
We are using this because when the usage reaches 0 the item will disappear (broke).
:::

* Because of custom durability we have to set the item unbreakable by vanilla way

![](<../../../../.gitbook/assets/image (217).png>)

### Modifying the durability

* Let's create an activator PLAYER\_RECEIVE\_HIT\_GLOBAL

![](<../../../../.gitbook/assets/image (216).png>)

* And on usageModification set -1

![](<../../../../.gitbook/assets/image (220).png>)

* And set the correct detailedSlots (in this case it is a diamond\_chestplate -> chest)

![](<../../../../.gitbook/assets/image (169).png>)

:::info
Don't forget to remove the mainhand slot (stick)
:::

* And that would be all ! The idea of the item is when hit -> the usage will be subtracted with -1, so the item after 5000 hits will "break" 😎

:::info
Any question or suggestion you can ask on Discord ! 👻
:::

