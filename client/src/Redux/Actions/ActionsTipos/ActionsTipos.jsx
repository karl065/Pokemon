import axios from 'axios';
import server from '../../../connection/Connection';
import {GET_TIPOS} from '../../Cases/CasesTipos/CasesTipos';

export const getTipos = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${server.api.baseURL}tipo`);

      dispatch({
        type: GET_TIPOS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
