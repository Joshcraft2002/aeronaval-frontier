ItemEvents.modifyTooltips(event => {
  event.add('createdeco:gold_coin', 
    Text.translate('item.createdeco.gold_coin.tooltip').gray())
  event.add('createdeco:iron_coin', 
    Text.translate('item.createdeco.iron_coin.tooltip').gray())
  
  event.add('aeronautics_delivery_quests:delivery_quests_table', 
    Text.translate('block.aeronautics_delivery_quests.delivery_quests_table.tooltip').gray())
  event.add('bountiful:bountyboard', 
    Text.translate('block.bountiful.bountyboard.tooltip').gray())
  event.add('dailyshop:daily_shop', 
    Text.translate('block.dailyshop.daily_shop.tooltip').gray())

  event.add('minecraft:elytra', 
    Text.translate('item.minecraft.elytra.tooltip').gray())
  event.add('alexsmobs:tarantula_hawk_elytra', 
    Text.translate('item.alexsmobs.tarantula_hawk_elytra.tooltip').gray())

  event.add('create:dough', 
    Text.translate('item.create.dough.tooltip').gray())

  global.kineticBatteries.forEach((value, key) => {
    event.add(key, Text.translate('item.aeronavalfrontier.kinetic_battery_reward.tooltip.value', value).white())
    event.add(key, Text.translate('item.aeronavalfrontier.kinetic_battery_reward.tooltip.open').gold())
    event.add(key, Text.translate('item.aeronavalfrontier.kinetic_battery_reward.tooltip.desc').gray())
  })

  event.add('kubejs:spur_fragment', 
    Text.translate('item.numismatics.coin.tooltip.value.basic', '1/8').white())
})