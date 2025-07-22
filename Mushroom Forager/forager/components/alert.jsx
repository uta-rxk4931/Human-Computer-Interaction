{/* Component used in Comparison Page */}
import React from 'react';

const Alert = ({ message }) => {
  return (
    <div 
      className="bg-[#FF5050] text-white rounded-2xl px-4 py-3" 
      style={{ width: '290px' }}
    >
      <div className="flex items-center mb-1">
        <img 
          src="/icons/icon_warning.svg" 
          alt="Warning" 
          className="mr-2" 
          width="25" 
          height="25" 
        />
        <div 
          className="font-bold uppercase" 
          style={{ fontFamily: 'Nunito, sans-serif', fontSize: '20px' }}
        >
          WARNING
        </div>
      </div>
      <div 
        style={{ fontFamily: 'Nunito, sans-serif', fontSize: '16px', fontWeight: '500' }}
      >
        {message || "This is a toxic species, proceed with caution."}
      </div>
    </div>
  );
};

export default Alert;