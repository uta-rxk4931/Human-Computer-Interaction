'use client'
{/* Component used in Comparison Page */}
import React, { useState } from 'react';
import styles from '../styles/ComparisonTable.module.css';
import { mushroomComparisonData } from '../data/development'; // Import the comparison data

const ComparisonTable = () => {
  const { characteristics } = mushroomComparisonData;
  const [userInputs, setUserInputs] = useState(
    // Creates an object from characteristics array, mapping each category to its userValue
    characteristics.reduce((acc, item) => ({ ...acc, [item.category]: item.userValue }), {})
  );

  // Handle input changes
  const handleInputChange = (category, value) => {
    // Updates userInputs state by spreading previous values and updating the specified category with new value
    setUserInputs(prev => ({ ...prev, [category]: value }));
  };

  // Handle clearing an input (clicking the × icon)
  const handleClearInput = (category) => {
    // Resets the specified category's input value to an empty string while preserving other inputs
    setUserInputs(prev => ({ ...prev, [category]: '' }));
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.table}>
        {/* Vertical divider lines */}
        <div className={styles.tableVerticalDivider}></div>
        <div className={styles.tableVerticalDivider}></div>
        
        {/* Left column - Your characteristics (with input) */}
        <div className={styles.tableColumn}>
          {characteristics.map((item, index) => (
            <div key={`left-${index}`} className={styles.tableRow}>
              <div className={styles.tableCellWithBorder}>
                <div className={styles.inputWrapper}>
                  <button
                    onClick={() => handleClearInput(item.category)}
                    className={styles.clearButton}
                  >
                    ×
                  </button>
                  <input
                    type="text"
                    value={userInputs[item.category] || ''}
                    onChange={(e) => handleInputChange(item.category, e.target.value)}
                    placeholder={'enter'}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Middle column - Categories */}
        <div className={styles.tableColumn}>
          {characteristics.map((item, index) => (
            <div key={`middle-${index}`} className={styles.tableRow}>
              <div className={styles.tableCell}>
                <span className={styles.cellText}>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right column - Death Cap characteristics */}
        <div className={styles.tableColumn}>
          {characteristics.map((item, index) => (
            <div key={`right-${index}`} className={styles.tableRow}>
              <div className={styles.tableCell}>
                <span className={styles.cellText}>
                  {item.matchedValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;