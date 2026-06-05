ServerEvents.recipes(event => {
  // Croptopia Bottles
	event.remove([
		{ output: 'croptopia:water_bottle' },
		{ output: 'croptopia:milk_bottle' }
	])

	//Create Deco
	event.remove([
		{ output: 'createdeco:gold_coin' },
		{ output: 'createdeco:gold_coinstack' }, // used for curiosity token
		{ output: 'createdeco:netherite_coin' },
		{ output: 'createdeco:brass_coin' },
		{ output: 'createdeco:iron_coin' },
		{ output: 'createdeco:copper_coin' },
		{ output: 'createdeco:industrial_iron_coin' },
		{ output: 'createdeco:zinc_coin' },
	])

	event.shapeless(
		Item.of('croptopia:water_bottle', 16),
			[
				'minecraft:water_bucket'
			]
	)

	event.shapeless(
		Item.of('croptopia:milk_bottle', 16),
			[
				'minecraft:milk_bucket'
			]
	)

	event.replaceInput(
		{ input: 'minecraft:water_bucket' },
		'minecraft:water_bucket',
		Ingredient.of('#c:buckets/water')
	)

	event.replaceInput(
		{ input: '#c:milks', not: [{ output: 'croptopia:butter' }, { output: 'croptopia:cheese' }] },
		'#c:milks',
		Ingredient.of('#c:drinks/milk')
	)

	// Bounty Board allow any wood type
	event.replaceInput(
		{ output: 'bountiful:bountyboard' },
		'minecraft:oak_log',
		Ingredient.of('#minecraft:logs')
	)

	event.replaceInput(
		{ output: 'bountiful:bountyboard' },
		'minecraft:oak_planks',
		Ingredient.of('#minecraft:planks')
	)

	event.replaceInput(
		{ output: 'bountiful:bountyboard' },
		'minecraft:diamond',
		Ingredient.of('numismatics:cog')
	)
})

ServerEvents.tags('item', event => {
  // Croptopia milk
  event.add('c:drinks/milk', 'croptopia:soy_milk')
  event.add('c:drinks/milk', 'croptopia:milk_bottle')
  
  // Spartan Scythes as Quark Harvesters
  event.add('minecraft:hoes', '#spartan_weaponry_unofficial:scythe')
  event.add('quark:big_harvesting_hoes', 'spartan_weaponry_unofficial:diamond_scythe')
  event.add('quark:big_harvesting_hoes', 'spartan_weaponry_unofficial:netherite_scythe')

  // Track Mount Fix
  event.add('minecraft:mineable/axe', 'tracks:track_mount')
  event.add('minecraft:mineable/pickaxe', 'tracks:track_mount')
})