const {
  postControllerPokemon,
} = require('../../controllers/controllersPokemon/PostControllerPokemon');

const postHandlerPokemon = async (req, res) => {
  try {
    const pokemon = req.body;

    const nuevoPokemon = await postControllerPokemon(pokemon);

    return res.status(200).json(nuevoPokemon);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {postHandlerPokemon};
