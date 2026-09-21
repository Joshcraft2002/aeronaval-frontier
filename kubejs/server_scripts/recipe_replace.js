ServerEvents.recipes(event => {
    event.replaceInput(
		{ input: 'minecraft:water_bucket', not: [{ input: '#c:water_bottles' }, { input: '#cookingforblockheads:water' }] },
		'minecraft:water_bucket',
		Ingredient.of('#c:buckets/water')
	)

	event.replaceInput(
		{ input: '#c:milks', not: [{ output: 'croptopia:butter' }, { output: 'croptopia:cheese' }] },
		'#c:milks',
		Ingredient.of('#c:drinks/milk')
	)

	event.replaceInput(
		{ output: 'analogaudio:radio' },
		'minecraft:note_block',
		Ingredient.of('minecraft:jukebox')
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
