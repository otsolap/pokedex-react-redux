export const INIT_API = 'INIT_API';

export const initPokemon = dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: INIT_API,
                data: data
            })
        })
        .catch(err => console.log(err))
}