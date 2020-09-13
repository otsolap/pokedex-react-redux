import { combineReducers } from 'redux'
import getReducer from './rootReducer'

const rootReducer = combineReducers({
    pokemons: getReducer
});

export default rootReducer;