ServerEvents.tags('item', event => {
  event.remove('c:foods/dough/wheat', 'create:dough')
  event.remove('c:foods/dough', 'create:dough')

  event.add('croptopia:pork_replacements', 'farmersdelight:bacon')

  event.add('c:biodiesel', 'createaddition:bioethanol_bucket')

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

ServerEvents.tags('block', event => {
  // Simulated/Sable weightss
  const simulated_non_movable = [
    "molten_vents:dormant_molten_asurine",
    "molten_vents:active_molten_asurine",
    "molten_vents:dormant_molten_veridium",
    "molten_vents:active_molten_veridium",
    "molten_vents:dormant_molten_crimsite",
    "molten_vents:active_molten_crimsite",
    "molten_vents:dormant_molten_ochrum",
    "molten_vents:active_molten_ochrum",
    "molten_vents:dormant_molten_scorchia",
    "molten_vents:active_molten_scorchia",
    "molten_vents:dormant_molten_scoria",
    "molten_vents:active_molten_scoria"
  ]

  const sable_super_heavy = [
    "createdieselgenerators:huge_diesel_engine"
  ]

  simulated_non_movable.forEach(block => {
    event.add('simulated:non_movable', block)
  })

  sable_super_heavy.forEach(block => {
    event.add('sable:super_heavy', block)
  })
})

ServerEvents.tags('fluid', event => {
  // Only one "biofuel"
  event.add('c:biodiesel', 'createaddition:bioethanol')
  event.add('c:biodiesel', 'createaddition:flowing_bioethanol')
  event.add('c:biodiesel', 'createdieselgenerators:biodiesel')
  event.add('c:biodiesel', 'createdieselgenerators:flowing_biodiesel')
})


  