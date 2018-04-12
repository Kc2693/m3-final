import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';

const rootReducer = combineReducers({
  pokemon: pokeReducer,
})

export default rootReducer
