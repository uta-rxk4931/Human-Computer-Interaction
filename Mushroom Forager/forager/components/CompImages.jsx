'use client'
{/* Component used in Comparison Page */}
import React from 'react';
import styles from '../styles/CompImages.module.css';
import { mushroomComparisonData } from '../data/development';


const ImageCard = ({ image, showBadge = false }) => (
  <div className={styles.imageCard}>
    <div className={styles.polaroidCard}>
      {showBadge && (
        <>
          <img
            src={image.badge.skullIcon}
            alt="Skull Icon"
            className={styles.skullIcon}
          />
          <div className={styles.matchBadge}>
            <img
              src={image.badge.warningIcon}
              alt="Warning Icon"
              className={styles.warningIcon}
            />
            <span className={styles.badgeText}>
              {image.badge.percentage} Match
            </span>
          </div>
        </>
      )}
      <div className={styles.polaroidImageContainer}>
        <img
          src={image.src}
          alt={image.alt}
          className={styles.polaroidImage}
        />
      </div>
    </div>
    <div className={styles.mushroomTitle}>{image.title}</div>
  </div>
);

const CompImages = () => {
  const { images } = mushroomComparisonData;

  return (
    <div className={styles.imageComparisonContainer}>
      <ImageCard image={images.userMushroom} />
      <ImageCard image={images.matchedMushroom} showBadge />
    </div>
  );
};

export default CompImages;