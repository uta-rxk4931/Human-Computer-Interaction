// Infobox.jsx
import React, { useState } from 'react';
import styles from '../styles/Infobox.module.css'; 
import { infoMessage } from '../data/development.jsx';

const Infobox = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <button 
        onClick={handleClose}
        className={styles.closeButton}
        aria-label="Close"
      >
        <img src={infoMessage.icon} alt="Close" width={16} height={16} />
      </button>
      <p className={styles.message}>{infoMessage.message}</p>
    </div>
  );
};

export default Infobox;