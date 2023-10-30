function abrirModal(number) {
    const window_modal = document.getElementById('window_modal');
    pokeApi.getPokemonDetail(number)
        .then((pokeApiJson) => {
            pokeApi.getPokemonSpecie(number)
                .then((specieJson) => convertPokeApiDetailToPokemon(pokeApiJson, specieJson))
                .then((pokemon) => {
                    console.log(pokemon);
                    const newHTML = `
                    <section class="modal ${pokemon.type}">
                        <div class="content_modal">
                            <button class="fechar" id="fechar">&larr;</button>
                            <ol class="header_modal">
                                <li class="name_modal">${pokemon.name}</li>
                                <li class="number_modal">#${pokemon.number}</li>
                            </ol>
                            <ol class="types_modal">
                                ${pokemon.types.map((type) => `<li class="type type_modal ${type}">${type}</li>`).join("")}
                            </ol>
                            <div class="image_container">
                                <img src=${pokemon.photo}
                                    alt="Uma foto do (a) ${pokemon.name}" class="image_detail">
                            </div>
                        </div>
                        <div class="content_information">
                            <h2 class="topic">About</h2>
                            <ol class="informations">
                                <li>
                                    <ol class="list_information">
                                        <li class="information">Specie</li>
                                        <li class="information">Height</li>
                                        <li class="information">Weight</li>
                                        <li class="information information_abilities">Abilities</li>
                                    </ol>
                                </li>
                                <li>
                                    <ol class="list_result">
                                        <li class="result">${pokemon.specie}</li>
                                        <li class="result">${pokemon.height} cm</li>
                                        <li class="result">${pokemon.weight} kg</li>
                                        <li>
                                            <ol class="list_abilities">
                                            ${pokemon.abilities.map((ability) => `<li class="abilities">${ability}</li>`).join("")}
                                            </ol>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            <h2 class="topic">Breeding</h2>
                            <ol class="informations">
                                <ol class="list_information">
                                    <li class="information breeding margin">Gender</li>
                                    <li class="information breeding">Egg group</li>
                                    <li class="information breeding">Egg Cycle</li>
                                </ol>
                                <ol class="list_result">
                                    <li>
                                        <ol class="list_abilities">
                                            <li class="abilities gender">Male <span>${pokemon.genderMale}%</span></li>
                                            <li class="abilities gender">Female <span>${pokemon.genderFemale}%</span></li>
                                        </ol>
                                    </li>
                                    <ol>
                                        <li class="result res_breeding">${pokemon.eggGroup}</li>
                                        <li class="result res_breeding">${pokemon.eggCircle}</li>
                                    </ol>
                                </ol>
                            </ol>
                        </div>
                    </section>
                    `
                    window_modal.innerHTML = newHTML;
                })
        })


    window_modal.classList.add('abrir');

    window_modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'window_modal') {
            window_modal.classList.remove('abrir');
            window_modal.innerHTML = null;
        }
    })
}