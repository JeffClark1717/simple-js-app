
let pokemonRepository = (function () {

let pokemonList = [
    {name: "Charizard", height: 10, weight: 500, type: ["fire", "fighting"]}, 
    {name: "Geodude", height: 3.2, weight: 75, type: ["fighting", "floating"]}, 
    {name: "Stunky", height: 1.1, weight: 9, type: ["grass", "poison"]}
];

function add (pokemon){
    pokemonList(pokemon)
}

function getAll () {
    return pokemonList;
}

return {
    getAll: getAll,
    add: add
}

})()

console.log(pokemonRepository.getAll())

/*
for (let i = 0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + "ft)" + " ");
    if (pokemonList[i].height > 6){
       document.write("- He's a big boy.");
    } else {
        document.write(" - He's a cute little fella.")
    }
    document.write("<br>")
} 
*/

pokemonRepository.forEach(function(pokemon) {
    document.write(pokemonList.name + " is " + pokemonList.height + " feet tall, and weighs " + pokemonList.weight + ", and is a " + pokemonList.type + " sign.")
})
