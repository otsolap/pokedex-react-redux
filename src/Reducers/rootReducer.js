import { INIT_API } from '../actions/actionCreators';

const initialState = {
    pokemons: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_API:
            return { ...state, pokemons: action.data.results };
        default:
            return state;
    }
}

export default rootReducer;