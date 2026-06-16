const decoCoins = [
    'createdeco:gold_coinstack',
    'createdeco:netherite_coin',
    'createdeco:netherite_coinstack',
    'createdeco:brass_coin',
    'createdeco:brass_coinstack',
    'createdeco:iron_coinstack',
    'createdeco:copper_coin',
    'createdeco:copper_coinstack',
    'createdeco:industrial_iron_coin',
    'createdeco:industrial_iron_coinstack',
    'createdeco:zinc_coin',
    'createdeco:zinc_coinstack'
];

const wires = [
    'electroenergetics:copper_wire',
    'electroenergetics:electrum_wire',
    'electroenergetics:iron_wire'
]

const spartanWeaponryUncraftableMaterials = [
    "tin",
    "silver",
    "lead",
    "nickel",
    "invar",
    "constantan",
    "platinum",
    "aluminum"
]

decoCoins.forEach(coin => {
    RecipeViewerEvents.removeEntries('item', event => {
        event.remove(coin)
    })
})

wires.forEach(wire => {
    RecipeViewerEvents.removeEntries('item', event => {
        event.remove(wire)
    })
})

spartanWeaponryUncraftableMaterials.forEach(material => {
    RecipeViewerEvents.removeEntries('item', event => {
        event.remove(`spartan_weaponry_unofficial:${material}_dagger`)
        event.remove(`spartan_weaponry_unofficial:${material}_parrying_dagger`)
        event.remove(`spartan_weaponry_unofficial:${material}_longsword`)
        event.remove(`spartan_weaponry_unofficial:${material}_katana`)
        event.remove(`spartan_weaponry_unofficial:${material}_saber`)
        event.remove(`spartan_weaponry_unofficial:${material}_rapier`)
        event.remove(`spartan_weaponry_unofficial:${material}_greatsword`)
        event.remove(`spartan_weaponry_unofficial:${material}_battle_hammer`)
        event.remove(`spartan_weaponry_unofficial:${material}_warhammer`)
        event.remove(`spartan_weaponry_unofficial:${material}_spear`)
        event.remove(`spartan_weaponry_unofficial:${material}_halberd`)
        event.remove(`spartan_weaponry_unofficial:${material}_pike`)
        event.remove(`spartan_weaponry_unofficial:${material}_lance`)
        event.remove(`spartan_weaponry_unofficial:longbow_${material}_strengthened`)
        event.remove(`spartan_weaponry_unofficial:heavy_crossbow_${material}_strengthened`)
        event.remove(`spartan_weaponry_unofficial:throwing_knife_${material}`)
        event.remove(`spartan_weaponry_unofficial:tomahawk_${material}`)
        event.remove(`spartan_weaponry_unofficial:javelin_${material}`)
        event.remove(`spartan_weaponry_unofficial:boomerang_${material}`)
        event.remove(`spartan_weaponry_unofficial:${material}_battleaxe`)
        event.remove(`spartan_weaponry_unofficial:${material}_flanged_mace`)
        event.remove(`spartan_weaponry_unofficial:${material}_glaive`)
        event.remove(`spartan_weaponry_unofficial:${material}_quarterstaff`)
        event.remove(`spartan_weaponry_unofficial:${material}_scythe`)
    })
})

RecipeViewerEvents.removeEntries('item', event => {
        event.remove('spartan_weaponry_unofficial:grease_ball')
        event.remove('spartan_weaponry_unofficial:explosive_charge')
        event.remove('spartan_weaponry_unofficial:dynamite')
        event.remove('spartan_weaponry_unofficial:explosive_arrow')

        event.remove('spartan_weaponry_unofficial:wooden_arrow')
        event.remove('spartan_weaponry_unofficial:copper_arrow')
        event.remove('spartan_weaponry_unofficial:iron_arrow')
        event.remove('spartan_weaponry_unofficial:diamond_arrow')
        event.remove('spartan_weaponry_unofficial:netherite_arrow')

        event.remove('spartan_weaponry_unofficial:tipped_wooden_arrow')
        event.remove('spartan_weaponry_unofficial:tipped_copper_arrow')
        event.remove('spartan_weaponry_unofficial:tipped_iron_arrow')
        event.remove('spartan_weaponry_unofficial:tipped_diamond_arrow')
        event.remove('spartan_weaponry_unofficial:tipped_netherite_arrow')

        event.remove('spartan_weaponry_unofficial:copper_bolt')
        event.remove('spartan_weaponry_unofficial:diamond_bolt')
        event.remove('spartan_weaponry_unofficial:netherite_bolt')

        event.remove('spartan_weaponry_unofficial:tipped_copper_bolt')
        event.remove('spartan_weaponry_unofficial:tipped_diamond_bolt')
        event.remove('spartan_weaponry_unofficial:tipped_netherite_bolt')
    })

    RecipeViewerEvents.removeEntries('fluid', event => {
        event.remove('electroenergetics:plant_oil')
    })

RecipeViewerEvents.removeEntries('item', event => {
        event.remove('croptopia:flour')
        event.remove('croptopia:dough')
        event.remove('create:dough')
    })

    RecipeViewerEvents.removeEntries('item', event => {
        event.remove('exposure:interplanar_projector')
    })