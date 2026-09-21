// ['kubejs:battery_item_id', spurReward]
global.kineticBatteries = new Map([
  ['kubejs:kinetic_battery_reward_1', 2],
  ['kubejs:kinetic_battery_reward_2', 5],
  ['kubejs:kinetic_battery_reward_3', 8]
]);

StartupEvents.registry('item', event => {
  global.kineticBatteries.forEach((value, key) => {
    event.create(key)
    .texture('aeronavalfrontier:item/kinetic_battery_reward')
    .translationKey('item.aeronavalfrontier.kinetic_battery_reward')
    .maxStackSize(16)
    .use((level, player, hand) => true)
    .finishUsing((itemstack, level, entity) => {
      if (entity.player) {
        entity.give(Item.of('create_connected:kinetic_battery', 8))
        entity.give(Item.of('numismatics:spur', value))
      }
      itemstack.shrink(1)
      return itemstack
    })
  })

  event.create('spur_fragment')
    .texture('aeronavalfrontier:item/spur_fragment')
    .translationKey('item.aeronavalfrontier.spur_fragment')

  event.create('elytra_fragment')
    .texture('aeronavalfrontier:item/elytra_fragment')
    .translationKey('item.aeronavalfrontier.elytra_fragment')

  event.create('incomplete_gyroscope', 'create:sequenced_assembly')
    .translationKey('item.aeronavalfrontier.incomplete_gyroscope')
})