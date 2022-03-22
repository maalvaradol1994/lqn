export const getPokemons = async() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=1&limit=70';

    const resp = await fetch( url );
    const { results: data } = await resp.json();
    
    const pokemons = data.map( pokemon => {
        return {
            name: pokemon.name
        }
    });

    // Organizar de forma ascendente los nombres de los personajes
    pokemons.sort((a, b) => {

        if(a.name > b.name){
            return 1;
        }

        if(a.name < b.name){
            return -1;
        }

        return 0;
    })

    return pokemons;

}