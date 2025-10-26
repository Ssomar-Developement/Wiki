# Deal % of entity HP

* To deal % of entity HP you first need to get the entity HP
  * %entity\_health%
* Now to get a percentage of that health you have to multiply its number by a number between 1 and 0, where 1 is 100% of the entity health and 0 0% of the entity health. For example:
  * Let's say the entity health is 100 life
    * `%math_(%entity_health%)*0.05%`
      * This will get 100*0.05 => 5. That means, dealing 5 of damage
    * `%math_(%entity_health%)*0.3%` 
      * This will get 100*0.3 => 30. That means, dealing 30 of damage
  * If the entity health is 50 life
    * `%math_(%entity_health%)*0.05%`
      * This will get 50*0.05 => 2.5. That means, dealing 2.5 of damage
    * `%math_(%entity_health%)*0.3%` 
      * This will get 50*0.3 => 15. That means, dealing 15of damage

:::info
As you can see the damage changes depending on the entity health, what is normal, but if you would like to apply damage corresponding a certain % of the MAX hp, just use **%entity\_max**_**\_**_**health%**
:::

* That's it, just use math placeholder and combine it with entity health, use this placeholder on DAMAGE command, like:
  * **`DAMAGE %math_(%entity_health%)*0.05%`**

