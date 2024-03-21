/* eslint-disable react/prop-types */

import styles from './Modal.module.css';

const Modal = ({isOpen, onClose, children}) => {
  // Renderizar el modal solo si isOpen es true
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Contenido del modal */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
