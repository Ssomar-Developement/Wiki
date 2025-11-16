### detailedClick

* Info: Feature that restricts the activator triggers only if the correct click is involved in the event.
  * detailedClick
    * RIGHT: Restricts the activator only work when the even occurred with the right click
    * LEFT: Restricts the activator only work when the even occurred with the left click
    * RIGHT\_OR\_LEFT: Doesn't restrict the type of click for this activator, it will allow right and left click.
* Example: 

```yaml
activators:
  activator0: # Activator ID, you can create as many activators on the activators list
    option: YOUR_ACTIVATOR_WITH_CLICK # replace that with the correct activator name
    detailedClick: LEFT
```