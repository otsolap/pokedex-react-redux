import { GET_ALL } from '../actions/actionCreators';

const initialState = {
    pokemons: [],
    previousPage: null,
    nextPage: null,
    numberOfPage: 0
};

const getReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return { ...state, pokemons: action.data.results };
        default:
            return state;
    }
}

export default getReducer;