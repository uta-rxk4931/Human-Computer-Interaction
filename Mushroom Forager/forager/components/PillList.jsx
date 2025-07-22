import React from 'react';
import Pill from './Pill';

function PillList(props) {
  const containerStyle = {
    paddingBottom: '2.5rem',
  };
  
  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
  };
  
  const pillContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };
  
  const renderPills = () => {
    return props.items.map((item, index) => (
      <Pill 
        key={`pill-${index}`} 
        text={item}
      />
    ));
  };
  
  return (
    <section style={containerStyle}>
      <h4 style={headingStyle}>{props.title}</h4>
      <div style={pillContainerStyle}>
        {renderPills()}
      </div>
    </section>
  );
}

export default PillList;