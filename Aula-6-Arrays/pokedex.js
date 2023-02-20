let pokedex = []
function insertPokemon() {
let pokeName = prompt ("Write the pokemon name: ")
let pokeType = prompt (`Which kind ${pokeName} is ?`)

pokedex.push ({
    pokeName,
    pokeType
})

}
function toShow () {
    console.log (pokedex)
    for (let value of pokedex){
        console.log (`${value.pokeName} : ${value.pokeType}`)
    }
}



/*let pokedex = []

function insertPokemon(pokeName, pokeType) {
    pokedex.push ({
        pokeName: prompt('Which pokemon do you want to insert ? '),
        pokeType: prompt (`Which kind of pokemon ${pokemon.pokeName} is ?`)
    })
    
}
let pokemonName = pokeName.value
function showPokemon () {
    alert (` The pokemon ${pokemonName}`)
}

function toShow() {
    console.log (pokedex)
    console.log (pokedex[-1])
}

*/




/*

let pokedex = []

function insertPokemon() {
    pokedex.push ({
        pokeName: prompt('Which pokemon do you want to insert ? '),
        pokeType: prompt (`Which kind of pokemon  is ?`) // not working returning alert that pokeName is not  undefind
    })
    
}

function toShow() {
    console.log (pokedex)
    console.log (pokedex[0])
}

*/









/* let pokedex = []
const pokemon = {
    pokeName : pokedex[-1],
    pokeType : pokedex
}
function insertPokemon(pokeName, pokeType) {
    pokedex.push ({
        pokeName: prompt('Which pokemon do you want to insert ? ')
    })
    pokedex.push ({
        pokeType: prompt (`Which kind of pokemon ${pokemon.pokeName} is ?`)
    })
    
    
}

function toShow() {
    console.log (pokedex)
    console.log (pokedex[0])
}

*/





