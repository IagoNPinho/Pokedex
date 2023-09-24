/*
    Requisição HTTP
    URL: https://pokeapi.co/api/v2/pokemon
    ${IP}/${path = caminho de identificação do recurso}

    IP: https://pokeapi.co
        https://127.0.0.1:8080

    Path: /api/v2/pokemon

    Request Method: POST | GET | PUT | DELETE
        POST - Create - Inserir um novo pokemon
        GET - Read - Buscar as informações do(s) pokemon(s) 
        PUT - Update - Atualizar o pokemon (https://pokeapi.co/api/v2/pokemon/1)
        DELETE - Delete - Apagar o pokemon (https://pokeapi.co/api/v2/pokemon/1)
    Estes Request Method é um crud por meio do protocolo HTTP.

    Query String:
        Padrão de coleção de pares nome e valor;
        Filtro para a APi;
        Formato:
            ${IP}/${PATH}?${nome}:${valor}
        Exemplo:
            https://pokeapi.co/api/v2/pokemon?type=grass
        
        Concatenação de filtros:
            Por meio do {&} entre filtros;
        Formato:
            ${IP}/${PATH}?${nome}:${valor}&${nome}:${valor}
        Exemplo:
            https://pokeapi.co/api/v2/pokemon?type=grass&name=i

*/