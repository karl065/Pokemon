/* eslint-disable react/prop-types */
import {useState} from 'react';
import styles from './SelectPersonalizado.module.css'; // Importa el archivo CSS module

const SelectPersonalizado = ({opciones, funcion}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (opcion) => {
    funcion({idTipo: opcion._id, nombre: opcion.nombre});
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        Selecciona una opción
      </button>
      {isOpen && (
        <div className={styles.opciones}>
          {opciones.map((opcion) => (
            <button
              key={opcion._id}
              className={styles.opcion}
              onClick={() => handleOptionClick(opcion)}
            >
              {opcion.nombre}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectPersonalizado;
