
ServerEvents.tags('item', event => {
  // Croptopia milk
  event.add('c:drinks/milk', 'croptopia:soy_milk')
  event.add('c:drinks/milk', 'croptopia:milk_bottle')

  // Water
  event.add('cookingforblockheads:water', 'aether:skyroot_water_bucket')
  event.add('c:water_bottles', 'minecraft:water_bottle')
  event.add('c:water_bottles', 'aether:skyroot_water_bucket')
  
  // Spartan Scythes as Quark Harvesters
  event.add('minecraft:hoes', '#spartan_weaponry_unofficial:scythe')
  event.add('quark:big_harvesting_hoes', 'spartan_weaponry_unofficial:diamond_scythe')
  event.add('quark:big_harvesting_hoes', 'spartan_weaponry_unofficial:netherite_scythe')

  // Track Mount Fix
  event.add('minecraft:mineable/axe', 'tracks:track_mount')
  event.add('minecraft:mineable/pickaxe', 'tracks:track_mount')
})