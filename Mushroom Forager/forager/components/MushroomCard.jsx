'use client';
import React, { useState } from 'react';
import styles from '../styles/MushroomCard.module.css';

const MushroomCard = ({ 
  name, 
  isToxic, 
  src, 
  percentage, 
  comparisonMode = false,
  badgeData,
  isMatchResultsPage = false,
  customStyles = {},
  onDoubleTap 
}) => {
  const [lastTap, setLastTap] = useState(0);
  const DOUBLE_TAP_DELAY = 300; 

  const handleTouchStart = (e) => {
    e.preventDefault(); 
    const currentTime = new Date().getTime();
    const tapInterval = currentTime - lastTap;

    if (tapInterval < DOUBLE_TAP_DELAY && tapInterval > 0) {
      if (onDoubleTap) onDoubleTap(); 
    }

    setLastTap(currentTime);
  };

  return (
    <div 
      className={isMatchResultsPage ? (customStyles.container || styles.matchResultsCard) : styles.polaroidCard}
    >
      <div className={isMatchResultsPage ? (customStyles.imageContainer || styles.matchResultsImageContainer) : styles.polaroidImageContainer}>
        <img 
          src={src} 
          alt={name} 
          className={isMatchResultsPage ? (customStyles.image || styles.matchResultsImage) : styles.polaroidImage}
          onTouchStart={handleTouchStart} 
        />
        
        {isMatchResultsPage && badgeData?.skullIcon && (
          <img 
            src={badgeData.skullIcon} 
            alt="Skull" 
            className={customStyles.skullIcon || styles.matchResultsSkullIcon}
          />
        )}
        
        {isMatchResultsPage && badgeData && (
          <div className={customStyles.matchBadge || styles.matchResultsBadge}>
            <img 
              src={badgeData.warningIcon} 
              alt="Warning" 
              className={customStyles.warningIcon || styles.warningIcon}
            />
            <span className={customStyles.badgeText || styles.badgeText}>
              {badgeData.percentage} Match
            </span>
          </div>
        )}
        
        {!isMatchResultsPage && isToxic && (
          <img
            src="/icons/warning.svg"
            alt="Warning"
            className={`${styles.warningIcon} ${comparisonMode ? styles.warningIconWithPercentage : ''}`}
          />
        )}
        
        {!isMatchResultsPage && comparisonMode && percentage && (
          <div className={`${styles.matchBadge} ${styles.percentageBadge} ${getBadgeClass(percentage)}`}>
            {percentage}
          </div>
        )}
      </div>
      
      <div className={customStyles.title || styles.mushroomTitle}>
        {name}
      </div>
    </div>
  );
};

const getBadgeClass = (percentValue) => {
  const score = parseInt(percentValue);
  if (score >= 90) return styles.matchBadgeHigh;
  if (score >= 80) return styles.matchBadgeMedium;
  if (score >= 70) return styles.matchBadgeLow;
  return styles.matchBadgeVeryLow;
};

export default MushroomCard;