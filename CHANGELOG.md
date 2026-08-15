# 3.0
- Reverted exposure frame size to default
- More dough unification fixes
- Disabled recipes for converting minecart contraptions back to their base minecarts

# 3.0
Manual Installs need to update Neoforge to 21.1.233 or later

If you want to use shaders, install [Iris](https://modrinth.com/mod/iris). It was not included in this version as without shaders, Create: Simulated sub-levels look off.
## General Changes
- Readjusted multiple values for bounties, delivery quests, & daily shop
- Adjusted recipes for the following:
    - Delivery Quests Table
    - Rope Coupling
    - Motors & Alternators from Create: Crafts & Additions and Create: Electro Energetics
- Unified and adjusted recipes for dough, flour, and water
    - Dough is based around the one from Farmer's Delight
    - Flour is based around the one from Create
    - Water tags were fixed a bit more
> Existing dough and flour from the other mods (excluding MineColonies) may need to be replaced
- Fixed uncraftable oatmeal
- Reverted temporary fix for delivery quests table (issue fixed in ADQ 1.0.3)
- Changed Curiosity Token system into a pair of chunkloader tokens, dedicated to power loader crafting
- Made molten vents unmovable by simulated contraptions
- Fixed Engineering decree title
- Temporarily removed dragonfly spawning
    - existing dragonflies unaffected; behaviour to be changed when excessive spawns are addressed by mod update
- Renamed many Create: Crafts & Additions items to differentiate them as Forge Energy machines from the electric components of Create: Electro Energetics
- Removed suspicious sand/gravel recipes
- Removed unused bounty pools
- Changed some C2ME settings for compatibility with other performance mods
## Mod Changes
### Added:
- AllTheLeaks
- Copycat Sails and Compat
- Create Better FPS
- Create: Electro Energetics
- Create: Pattern Schematics
- Create: Redstone Link GUI
- Disable enderman picking up blocks
- Exposure
- In Control!
- Lithostitched
- Not Enough Recipe Book
- OctoLib
- Spark
### Updated:
- Aeronautics Delivery Quests (1.0.2 > 1.0.3)
- Balm (21.0.56 > 21.0.59)
- Create Aeronautics (1.2.1 > 1.3.0)
- Create: Big Cannons (5.11.5 > 5.11.6)
- Create: Central Kitchen (2.4.0 > 2.5.0)
- Create: Colony Logistics (1.2.7 > 1.2.9)
- Create: Connected (1.2.0 > 1.2.2)
- Create: Dragons Plus (1.11.1 > 1.11.2b)
- Cupboard (3.5 > 3.7)
- Cristel Lib (3.1.6 > 3.1.7)
- e4mc (6.1.0 > 6.1.2)
- Integrated Dungeons and Structures (1.13.6 > 1.13.7)
- Ixeris (4.4.1 > 4.4.4)
- Jade Sable Compat (1.1.0 > 1.2.0)
- ModernFix (5.27.11> 5.27.14)
- Moonlight Lib (3.0.16 > 3.0.17)
- Puzzles Lib (21.1.51 > 21.1.52)
- Rhino (2101.2.7-build.81 > 2101.2.7-build.85)
- Sable (1.2.2 > 2.0.2)
- Sodium (0.6.13 > 0.8.12-beta.1)
- Spartan Weaponry Unofficial (1.2.0 > 1.2.1)
- Steam 'n' Rails Neoforge (0.2.0 > 0.2.1)
- Supplementaries (3.6.7 > 3.6.8)
- Terralith (2.5.8 > 2.6.2)
- Vista (4.4.10 > 4.4.13)
- Xaero's Minimap (25.3.13 > 26.1.0)
- Xaero's World Map (1.40.16 > 1.41.0)
### Removed:
- Fast Async World Save (redundant with C2ME)
- Forgified Fabric API (Dependency for tameable Foxes)
- Tameable Foxes

# 2.2
(In hindsight 2.1 should've been major version 3.0 but oh well)
- Changed (Create: Stuff 'N Additions) engine recipes to take engine assemblies
    - portable engines now also require a heat engine to craft
    - increased bounty rewards for certain crafts using these engines
- Renamed Steam Engine (Create: Stuff 'N Additions) to Pocket Steam Engine 
- Adjusted Daily Shop stock to not exceed 99 items sold per transaction
- Fixed some items in Create: Interiors being uncraftable
- Turned off showing tags in tooltips by default

# 2.1
## General Changes
- Bounties reworked
    - now sell based
    - split into four decrees: Cuisine - Meals, Cuisine - Sweets & Pastries, Arms, Engineering
    - more to be added later *(this is an initial run)*
> May have to replace existing decrees
- Daily shop
    - sells building materials, resources, and buys & sells energy
    - content to be expanded later *(this is an initial run)*
- Delivery Quests that award spurs for transporting cargo
- Seagulls no longer take iron or gold lunchboxes
- (Train) Tracks can be placed in batches of up to 64 (from 32)
- Wrenching track mounts now properly gives the item
> still figuring out how to make it axe/pick mineable
- Increased Power damage scaling for muskets
- Harvesting (Quark) now uses hoe durability
- Added Scythe to `minecraft:hoes` tag, meant for them to be used to harvest in an area like hoes *(Will watch out for unintended consequences)*
- Quark rotation lock disabled *(messes with Create's water wheels)*
- Bounty Board recipe now takes any wood type
- Mostly unified milk recipes *(will need further refining later)*
## Mod Changes
### Added:
- Aeronautics Delivery Quests
- AFKStatus
- Backpacked: Wet Backpacks
- Backpacked: World of Color
- Clumps
- Controlling
- Corpse x Cosmetic Armor Reworked Compat
- Cosmetic Armor Reworked
- Create: Oxidized
- Create: Power Loader
- Daily Shop
- Ixeris
- Forgified Fabric API
- KubeJS
- MmmMmmMmmMmm (Target Dummy)
- Rhino
- Searchables
- Simple Weather
- Simulated Gauges
- Sooty Chimneys
- Tameable Foxes
- TooManyRecipeViewers
- [True Ending - Ender Dragon Overhaul](https://modrinth.com/datapack/true-ending) (technically the datapack version)
### Updated:
- Builders Crafts & Additions (2.1.1 > 2.1.2)
- Concurrent Chunk Management Engine (0.3.0+alpha.0.92 > 0.3.0+alpha.0.93)
- Create Aeronautics: Throwable Rope Connector (0.2.2 > 0.3.0)
- Create: Big Cannons (5.11.3 > 5.11.5)
- Create: Connected (1.1.16 > 1.2.0)
- Create: Dragons Plus (I forgor > 1.11.1)
- Create Crafts & Additions (1.5.10 > 1.6.0)
- Create Stuff 'N Additions x Sable & Aeronautics Compat (1.0.1 > 1.0.3)
- CreativeCore (2.13.38 > 2.13.41)
- Creatures and Beasts: Continued (1.7.8 > 1.7.17)
- Cristel Lib (3.0.3 > 3.1.6)
- GlitchCore (2.1.0.0 > 2.1.0.2)
- Integrated Dungeons and Structures (1.13.5 > 1.13.6)
- Integrated Villages (1.3.2 > 1.3.3)
- MineColonies (1.1.1300 > 1.1.1319)
- ModernFix (5.27.8 > 5.27.11)
- Moonlight Lib (3.0.10 > 3.0.16)
- Quark (4.1-479 > 4.1-480)
- Puzzles Lib (21.1.39 > 21.1.51)
- Towns and Towers (1.13.7 > 1.13.9)
- Vista (iforgor > 4.4.10)
- Simple Voice Chat (2.6.17 > 2.6.18)
- Spartan Weaponry Unofficial (1.1.1 > 1.2.0)
- Structurize (1.0.822 > 1.0.830)
- Stylecolonies (1.15.51 > 1.15.54)
- Supplementaries (3.6.4 > 3.6.7)
### Removed:
- Create: Crafts & Additions and Aeronautics Compat (fixed in latest CCA)
- Create : Numismatic Bounties (replaced with pack's custom bounties)
- Extra Bounties (replaced with pack's custom bounties)
- Just Enough Items (replaced with TMRV, for EMI)
- Openloader (Mostly replaced by KubeJS, but may change)
- Vista Aeronautics Fix (fixed in latest Vista)