/* eslint-disable react/prop-types */
import styles from './DetallesPokemon.module.css';
import pokeballImage from '../../assets/pokeball.png';

const DetallesPokemon = ({pokemon}) => {
  return (
    <div className={styles.container}>
      <div>
        <h1>{pokemon.nombre}</h1>
      </div>
      <div className={styles.containerDescripcion}>
        <div className={styles.containerImagen}>
          <img src={pokemon.imagen} alt={pokemon.nombre} />
        </div>
        <div className={styles.containerItems}>
          <div>
            <h2>Vida: </h2>
            <span>{pokemon.vida}</span>
          </div>
          <div>
            <h2>Ataque </h2>
            <span>{pokemon.ataque}</span>
          </div>
          <div>
            <h2>Defensa: </h2>
            <span>{pokemon.defensa}</span>
          </div>
          <div>
            <h2>Velocidad: </h2>
            <span>{pokemon.velocidad}</span>
          </div>
          <div>
            <h2>Altura: </h2>
            <span>{pokemon.altura}</span>
          </div>
          <div>
            <h2>Peso: </h2>
            <span>{pokemon.peso}</span>
          </div>
          <div>
            <h2>Tipo: </h2>
            <div>
              {pokemon.tipos.map((tipo, index) => (
                <div key={index}>
                  <img src={pokeballImage} alt={pokemon.nombre} />
                  <h2>{tipo.nombre}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesPokemon;
