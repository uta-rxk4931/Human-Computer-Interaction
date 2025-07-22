'use client'
{/* Component used in Dashboard Page */}
import React, { useState } from 'react';
import styles from '../styles/Searchbar.module.css';

const Searchbar = ({ onSearch, onFilterClick, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); 
    if (onSearch) {
      onSearch(query);  
    }
  };

  const handleClearSearch = () => {
    setSearchQuery(''); 
    if (onSearch) {
      onSearch(''); 
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <img
          src="/icons/Search_icon.svg"
          alt="Search Icon"
          className={styles.searchIcon}
        />
        <input
          type="text"
          placeholder={placeholder || 'Search for a mushroom'}
          className={styles.input}
          value={searchQuery} 
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <img
            src="/images/X.png" 
            alt="Clear Search"
            className={styles.clearIcon}
            onClick={handleClearSearch}
            style={{ cursor: 'pointer' }} 
          />
        )}
      </div>
      <button 
        className={styles.filterButton} 
        onClick={onFilterClick}
        aria-label="Filter search results"
      >
        <img
          src="/icons/filter.svg"
          alt="Filter Icon"
          className={styles.filterIcon}
        />
      </button>
    </div>
  );
};

export default Searchbar;