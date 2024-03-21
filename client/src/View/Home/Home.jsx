import {useState} from 'react';
import {useSelector} from 'react-redux';
import styles from './Home.module.css';
import CardsPokemon from '../../Components/CardsPokemon/CardsPokemon';
import Paginado from '../../Components/Paginado/Paginado';
import Modal from '../../Components/Modal/Modal';
import DetallesPokemon from '../../Components/DetallesPokemon/DetallesPokemon';

const Home = () => {
  const pokemonsDB = useSelector((state) => state.pokemon.pokemonsDB);
  const pokemonsApi = useSelector((state) => state.pokemon.pokemonsApi);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calcular el índice inicial y final de la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const slicedPokemonsDB = pokemonsDB.slice(indexOfFirstItem, indexOfLastItem);
  const slicedPokemonsApi = pokemonsApi.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState({});

  const handleDetallePokemon = (pokemon) => {
    setModalOpen(true);
    setPokemonSeleccionado(pokemon);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.cardContainer}>
          {/* Renderizar las tarjetas de la página actual */}
          {slicedPokemonsDB.length > 0 &&
            slicedPokemonsDB.map((pokemon) => (
              <button
                key={pokemon.idPokemon}
                onClick={() => setModalOpen(true)}
              >
                <CardsPokemon pokemon={pokemon} />
              </button>
            ))}
          {slicedPokemonsApi.length > 0 &&
            slicedPokemonsApi.map((pokemon) => (
              <button
                key={pokemon.idPokemon}
                onClick={() => handleDetallePokemon(pokemon)}
              >
                <CardsPokemon pokemon={pokemon} />
              </button>
            ))}
        </div>
        {/* Agregar botones de paginado */}
        <div className={styles.pagination}>
          <Paginado
            totalItems={pokemonsApi.length}
            itemsPorPagina={12}
            paginaActual={currentPage}
            onCambioPagina={handlePageChange}
          />
        </div>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <DetallesPokemon pokemon={pokemonSeleccionado} />
        </Modal>
      </div>
    </div>
  );
};

export default Home;
