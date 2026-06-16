ServerEvents.recipes(event => {
  	// Croptopia Bottles
	event.remove([
		{ output: 'croptopia:water_bottle' },
		{ output: 'croptopia:milk_bottle' }
	])

	// Create Deco
	event.remove([
		{ output: 'createdeco:gold_coin' },
		{ output: 'createdeco:gold_coinstack' }, // used for chunkloader token
		{ output: 'createdeco:netherite_coin' },
		{ output: 'createdeco:brass_coin' },
		{ output: 'createdeco:iron_coin' },
		{ output: 'createdeco:iron_coinstack' }, // used for chunkloader token
		{ output: 'createdeco:copper_coin' },
		{ output: 'createdeco:industrial_iron_coin' },
		{ output: 'createdeco:zinc_coin' },
	])

	// Wires
	event.remove([
		{ output: 'electroenergetics:copper_wire' },
		{ output: 'electroenergetics:electrum_wire' },
		{ output: 'electroenergetics:iron_wire' }
	])

	event.remove([
		{ output: 'electroenergetics:copper_wire' },
		{ output: 'electroenergetics:electrum_wire' },
		{ output: 'electroenergetics:iron_wire' }
	])

	event.remove([
		{ output: 'spartan_weaponry_unofficial:copper_bolt' }
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
		{ input: 'minecraft:water_bucket', not: [{ input: '#c:water_bottles' }, { input: '#cookingforblockheads:water' }] },
		'minecraft:water_bucket',
		Ingredient.of('#c:buckets/water')
	)

	// Flour & Dough
	event.replaceInput(
		{ input: 'croptopia:flour' },
		'croptopia:flour',
		Ingredient.of('create:wheat_flour')
	)

	event.remove([
		{ output: 'croptopia:dough' },
		{ output: 'create:dough' },
		{ input: 'create:dough' }
	])

	event.replaceInput(
		{ input: 'croptopia:dough' },
		'croptopia:dough',
		Ingredient.of('farmersdelight:wheat_dough')
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
