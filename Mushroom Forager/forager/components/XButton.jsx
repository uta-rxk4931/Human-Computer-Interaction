import React from 'react';

function Xbutton({ handleClick }) {
  const buttonStyles = {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '10px',
    top: '10px',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    margin: '0',
  };
  
  const imageStyles = {
    width: '100%',
    height: 'auto',
  };
  
  return (
    <button 
      style={buttonStyles} 
      onClick={handleClick}
    >
      <img 
        src="/images/X.png" 
        alt="X icon" 
        style={imageStyles}
      />
    </button>
  );
}
export default Xbutton;