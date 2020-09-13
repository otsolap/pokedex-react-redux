import { INIT_API } from '../actions/actionCreators';

const initialState = {
    pokemons: [],
    previousPage: null,
    nextPage: null,
    numberOfPage: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_API:
            return { ...state, pokemons: action.data };
        default:
            return state;
    }
}

export default rootReducer;