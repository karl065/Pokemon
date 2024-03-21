const {Tipo, Pokemon} = require('../../db.js');
const {Op} = require('sequelize');

const getControllerTipo = async (id, nombre) => {
  try {
    const whereConditions = {
      ...(nombre && {
        nombre: {
          [Op.iRegexp]: nombre,
        },
      }),
    };

    if (id) {
      const tipo = await Tipo.findByPk(id, {
        include: [
          {
            model: Pokemon,
            as: 'pokemon',
          },
        ],
      });

      return tipo;
    }

    const tipos = await Tipo.findAll({
      where: whereConditions,
      include: [
        {
          model: Pokemon,
          as: 'pokemon',
        },
      ],
    });
    return tipos;
  } catch (error) {
    return error;
  }
};

module.exports = {getControllerTipo};
