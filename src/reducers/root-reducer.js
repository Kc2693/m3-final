import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import pokeInfoReducer from './pokeInfoReducer';

const rootReducer = combineReducers({
  pokeTypes: pokeReducer,
  pokemon: pokeInfoReducer
})

export default rootReducer;
