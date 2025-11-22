---
description: >-
  These options are utilized to accomplish specific things to create simple to
  complex blocks
---

import CustomTag from '@site/src/components/CustomTag';
import GeneralActivatorsFeatures from '@site/docs/_partials/general-activators-features.md';
import BlockFeatures from '@site/docs/_partials/block-features.md';
import EntityFeatures from '@site/docs/_partials/entity-features.md';
import TargetPlayerFeatures from '@site/docs/_partials/target-player-features.md';
import TargetEntityFeatures from '@site/docs/_partials/target-entity-features.md';
import TargetBlockFeatures from '@site/docs/_partials/target-block-features.md';
import PlayerFeatures from '@site/docs/_partials/player-features.md';
import ItemFeatures from '@site/docs/_partials/item-features.md';
import CommandFeatures from '@site/docs/_partials/command-features.md';
import DropFeatures from '@site/docs/_partials/drop-features.md';
import EffectFeatures from '@site/docs/_partials/effect-features.md';
import DamageCauseFeatures from '@site/docs/_partials/damagecause-features.md';
import DelayFeatures from '@site/docs/_partials/delay-features.md';
import ClickFeatures from '@site/docs/_partials/click-features.md';
import TypeTargetFeatures from '@site/docs/_partials/typetarget-features.md';


# Activators features

All this features are inside the activator, as reminder the activators allow you to execute your custom actions, it can have conditions, run commands, have cooldown, etc.

Premium features are labeled with the tag:  <CustomTag type="premium" />

## General features of an activator

<GeneralActivatorsFeatures />

## Features for the EE activators

### worldConditions

* Info: You can use this conditions in all type of activators
* [World conditions](/tools-for-all-plugins-score/custom-conditions/world-conditions.md)

### placeholdersConditions

* Info: You can use this conditions in all type of activators
* [PlaceholdersConditions](/tools-for-all-plugins-score/custom-conditions/placeholder-conditions.md)

## Features exclusive depending on type of activator

To make the features more understandable on which activators they work, we created categories, an activator can be in multiple categories :

* \[P\_*] : It means that the main actor of the event/activator is a player
* \[E\_*] : It means that the main actor of the event/activator is an entity
* \[B\_*] : It means that the main actor of the event/activator is a block
* \[*\_TP] : It means that the second actor of the event/activator is a player (we will call it target player)
* \[*\_TE] : It means that the second actor of the event/activator is an entity (we will call it target entity)
* \[*\_TB] : It means that the second actor of the event/activator is a block (we will call it target block)
* \[S\_A] : Specific activators: Other custom features specific to some activators

## For \[P\_*] (Player)

<PlayerFeatures />

## For \[B\_*] (Block)

<BlockFeatures />

## For \[E\_*] (Entity)

<EntityFeatures />

## For \[*\_TP] (Target player)

<TargetPlayerFeatures />

## For \[*\_TE] (Target entity)

<TargetEntityFeatures />

## For \[*\_TB] (Target block)

<TargetBlockFeatures />

## For \[S\_A] (Specific)

<ItemFeatures />
* For:
  * PLAYER_PICKUP_ITEM
  * PLAYER_PICKUP_ARROW
  * PLAYER_DROP_ITEM
  * PLAYER_CONSUME
  * PLAYER_ENCHANT_ITEM

<DamageCauseFeatures />
* For:
  * ENTITY_DAMAGE_BY_BLOCK
  * ENTITY_DAMAGE_BY_ENTITY
  * ENTITY_DAMAGE_BY_PLAYER
  * ENTITY_DEATH
  * PLAYER_DEATH
  * PLAYER_HIT_ENTITY
  * PLAYER_HIT_PLAYER
  * PLAYER_RECEIVE_HIT_BY_ENTITY
  * PLAYER_RECEIVE_HIT_BY_PLAYER
  * PLAYER_RECEIVE_HIT_GLOBAL

<EffectFeatures />
* For:
  * PLAYER_RECEIVE_EFFECT

<CommandFeatures />
* For:
  * PLAYER_WRITE_COMMAND

<DropFeatures />
* For:
  * ENTITY_DEATH
  * ITEMSADDER_PLAYER_BLOCK_BREAK
  * PLAYER_BLOCK_BREAK
  * PLAYER_BRUSH_BLOCK
  * PLAYER_FISH_FISH
  * PLAYER_KILL_ENTITY
  * PLAYER_KILL_PLAYER

<TypeTargetFeatures />
* For
  * PLAYER\_ALL\_CLICK
  * PLAYER\_RIGHT\_CLICK
  * PLAYER\_LEFT\_CLICK

<ClickFeatures />
* For:
  * PLAYER_CLICK_ON_ENTITY
  * PLAYER_CLICK_ON_PLAYER

<DelayFeatures />
* For:
  * LOOP
  * LOOP\_SERVER
