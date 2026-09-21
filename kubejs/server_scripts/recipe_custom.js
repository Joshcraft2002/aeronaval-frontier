ServerEvents.recipes(event => {
	event.shapeless( Item.of('numismatics:spur'), [ '8x kubejs:spur_fragment' ])
	event.shapeless( Item.of('kubejs:spur_fragment', 8), [ 'numismatics:spur' ])

	event.shapeless( Item.of('kubejs:elytra_fragment', 8), [ 'minecraft:elytra' ])
	event.recipes.create.crushing(
		[
			'8x kubejs:elytra_fragment', 
			CreateItem.of('8x kubejs:elytra_fragment', 0.3)
		], 
		'minecraft:elytra')

	event.remove([ { output: 'analogaudio:speaker' } ])
	event.shaped(
		Item.of('minecraft:stone', 3), // arg 1: output
		[
			' W ',
			'WSW', // arg 2: the shape (array of strings)
			'WNW'
		],
		{
			W: '#minecraft:wool',
			S: 'supplementaries:speaker_block',
			N: 'minecraft:note_block'
		}
	)

	event.remove([ { output: 'analogaudio:cassette_tape' } ])
	event.shapeless( Item.of('analogaudio:cassette_tape'), [ '#c:music_discs', 'minecraft:echo_shard' ])

	// Gyroscope
	event.remove([ { output: 'aeroworks:gyroscope' } ])
	const gyroscope_transitional = 'kubejs:incomplete_gyroscope' // Making a constant to store the transitional item makes the code more readable
  	event.recipes.create.sequenced_assembly(
      [
        CreateItem.of('aeroworks:gyroscope', 0.15),
        CreateItem.of('simulated:gyroscopic_mechanism', 0.006),
        CreateItem.of('create:flywheel', 0.001),
        CreateItem.of('minecraft:compass', 0.001),
		CreateItem.of('kubejs:elytra_fragment', 0.002),
        CreateItem.of('aether:enchanted_gravitite', 0.002)
      ],
      'simulated:gimbal_sensor',
      [
		event.recipes.create.deploying(gyroscope_transitional, [gyroscope_transitional, 'create:flywheel']),
        event.recipes.create.filling(gyroscope_transitional, [gyroscope_transitional, Fluid.of('aeronautics:levitite_blend', 500)]),
        event.recipes.create.deploying(gyroscope_transitional, [gyroscope_transitional, 'kubejs:elytra_fragment']),
		event.recipes.create.deploying(gyroscope_transitional, [gyroscope_transitional, 'aether:enchanted_gravitite']),	
		event.recipes.create.deploying(gyroscope_transitional, [gyroscope_transitional, 'kubejs:elytra_fragment']),	
      ]
    )
    .transitionalItem(gyroscope_transitional) // Set the transitional item
    .loops(2) // Set the number of loops

  	// Flour & Dough
	event.replaceInput(
		{ input: 'croptopia:flour' },
		'croptopia:flour',
		Ingredient.of('create:wheat_flour')
	)

	event.replaceInput(
		{ input: 'croptopia:dough' },
		'croptopia:dough',
		Ingredient.of('farmersdelight:wheat_dough')
	)

	event.remove([
		{ output: 'croptopia:dough' },
		{ output: 'create:dough' },
		{ input: 'create:dough' }
    ])
})


