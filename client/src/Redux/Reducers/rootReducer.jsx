import {combineReducers} from 'redux';
import reducerPokemon from './ReducerPokemon/ReducerPokemon';
import tiposReducer from './ReducerTipos/ReducerTipos';

const rootReducer = combineReducers({
  pokemon: reducerPokemon,
  tipos: tiposReducer,
});

export default rootReducer;
