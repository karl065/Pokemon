const relaciones = (models) => {
  const {Pokemon, Tipo} = models;

  Pokemon.belongsToMany(Tipo, {
    through: 'PokemonTipo',
    foreignKey: 'idPokemon',
    otherKey: 'idTipo',
    as: 'tipos',
    onDelete: 'CASCADE',
  });
  Tipo.belongsToMany(Pokemon, {
    through: 'PokemonTipo',
    foreignKey: 'idTipo',
    otherKey: 'idPokemon',
    as: 'pokemon',
    onDelete: 'CASCADE',
  });

  return models;
};

module.exports = {relaciones};
