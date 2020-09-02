import { catchAll }from './actionTypes';

export function getPokemon() {
    return dispatch => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=29')
        .then(resp => resp.json())
        // data tulee actionTypestä.
        .then(data => dispatch(catchAll(data)))
        .catch(err => console.log(err))
    };
}
