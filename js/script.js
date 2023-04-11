/* let pokemonList = [];

const pokemonList = [
    {name: "Charizard", height: 10, weight: 500, type: ["fire", "fighting"}, 
    {name: "Geodude", height: 3.2, weight: 75, type: ["fighting", "floating"]}, 
    {name: "Stunky", height: 1.1, weight: 9, type: ["grass", "poison"]}
]

console.log(pokemonList); 

for (let i = 0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + "ft)" + " ");
    if (pokemonList[i].height > 6){
       document.write("- He's a big boy.");
    } else {
        document.write(" - He's a cute little fella.")
    }
    document.write("<br>")
};

*/

(function () {
    let data = {};

let pokemonList = [
    {name: "Charizard", height: 10, weight: 500, type: ["fire", "fighting"]}, 
    {name: "Geodude", height: 3.2, weight: 75, type: ["fighting", "floating"]}, 
    {name: "Stunky", height: 1.1, weight: 9, type: ["grass", "poison"]}
]

pokemonList.forEach(function(name) {
  console.log(name + " is " + height + " feet tall, " + weight + " pounds. And he is a " + type "." );
});

})();