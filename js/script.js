
let pokemonRepository = (function () {

let pokemonList = [
    {name: "Charizard", height: 10, weight: 500, type: ["fire", "fighting"]}, 
    {name: "Geodude", height: 3.2, weight: 75, type: ["fighting", "floating"]}, 
    {name: "Stunky", height: 1.1, weight: 9, type: ["grass", "poison"]}
]

function getAll () {
    return pokemonList;
}

function add (pokemon){
    pokemonList(pokemon)
}

return {
    getAll: getAll,
    add: add
}

})()

console.log(pokemonRepository.getAll())
