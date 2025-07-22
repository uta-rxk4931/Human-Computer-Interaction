'use client';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Mushroom.module.css';
import { getAllMushrooms, getMushroomDetails, updateMushroomFavorite } from '../data/development';
import MushroomCard from './MushroomCard';
import FastFact from './FastFact';

const Mushroom = () => {
  const [mushroom, setMushroom] = useState(null);
  const [mushroomDetails, setMushroomDetails] = useState(null);

  useEffect(() => {
    const mushrooms = getAllMushrooms();
    const deathCap = mushrooms.find(m => m.id === "death-cap");
    const deathCapDetails = getMushroomDetails("death-cap");

    if (deathCap) setMushroom(deathCap);
    if (deathCapDetails) setMushroomDetails(deathCapDetails);
  }, []);

  const badgeData = {
    skullIcon: "/icons/skull.svg",
    warningIcon: "/icons/icon_warning.svg",
    percentage: "97%",
  };

  const handleDoubleTap = () => {
    if (!mushroom) {
      return;
    }

    const isFavorite = mushroom.favorites ?? false;
    const newFavoriteStatus = !isFavorite; // Toggle favorite status
    const updatedMushroom = updateMushroomFavorite(mushroom.id, newFavoriteStatus);

    if (updatedMushroom) {
      setMushroom({ ...updatedMushroom });
    }
  };

  if (!mushroom || !mushroomDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageCard}>
        <MushroomCard
          name={mushroom.name}
          isToxic={true}
          src={mushroom.src}
          percentage="97%"
          badgeData={badgeData}
          isFavorite={mushroom.favorites ?? false}
          isMatchResultsPage={true}
          customStyles={{
            container: styles.polaroidCard,
            imageContainer: styles.polaroidImageContainer,
            image: styles.polaroidImage,
            skullIcon: styles.skullIcon,
            matchBadge: styles.matchBadge,
            badgeText: styles.badgeText,
            warningIcon: styles.warningIcon,
            title: styles.mushroomTitle,
          }}
          onDoubleTap={handleDoubleTap}
        />
        <div className={styles.scientificNameBox}>
          <span className={styles.scientificNameText}>
            {mushroomDetails?.scientificName || 'Amanita phalloides'}
          </span>
          <img
            src={mushroom.favorites ? "/icons/Fav_icon.svg" : "/images/add.png"}
            alt={mushroom.favorites ? "Favorite" : "Add"}
            className={styles.addIcon}
          />
        </div>
        <FastFact mushroomId="death-cap" />
        <div className={styles.mushroomDescription}>
          {mushroomDetails?.description || 'No description available.'}
        </div>
      </div>
    </div>
  );
};

export default Mushroom;