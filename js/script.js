let pokemonList = [];

pokemon[0] = {
    name: "Charizard",
    height: 10,
    weight: 500,
    type: ["fire", "fighting"]
};

pokemon[1] = {
    name: "Geodude",
    height: 3.2,
    weight: 75,
    type: ["fighting", "floating"]
};

pokemon[2] = {
    name: "Stunky",
    height: 1.1,
    weight: 9,
    type: ["grass", "poison"]
};

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height >= 6 && pokemonList[i].weight >= 60)
document,write (pokemon.name + " is a Big " pokemon.type + "pokemon.")
}
