import {
  GET_POKEMON_API,
  GET_POKEMON_DB,
} from '../../Cases/CasesPokemon/CasesPokemons';

const initialState = {
  pokemonsDB: [],
  pokemonsApi: [],
};

const reducerPokemon = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_POKEMON_DB:
      return {...state, pokemonsDB: payload};
    case GET_POKEMON_API:
      return {...state, pokemonsApi: payload};
    default:
      return {...state};
  }
};

export default reducerPokemon;
