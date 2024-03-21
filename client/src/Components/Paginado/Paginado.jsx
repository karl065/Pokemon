/* eslint-disable react/prop-types */
import styles from './Paginado.module.css';

const Paginado = ({
  totalItems,
  itemsPorPagina,
  paginaActual,
  onCambioPagina,
}) => {
  const totalPaginas = Math.ceil(totalItems / itemsPorPagina);
  const paginasMostradas = 5;
  const mitadPaginasMostradas = Math.floor(paginasMostradas / 2);
  let inicio;
  let fin;

  // Calcular el rango de páginas que se mostrarán
  if (totalPaginas <= paginasMostradas) {
    inicio = 1;
    fin = totalPaginas;
  } else if (paginaActual <= mitadPaginasMostradas) {
    inicio = 1;
    fin = paginasMostradas;
  } else if (paginaActual + mitadPaginasMostradas >= totalPaginas) {
    inicio = totalPaginas - paginasMostradas + 1;
    fin = totalPaginas;
  } else {
    inicio = paginaActual - mitadPaginasMostradas;
    fin = paginaActual + mitadPaginasMostradas;
  }

  // Función para manejar el cambio de página
  const manejarCambioPagina = (pagina) => {
    onCambioPagina(pagina);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contenedorMovimiento}>
        {/* Botón de Inicio */}
        <button
          disabled={paginaActual === 1}
          onClick={() => manejarCambioPagina(1)}
        >
          ⏪
        </button>
        {/* Botón de Anterior */}
        <button
          disabled={paginaActual === 1}
          onClick={() => manejarCambioPagina(paginaActual - 1)}
        >
          ◀️
        </button>
      </div>
      {/* Botones de páginas */}
      <div className={styles.contenedorPaginas}>
        {Array.from({length: fin - inicio + 1}, (_, index) => {
          const numeroPagina = inicio + index;
          return (
            <button
              key={numeroPagina}
              className={paginaActual === numeroPagina ? 'activo' : ''}
              onClick={() => manejarCambioPagina(numeroPagina)}
            >
              {numeroPagina}
            </button>
          );
        })}
      </div>
      <div className={styles.contenedorMovimiento}>
        {/* Botón de Siguiente */}
        <button
          disabled={paginaActual === totalPaginas}
          onClick={() => manejarCambioPagina(paginaActual + 1)}
        >
          ▶️
        </button>
        {/* Botón de Fin */}
        <button
          disabled={paginaActual === totalPaginas}
          onClick={() => manejarCambioPagina(totalPaginas)}
        >
          ⏩
        </button>
      </div>
    </div>
  );
};

export default Paginado;
