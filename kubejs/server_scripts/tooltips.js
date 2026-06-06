ItemEvents.modifyTooltips(event => {
  event.add('createdeco:gold_coin', 
    Text.translate('item.aeronavalfrontier.curiosity_token.tooltip').gray())
  
  event.add('aeronautics_delivery_quests:delivery_quests_table', 
    Text.translate('block.aeronautics_delivery_quests.delivery_quests_table.tooltip').gray())
  event.add('bountiful:bountyboard', 
    Text.translate('block.bountiful.bountyboard.tooltip').gray())
  event.add('dailyshop:daily_shop', 
    Text.translate('block.dailyshop.daily_shop.tooltip').gray())
})