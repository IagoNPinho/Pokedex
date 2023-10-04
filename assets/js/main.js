const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxrecords = 151;
const limit = 10;
let offset = 0

function loadPokemonItens(offset, limit) {
    console.log(`offset = ${offset}`);
    console.log(`limit = ${limit}`);
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        const newHTML = pokemons.map((pokemon) => {
            return `
                <li onclick="abrirModal(${pokemon.number})" class="pokemon ${pokemon.type}" role="button">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                        </ol>
                        <img src=${pokemon.photo}
                            alt="${pokemon.name}">
                    </div>
                </li>
            `;
        }).join("");
        pokemonList.innerHTML += newHTML;
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRercods = offset + limit;

    if(qtdRercods >= maxrecords){
        const newlimit = maxrecords - offset;
        loadPokemonItens(offset, newlimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
})