import axios from 'axios';
import server from '../../../connection/Connection';
import {
  GET_POKEMON_API,
  GET_POKEMON_DB,
} from '../../Cases/CasesPokemon/CasesPokemons';

export const getPokemonDB = async () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${server.api.baseURL}pokemon`);
      dispatch({
        type: GET_POKEMON_DB,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPokemonApi = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${server.api.apiUrl}?limit=150`);

      // Mapea las solicitudes a axios.get y retorna un array de promesas
      const requests = data.results.map(async (pokemon) => {
        const {data} = await axios.get(pokemon.url);

        return {
          idPokemon: data.id,
          nombre: data.name,
          imagen: data.sprites.other.dream_world.front_default,
          vida: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          velocidad: data.stats[3].base_stat,
          altura: data.height,
          peso: data.weight,
          tipos: data.types.map((tipo) => {
            return {
              nombre: tipo.type.name,
            };
          }),
        };
      });

      // Espera a que todas las promesas se completen y obtiene los resultados
      const pokemonsApi = await Promise.all(requests);
      dispatch({
        type: GET_POKEMON_API,
        payload: pokemonsApi,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
