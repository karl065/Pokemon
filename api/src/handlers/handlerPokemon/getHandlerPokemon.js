const {
  getControllerPokemon,
} = require('../../controllers/controllersPokemon/GetControllerPokemon');

const getHandlerPokemon = async (req, res) => {
  try {
    const {
      idPokemon,
      nombre,
      vidaMax,
      vidaMin,
      ataqueMax,
      ataqueMin,
      defensaMax,
      defensaMin,
      velocidadMax,
      velocidadMin,
      alturaMax,
      alturaMin,
      pesoMax,
      pesoMin,
    } = req.query;

    const pokemons = await getControllerPokemon(
      idPokemon,
      nombre,
      vidaMax,
      vidaMin,
      ataqueMax,
      ataqueMin,
      defensaMax,
      defensaMin,
      velocidadMax,
      velocidadMin,
      alturaMax,
      alturaMin,
      pesoMax,
      pesoMin
    );

    return res.status(200).json(pokemons);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {getHandlerPokemon};
