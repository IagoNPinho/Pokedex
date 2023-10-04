const pokeApi = {}

function convertPokeApiDetailToPokemon(PokeDetail) {
    const pokemon = new PokemonModel();
    const types = PokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    const stats = PokeDetail.stats.map((statSlot) => statSlot.base_stat);
    var statsTotal = 0;
    stats.map((stat) => {
        console.log(statsTotal);
        statsTotal += stat;
    })


    pokemon.number = PokeDetail.id;
    pokemon.name = PokeDetail.name;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = PokeDetail.sprites.other.dream_world.front_default;
    pokemon.specieUrl = PokeDetail.species.url;
    pokemon.specie;
    pokemon.height = PokeDetail.height;
    pokemon.weight = PokeDetail.weight;
    pokemon.abilities = PokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name);
    pokemon.genderFemale;
    pokemon.genderMale;
    pokemon.eggGroup;
    pokemon.eggCircle;
    pokemon.hp = stats[0];
    pokemon.attack = stats[1];
    pokemon.defense = stats[2];
    pokemon.specialAtk = stats[3];
    pokemon.specialDef = stats[4];
    pokemon.speed = stats[5];
    pokemon.total = statsTotal;
    return pokemon;
}


pokeApi.getPokemonDetailSimplify = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon);
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetailSimplify))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.log(error));
}

pokeApi.getPokemonDetail = (order) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${order}/`;
    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => pokemon);
}

pokeApi.getPokemonSpecie = (order) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${order}/`;
    return fetch(url)
        .then((response) => response.json())
        .then((pokemon) => pokemon);
}

/*
URL - https://pokeapi.co/api/v2/pokemon-species/${pokemon.order}/
Informações:
- nome {[name]}
- order {[order]}
- especie {[genera][7][genus]}
- egg group {[egg_groups][0][name]}
- egg cyrcle {[egg_groups][1][name]}
- 



URL - https://pokeapi.co/api/v2/pokemon/${pokemon.order}/
Informações:
- nome {[name]}
- order {[order]}
- type1 {[types][0][type][name]}
- type2 {[types][1][type][name]}
- sprite {[sprites][other][dream_world][front_default]}

- specie {[species][url]fetch(url)[genera][7][genus]}
- Height {[height]}
- Weight {weight}
- Abilities 1 {[abilities][0][ability][name]}
- Abilities 2 {[abilities][1][ability][name]}
- Gender famale {[species][url]fetch(url)[gender_rate]*10}
- Gender male {[species][url]fetch(url)[gender_rate]-10*(-10)}
- Egg group {[species][url]fetch(url)[egg_groups][0][name]}
- Egg cyrcle {[species][url]fetch(url)[egg_groups][1][name]}

- HP {[stats][0][base_stat]}
- Attack {[stats][1][base_stat]}
- Defense {[stats][2][base_stat]}
- Special Attack {[stats][3][base_stat]}
- Special Defense {[stats][4][base_stat]}
- Speed {[stats][5][base_stat]}
- Total {HP + ATK + DEF + SATK + SDEF + SPEED}
*/


