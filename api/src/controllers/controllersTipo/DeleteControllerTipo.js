const {Tipo} = require('../../db.js');

const deleteControllerTipo = async (idTipo) => {
  try {
    // Paso 1: Obtener el tipo que se va a eliminar
    const tipoEliminado = await Tipo.findByPk(idTipo);

    // Paso 2: Eliminar el tipo
    await tipoEliminado.destroy();

    return tipoEliminado;
  } catch (error) {
    return error;
  }
};

module.exports = {deleteControllerTipo};
