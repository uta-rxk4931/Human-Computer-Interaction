'use client'
import React from 'react';
import styles from '../styles/BackgroundScreen.module.css';

const BackgroundScreen = () => {

  return (
    <div className={styles.cameraContainer}>
      <div 
        className={styles.cameraView}
        style={{ 
          backgroundImage: "url('/images/camera_screen.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={styles.focusBox}></div>
      </div>

      <div className={styles.header}>
        <button className={styles.backButton}>
          <img src="/icons/back.svg" alt="Back" />
        </button>
        <button 
          className={`${styles.flashButton}`} 
        >
          <img src="/icons/Flash_icon.svg" alt="Flash" />
        </button>
      </div>

    
      <div className={styles.footer}>
        <a href="/mushroom" className={styles.albumButton}>
          <img src="/icons/Album_icon.svg" alt="Album" />
        </a>
        <button className={styles.captureButton} >
          
        </button>
        <button className={styles.flipButton} >
          <img src="/icons/flip_icon.svg" alt="Flip Camera" />
        </button>
      </div>
    </div>
  );
};

export default BackgroundScreen;