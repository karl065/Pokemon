const {Pokemon, Tipo} = require('../../db.js');

const putControllerPokemon = async (dataUpdate, idPokemon) => {
  try {
    // Actualizar los campos del Pokemon
    await Pokemon.update(dataUpdate, {
      where: {idPokemon},
    });

    // Verificar si el prop 'idTipo' está presente en dataUpdate
    if (dataUpdate.idTipo) {
      // Obtener el Pokemon actualizado
      const pokemon = await Pokemon.findByPk(idPokemon);

      // Obtener el Tipo asociado al 'idTipo' proporcionado
      const tipo = await Tipo.findByPk(dataUpdate.idTipo);

      // Verificar si el Tipo y el Pokemon existen
      if (tipo && pokemon) {
        // Agregar la relación entre el Pokemon y el Tipo
        await pokemon.addTipo(tipo);
      }
    }

    // Devolver el Pokemon actualizado con la relación incluida
    const pokemonUpdate = await Pokemon.findByPk(idPokemon, {
      include: [
        {
          model: Tipo,
          as: 'tipos',
        },
      ],
    });

    return pokemonUpdate;
  } catch (error) {
    return error;
  }
};

module.exports = {putControllerPokemon};
