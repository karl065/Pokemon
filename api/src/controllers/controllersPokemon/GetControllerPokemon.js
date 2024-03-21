const {Op} = require('sequelize');
const {Pokemon, Tipo} = require('../../db.js');

const getControllerPokemon = async (
  idPokemon,
  nombre,
  vidaMax,
  vidaMin = 0,
  ataqueMax,
  ataqueMin = 0,
  defensaMax,
  defensaMin = 0,
  velocidadMax,
  velocidadMin = 0,
  alturaMax,
  alturaMin = 0,
  pesoMax,
  pesoMin = 0
) => {
  try {
    if (idPokemon) {
      const pokemon = await Pokemon.findByPk(idPokemon, {
        include: [
          {
            model: Tipo,
            as: 'tipos',
          },
        ],
      });
      return pokemon;
    }

    const whereConditions = {
      ...(nombre && {
        nombre: {
          [Op.iRegexp]: nombre,
        },
      }),
      ...(vidaMax && {
        vida: {[Op.between]: [vidaMin, vidaMax || Infinity]},
      }),
      ...(ataqueMax && {
        ataque: {[Op.between]: [ataqueMin, ataqueMax || Infinity]},
      }),
      ...(defensaMax && {
        defensa: {[Op.between]: [defensaMin, defensaMax || Infinity]},
      }),
      ...(velocidadMax && {
        velocidad: {[Op.between]: [velocidadMin, velocidadMax || Infinity]},
      }),
      ...(alturaMax && {
        altura: {[Op.between]: [alturaMin, alturaMax || Infinity]},
      }),
      ...(pesoMax && {
        peso: {[Op.between]: [pesoMin, pesoMax || Infinity]},
      }),
    };

    const pokemons = await Pokemon.findAll({
      where: whereConditions,
      include: [
        {
          model: Tipo,
          as: 'tipos',
        },
      ],
    });
    return pokemons;
  } catch (error) {
    return error;
  }
};

module.exports = {getControllerPokemon};
