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

	// Misc
	event.remove([
		{ output: 'spartan_weaponry_unofficial:copper_bolt' },
		{ output: 'aeronautics_utility_objects:damping_stress_bearing' },
		{ output: 'createdieselgenerators:biodiesel' },
		{ output: 'createdieselgenerators:large_diesel_engine' },
	])
})
