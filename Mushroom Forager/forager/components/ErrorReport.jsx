'use client'
import React from 'react';
import styles from '../styles/ErrorReport.module.css';

const ErrorReport = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Not what you expected?</span>
      <button className={styles.button}>
        Report Error 
        <img src="Chevron right.svg" alt="Next" className={styles.icon} />
      </button>
    </div>
  );
};

export default ErrorReport;