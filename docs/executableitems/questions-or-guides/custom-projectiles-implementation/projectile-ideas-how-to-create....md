# Projectile other tips

### How to remove the projectile after hitting the entity?

Add an activator PROJECTILE\_HIT\_PLAYER and PROJECTILE\_HIT\_ENTITY adding in playerCommands: `minecraft:kill %projectile_uuid%`

