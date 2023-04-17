
let pokemonRepository = (function () {

let pokemonList = [
    {name: "Charizard", height: 10, weight: 500, type: ["fire", "fighting"]}, 
    {name: "Geodude", height: 3.2, weight: 75, type: ["fighting", "floating"]}, 
    {name: "Stunky", height: 1.1, weight: 9, type: ["grass", "poison"]}
];

function add(pokemon) {
      pokemonList.push(pokemon);
}

function getAll () {
    return pokemonList;
    };

    function showDetails(pokemon) {
        console.log(pokemon.name)
    }

function addListItem(pokemon) {
    let ul = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = (pokemon.name);
    button.classList.add('pokebutton');
    listItem.appendChild(button);
    ul.appendChild(listItem);

    button.addEventListener('click', function (event) {
        showDetails(pokemon);
    });
}

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
}

})()

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: "Pikachu", height:"0.2", type: ["electicity"] });

console.log(pokemonRepository.getAll())

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
   
})   
    