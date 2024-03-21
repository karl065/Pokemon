/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPokemonApi} from '../../Redux/Actions/ActionPokemon/ActionsPokemon';
import {getTipos} from '../../Redux/Actions/ActionsTipos/ActionsTipos';

const CargadorInicial = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonApi());
    dispatch(getTipos());
  }, []);

  return null;
};

export default CargadorInicial;
