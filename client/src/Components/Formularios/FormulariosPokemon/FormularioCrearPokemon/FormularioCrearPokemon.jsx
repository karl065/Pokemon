/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import styles from './FormularioCrearPokemon.module.css';
import {useSelector} from 'react-redux';
import SelectPersonalizado from '../../../SelectPersonalizado/SelectPersonalizado';

const FormularioCrearPokemon = () => {
  const [pokemonData, setPokemonData] = useState({
    nombre: '',
    imagen: '',
    vida: 0,
    ataque: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    tipos: [],
  });

  const [idTipo, setIdTipo] = useState('');

  const tipos = useSelector((state) => state.tipos.tipos);

  const tipoSelect = [];

  tipos.map((tipo) => {
    return tipoSelect.push({
      _id: tipo.idTipo,
      nombre: tipo.nombre,
    });
  });

  const handleEliminarTipo = (tipoId) => {
    console.log(tipoId);
    setPokemonData((prevState) => ({
      ...prevState,
      tipos: prevState.tipos.filter((tipo) => tipo.idTipo !== tipoId),
    }));
  };

  const handleFormulario = (e) => {
    e.preventDefault();
    setPokemonData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    if (idTipo) {
      const tipoExistente = pokemonData.tipos.find(
        (tipo) => tipo.id === idTipo.idTipo
      );
      if (!tipoExistente) {
        setPokemonData((prevState) => ({
          ...prevState,
          tipos: [...prevState.tipos, idTipo],
        }));
      }
    }
  }, [idTipo]);

  useEffect(() => {
    console.log(pokemonData);
  }, [pokemonData]);

  return (
    <div className={styles.container} onChange={handleFormulario}>
      <h1>Crear Pokemon</h1>
      <div className={styles.contenedorLevel2}>
        <div className={styles.contenedorLevel3}>
          <label>Nombre: </label>
          <input type="text" placeholder="Ingresa un nombre" id="nombre" />
        </div>
        <div className={styles.contenedorLevel3}>
          <label>Imagen: </label>
          <input type="text" placeholder="Ingresa una imagen" id="imagen" />
        </div>
      </div>
      <div className={styles.contenedorLevel2}>
        <div className={styles.contenedorLevel3}>
          <label>Vida: </label>
          <input type="text" placeholder="Ingresa un vida" id="vida" />
        </div>
        <div className={styles.contenedorLevel3}>
          <label>Ataque: </label>
          <input type="text" placeholder="Ingresa un ataque" id="ataque" />
        </div>
      </div>
      <div className={styles.contenedorLevel2}>
        <div className={styles.contenedorLevel3}>
          <label>Velocidad: </label>
          <input
            type="text"
            placeholder="Ingresa un velocidad"
            id="velocidad"
          />
        </div>
        <div className={styles.contenedorLevel3}>
          <label>Altura: </label>
          <input type="text" placeholder="Ingresa un altura" id="altura" />
        </div>
      </div>
      <div className={styles.contenedorLevel2}>
        <div className={styles.contenedorLevel3}>
          <label>Peso: </label>
          <input type="text" placeholder="Ingresa un peso" id="peso" />
        </div>
        <div className={styles.contenedorSelect}>
          <label>Tipo: </label>
          <SelectPersonalizado opciones={tipoSelect} funcion={setIdTipo} />
          {pokemonData.tipos?.map((tipo) => (
            <button
              key={tipo.idTipo}
              onClick={() => handleEliminarTipo(tipo.idTipo)}
            >
              {tipo.nombre}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.contenedorLevel2}>
        <button className={styles.boton}>Crear Pokémon</button>
      </div>
    </div>
  );
};

export default FormularioCrearPokemon;
