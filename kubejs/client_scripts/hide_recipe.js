const decoCoins = [
    'createdeco:gold_coinstack',
    'createdeco:netherite_coin',
    'createdeco:netherite_coinstack',
    'createdeco:brass_coin',
    'createdeco:brass_coinstack',
    'createdeco:iron_coin',
    'createdeco:iron_coinstack',
    'createdeco:copper_coin',
    'createdeco:copper_coinstack',
    'createdeco:industrial_iron_coin',
    'createdeco:industrial_iron_coinstack',
    'createdeco:zinc_coin',
    'createdeco:zinc_coinstack'
];

decoCoins.forEach(coin => {
    RecipeViewerEvents.removeEntries('item', event => {
        event.remove(coin)
    })
})