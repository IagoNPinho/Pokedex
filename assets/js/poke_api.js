const pokeApi = {}

function convertPokeApiDetailToPokemon(PokeDetail) {
    const pokemon = new PokemonModel();
    pokemon.number = PokeDetail.id;
    pokemon.name = PokeDetail.name;

    const types = PokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const[type] = types;

    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = PokeDetail.sprites.other.dream_world.front_default;

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

pokeApi.getPokemonDetailComplex = (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.order}/`;
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
- sprite {}

- specie {[species][url]fetch(url)[genera][7][genus]}
- Height {}
- Weight {}
- Abilities {}
- Gender {}
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


