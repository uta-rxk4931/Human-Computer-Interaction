'use client'
{/* Component used in Dashboard Page */} 
import React, { useState } from 'react';
import MushroomCard from './MushroomCard';
import styles from '../styles/MushroomList.module.css';
import { getAllMushrooms, getSimilarMushrooms } from '../data/development.jsx';
import Image from 'next/image';
import Infobox from './Infobox';
import Link from 'next/link';


const MushroomList = ({ 
  mushrooms = null,
  listType = "all", 
  showComparison = false,
  title = null
}) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  
  // Data preparation
  const mushroomData = mushrooms || (listType === "similar" 
    ? getSimilarMushrooms() 
    : getAllMushrooms());
    
  // Derived values
  const isSimilarList = listType === "similar";
  const listTitle = title || (isSimilarList ? "Similar Matches" : "Mushroom Collection");
  const showPercentage = isSimilarList ? true : showComparison;
  const iconSize = isSimilarList ? 14 : 24;
  
  // Empty state check
  if (!mushroomData || mushroomData.length === 0) {
    return <div className={styles.emptyState}>No mushrooms found</div>;
  }

  // Toggle info panel
  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);
  
  return (
    <div className={styles.container}>
      <div className={`${styles.listContainer} ${isSimilarList ? styles.similarListContainer : ''}`}>
        {/* Title section with info icon */}
        {title && (
          <div className={styles.titleContainer}>
            <h2 className={styles.listTitle}>{listTitle}</h2>
            <div className={styles.infoIconWrapper}>
              <Image 
                src="/icons/info.svg" 
                alt="Info" 
                width={iconSize}
                height={iconSize}
                className={styles.infoIcon}
                onClick={toggleInfo}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        )}

        {/* Mushroom grid */}
        <ul className={`${styles.mushroomGrid} ${isSimilarList ? styles.similarGrid : ''}`}>
          {mushroomData.map(mushroom => (
            <li key={mushroom.id} className={styles.mushroomItem}>
              <Link 
                href={{ 
                  pathname: '/mushroom', 
                  query: { fromImage: 'true' }
                }} 
                passHref
              >
                <MushroomCard
                  name={mushroom.name}
                  src={mushroom.src}
                  isToxic={mushroom.isToxic}
                  percentage={showPercentage ? mushroom.percentage : null}
                  comparisonMode={showPercentage}
                  id={mushroom.id}
                />
              </Link>
            </li>
          ))}
        </ul>

        
        {isInfoOpen && (
          <div className={styles.infoboxOverlay}>
            <Infobox onClose={toggleInfo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MushroomList;