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

for (let i = 0; i < pokemon.length; i++) {
  text += pokemon[i] + " ";
}
