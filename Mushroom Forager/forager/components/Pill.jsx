'use client'
import React, { useState, useEffect } from "react";

function Pill(props) {
  
  const [selected, setSelected] = useState(props.isSelected || false);
  
  // Update internal state when prop changes
  useEffect(() => {
    if (props.isSelected !== undefined) {
      setSelected(props.isSelected);
    }
  }, [props.isSelected]);
  
  // Define styling based on selection state
  const pillStyle = {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    color: selected ? '#FFFFFF' : '#7C7C7C',
    backgroundColor: selected ? '#579076' : '#D9D9D9',
    borderRadius: '100px',
    border: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };
  
  // Function to handle click events
  function toggleSelection() {
    setSelected(!selected);
    if (props.onPillClick) {
      props.onPillClick();
    }
  }
  
  return (
    <button 
      style={pillStyle}
      onClick={toggleSelection}
    >
      {props.text}
    </button>
  );
}

export default Pill;