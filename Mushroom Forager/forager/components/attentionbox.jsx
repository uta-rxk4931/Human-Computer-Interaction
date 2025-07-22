'use client'; 
import React from 'react';
import styles from '../styles/attentionbox.module.css';
import { attentionMessage } from '../data/development';

const AttentionBox = ({ onClose }) => {
  return (
    <div className={styles.attentionBox}>
      <img 
        src={attentionMessage.icon} 
        alt="Warning Icon" 
        className={styles.icon} 
      />
      <div className={styles.content}>
        <h2 className={styles.header}>{attentionMessage.header}</h2>
        <p className={styles.message}>{attentionMessage.message}</p>
      </div>
      <img 
        src={attentionMessage.icon2} 
        alt="Close Icon" 
        className={styles.closeIcon} 
        onClick={onClose} 
      />
    </div>
  );
};

export default AttentionBox;