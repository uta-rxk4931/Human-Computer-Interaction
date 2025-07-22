{/* Component used in Dashboard Page */}
import React from 'react';
import styles from '../styles/Dashheader.module.css';

const DashboardHeader = () => {
  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.greetingContainer}>
        <h1 className={styles.greeting}>Hi,</h1>
        <h1 className={styles.username}>Chantelle!</h1>
      </div>
      
      <div className={styles.profilePicture}>
        <h1 className={styles.profileLetter}>C</h1>
      </div>
      
      <img 
        className={styles.backgroundImage} 
        src="/images/Dash_bg_img.png" 
        alt="mushroom image"
      />
    </div>
  );
};

export default DashboardHeader;