const pokemonList = [];

pokemonList[0] = {
    name: "Charizard",
    height: 10,
    weight: 500,
    type: ["fire", "fighting"]
};

pokemonList[1] = {
    name: "Geodude",
    height: 3.2,
    weight: 75,
    type: ["fighting", "floating"]
};

pokemonList[2] = {
    name: "Stunky",
    height: 1.1,
    weight: 9,
    type: ["grass", "poison"]
};

console.log(pokemonList);

for (let i = 0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")" + " ");
    //conditional to check pokemon height
    if (pokemonList[i].height > 1.3){
       document.write("-Wow that's a big Pokemon");
    } else {
        document.write(" -Little Man!")
    }
    document.write("<br>")

};
