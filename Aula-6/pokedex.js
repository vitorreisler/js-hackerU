let pokedex = []

function insertPokemon() {
    let pokeName = pokedex.pokeName
    let pokeType = pokedex.pokeType
    pokedex.push ({
        pokeName: prompt('Which pokemon do you want to insert ? '),
        pokeType: prompt (`Which kind of pokemon ${pokeName} is ?`)
    })
    
}

function toShow() {
    console.log (pokedex)

}

console.log (pokedex[0])