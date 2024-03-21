import styles from './SearchBar.module.css';
import pokeballImage from '../../assets/pokeball.png';

const SearchBar = () => {
  const handlerBuscarPokemon = () => {
    alert('pika pika');
  };

  return (
    <div className={styles.containerSearch}>
      <input
        type="text"
        className={styles.inputTeme}
        placeholder="Busca un Pokemon"
      />
      <button onClick={handlerBuscarPokemon} title="Busca tu pokemon">
        <img src={pokeballImage} alt="pokebola" />
      </button>
    </div>
  );
};

export default SearchBar;
