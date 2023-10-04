function abrirModal(number) {
    const modal = document.getElementById('window_modal');
    pokeApi.getPokemonDetail(number)
        .then(convertPokeApiDetailToPokemon)
        .then((pokemon) => {
            console.log(pokemon)
            fetch(pokemon.specieUrl)
                .then()
        });

    modal.classList.add('abrir');


    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'window_modal') {
            modal.classList.remove('abrir');
        }
    })
}