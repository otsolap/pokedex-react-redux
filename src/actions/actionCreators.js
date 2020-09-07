export const GET_ALL = 'GET_ALL';

export const getPokemon = dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(resp => resp.json())
        // data tulee actionTypestä.
        .then(data => {
            dispatch({
                type: GET_ALL,
                data: data
            })
        })
        .catch((err) => console.log(err))
}