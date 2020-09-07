export const GET_ALL = 'GET_ALL';

export function catchAll(data) {
    return {
        type: GET_ALL,
        pokedex: data
    };
}

export const getPokemon = () => {
    return dispatch => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then(resp => resp.json())
        // data tulee actionTypestä.
        .then(data => dispatch(catchAll(data)))
        .catch(err => console.log(err))
    };
}
