import { combineReducers } from 'redux'
import {getReducer } from './getReducer';

const rootReducer = combineReducers({
getReducer: getReducer
});

export default rootReducer;