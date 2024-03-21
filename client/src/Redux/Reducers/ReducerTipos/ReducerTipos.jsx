import {GET_TIPOS} from '../../Cases/CasesTipos/CasesTipos';

const initialState = {
  tipos: [],
};

const tiposReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_TIPOS:
      return {...state, tipos: payload};
    default:
      return {...state};
  }
};

export default tiposReducer;
