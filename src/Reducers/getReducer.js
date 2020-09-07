import { getPokemon } from '../actions/actionCreators';

const initialState = {
pokedex: [],
previousPage: null,
nextPage: null,
numberOfPage: 0
};

function getReducer(state = initialState, action) {
    switch (action.type) {
        case getPokemon:
            return {...state, pokedex: action.data.results};
            default:
                return state;
        }
}

export default getReducer;