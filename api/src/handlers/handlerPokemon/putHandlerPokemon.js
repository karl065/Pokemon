const {
  putControllerPokemon,
} = require('../../controllers/controllersPokemon/PutControllerPokemon');

const putHandlerPokemon = async (req, res) => {
  try {
    const {id} = req.params;

    const dataUpdate = req.body;

    const pokemonUpdated = await putControllerPokemon(dataUpdate, id);

    return res.status(200).json(pokemonUpdated);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {putHandlerPokemon};
