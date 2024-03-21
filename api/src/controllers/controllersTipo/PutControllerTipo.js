const {Tipo, Pokemon} = require('../../db.js');

const putControllerTipo = async (dataUpdate, idTipo) => {
  try {
    await Tipo.update(dataUpdate, {
      where: {idTipo},
    });
    const tipoUpdate = await Tipo.findByPk(idTipo, {
      include: [
        {
          model: Pokemon,
          as: 'pokemon',
        },
      ],
    });
    return tipoUpdate;
  } catch (error) {
    return error;
  }
};

module.exports = {putControllerTipo};
