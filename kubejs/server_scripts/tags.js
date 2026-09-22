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

  // Create: Interiors temp dye fix
  event.add('c:white_dyes', 'minecraft:white_dye')
  event.add('c:orange_dyes', 'minecraft:orange_dye')
  event.add('c:magenta_dyes', 'minecraft:magenta_dye')
  event.add('c:light_blue_dyes', 'minecraft:light_blue_dye')
  event.add('c:yellow_dyes', 'minecraft:yellow_dye')
  event.add('c:lime_dyes', 'minecraft:lime_dye')
  event.add('c:pink_dyes', 'minecraft:pink_dye')
  event.add('c:gray_dyes', 'minecraft:gray_dye')
  event.add('c:light_gray_dyes', 'minecraft:light_gray_dye')
  event.add('c:cyan_dyes', 'minecraft:cyan_dye')
  event.add('c:purple_dyes', 'minecraft:purple_dye')
  event.add('c:blue_dyes', 'minecraft:blue_dye')
  event.add('c:brown_dyes', 'minecraft:brown_dye')
  event.add('c:green_dyes', 'minecraft:green_dye')
  event.add('c:red_dyes', 'minecraft:red_dye')
  event.add('c:black_dyes', 'minecraft:black_dye')
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


  