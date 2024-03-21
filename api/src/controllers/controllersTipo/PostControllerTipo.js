const axios = require('axios');
const {Tipo} = require('../../db.js');

const postControllerTipo = async (tipo) => {
  try {
    if (!tipo) {
      const {data} = await axios.get('https://pokeapi.co/api/v2/type');
      const {results} = data;
      for (let tipo of results) {
        await Tipo.create({nombre: tipo.name});
      }
    } else {
      const nuevoTipo = await Tipo.create(tipo);
      return nuevoTipo;
    }
  } catch (error) {
    return error;
  }
};

module.exports = {postControllerTipo};
