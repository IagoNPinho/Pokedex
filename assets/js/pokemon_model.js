class PokemonModel {
    name;
    number;
    type;
    types = [];
    photo;
    specieUrl;
    specie;
    weight;
    height;
    abilities = [];
    genderMale;
    genderFemale;
    eggGroup;
    eggCircle;
    hp;
    attack;
    defense;
    specialAtk;
    specialDef;
    speed;
    total;
}
/*
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