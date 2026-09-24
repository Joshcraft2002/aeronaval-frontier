ServerEvents.recipes(event => {
	event.shapeless( Item.of('numismatics:spur'), [ '8x kubejs:spur_fragment' ])
	event.shapeless( Item.of('kubejs:spur_fragment', 8), [ 'numismatics:spur' ])

	event.shapeless( Item.of('kubejs:elytra_fragment', 3), [ 'minecraft:elytra' ])
	event.recipes.create.crushing(
		[
			'3x kubejs:elytra_fragment', 
			CreateItem.of('3x kubejs:elytra_fragment', 0.3)
		], 
		'minecraft:elytra')

	event.remove([ { output: 'createdieselgenerators:large_diesel_engine' } ])
	event.shaped(
		'createdieselgenerators:large_diesel_engine',
		[
			' AR',
			'SES',
			' IR'
		],
		{
			E: 'createdieselgenerators:diesel_engine',
			R: 'simulatedcoasters:rivet',
			I: 'createdeco:industrial_iron_ingot',
			A: 'create:andesite_alloy',
			S: 'create:brass_sheet'
		}
	)

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

  	// Croptopia Bottles
	event.remove([
		{ output: 'croptopia:water_bottle' },
		{ output: 'croptopia:milk_bottle' }
	])
	event.shapeless( Item.of('croptopia:water_bottle', 16), [ 'minecraft:water_bucket' ] )
	event.shapeless( Item.of('croptopia:milk_bottle', 16), [ 'minecraft:milk_bucket' ] )

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


