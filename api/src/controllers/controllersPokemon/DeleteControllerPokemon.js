const {Pokemon} = require('../../db.js');

const deleteControllerPokemon = async (idPokemon) => {
  try {
    // Paso 1: Obtener el Pokemon que se va a eliminar
    const pokemonEliminado = await Pokemon.findByPk(idPokemon);

    // Paso 2: Eliminar el Pokemon
    await pokemonEliminado.destroy();

    return pokemonEliminado;
  } catch (error) {
    return error;
  }
};

module.exports = {deleteControllerPokemon};
