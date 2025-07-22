{/* Component used in Dashboard Page */}
import React, { useState } from 'react';
import Pill from './Pill';
import { IoMdClose } from "react-icons/io";
import { FilterData } from "../data/development.jsx";
import styles from '../styles/FilterSettings.module.css';


function FilterSettings(props) {
  // Initialize state with any selected filters passed from props or empty arrays
  const [selectedFilters, setSelectedFilters] = useState({
    tags: props.selectedFilters?.tags || [],
    regions: props.selectedFilters?.regions || [],
    categories: props.selectedFilters?.categories || []
  });

  /* Handles selection/deselection of filter pills */
  const handlePillClick = (category, pillText) => {
    const categoryKeyMap = {
      Tags: 'tags',
      Regions: 'regions',
      Category: 'categories' 
    };
    const categoryKey = categoryKeyMap[category] || category.toLowerCase();

    setSelectedFilters(prevState => {
      // Check if pill is already selected
      const isSelected = prevState[categoryKey]?.includes(pillText);
      
      // Create updated filters object - either add or remove the pill
      const updatedFilters = {
        ...prevState,
        [categoryKey]: isSelected
          ? prevState[categoryKey].filter(item => item !== pillText) // Remove if already selected
          : [...(prevState[categoryKey] || []), pillText]  // Add if not already selected
      };
      return updatedFilters;
    });
  };

  /* Handles the closing of the filter panel */
  const handleClose = () => {
    if (props.handleClose) {
      props.handleClose(selectedFilters);
    }
  };

  /* Renders a group of filter pills for a specific category */
  const renderPills = (category, categoryName) => {
    // Map UI category names to state property names
    const categoryKeyMap = {
      Tags: 'tags',
      Regions: 'regions',
      Category: 'categories' 
    };
    const categoryKey = categoryKeyMap[categoryName] || categoryName.toLowerCase();

    return (
      <div className={styles.filterName} key={categoryName}>
        <h2 className={styles.filterHeading}>{categoryName}</h2>
        <div className={styles.pillGrid}>
          {/* Map through all pills in this category */}
          {category.pills.map((pillText, index) => (
            <Pill 
              key={`${categoryName}-${index}`} 
              text={pillText}
              isSelected={selectedFilters[categoryKey]?.includes(pillText)}
              onPillClick={() => handlePillClick(categoryName, pillText)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  // Render the complete filter settings panel
  return (
    <section className={styles.container}>
      <header className={styles.Heading}>
        <h2 className={styles.title}>FILTER</h2>
        <IoMdClose 
          onClick={handleClose} 
          className={styles.closeIcon}
        />
      </header>
      
     
      <main className={styles.pillGrid}>
        {/* Render each filter category */}
        {FilterData.map((category) => renderPills(category, category.title))}
      </main>
    </section>
  );
}

export default FilterSettings;