/* eslint-disable react/prop-types */
import styles from './CardsPokemon.module.css';

const CardsPokemon = ({pokemon}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLevel2}>
        <div>
          <div>
            <img src={pokemon.imagen} alt={pokemon.nombre} />
          </div>
          <div className={styles.contenedorTexto}>
            <div>
              <h1>{pokemon.nombre}</h1>
            </div>
            <div className={styles.contenedorTipos}>
              {pokemon.tipos?.map((tipo, index) => {
                return <h2 key={index}>👉 {tipo.nombre}</h2>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPokemon;
