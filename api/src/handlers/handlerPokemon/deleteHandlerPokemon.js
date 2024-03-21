const {
  deleteControllerPokemon,
} = require('../../controllers/controllersPokemon/DeleteControllerPokemon');

const deleteHandlerPokemon = async (req, res) => {
  try {
    const {id} = req.params;

    const pokemonEliminado = await deleteControllerPokemon(id);

    return res.status(200).json(pokemonEliminado);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {deleteHandlerPokemon};
