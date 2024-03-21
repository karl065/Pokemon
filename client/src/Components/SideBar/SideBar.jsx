import styles from './SideBar.module.css';
import pokeballImage from '../../assets/pokeball.png';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Modal from '../Modal/Modal';
import FormularioCrearPokemon from '../Formularios/FormulariosPokemon/FormularioCrearPokemon/FormularioCrearPokemon';

const SideBar = () => {
  const [modalCrearPokemon, setModalCrearPokemon] = useState(false);

  const handleCrearPokemon = () => {
    setModalCrearPokemon(true);
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={pokeballImage} alt="pokebola" />
      </Link>
      <div className={styles.containerLevel2}>
        <div className={styles.containerLevel3Opciones}>
          <button onClick={handleCrearPokemon}>Crear Pokemon</button>
        </div>
        <div>
          <h1>Sidebar</h1>
        </div>
        <div>
          <h1>Sidebar</h1>
        </div>
        <Modal
          isOpen={modalCrearPokemon}
          onClose={() => setModalCrearPokemon(false)}
        >
          <FormularioCrearPokemon />
        </Modal>
      </div>
    </div>
  );
};

export default SideBar;
