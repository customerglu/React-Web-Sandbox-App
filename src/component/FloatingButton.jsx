import React from 'react';

const FloatingButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    zIndex: 1199 ,
    transition: 'transform 0.2s ease-in-out',
  };

  return (
    <button 
      style={buttonStyle}
      onClick={() => console.log('Floating button clicked')}
    >
      +
    </button>
  );
};

export default FloatingButton;
