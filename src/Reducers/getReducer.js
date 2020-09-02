import { catchAll } from '../actions/actionCreators';

const initialState = {
pokedex: []
};

function getReducer(state = initialState, action) {
    switch (action.type) {
        case catchALL:
            return {...state, pokedex: action.data};
            default:
                return state;
        };
}

export default getReducer;