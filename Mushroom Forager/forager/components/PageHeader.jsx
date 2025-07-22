'use client'
import React from 'react';
import styles from '../styles/PageHeader.module.css';

const PageHeader = ({ title = '' }) => {
  const handleBackClick = () => {
    window.history.length > 1 ? window.history.back() : window.location.href = '/';
  };

  return (
    <div className={styles.header}>
      <div 
        className={styles.backArrow}
        onClick={handleBackClick}
        style={{ cursor: 'pointer' }} 
        role="button"
        aria-label="Go back"
      >
        <img src="/icons/back.svg" alt="Back" width="15" height="26.82" />
      </div>
      {title && (
        <div className={styles.title}>
          {title}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
