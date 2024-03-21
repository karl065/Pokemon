const {Pokemon, Tipo} = require('../../db.js');

const postControllerPokemon = async (pokemon) => {
  try {
    let nuevoPokemon;

    // Verificar si se proporciona el idTipo en el objeto pokemon
    if (pokemon.idTipo) {
      // Buscar el Tipo correspondiente
      const tipo = await Tipo.findByPk(pokemon.idTipo);

      // Crear el nuevo Pokemon y establecer la relación con el Tipo
      nuevoPokemon = await Pokemon.create(pokemon, {
        include: [
          {
            model: Tipo,
            as: 'tipos',
          },
        ],
      });
      await nuevoPokemon.setTipo(tipo);
    } else {
      // Si no se proporciona idTipo, simplemente crear el Pokemon sin establecer la relación
      nuevoPokemon = await Pokemon.create(pokemon);
    }

    return nuevoPokemon;
  } catch (error) {
    return error;
  }
};

module.exports = {postControllerPokemon};
